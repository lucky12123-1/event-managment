import { Link } from "react-router-dom";
import "./EventCard.css";

export default function EventCard({ event }) {
  return (
    <Link to={`/event/${event.id}`} className="event-card">
      <img src={event.image} alt={event.title} />
      <h3>{event.title}</h3>
      <p>{event.date} • {event.location}</p>
    </Link>
  );
}
