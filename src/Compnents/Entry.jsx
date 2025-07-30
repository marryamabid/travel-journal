import fill from "../assets/fill 219.png";
export default function Entry({ entry }) {
  console.log(entry);
  return (
    <article className="journal-entry">
      <div className="main-image-container">
        <img className="main-image" src={entry.img.src} alt={entry.img.alt} />
      </div>
      <div className="info-container">
        <img className="marker" src={fill} alt="map marker icon" />
        <span className="country">{entry.title}</span>
        <a href={entry.googleMapsLink} className="google-maps-link">
          View on Google Maps
        </a>
        <h2 className="entry-title">{entry.country}</h2>
        <p className="trip-dates">12 Jan, 2021 - 24 Jan, 2021</p>
        <p className="entry-text">{entry.text}</p>
      </div>
    </article>
  );
}
