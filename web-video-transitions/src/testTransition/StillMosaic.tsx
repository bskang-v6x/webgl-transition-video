import { useEffect, useRef, useState } from "react";
import createShader from "gl-shader";
import { TRANSITION, linearInterpolation } from "../util";

const vertexShaderCode = `
attribute vec2 a_position;
attribute vec2 a_texcoord;
varying vec2 v_texcoord;

void main() {
  gl_Position = vec4(a_position, 0, 1);
  v_texcoord = a_texcoord;
}
`;

const fragmentShaderCode = `
#define PI 3.14159265358979323
#define POW2(X) X*X
#define POW3(X) X*X*X
precision mediump float;
uniform sampler2D u_texture1;
uniform sampler2D u_texture2;
uniform float u_time;
varying vec2 v_texcoord;

uniform int u_endx; // = 2
uniform int u_endy; // = -1

float Rand(vec2 v) {
  return fract(sin(dot(v.xy ,vec2(12.9898,78.233))) * 43758.5453);
}

vec2 Rotate(vec2 v, float a) {
  mat2 rm = mat2(cos(a), -sin(a), sin(a), cos(a));
  return rm*v;
}

float CosInterpolation(float x) {
  return -cos(x*PI)/2.+.5;
}

vec4 getFromColor(vec2 p) {
  return texture2D(u_texture1, p);
}

vec4 getToColor(vec2 p) {
  return texture2D(u_texture2, p);
}

vec4 transition(vec2 uv) {
  vec2 p = uv.xy / vec2(1.0).xy - .5;
  vec2 rp = p;
  float rpr = (u_time*2.-1.);
  float z = -(rpr*rpr*2.) + 3.;
  float az = abs(z);
  rp *= az;
  rp += mix(vec2(.5, .5), vec2(float(u_endx) + .5, float(u_endy) + .5), POW2(CosInterpolation(u_time)));
  vec2 mrp = mod(rp, 1.);
  vec2 crp = rp;
  bool onEnd = int(floor(crp.x))==u_endx && int(floor(crp.y)) == u_endy;
  if(!onEnd) {
    float ang = float(int(Rand(floor(crp))*4.))*.5*PI;
    mrp = vec2(.5) + Rotate(mrp-vec2(.5), ang);
  }
  if(onEnd || Rand(floor(crp))>.5) {
    return getToColor(mrp);
  } else {
    return getFromColor(mrp);
  }
}

void main() {
  gl_FragColor = transition(v_texcoord);
}
`;

