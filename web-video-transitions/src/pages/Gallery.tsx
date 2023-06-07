import Dissolve from "../transitions/Dissolve";
import { Navigate, Route, Routes } from "react-router-dom";
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
import BlackWipeRight2 from "../transitionV2/BlackWipeRight2";
import BlackWipeDown2 from "../transitionV2/BlackWipeDown2";
import StillCutDissolve from "../testTransition/StillCutDissolve";
import StillWarp from "../testTransition/StillWarp";
import UTLobby1 from "../UTLobby1";
import UTLobby2 from "../UTLobby2";
import StillWave from "../testTransition/StillWave";
import StillPong from "../testTransition/StillPong";
import StillWindowSlice from "../testTransition/StillWindowSlice";
import StillWipeRight from "../testTransition/StillWipeRight";
import StillWipeLeft from "../testTransition/StillWipeLeft";
import StillWipeDown from "../testTransition/StillWipeDown";
import StillWipeUp from "../testTransition/StillWipeUp";
import StillMosaic from "../testTransition/StillMosaic";
import StillCube from "../testTransition/StillCube";

interface Props {
  video1: string;
  video2: string;
}

const Gallery = ({ video1, video2 }: Props) => {
  const duration = 0.5;
  const width = window.innerWidth / 2;
  const height = window.innerHeight / 2;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "30px",
      }}
    >
      <UTLobby1 />
      <UTLobby2 />
      <div>
        <Routes>
          <Route
            path="/fade-in-out"
            element={
              <FadeInOut
                width={width}
                height={height}
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
                width={width}
                height={height}
                startVideoSrc={video1}
                endVideoSrc={video2}
                duration={duration}
              />
            }
          />
          <Route
            path="/black-wipe-right2"
            element={
              <BlackWipeRight2
                width={width}
                height={height}
                startVideoSrc={video1}
                endVideoSrc={video2}
                duration={2}
              />
            }
          />
          <Route
            path="/black-wipe-down2"
            element={
              <BlackWipeDown2
                width={width}
                height={height}
                startVideoSrc={video1}
                endVideoSrc={video2}
                duration={2}
              />
            }
          />
          <Route
            path="/dissolve"
            element={
              <Dissolve
                width={width}
                height={height}
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
                width={width}
                height={height}
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
                width={width}
                height={height}
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
                width={width}
                height={height}
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
                width={width}
                height={height}
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
                width={width}
                height={height}
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
                width={width}
                height={height}
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
                width={width}
                height={height}
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
                width={width}
                height={height}
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
                width={width}
                height={height}
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
                width={width}
                height={height}
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
                width={width}
                height={height}
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
                width={width}
                height={height}
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
                width={width}
                height={height}
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
                width={width}
                height={height}
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
                width={width}
                height={height}
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
                width={width}
                height={height}
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
                width={width}
                height={height}
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
                width={width}
                height={height}
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
                width={width}
                height={height}
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
                width={width}
                height={height}
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
                width={width}
                height={height}
                startVideoSrc={video1}
                endVideoSrc={video2}
                duration={duration}
              />
            }
          />
          <Route
            path="/dissolve-s"
            element={
              <StillCutDissolve
                width={width}
                height={height}
                startVideoSrc={video1}
                endVideoSrc={video2}
                duration={duration}
              />
            }
          />
          <Route
            path="/directional-warp-s"
            element={
              <StillWarp
                width={width}
                height={height}
                startVideoSrc={video1}
                endVideoSrc={video2}
                duration={duration}
              />
            }
          />
          <Route
            path="wave-s"
            element={
              <StillWave
                width={width}
                height={height}
                startVideoSrc={video1}
                endVideoSrc={video2}
                duration={duration}
              />
            }
          />
          <Route
            path="pong-s"
            element={
              <StillPong
                width={width}
                height={height}
                startVideoSrc={video1}
                endVideoSrc={video2}
                duration={duration}
              />
            }
          />
          <Route
            path="window-slice-s"
            element={
              <StillWindowSlice
                width={width}
                height={height}
                startVideoSrc={video1}
                endVideoSrc={video2}
                duration={duration}
              />
            }
          />
          <Route
            path="wipe-right-s"
            element={
              <StillWipeRight
                width={width}
                height={height}
                startVideoSrc={video1}
                endVideoSrc={video2}
                duration={duration}
              />
            }
          />
          <Route
            path="wipe-left-s"
            element={
              <StillWipeLeft
                width={width}
                height={height}
                startVideoSrc={video1}
                endVideoSrc={video2}
                duration={duration}
              />
            }
          />
          <Route
            path="wipe-down-s"
            element={
              <StillWipeDown
                width={width}
                height={height}
                startVideoSrc={video1}
                endVideoSrc={video2}
                duration={duration}
              />
            }
          />
          <Route
            path="wipe-up-s"
            element={
              <StillWipeUp
                width={width}
                height={height}
                startVideoSrc={video1}
                endVideoSrc={video2}
                duration={duration}
              />
            }
          />
          <Route
            path="mosaic-s"
            element={
              <StillMosaic
                width={width}
                height={height}
                startVideoSrc={video1}
                endVideoSrc={video2}
                duration={duration}
              />
            }
          />
          <Route
            path="cube-s"
            element={
              <StillCube
                width={width}
                height={height}
                startVideoSrc={video1}
                endVideoSrc={video2}
                duration={duration}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default Gallery;
