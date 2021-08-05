//Routing
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
//Components
import Home from './components/Home'
import RecipePage from './components/RecipePage'
import NavBar from './components/Navbar'
import NotFound from './components/NotFound'
//Styles
import GlobalStyle from './globalStyles'

const App = () => (
  <Router>
    <NavBar />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/recipe/:recipeId">
        <RecipePage />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
    <GlobalStyle />
  </Router>
)

export default App
