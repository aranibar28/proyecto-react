import { Input, Button } from "ui";
import "./register.scss";
export function AuthRegister() {
  return (
    <div className="auth-register w-6/12 mx-auto">
      <h1 className="text-4xl font-bold text-center mb-4 mt-10">Registrate</h1>
      <form>
        <div className="grid grid-cols-2 gap-4">
          <div> 
            <label className="block mb-2">Nombre</label>
            <Input />
          </div>
          <div>
            <label className="block mb-2">Apellido</label>
            <Input />
          </div>
          <div>
            <label className="block mb-2">Usuario</label>
            <Input />
          </div>
          <div>
            <label className="block mb-2">Password</label>
            <Input type="password" />
          </div>
          <div>
            <label className="block mb-2">Pais</label>
            <select className="border border-gray-400 rounded w-full p-4 focus:border-gray-500 focus:outline-none">
              <option value="">Seleccionar</option>
              <option value="1">Peru</option>
              <option value="2">Chile</option>
              <option value="3">Argentina</option>
              <option value="4">Bolivia</option>
            </select>
          </div>
          <div>
            <label className="block mb-2">Sexo</label>
            <div className="flex items-center py-4">
              <label className="flex items-center mr-4 cursor-pointer">
                <input name="sex" className="mr-2 cursor-pointer" type="radio"
                />
                <span className="font-bold">Femenino</span>
              </label>
              <label className="flex items-center cursor-pointer px-2">
                <input name="sex" className="mr-2 cursor-pointer" type="radio"
                />
                <span className="font-bold">Masculino</span>
              </label>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <div className="text-center">
            <Button>Registrar</Button>
          </div>
        </div>
      </form>
    </div>
  );
}
