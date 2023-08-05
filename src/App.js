import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/movie/:id" element={<Detail />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  ); // HashRouter는 주소 바꿀 때 뒤에 뭐가 더 붙음 그러니 Browser Route 사용
} // Routes 컴포넌트는 한 번에 하나의 Route만 렌더링 하기 위해 넣어주었다
// React Router에서는 원한다면 두개의 Route를 한 번에 렌더링 할 수 있기 때문

export default App;
