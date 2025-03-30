import { useState } from "react";
import "./Header.css"; // Import the CSS file

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">Event </div>
        <div className="navbar-logo-purple" color="red">Hive</div>

        {/* Desktop Buttons */}
        <div className="navbar-buttons hidden md:flex">
          <a href="/"> <button className="navbar-button">All Events </button></a>
          <a href="/add-event"><button className="navbar-button">AddEvent</button></a>
        </div>

        {/* Mobile Menu Button */}
        <button className="menu-button md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu md:hidden">
          <button className="navbar-button">All Event</button>
          <button className="navbar-button">AddEvent</button>
        </div>
      )}
    </nav>
  );
}
