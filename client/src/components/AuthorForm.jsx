import {navigate } from '@reach/router';

const AuthorForm = props => {
    const {inputs, handleInputChange, handleSubmit, title, submitValue, errors} = props;

    const handleCancel = (e) => {
        e.preventDefault();
        navigate("/");
    }

    return(
        <div>
            <form onSubmit={handleSubmit} className="col-6 mx-auto">
                <h2 className="text-center">{title}</h2>
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
    )
}

export default AuthorForm;