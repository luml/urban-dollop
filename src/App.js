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
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/article-list" component={Articles} />
            <Route path="/article/:name" component={Article} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
