import "./App.css";
import { useState } from "react";
import Gallery from "./pages/Gallery";

function App() {
  const [video1, setVideo1src] = useState<File>();
  const [video2, setVideo2src] = useState<File>();

  return (
    <div className="App">
      <h1>전환효과 데모 페이지</h1>
      <p>동영상 파일을 하나씩 넣어주세요.</p>
      {video1 && video2 ? (
        <Gallery
          video1={URL.createObjectURL(video1)}
          video2={URL.createObjectURL(video2)}
        />
      ) : (
        <p>동영상을 모두 넣으면 테스트할 수 있어요.</p>
      )}
      <p>동영상 1</p>
      <input
        type="file"
        accept="video/*"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          const file = event.target.files?.[0];
          if (file) {
            setVideo1src(file);
          }
        }}
        style={{
          border: "1px solid black",
        }}
      />
      <p>동영상 2</p>
      <input
        type="file"
        accept="video/*"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          const file = event.target.files?.[0];
          if (file) {
            setVideo2src(file);
          }
        }}
        style={{
          border: "1px solid black",
        }}
      />
    </div>
  );
}

export default App;
