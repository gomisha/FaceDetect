import * as React from 'react';
import Tilt from 'react-tilt'
import "./index.css";
import magnifier from "./magnifier_glass_128x128.png";

const Logo = () => {
    return (
        <div className="ma4 mt0">
            <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner pa3"><img style={{paddingTop: '1px'}} alt="logo" src={magnifier}/></div>
            </Tilt>
        </div>
    );
};

export default Logo;