const StillMosaic = ({
  width,
  height,
  startVideoSrc,
  endVideoSrc,
  duration,
}: TransitionProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const startVideoRef = useRef<HTMLVideoElement>(null);
  const endVideoRef = useRef<HTMLVideoElement>(null);
  const texture1Ref = useRef<WebGLTexture | null>(null);
  const texture2Ref = useRef<WebGLTexture | null>(null);
  const shaderRef = useRef<ReturnType<typeof createShader> | null>(null);
  const textureUnit1 = 0;
  const textureUnit2 = 1;
  const timeRef = useRef<number>(0);
  const timeStampRef = useRef<number>(0);
  const [isTransition, setIsTransition] = useState(false);

  const initGL = () => {
    if (!canvasRef.current) {
      console.error("Canvas element not found.");
      return;
    }
    const gl = canvasRef.current.getContext("webgl2");
    if (!gl) {
      console.error("WebGL 2 is not supported in this browser.");
      return;
    }
    const shader = createShader(
      gl as WebGLRenderingContext,
      vertexShaderCode,
      fragmentShaderCode,
      [
        { type: "sampler2D", name: "u_texture1" },
        { type: "sampler2D", name: "u_texture2" },
        { type: "float", name: "u_time" },
        { type: "int", name: "u_endx" },
        { type: "int", name: "u_endy" },
      ],
      [
        { type: "vec2", name: "a_position" },
        { type: "vec2", name: "a_texcoord" },
      ]
    );
    if (!shader) {
      console.error("Shader failed to compile.");
      return;
    }
    shader.bind();
    shaderRef.current = shader;

    const program = shader.program;
    gl.useProgram(program);

    console.log("initGL");
  };

  const initBuffers = () => {
    if (!shaderRef.current) {
      console.error("Shader not found.");
      return;
    }
    const shader = shaderRef.current;
    const gl = shader.gl;
    const program = shader.program;

    const positionBuffer = gl.createBuffer();
    if (!positionBuffer) {
      console.error("Failed to create position buffer.");
      return;
    }
    const texcoordBuffer = gl.createBuffer();
    if (!texcoordBuffer) {
      console.error("Failed to create texture coordinate buffer.");
      return;
    }

    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    const positions = [1, 1, -1, 1, 1, -1, -1, -1];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
    const positionLoc = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(positionLoc);
    gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0);

    gl.bindBuffer(gl.ARRAY_BUFFER, texcoordBuffer);
    const texcoords = [1, 0, 0, 0, 1, 1, 0, 1];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(texcoords), gl.STATIC_DRAW);
    const texcoordLoc = gl.getAttribLocation(program, "a_texcoord");
    gl.enableVertexAttribArray(texcoordLoc);
    gl.vertexAttribPointer(texcoordLoc, 2, gl.FLOAT, false, 0, 0);

    console.log("initBuffers");
  };

  const initTexture = () => {
    if (!shaderRef.current) return;
    const shader = shaderRef.current;
    const gl = shader.gl;

    const texture1 = gl.createTexture();
    const texture2 = gl.createTexture();
    if (!texture1 || !texture2) return;

    gl.activeTexture(gl.TEXTURE0);
    gl.activeTexture(gl.TEXTURE0 + textureUnit1);
    gl.bindTexture(gl.TEXTURE_2D, texture1);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    texture1Ref.current = texture1;

    shader.uniforms.u_texture1 = textureUnit1;

    gl.activeTexture(gl.TEXTURE0 + textureUnit2);
    gl.bindTexture(gl.TEXTURE_2D, texture2);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    texture2Ref.current = texture2;

    shader.uniforms.u_texture2 = textureUnit2;

    console.log("initTexture");
  };

  useEffect(() => {
    initGL();
    initBuffers();
    initTexture();
  }, [startVideoSrc, endVideoSrc]);

  const render = (deltaTime: number) => {
    if (!shaderRef.current) {
      console.log("no shader");
      return;
    }
    const shader = shaderRef.current;
    if (!texture1Ref.current) {
      console.log("no texture1");
      return;
    }
    const texture1 = texture1Ref.current;
    if (!texture2Ref.current) {
      console.log("no texture2");
      return;
    }
    const texture2 = texture2Ref.current;
    if (!startVideoRef.current) {
      console.log("no startVideo");
      return;
    }
    const startVideo = startVideoRef.current;
    if (!endVideoRef.current) {
      console.log("no endVideo");
      return;
    }
    const endVideo = endVideoRef.current;

    const gl = shader.gl;

    if (startVideo.duration - startVideo.currentTime > duration / 2) {
      gl.activeTexture(gl.TEXTURE0 + textureUnit1);
      gl.bindTexture(gl.TEXTURE_2D, texture1);
      gl.texImage2D(
        gl.TEXTURE_2D,
        0,
        gl.RGBA,
        gl.RGBA,
        gl.UNSIGNED_BYTE,
        startVideo
      );
    }

    shader.uniforms.u_endx = 2;
    shader.uniforms.u_endy = -1;

    if (startVideo.duration - startVideo.currentTime < duration / 2) {
      // when transition Start
      if (endVideo.paused) {
        endVideo.currentTime = duration / 2;
        gl.activeTexture(gl.TEXTURE0 + textureUnit2);
        gl.bindTexture(gl.TEXTURE_2D, texture2);
        gl.texImage2D(
          gl.TEXTURE_2D,
          0,
          gl.RGBA,
          gl.RGBA,
          gl.UNSIGNED_BYTE,
          endVideo
        );
      }
      setIsTransition(true);
      timeStampRef.current = timeStampRef.current || performance.now();

      const t = Math.min(
        (deltaTime - timeStampRef.current) / ((duration * 1000) / 2),
        1
      );
      timeRef.current = linearInterpolation(0, 0.5, t);
      timeRef.current = timeRef.current > 0.5 ? 0.5 : timeRef.current;
      shader.uniforms.u_time = timeRef.current;
    }

    if (startVideo.duration === startVideo.currentTime) {
      if (endVideo.paused) {
        endVideo.currentTime = 0;
        endVideo.play();
        timeStampRef.current = performance.now();
      }
      const t = Math.min(
        (deltaTime - timeStampRef.current) / ((duration * 1000) / 2),
        1
      );

      timeRef.current = linearInterpolation(0.5, 1, t);

      timeRef.current = timeRef.current > 1 ? 1 : timeRef.current;
      if (timeRef.current === 1) {
        setIsTransition(false);
        gl.activeTexture(gl.TEXTURE0 + textureUnit2);
        gl.bindTexture(gl.TEXTURE_2D, texture2);
        gl.texImage2D(
          gl.TEXTURE_2D,
          0,
          gl.RGBA,
          gl.RGBA,
          gl.UNSIGNED_BYTE,
          endVideo
        );
      }
      console.log(endVideo.currentTime);
      shader.uniforms.u_time = timeRef.current;
    }

    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    if (endVideo.duration <= endVideo.currentTime || endVideo.currentTime > 5) {
      setIsTransition(false);
      endVideo.pause();
      return;
    }
    requestAnimationFrame(render);
  };

  const onLoadedMetadata = () => {
    if (!startVideoRef.current) return;
    const startVideo = startVideoRef.current;
    startVideo.currentTime =
      startVideo.duration > 5 ? startVideo.duration - 5 : 0;
    startVideoRef.current.play();
    requestAnimationFrame(render);
  };

  return (
    <>
      <h3> mosaic~ </h3>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <h3>{TRANSITION.VIDEO1}</h3>
          <video
            ref={startVideoRef}
            src={startVideoSrc}
            muted
            style={{ display: "block" }}
            width={width / 2}
            height={height / 2}
            onLoadedMetadata={onLoadedMetadata}
          ></video>
        </div>
        <div>
          <h3>{TRANSITION.VIDEO2}</h3>
          <video
            ref={endVideoRef}
            src={endVideoSrc}
            muted
            style={{ display: "block" }}
            width={width / 2}
            height={height / 2}
          ></video>
        </div>
      </div>
      <h2>{TRANSITION.RESULT}</h2>
      {isTransition ? (
        <h3 style={{ color: "blue" }}>{TRANSITION.ING}</h3>
      ) : (
        <h3 style={{ color: "red" }}>{TRANSITION.NOT_ING}</h3>
      )}
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        style={{ border: "1px solid black" }}
      ></canvas>
    </>
  );
};

export default StillMosaic;
