import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";
import "animate.css";

// Assets
import logo from "../../assets/images/Iam5.png";
import resume from "../../assets/files/MiaLewisResume.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  useEffect(() => {
    const listener = (e) => {
      if (!navRef.current || navRef.current.contains(e.target)) {
        return;
      }
      setOpen(e);
    };

    document.addEventListener("mousedown", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [navRef, setOpen]);

  const pages = [
    { name: "home", link: "/" },
    //   { name: 'work', link: '/work' },
    { name: "about", link: "/about" },
    { name: "contact", link: "/contact" },
  ];

  const icons = [
    {
      link: "https://linkedin.com/in/mia-lewis",
      icon: "fa-brands fa-linkedin-in",
    },
    {
      link: resume,
      icon: "fa-regular fa-file-lines",
    },
  ];

  const links = (routes) => {
    return routes.map((e, i) => {
      return (
        <li key={i}>
          <Link
            to={e.link}
            replace="true"
            tabIndex={tabIndex}
            className="nav__links--link"
            onClick={() => setOpen(!open)}
          >
            {e.name}
          </Link>
        </li>
      );
    });
  };

  const socialMedia = () => {
    return icons.map((e, i) => {
      let icon = `${e.icon} nav__icon`;
      return (
        <li key={i}>
          <a
            href={e.link}
            replace="true"
            target="_blank"
            rel="noopener noreferrer"
            without="true"
            onClick={() => setOpen(!open)}
          >
            <i className={icon} aria-hidden="true"></i>
          </a>
        </li>
      );
    });
  };

  return (
    <nav id="nav" className="nav navbar">
      <div className="navbar__menu">
        <button
          className="navbar__menu-slideout--button"
          aria-label={isHidden ? "Open the menu" : "Close the menu"}
          onClick={() => setOpen(!open)}
          aria-expanded={!isHidden}
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
      <ul
        ref={navRef}
        className={
          !open
            ? "navbar__menu-slideout navbar__menu-slideout-enter-active"
            : "navbar__menu-slideout navbar__menu-slideout-exit-active"
        }
      >
        {links(pages)}
        <div className="navbar__menu-slideout--icons">{socialMedia()}</div>
      </ul>
      <Link
        to="/"
        replace="true"
        tabIndex={tabIndex}
        className="nav__links--link"
      >
        <div className="nav__title navbar__title">
          <img src={logo} alt="Mia Lewis Logo" className="nav__logo" />
          <h1 className="nav__title--text navbar__title--text">Mia Lewis</h1>
        </div>
      </Link>
      <ul className="nav__links">
        {links(pages)}
        {socialMedia()}
      </ul>
    </nav>
  );
}
