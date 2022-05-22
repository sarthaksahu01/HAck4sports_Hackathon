import "./App.css";
import Header from "./MyComponents/HeaderForOrganisationPage";
import { About } from "./MyComponents/AboutForOrganisationPage";
import { Footer } from "./MyComponents/FooterForOrganisationPage";
import { Lists } from "./MyComponents/ListsForOrganisationPage";

function App() {
  return (
    <>
      <Header title="Organisation Page" />
      <About />
      <Lists />
      {/* <newList /> */}
      {/* <newList /> */}
      <Footer />
    </>
  );
}

export default App;
