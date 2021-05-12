import { Route, Switch } from "react-router-dom";
import Converter from "../converter/converter";
import Footer from "../footer/footer";
import Header from "../header/header";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path={"/converter"}>
          <Converter />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
