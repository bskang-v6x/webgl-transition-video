import { Link } from "react-router-dom";

const UTLobby1 = () => {
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
      <Link className="button" to="/dissolve">
        디졸브
      </Link>
      <Link className="button" to="/wave-s">
        파도
      </Link>
      <Link className="button" to="/pong-s">
        퐁당
      </Link>
      <Link className="button" to="/window-slice">
        윈도우 슬라이스
      </Link>
      <Link className="button" to="/wipe-right-s">
        오른쪽 전환
      </Link>
      <Link className="button" to="/wipe-left-s">
        왼쪽 전환
      </Link>
      <Link className="button" to="/wipe-up-s">
        위로 전환
      </Link>
      <Link className="button" to="/wipe-down">
        아래로 전환
      </Link>
      <Link className="button" to="/directional-warp">
        대각선 물결
      </Link>
      <Link className="button" to="/mosaic">
        모자이크
      </Link>
      <Link className="button" to="/cube-s">
        큐브
      </Link>
    </div>
  );
};

export default UTLobby1;
