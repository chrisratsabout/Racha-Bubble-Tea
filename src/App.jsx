import "./styles.css"
import Navbar from "./Navbar"
import Menu from "./Menu"
import Footer from "./Footer"
import Pay from "./Pay"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom/cjs/react-router-dom.min"

function App() {

  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Menu />
        </Route>
        <Route exact path="/pay">
          <Pay />
        </Route>

      </Switch>

      <Footer />
      </Router>
    </>
  )
}

export default App
