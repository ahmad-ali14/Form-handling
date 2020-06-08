import React, { Component } from 'react';



class FormsClass extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            show: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(e) {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        }, () => {
            console.log(this.state)
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            show: this.state.firstName + ' ' + this.state.lastName,
            firstName: '',
            lastName: ''
        })


    }

    render() {
        return (
            <>
                <div className="FormHooks">
                    <div className="row">
                        <h1 className="text-center">Forms Vanilla</h1>
                    </div>
                    <form id="myForm" onSubmit={this.handleSubmit}>
                        <div className="row form-group">
                            <label htmlFor="firstName" className="col-12 col-md-2">
                                First Name:
          </label>
                            <input
                                id="firstName"
                                name="firstName"
                                value={this.state.firstName}
                                className="form-conrol col-12 col-md-8"
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="row form-group">
                            <label htmlFor="lastName" className="col-12 col-md-2">
                                last Name:
          </label>
                            <input
                                id="lastName"
                                name="lastName"
                                value={this.state.lastName}
                                className="form-conrol col-12 col-md-8"
                                onChange={this.handleChange}

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
                            this.state.show !== '' && <h1> {this.state.show} </h1>
                        }
                    </div>
                </div>
            </>
        );
    }

}

export default FormsClass;
