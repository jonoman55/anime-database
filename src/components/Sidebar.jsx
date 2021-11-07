import { useAppContext } from '../context/AppContext';

const Sidebar = () => {
    const { topAnime } = useAppContext();
    return (
        <aside>
            <nav>
                <h3>Top Anime</h3>
                {topAnime?.map((anime, index) => (
                    <a key={index} href={anime.url || "#"} target="_blank" rel="noreferrer">
                        {anime.title}
                    </a>
                ))}
            </nav>
        </aside>
    );
};

export default Sidebar;