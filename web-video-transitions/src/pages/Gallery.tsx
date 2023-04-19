import Dissolve from "../transitions/Dissolve";
import { Route, Routes } from "react-router-dom";
import Lobby from "../Lobby";
import Wave from "../transitions/Wave";
import Pong from "../transitions/Pong";
import WindowSlice from "../transitions/WindowSlice";
import WipeRight from "../transitions/WipeRight";
import WipeLeft from "../transitions/WipeLeft";
import WipeUp from "../transitions/WipeUp";
import WipeDown from "../transitions/WipeDown";
import DirectionalWarp from "../transitions/DirectionalWarp";
import Mosaic from "../transitions/Mosaic";
import Cube from "../transitions/Cube";
import Lobby2 from "../Lobby2";
import Dissolve2 from "../transitionV2/Dissolve2";
import Wave2 from "../transitionV2/Wave2";
import Pong2 from "../transitionV2/Pong2";
import WindowSlice2 from "../transitionV2/WindowSlice2";
import WipeRight2 from "../transitionV2/WipeRight2";
import WipeLeft2 from "../transitionV2/WipeLeft2";
import WipeUp2 from "../transitionV2/WipeUp2";
import WipeDown2 from "../transitionV2/WipeDown2";
import DirectionalWarp2 from "../transitionV2/DirectionalWarp2";
import Mosaic2 from "../transitionV2/Mosaic2";
import Cube2 from "../transitionV2/Cube2";
import FadeInOut2 from "../transitionV2/FadeInOut2";
import FadeInOut from "../transitions/FadeInOut";

interface Props {
  video1: string;
  video2: string;
}

const Gallery = ({ video1, video2 }: Props) => {
  const duration = 1;

  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "30px" }}>
      <Lobby />
      <div>
        <h3>제대로 작동하지 않는다면, 새로고침 해보세요.</h3>
        <button className="button" onClick={() => (window.location.href = "/")}>
          Reset
        </button>
        <Routes>
          <Route
            path="/fade-in-out"
            element={
              <FadeInOut
                width={1280}
                height={640}
                startVideoSrc={video1}
                endVideoSrc={video2}
                duration={duration}
              />
            }
          />
          <Route
            path="/fade-in-out2"
            element={
              <FadeInOut2
                width={1280}
                height={640}
                startVideoSrc={video1}
                endVideoSrc={video2}
                duration={duration}
              />
            }
          />
          <Route
            path="/dissolve"
            element={
              <Dissolve
                width={1280}
                height={640}
                startVideoSrc={video1}
                endVideoSrc={video2}
                duration={duration}
              />
            }
          />
          <Route
            path="/wave"
            element={
              <Wave
                width={1280}
                height={640}
                startVideoSrc={video1}
                endVideoSrc={video2}
                duration={duration}
              />
            }
          />
          <Route
            path="/pong"
            element={
              <Pong
                width={1280}
                height={640}
                startVideoSrc={video1}
                endVideoSrc={video2}
                duration={duration}
              />
            }
          />
          <Route
            path="/window-slice"
            element={
              <WindowSlice
                width={1280}
                height={640}
                startVideoSrc={video1}
                endVideoSrc={video2}
                duration={duration}
              />
            }
          />
          <Route
            path="/wipe-right"
            element={
              <WipeRight
                width={1280}
                height={640}
                startVideoSrc={video1}
                endVideoSrc={video2}
                duration={duration}
              />
            }
          />
          <Route
            path="/wipe-left"
            element={
              <WipeLeft
                width={1280}
                height={640}
                startVideoSrc={video1}
                endVideoSrc={video2}
                duration={duration}
              />
            }
          />
          <Route
            path="/wipe-up"
            element={
              <WipeUp
                width={1280}
                height={640}
                startVideoSrc={video1}
                endVideoSrc={video2}
                duration={duration}
              />
            }
          />
          <Route
            path="/wipe-down"
            element={
              <WipeDown
                width={1280}
                height={640}
                startVideoSrc={video1}
                endVideoSrc={video2}
                duration={duration}
              />
            }
          />
          <Route
            path="/directional-warp"
            element={
              <DirectionalWarp
                width={1280}
                height={640}
                startVideoSrc={video1}
                endVideoSrc={video2}
                duration={duration}
              />
            }
          />
          <Route
            path="/mosaic"
            element={
              <Mosaic
                width={1280}
                height={640}
                startVideoSrc={video1}
                endVideoSrc={video2}
                duration={duration}
              />
            }
          />
          <Route
            path="/cube"
            element={
              <Cube
                width={1280}
                height={640}
                startVideoSrc={video1}
                endVideoSrc={video2}
                duration={duration}
              />
            }
          />
          <Route
            path="/dissolve2"
            element={
              <Dissolve2
                width={1280}
                height={640}
                startVideoSrc={video1}
                endVideoSrc={video2}
                duration={duration}
              />
            }
          />
          <Route
            path="/wave2"
            element={
              <Wave2
                width={1280}
                height={640}
                startVideoSrc={video1}
                endVideoSrc={video2}
                duration={duration}
              />
            }
          />
          <Route
            path="/pong2"
            element={
              <Pong2
                width={1280}
                height={640}
                startVideoSrc={video1}
                endVideoSrc={video2}
                duration={duration}
              />
            }
          />
          <Route
            path="/window-slice2"
            element={
              <WindowSlice2
                width={1280}
                height={640}
                startVideoSrc={video1}
                endVideoSrc={video2}
                duration={duration}
              />
            }
          />
          <Route
            path="/wipe-right2"
            element={
              <WipeRight2
                width={1280}
                height={640}
                startVideoSrc={video1}
                endVideoSrc={video2}
                duration={duration}
              />
            }
          />
          <Route
            path="/wipe-left2"
            element={
              <WipeLeft2
                width={1280}
                height={640}
                startVideoSrc={video1}
                endVideoSrc={video2}
                duration={duration}
              />
            }
          />
          <Route
            path="/wipe-up2"
            element={
              <WipeUp2
                width={1280}
                height={640}
                startVideoSrc={video1}
                endVideoSrc={video2}
                duration={duration}
              />
            }
          />
          <Route
            path="/wipe-down2"
            element={
              <WipeDown2
                width={1280}
                height={640}
                startVideoSrc={video1}
                endVideoSrc={video2}
                duration={duration}
              />
            }
          />
          <Route
            path="/directional-warp2"
            element={
              <DirectionalWarp2
                width={1280}
                height={640}
                startVideoSrc={video1}
                endVideoSrc={video2}
                duration={duration}
              />
            }
          />
          <Route
            path="/mosaic2"
            element={
              <Mosaic2
                width={1280}
                height={640}
                startVideoSrc={video1}
                endVideoSrc={video2}
                duration={duration}
              />
            }
          />
          <Route
            path="/cube2"
            element={
              <Cube2
                width={1280}
                height={640}
                startVideoSrc={video1}
                endVideoSrc={video2}
                duration={duration}
              />
            }
          />
        </Routes>
      </div>
      <Lobby2 />
    </div>
  );
};

export default Gallery;
