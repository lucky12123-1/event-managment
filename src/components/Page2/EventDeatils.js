import { useParams, Link } from "react-router-dom";
import "./EventDetail.css";
import Header from "../Header/Header";


const events = [
  {
    id: 1,
    title: "Dream world wide in Jakarta",
    location: "IIIT Sonepat",
    description: "DesignHub organized a 3D Modelling Workshop...",
    date: "23/03/25 - 24/03/25",
    time: "7PM - 10PM",
    image: "https://media.istockphoto.com/id/1806011581/photo/overjoyed-happy-young-people-dancing-jumping-and-singing-during-concert-of-favorite-group.jpg?s=612x612&w=0&k=20&c=cMFdhX403-yKneupEN-VWSfFdy6UWf1H0zqo6QBChP4=",
  },
  {
    id: 2,
    title: "Startup Meetup",
    location: "San Francisco",
    description: "Join us for an intense 48-hour coding hackathon, where developers, designers, and tech enthusiasts come together to build innovative projects. Whether you're a beginner or an expert, this hackathon is the perfect platform to showcase your skills, collaborate with like-minded individuals, and solve real-world challenges.",
    date: "23/03/25 - 25/03/25",
    time: "4PM - 10PM",
    image: "https://t3.ftcdn.net/jpg/04/40/29/94/360_F_440299419_s4b12RfNDJvpplheVDmKdhFGJiHlAYNs.jpg",
},
  {
    id: 3,
    title: "Coding Bootcamp",
    location: "Online",
    description: "DesignHub organized a 3D Modelling Workshop...",
    date: "March 22",
    time: "10:00 AM - 12:00 PM",
    image: "    https://images.unsplash.com/photo-1515879218367-8466d910aaa4?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29kaW5nJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D ",
}
];

export default function EventDetails() {
  const { id } = useParams();
  const event = events.find((event) => event.id === parseInt(id));

  if (!event) return <h2>Event Not Found</h2>;

  return (
    <>
      <Header />
      <div className="event-detail">
        
        {/* Event Banner */}
        <div className="event-banner">
          <img src={event.image} alt={event.title} />
          <Link to="/" className="back-button">⬅ Back</Link>
          <div className="event-info">
            <h1>{event.title}</h1>
            <p>{event.location}</p>
            {/* <p>{event.description}</p> */}
          </div>
        </div>

        {/* Description */}
        <div className="description">
          <h2>Description</h2>
          <p>{event.description}</p>
          <p>{event.description}</p>
        </div>

        {/* Date & Time + Social Media Section */}
        <div className="date-time">
          <div>
            <p className="label">Date:</p>
            <p className="value">{event.date}</p>
            <p className="label">Time:</p>
            <p className="value">{event.time}</p>
          </div>
          <div>
            <p className="label">Share with friends</p>
            <div className="social-share">
              <img src="https://img.icons8.com/color/48/000000/facebook.png" alt="Facebook" />
              <img src="https://img.icons8.com/color/48/000000/whatsapp.png" alt="WhatsApp" />
              <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="LinkedIn" />
              <img src="https://img.icons8.com/color/48/000000/twitter.png" alt="Twitter" />
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
