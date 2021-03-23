import NotFound from './NotFound';
import {useState, useEffect} from 'react';
import Axios from 'axios';


const Show = props => {
    const [author, setAuthor] = useState(false);

    useEffect(() => {
        Axios.get(`http://localhost:8000/api/authors/${props.id}`)
        .then(res => setAuthor(res.data.results[0]))
        .catch(err => console.log(err))
    }, [props])

    return(
        author ?
        <div className="card col-4 mx-auto">
            <div className="card-body">
                <h3 className="card-title">{author.name}</h3>
            </div>
        </div> :
        <NotFound />
    )
}

export default Show;