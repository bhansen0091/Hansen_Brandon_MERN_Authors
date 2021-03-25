import 'bootstrap/dist/css/bootstrap.min.css';
import {Router} from '@reach/router';
import Create from './views/Create';
import Edit from './views/Edit';
import Show from './views/Show';
import Main from './views/Main'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="col-7 mx-auto">
        <div className="text-left">
          <h2>Favorite Authors</h2>
        </div>
      </div>
      {/* <div className="d-flex col-6 mx-auto justify-content-around flex-wrap">
        <Link to="/">Home</Link>
        <Link to="/new">Add Author</Link>
      </div> */}
      <Router>
        <Main path="/" />
        <Create path="/new" />
        <Edit path="/edit/:id" />
        <Show path="/show/:id" />
      </Router>
    </div>
  );
}

export default App;
