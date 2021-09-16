import "./nav.scss";

export function Nav() {
  const links = [
    {
      text: "Home",
      url: "http://",
    },
    {
      text: "Servicios",
      url: "http://",
    },
    {
      text: "Portafolio",
      url: "http://",
    },
    {
      text: "Contacto",
      url: "http://",
    },
  ];

  return (
    <nav className="nav">
      <ul className="">
        {links.map((link, idx) => (
          <li key={idx}>
            <a href={link.url}>{link.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
