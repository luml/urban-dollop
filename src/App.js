import './App.css';
import Home from './pages/Home'
import About from './pages/About'
import Articles from './pages/Articles'
import Article from './pages/Article'
import NotFoundPage from './pages/NotFoundPage';
import NavBar from './NavBar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} exact />
            <Route path="/article-list" component={Articles} exact />
            <Route path="/article/:name" component={Article} exact />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
