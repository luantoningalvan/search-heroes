import { BrowserRouter, Route, Routes } from "react-router-dom";

const ShowCasePage = () => <p>Showcase</p>;
const HeroPage = () => <p>Hero</p>;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShowCasePage />} />
        <Route path="/hero/:id" element={<HeroPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
