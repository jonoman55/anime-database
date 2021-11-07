import AnimeCard from "./AnimeCard";
import Spinner from "./Spinner";
import { useAppContext } from '../context/AppContext';

const MainContent = () => {
    const {
        isLoading,
        animeList,
        topAnime,
        search,
        setSearch,
        fetchAnime
    } = useAppContext();

    const loading = () =>
        isLoading && <Spinner />;

    const topAnimeList = () =>
        animeList?.length === 0 && !search &&
        topAnime.map((anime, index) => (
            <AnimeCard key={index} anime={anime} />
        ));

    const animeSearchList = () =>
        animeList?.length > 0 && search &&
        animeList?.map((anime, index) => (
            <AnimeCard key={index} anime={anime} />
        ));
    
    const noResults = () =>
        animeList === undefined && search && !isLoading &&
        <article className="anime-card">
            <h3>No Results</h3>
        </article>;

    const handleSearch = (e) => {
        e.preventDefault();
        fetchAnime(search);
    };

    return (
        <main>
            <div className="main-head">
                <form className="search-box" onSubmit={handleSearch}>
                    <input
                        value={search}
                        type="search"
                        placeholder="Search for an Anime..."
                        required
                        onChange={({ target }) => setSearch(target.value)}
                    />
                </form>
            </div>
            <div className="anime-list">
                {loading()}
                {topAnimeList()}
                {animeSearchList()}
                {noResults()}
            </div>
        </main>
    );
};

export default MainContent;