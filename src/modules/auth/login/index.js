import { useForm } from "react-hook-form";
import { useState } from "react";
import { /* Input */ Button } from "ui";
export function AuthLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [, /* stateForm */ setStateForm] = useState({
    user: "",
    password: "",
  });

  function existUser(users, usserLogged) {
    const currentUser = users.filter((data) => data.user === usserLogged.user);

    return new Promise((resolve, reject) => {
      !!currentUser.length
        ? resolve(currentUser[0])
        : reject("No existe el usuario.");
    });
  }

  const onsubmit = (userLogged) => {
    fetch("http://localhost:3000/usersRegister")
      .then((response) => response.json())
      .then((users) => {
        return existUser(users, userLogged);
      })
      .then((user) => {
        alert(`Bienvenido ${user.profile.name}`);
        console.log("user", user);
        localStorage.setItem("user", JSON.stringify(user));
        window.location.reload();
      })
      .catch((error) => {
        console.log("error", error);
        alert("El usuario no Existe");
      });
    //console.log("data", data);
  };
  return (
    <div className="auth-login w-6/12 mx-auto">
      <h1 className="text-4xl font-bold text-center mb-4 mt-10">Login</h1>
      <form onSubmit={handleSubmit(onsubmit)}>
        <div className="mb-8">
          <label className="block mb-2">Usuario</label>
          <input
            type="text"
            className={`border-2 border-gray-400 rounded w-full p-4 focus:border-gray-500 focus:outline-none ${
              errors.user && "border-red-800"
            }`}
            onInput={(event) =>
              setStateForm((state) => ({ ...state, user: event.target.value }))
            }
            {...register("user", { required: true, minLength: 5 })}
          />
          {/* <Input
            value={stateForm.user}
            onInput={(value) =>
              setStateForm((state) => ({ ...state, user: value }))
            }
            required
          /> */}
          {errors.user && errors.user.type === "required" && (
            <span className="text-red-800">El campo es obligatorio.</span>
          )}
          {errors.user && errors.user.type === "minLength" && (
            <span className="text-red-800">
              La longitud mínima es de 5 carácteres
            </span>
          )}
        </div>

        <div>
          <label className="block mb-2">Password</label>
          <input
            type="password"
            className={`border-2 border-gray-400 rounded w-full p-4 focus:border-gray-500 focus:outline-none ${
              errors.password && "border-red-800"
            }`}
            onInput={(event) =>
              setStateForm((state) => ({
                ...state,
                password: event.target.value,
              }))
            }
            {...register("password", { required: true, minLength: 3 })}
          />
          {/*          <Input
            value={stateForm.password}
            placeholder="Password"
            type="password"
            onInput={(value) =>
              setStateForm((state) => ({ ...state, password: value }))
            }
            required
          /> */}
          {errors.password && errors.password.type === "required" && (
            <span className="text-red-800">El campo es obligatorio.</span>
          )}
          {errors.password && errors.password.type === "minLength" && (
            <span className="text-red-800">
              La longitud mínima es de 3 carácteres
            </span>
          )}
        </div>

        <div className="mt-10">
          <div className="text-center">
            <Button type="submit">Ingresar</Button>
          </div>
        </div>
      </form>
    </div>
  );
}
