import "./card.scss";
export function Card(props) {
  const { name, lastname } = props;

  return (
    <article className="card">
      <h2>
        {name} {lastname}
      </h2>
    </article>
  );
}
