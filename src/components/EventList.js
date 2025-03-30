import EventCard from "./EventCard";

export default function EventList({ events }) {
  return (
    <div className="event-grid">
      {events.map(event => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}
