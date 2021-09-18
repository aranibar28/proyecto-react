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
      <h1 className="text-center text-4xl mb-8 border-black border-b pb-4">USUARIOS</h1>
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
