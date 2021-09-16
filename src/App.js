import { Header, Footer, Main } from "components";
export function App() {
  return (
    <div className="wrapper flex flex-col h-screen">
      <Header />
      <Main>Hola Mundo !!</Main>
      <Footer />
    </div>
  );
}
