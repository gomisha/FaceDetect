import * as React from 'react';

import IProps from "./IProps";

const Navigation = (props: IProps) => {
    return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
            <p className="f3 link dim black underline pa3 pointer" 

                // https://github.com/palantir/tslint-react/issues/96
                /* tslint:disable:jsx-no-lambda */
                onClick={() => props.onRouteChange("signOutClicked")}>Sign Out</p>
        </nav>
    );
};

export default Navigation;