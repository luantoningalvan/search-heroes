import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Layout } from "../../components/Layout";
import { api } from "../../services/api";
import { HeroBackground } from "./HeroBackground";
import { HeroHeader } from "./HeroHeader";
import { HeroInfo } from "./HeroInfo";

export const HeroPage = () => {
  const { id } = useParams<{ id: string }>();
  const [comics, setComics] = useState<any>([]);
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(true);

  const fetchInitialData = useCallback(async () => {
    setLoading(true);
    const fetchCharacter = await api.get(`characters/${id}`);
    setData(fetchCharacter.data.data.results[0]);
    const fetchCharacterComics = await api.get(`characters/${id}/comics`, {
      params: { orderBy: "-onsaleDate", limit: 10 },
    });
    setComics(fetchCharacterComics.data.data.results);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchInitialData();
  }, []);

  return (
    <div>
      {!loading && (
        <Layout>
          <HeroHeader />
          <div style={{ display: "flex", margin: "6em 0" }}>
            <HeroInfo
              info={data}
              lastComicPubDate={new Date(comics[0]?.dates[0]?.date)}
            />
            <HeroBackground info={data} />
          </div>
        </Layout>
      )}
    </div>
  );
};
