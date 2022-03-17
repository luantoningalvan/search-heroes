import { globalCss } from "@stitches/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ShowcasePage } from "./pages/ShowCase";
import { HeroPage } from "./pages/Hero";
import { FavoritesProvider } from "./contexts/FavoritesContext";

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
    <FavoritesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ShowcasePage />} />
          <Route path="/hero/:id" element={<HeroPage />} />
        </Routes>
      </BrowserRouter>
    </FavoritesProvider>
  );
}

export default App;
