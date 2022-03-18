import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Layout } from "../../components/Layout";
import { Loader } from "../../components/Loader";
import { api } from "../../services/api";
import { HeroBackground } from "./HeroBackground";
import { HeroComicsList } from "./HeroComicsList";
import { HeroError } from "./HeroError";
import { HeroHeader } from "./HeroHeader";
import { HeroInfo } from "./HeroInfo";
import { HeroDataContainer } from "./styles";

export type ErrorObject = {
  code: number;
  status: string;
};

export const HeroPage = () => {
  const { id } = useParams<{ id: string }>();
  const [comics, setComics] = useState<any>([]);
  const [data, setData] = useState<any>();
  const [error, setError] = useState<null | ErrorObject>(null);
  const [loading, setLoading] = useState(true);

  const fetchInitialData = useCallback(async () => {
    setLoading(true);
    try {
      const fetchCharacter = await api.get(`characters/${id}`);
      setData(fetchCharacter.data.data.results[0]);
      const fetchCharacterComics = await api.get(`characters/${id}/comics`, {
        params: { orderBy: "-onsaleDate", limit: 10 },
      });
      setComics(fetchCharacterComics.data.data.results);
    } catch (error) {
      setError(error.response.data as ErrorObject);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchInitialData();
  }, []);

  return (
    <Layout>
      <HeroHeader />
      {loading ? (
        <Loader />
      ) : error ? (
        <HeroError error={error} />
      ) : (
        <>
          <HeroDataContainer>
            <HeroInfo
              info={data}
              lastComicPubDate={new Date(comics[0]?.dates[0]?.date)}
            />
            <HeroBackground info={data} />
          </HeroDataContainer>

          <HeroComicsList comics={comics} />
        </>
      )}
    </Layout>
  );
};
