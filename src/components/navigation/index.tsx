import * as React from 'react';

import IProps from "./IProps";

const Navigation = (props: IProps) => {
    let element: JSX.Element;
    if(props.isSignedIn) {
        element = 
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                <p className="f3 link dim black underline pa3 pointer" 

                    // https://github.com/palantir/tslint-react/issues/96
                    /* tslint:disable:jsx-no-lambda */
                    onClick={() => props.onRouteChange("signIn")}>Sign Out</p>
            </nav>;

    }
    else {
        element = 
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                <p className="f3 link dim black underline pa3 pointer" 

                    // https://github.com/palantir/tslint-react/issues/96
                    /* tslint:disable:jsx-no-lambda */
                    onClick={() => props.onRouteChange("signIn")}>Sign In</p>

                <p className="f3 link dim black underline pa3 pointer" 
                    onClick={() => props.onRouteChange("register")}>Register</p>
            </nav>;
    }
    return element;
};

export default Navigation;