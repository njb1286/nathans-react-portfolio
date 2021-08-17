import React, {Component} from "react";

export default class Login extends Component {
    constructor (props) {
        super (props);

        this.state = {
            email: "",
            password: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }   

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        console.log("Email =", this.state.email, "Password =", this.state.password)
        event.preventDefault();
    }

    render () {
        return (
            <div>
                <h1>Login to this so you can actually use this site</h1>

                <form onSubmit={this.handleSubmit}>
                    <input 
                    type="email"
                    name="email"
                    placeholder="Place your email here"
                    value={this.state.email}
                    onChange={this.handleChange}
                    />
                    
                    <input 
                    type="password"
                    name="password"
                    placeholder="Place your password here"
                    value={this.state.password}
                    onChange={this.handleChange}
                    />

                    <div>
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
        );
    }
}