import { Input, Button } from "ui";
export function AuthLogin() {
  return (
    <div className="auth-login w-6/12 mx-auto">
      <h1 className="text-4xl font-bold text-center mb-4 mt-10">Login</h1>
      <form>
        <div className="mb-8">
          <label className="block mb-2">Usuario</label>
          <Input />
        </div>
        <div>
          <label className="block mb-2">Password</label>
          <Input type="password" />
        </div>
        <div className="mt-10">
          <div className="text-center">
            <Button>Ingresar</Button>
          </div>
        </div>
      </form>
    </div>
  );
}
