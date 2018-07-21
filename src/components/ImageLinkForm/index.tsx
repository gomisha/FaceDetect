import * as React from 'react';
import "./index.css";
import IProps from "./IProps";

const ImageLinkForm = (props: IProps) => {
    return (
        <div>
            <p className="f3">
                {"This magic Face Detector will detect faces in your pictures"}
            </p>
            <div className="center">
                <div className="form center pa4 br3 shadow-5">
                    <input className="f4 pa2 w-70 center" type="text" placeholder="image URL" onChange={props.onInputChange}/>
                    <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple" onClick={props.onClick}>Detect Faces</button>
                </div>
            </div>
        </div>
    );
};

export default ImageLinkForm;