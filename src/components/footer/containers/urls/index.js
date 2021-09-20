export function Url() {
  const links = [
    {
      text: "Sobre GymVast",
      url: "./about-us",
    },
    {
      text: "Nuestros Trainers",
      url: "./trainers",
    },
    {
      text: "Nuestra Tienda",
      url: "./shop",
    },
    {
      text: "Nuestros Precios",
      url: "./price",
    },
    {
      text: "Nuestros Servicios",
      url: "./services",
    },
    {
      text: "Reglas del Club",
      url: "./rules",
    },
    {
      text: "Politicas y Privacidad",
      url: "./politics",
    },
    {
      text: "Carrera Profesional",
      url: "./caarer",
    },
    {
      text: "Preguntas Frecuentes",
      url: "./faq",
    },
    {
      text: "Contáctanos",
      url: "./contact-us",
    },
  ];

  return (
    <ul className="grid grid-cols-2">
      {links.map((link, id) => (
        <li key={id}>
          <a href={link.url}>{link.text}</a>
        </li>
      ))}
    </ul>
  );
}
