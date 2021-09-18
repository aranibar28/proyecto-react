import { useEffect, useState } from "react";
export function Users() {
  //const [count, setCount] = useState(0);
  const [users, setUser] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((response) => response.json())
      .then((users) => setUser(users));
  }, []);

  return (
    <div>
      {console.log("users", users)}
      {!!users.length &&
        users.map((user, id) => (
          <ul key={id}>
            <li>
              {user.name}, {user.lastname}
            </li>
          </ul>
        ))}
    </div>
  );
}
