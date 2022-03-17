import { Footer, Main } from "./styles";

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Main>{children}</Main>
      <Footer>
        <a href="http://marvel.com">
          Data provided by Marvel. © {new Date().getFullYear()} MARVEL
        </a>
      </Footer>
    </>
  );
};
