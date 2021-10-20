import './App.css';
import react from "react"
import NavigationBar from './components/NavigationBar';
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Book from './components/Book/Book';
import BookList from './components/Book/BookList';
import { Container } from 'react-bootstrap';


function App() {

  return (
    <div className="">
          <Router>
             <NavigationBar />
             <Container>
                <Switch>
                    <Route path="/"  exact component={Welcome} />
                    <Route path="/add-book" component={Book} />
                    <Route path="/book-list" component={BookList} />
                </Switch>
              </Container>
          </Router>
      <Footer />

    </div>
  );
}

export default App;
