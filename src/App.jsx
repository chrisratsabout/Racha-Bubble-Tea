import "./styles.css"
import Menu from "./Menu"
import Pay from "./Pay"
import Home from "./Home"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom/cjs/react-router-dom.min"
import ScrollToTop from "./ScrollToTop"

function App() {

  return (
    <>
      <Router>
        <ScrollToTop />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/menu">
            <Menu />
          </Route>
          <Route exact path="/pay">
            <Pay />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
