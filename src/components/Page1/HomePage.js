import Header from "../Header/Header";
import HeroSection from "./HeroSection";
import EventList from "../EventList";

const events = [
  { id: 1, title: "Music Concert", date: "March 18, 8:30 PM", location: "New York", image: "https://media.istockphoto.com/id/1806011581/photo/overjoyed-happy-young-people-dancing-jumping-and-singing-during-concert-of-favorite-group.jpg?s=612x612&w=0&k=20&c=cMFdhX403-yKneupEN-VWSfFdy6UWf1H0zqo6QBChP4=" },
  { id: 2, title: "Startup Meetup", date: "March 20, 6:00 PM", location: "San Francisco", image: "https://t3.ftcdn.net/jpg/04/40/29/94/360_F_440299419_s4b12RfNDJvpplheVDmKdhFGJiHlAYNs.jpg" },
  { id: 3, title: "Coding Bootcamp", date: "March 22, 10:00 AM", location: "Online", image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29kaW5nJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D" }
];

export default function HomePage() {
  return (
    <>
      <Header />
      <HeroSection />
      <section className="event-section">
        <h2>Events around you</h2>
        <EventList events={events} />
      </section>
    </>
  );
}
