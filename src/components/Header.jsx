import { useState } from "react";

// import { useState }
export default function Header() {
  const [count, setCount] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuClassName = isMenuOpen ? "change" : "";
  function handleClick() {
    // alert('You clicked me!');
    // setCount(count + 1);
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <div className="header">
      <nav className="nav-header">
        <div className="nav-logo">
          <h3>Test</h3>
        </div>
        <ul className="menu">
          <li>
            <a href="#">1</a>
          </li>
          <li>
            <a href="#">2</a>
          </li>
          <li>
            <a href="#">3</a>
          </li>
        </ul>
        <div className={`ham-menu ${menuClassName}`} onClick={handleClick}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      </nav>
    </div>
  );
}
