import React, { useState } from 'react';


const FormsHooks = () => {
    const [title, setTitle] = useState({
        firstName: '',
        lastName: ''
    });
    const [show, setShow] = useState('');


    const handleChange = (e) => {
        // e.preventDefault();
        setTitle({
            ...title,
            [e.target.name]: e.target.value,
        })

        console.log(title)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setShow(title.firstName + ' ' + title.lastName);
    }

    return (
        <>
            <div className="FormHooks">
                <div className="row">
                    <h1 className="text-center">Forms Vanilla</h1>
                </div>
                <form id="myForm" onSubmit={handleSubmit}>
                    <div className="row form-group">
                        <label htmlFor="firstName" className="col-12 col-md-2">
                            First Name:
          </label>
                        <input
                            id="firstName"
                            name="firstName"
                            className="form-conrol col-12 col-md-8"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="row form-group">
                        <label htmlFor="lastName" className="col-12 col-md-2">
                            last Name:
          </label>
                        <input
                            id="lastName"
                            name="lastName"
                            className="form-conrol col-12 col-md-8"
                            onChange={handleChange}

                        />
                    </div>
                    <div className="row form-group">
                        <button className="btn btn-primary" type="submit" >
                            Submit
          </button>
                    </div>
                </form>

                <div id="showBox" className="jubmotrron myClass">
                    {
                        show !== '' && <h1> {show} </h1>
                    }
                </div>
            </div>
        </>
    );


}

export default FormsHooks;
