import { globalCss } from "@stitches/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const ShowCasePage = () => <p>Showcase</p>;
const HeroPage = () => <p>Hero</p>;

const globalStyles = globalCss({
  "*": { margin: 0, padding: 0 },

  body: {
    fontFamily:
      '-apple-system, Ubuntu, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  },
});

function App() {
  globalStyles();

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
