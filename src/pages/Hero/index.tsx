import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Layout } from "../../components/Layout";
import { api } from "../../services/api";
import { HeroHeader } from "./HeroHeader";

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
        </Layout>
      )}
    </div>
  );
};
