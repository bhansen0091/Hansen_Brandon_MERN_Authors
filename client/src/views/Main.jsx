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

        <div>
            <div className="col-lg-7 col-md-7 col-sm-8 col-xs-12 mx-auto">
                <div className="text-left">
                    <Link to="/new">Add Author</Link>
                    <p style={{color:"rebeccapurple", fontWeight: 600}}>We have quotes by:</p>
                </div>
            </div>

            {
                authors ?
                <table className="col-7 mx-auto border table table-hover">
                    <thead>
                        <tr>
                            <th>Authors</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            authors.map((a,i) => {
                                return <tr key={i}>
                                        <td className="border-right">
                                            <Link to={`/show/${a._id}`}>{a.name}</Link>
                                        </td>
                                        <td>
                                            <Link className="btn btn-sm btn-warning" to={`/edit/${a._id}`}
                                                >Edit
                                            </Link>
                                            <button 
                                                className="btn btn-sm btn-danger mx-2"
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
            }
        </div>

        
    )
}

export default Main;