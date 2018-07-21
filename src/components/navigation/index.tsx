import * as React from 'react';

import IProps from "./IProps";

const Navigation = (props: IProps) => {
    return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
            <p className="f3 link dim black underline pa3 pointer" onClick={props.onRouteChange}>Sign Out</p>
        </nav>
    );
};

export default Navigation;