import { Link } from "react-router-dom";

const Lobby2 = () => {
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
      {false && (
        <Link className="button2" to="/dissolve-asset">
          Dissolve Asset
        </Link>
      )}
      <Link className="button2" to="/">
        Home
      </Link>
      <Link className="button2" to="/fade-in-out2">
        페이드 인 아웃 2
      </Link>
      <Link className="button2" to="/dissolve2">
        디졸브 2
      </Link>
      <Link className="button2" to="/wave2">
        파도 2
      </Link>
      <Link className="button2" to="/pong2">
        퐁당 2
      </Link>
      <Link className="button2" to="/window-slice2">
        윈도우 슬라이스 2
      </Link>
      <Link className="button2" to="/wipe-right2">
        오른쪽 전환 2
      </Link>
      <Link className="button2" to="/wipe-left2">
        왼쪽 전환 2
      </Link>
      <Link className="button2" to="/wipe-up2">
        위로 전환 2
      </Link>
      <Link className="button2" to="/wipe-down2">
        아래로 전환 2
      </Link>
      <Link className="button2" to="/directional-warp2">
        대각선 물결 2
      </Link>
      <Link className="button2" to="/mosaic2">
        모자이크 2
      </Link>
      <Link className="button2" to="/cube2">
        큐브 2
      </Link>
    </div>
  );
};

export default Lobby2;
