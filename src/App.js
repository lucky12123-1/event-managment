import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from './components/Page1/HomePage';
import EventDetails from './components/Page2/EventDeatils';
import AddEvent from './components/Page3/AddEvent';
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/event/:id" element={<EventDetails />}/>
        <Route path="/add-event" element={<AddEvent />}/>
      </Routes>
    </Router>

  );
}

