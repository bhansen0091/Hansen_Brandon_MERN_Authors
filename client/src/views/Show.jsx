import {Link } from '@reach/router';
import {useState, useEffect} from 'react';
import NotFound from './NotFound';
import Axios from 'axios';


const Show = props => {
    const [author, setAuthor] = useState(false);

    useEffect(() => {
        Axios.get(`http://localhost:8000/api/authors/${props.id}`)
        .then(res => setAuthor(res.data.results[0]))
        .catch(err => console.log(err))
    }, [props])

    return(
        <div className="col-7 mx-auto">
            <div className="text-left">
                <Link to="/">Home</Link>
            </div>
            <div>
                {
                    author ?
                    <div className="card col-4">
                        <div className="card-body">
                            <h3 className="card-title">{author.name}</h3>
                        </div>
                    </div> :
                    <NotFound />
                }
            </div>
        </div>
    )
}

export default Show;