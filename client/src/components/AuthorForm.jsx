import {navigate, Link } from '@reach/router';

const AuthorForm = props => {
    const {inputs, handleInputChange, handleSubmit, title, submitValue, errors} = props;

    const handleCancel = (e) => {
        e.preventDefault();
        navigate("/");
    }

    return(
        <div className="col-8 mx-auto">
            <div className="text-left">
                <Link to="/">Home</Link>
                <p style={{color:"rebeccapurple", fontWeight: 600}}>{title} :</p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-8 col-xs-12 text-left border py-3">
                <form onSubmit={handleSubmit} className="mx-auto">
                    <div className="form-group">
                        <label htmlFor="name">Author's Name</label>
                        <input 
                            type="text" 
                            name="name" 
                            className="form-control"
                            onChange={handleInputChange}
                            value={inputs.name}
                        />
                        <span className="text-danger">
                            {errors.name ? errors.name.message : ""}
                        </span>
                    </div>
                    <input type="submit" value={submitValue} className="btn btn-primary"/>
                    <button className="btn btn-dark mx-2" onClick={handleCancel}>Cancel</button>
                </form>
            </div>
        </div>
    )
}

export default AuthorForm;