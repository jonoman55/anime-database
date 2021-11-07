import { createContext, useContext, useState, useEffect } from "react";

const AppState = createContext();

export const AppContextProvider = (props) => {
    const [isLoading, setIsLoading] = useState(false);
    const [animeList, setAnimeList] = useState([]);
    const [topAnime, setTopAnime] = useState([]);
    const [search, setSearch] = useState('');

    const fetchTopAnime = async () => {
        setIsLoading(true);
        const temp = await fetch(`https://api.jikan.moe/v3/top/anime/1/bypopularity`)
            .then(res => res.json());
        setTopAnime(temp.top.slice(0, 12));
        setIsLoading(false);
    };

    const fetchAnime = async (query) => {
        setIsLoading(true);
        setAnimeList([]);
        const temp = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=12`)
            .then(res => res.json());
        setAnimeList(temp.results);
        setIsLoading(false);
    };

    useEffect(() => {
        fetchTopAnime();
    }, []);

    useEffect(() => {
        if (!search) {
            setAnimeList([]);
            setIsLoading(false);
        }
    }, [search]);

    const value = {
        isLoading,
        animeList,
        topAnime,
        search,
        setSearch,
        fetchAnime
    };

    return (
        <AppState.Provider value={value}>
            {props.children}
        </AppState.Provider>
    );
};

export const useAppContext = () => useContext(AppState);