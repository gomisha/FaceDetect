import * as React from 'react';

import IProps from "./IProps";
import IState from "./IState";

// CSS from:
// http://tachyons.io/components/forms/sign-in/index.html
// http://tachyons.io/components/cards/product-card/index.html

class SignIn extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }

    public render() {
        console.log("render>this.state=" + this.state);

        return (
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mh0">Sign In</legend>
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
                                onClick={this.onSubmitSignIn} type="submit" value="Sign in"/>
                        </div>
                        <div className="lh-copy mt3">
                            <p className="f6 link dim black db pointer" onClick={() => this.props.onRouteChange('register')}>Register</p>
                        </div>
                    </div>
                </main>
            </article>
        );
    }

    private onSubmitSignIn = (): void => {
        console.log("onSubmitSignIn", this.state);
        
        fetch("http://localhost:3000/signin", {
            method: "post",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })})
            .then(response => response.json())
            .then(data => {
                console.log("onSubmitSignIn>data" + data);
                if(data.toString().includes("success")) {
                    this.props.onRouteChange('home');
                }
                else {
                    console.log("wrong user/password");
                }
            })

    }

    private onEmailChange = (event: any):void => {
        console.log("onEmailChange>this.state=" + this.state);
        this.setState({email: event.target.value})
    }

    private onPasswordChange = (event: any): void => {
        this.setState({password: event.target.value})
    }
}

export default SignIn;