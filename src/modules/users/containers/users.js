import { useEffect, useState } from "react";
import { Card } from "../components";
export function Users() {
  //const [count, setCount] = useState(0);
  const [users, setUser] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/users/")
      .then((response) => response.json())
      .then((users) => setUser(users));
  }, []);

  return (
    <div>
      <h1 className="font-bold text-center p-5">USUARIOS</h1>
      <div className="grid grid-cols-3 gap-8">
        {!!users.length &&
          users.map((user, id) => (
            <Card
              key={id}
              id={user.id}
              name={user.name}
              lastname={user.lastname}
            />
          ))}
      </div>
    </div>
  );
}
