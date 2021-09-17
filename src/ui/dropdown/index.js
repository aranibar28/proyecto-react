import { Link } from "react-router-dom";
import { useState /* useRef */ } from "react";
import "./dropdown.scss";
export function Dropdown(props) {
  const { text = "", links = [], className = "" } = props;
  const [toggle, setToggle] = useState(false);
  // const elUlRef = useRef(null);
  return (
    <div className={`dropdown ${className}`}>
      <button
        onClick={() => {
          setToggle(!toggle);
          //console.log("elUlRef", elUlRef.current);
          //elUlRef.current.classList.toggle("hidden");
        }}
      >
        {text}
      </button>

      {toggle && (
        <ul>
          {links.map((link, id) => (
            <li key={id}>
              <Link to={`${link.url}`} onClick={() => setToggle(!toggle)}>
                {" "}
                {link.text}{" "}
              </Link>
            </li>
          ))}
        </ul>
      )}

      {/* SEGUNDA FORMA
      <ul ref={elUIRef} className={`${toggle ? "block" : "hidden"}`}>
        {links.map((link, id) => (
          <li key={id}>{link.text}</li>
        ))}
      </ul> 
      */}

      {/* TERCERA FORMA
      <ul className={"hidden"} ref={elUlRef}>
        {links.map((link, id) => (
          <li key={id}>{link.text}</li>
        ))}
      </ul> 
      */}
    </div>
  );
}
