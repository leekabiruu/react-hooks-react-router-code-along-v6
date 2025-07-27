import { useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div id="error-page">
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </main>
    </div>
  );
}
