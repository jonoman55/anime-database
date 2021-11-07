const AnimeCard = ({ anime }) => (
    <article className="anime-card">
        <a href={anime.url || "#"} target="_blank" rel="noreferrer">
            <figure>
                <img src={anime.image_url} alt="AnimeImage" />
            </figure>
            <h3>{anime.title}</h3>
        </a>
    </article>
);

export default AnimeCard;