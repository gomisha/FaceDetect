import * as React from 'react';

import IProps from "./IProps";
import IState from "./IState";

import * as config from "../../config";

class Register extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            email: "",
            name: "",
            password: ""
        };
    }
    public render() {
        return (
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mh0">Register</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                                <input 
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="text"
                                    name="name"
                                    id="name"
                                    onChange={this.onNameChange} />
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                <input 
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="email" 
                                    name="email-address"  
                                    id="email-address"
                                    onChange={this.onEmailChange} />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input 
                                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="password"
                                    name="password"
                                    id="password"
                                    onChange={this.onPasswordChange}/>
                            </div>
                        </fieldset>
                        <div className="">
                            <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                                // https://github.com/palantir/tslint-react/issues/96
                                /* tslint:disable:jsx-no-lambda */
                                onClick={this.onSubmitRegister} type="submit" value="Register"/>
                        </div>
                    </div>
                </main>
            </article>
        );
    }

    private onNameChange = (event: any):void => {
        this.setState({name: event.target.value})
    }

    private onEmailChange = (event: any):void => {
        this.setState({email: event.target.value})
    }

    private onPasswordChange = (event: any): void => {
        this.setState({password: event.target.value})
    }

    private onSubmitRegister = (): void => {
        config.JSON_POST_REQUEST.body = JSON.stringify({
            email: this.state.email,
            name: this.state.name,
            password: this.state.password
        });

        fetch(config.ENDPOINT_POST_REGISTER, config.JSON_POST_REQUEST)
            .then(response => response.json())
            .then(user => {
                this.props.onRouteChange('home');
                this.props.loadUser(user);
            })
    }
}
export default Register;