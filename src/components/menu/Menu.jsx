import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#home">Home</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#services">Services</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#aboutUs">About Us</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#reviews">Reviews</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}
