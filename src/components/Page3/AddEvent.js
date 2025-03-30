import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import "./AddEvent.css"; // Import the CSS file

export default function CreateEvent() {
  const [title, setTitle] = useState("");
  const [venue, setVenue] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, venue, startTime, endTime, startDate, endDate, description, image });
    navigate("/");
  };

  return (
    <>
      <Header />
      <div className="container">
        
        {/* Create Event Section */}
        <h1 className="section-header"><b>Create Event</b></h1>
        <div className="section">
          <form onSubmit={handleSubmit}>
            
            {/* Event Title */}
            <div className="input-container">
              <label className="label"><b>Event Title</b></label>
              <input type="text" placeholder="Enter event title" value={title} onChange={(e) => setTitle(e.target.value)} className="input" required />
            </div>

            {/* Event Venue */}
            <div className="input-container">
              <label className="label"><b>Event Venue</b></label>
              <input type="text" placeholder="Enter event venue" value={venue} onChange={(e) => setVenue(e.target.value)} className="input" required />
            </div>

            {/* Start Time & End Time */}
            <div className="grid-container">
              <div className="input-container">
                <label className="label"><b>Start Time</b></label>
                <input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} className="input" required />
              </div>
              <div className="input-container">
                <label className="label"><b>End Time</b></label>
                <input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} className="input" required />
              </div>
            </div>

            {/* Start Date & End Date */}
            <div className="grid-container">
              <div className="input-container">
                <label className="label"><b>Start Date</b></label>
                <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="input" required />
              </div>
              <div className="input-container">
                <label className="label"><b>End Date</b></label>
                <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="input" required />
              </div>
            </div>

          </form>
        </div>

        {/* Event Description Section */}
        <h1 className="section-header"><b>Event Description</b></h1>
        <div className="section">
          
          {/* Event Image Upload */}
          <div className="input-container">
            <label className="label"><b>Event Image</b></label>
            <div className="image-upload"></div>
          </div>

          {/* Event Description */}
          <div className="input-container">
            <label className="label"><b>Event Description</b></label>
            <textarea placeholder="Type here..." value={description} onChange={(e) => setDescription(e.target.value)} className="textarea" required />
          </div>

          {/* Submit Button */}
          <button className="button" onClick={handleSubmit}>Create Event</button>
        </div>

      </div>
    </>
  );
}
