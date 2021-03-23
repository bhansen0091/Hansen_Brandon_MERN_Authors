import { useState, useEffect } from 'react';
import { Link } from '@reach/router';
import Axios from 'axios';

const Main = props => {
    const [authors, setAuthors] = useState(null);

    useEffect(() => {
        Axios.get("http://localhost:8000/api/authors")
            .then(res => setAuthors(res.data.results))
            .catch(err => console.log(err))
    }, [])

    const handleDestroyAuthor = (id) => {
        Axios.delete(`http://localhost:8000/api/authors/${id}`)
            .then(res => setAuthors(res.data.results))
            .catch(err => console.log(err))
    }

    return(
        authors ?
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Header 1</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        authors.map((a,i) => {
                            return <tr key={i}>
                                    <td>
                                        <Link to={`/show/${a._id}`}>{a.name}</Link>
                                    </td>
                                    <td>
                                        <Link className="btn btn-warning" to={`/edit/${a._id}`}
                                            >Edit
                                        </Link>
                                        <button 
                                            className="btn btn-danger mx-2"
                                            onClick={() => {handleDestroyAuthor(a._id)}}
                                            >Delete
                                        </button>
                                    </td>
                            </tr>
                        })
                    }
                </tbody>
            </table> :
            <h2>Loading...</h2>
    )
}

export default Main;