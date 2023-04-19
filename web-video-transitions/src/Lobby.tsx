import { Link } from "react-router-dom";

const Lobby = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        justifyContent: "center",
        gap: "30px",
      }}
    >
      <Link className="button" to="/">
        Home
      </Link>
      <Link className="button" to="/fade-in-out">
        페이드 인 아웃
      </Link>
      <Link className="button" to="/dissolve">
        디졸브
      </Link>
      <Link className="button" to="/wave">
        파도
      </Link>
      <Link className="button" to="/pong">
        퐁당
      </Link>
      <Link className="button" to="/window-slice">
        윈도우 슬라이스
      </Link>
      <Link className="button" to="/wipe-right">
        오른쪽 전환
      </Link>
      <Link className="button" to="/wipe-left">
        왼쪽 전환
      </Link>
      <Link className="button" to="/wipe-up">
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
      <Link className="button" to="/cube">
        큐브
      </Link>
    </div>
  );
};

export default Lobby;
