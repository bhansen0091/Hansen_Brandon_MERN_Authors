import { Link } from '@reach/router';

const NotFound = props => {

    return(
        <div>
            <h1>Author not found.</h1>
            <p>The author you are looking for is not in our record.</p>
            <p>Would you like to add an author?</p>
            <Link className="btn btn-success mx-2" to="/new">Add an Author</Link>
            <Link className="btn btn-danger mx-2" to="/">Cancel</Link>
        </div>
    )
}

export default NotFound;

