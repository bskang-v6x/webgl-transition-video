import { Link } from "react-router-dom";

const UTLobby2 = () => {
  return (
    <div
      style={{
        marginTop: "auto",
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        justifyContent: "center",
        gap: "10px",
        marginBottom: "10px",
      }}
    >
      <Link className="button" to="/">
        Home
      </Link>
      <Link className="button" to="/dissolve-s">
        디졸브
      </Link>
      <Link className="button" to="/wave2">
        파도
      </Link>
      <Link className="button" to="/pong2">
        퐁당
      </Link>
      <Link className="button" to="/window-slice-s">
        윈도우 슬라이스
      </Link>
      <Link className="button" to="/wipe-right2">
        오른쪽 전환
      </Link>
      <Link className="button" to="/wipe-left2">
        왼쪽 전환
      </Link>
      <Link className="button" to="/wipe-up2">
        위로 전환
      </Link>
      <Link className="button" to="/wipe-down-s">
        아래로 전환
      </Link>
      <Link className="button" to="/directional-warp-s">
        대각선 물결
      </Link>
      <Link className="button" to="/mosaic-s">
        모자이크
      </Link>
      <Link className="button" to="/cube2">
        큐브
      </Link>
    </div>
  );
};

export default UTLobby2;
