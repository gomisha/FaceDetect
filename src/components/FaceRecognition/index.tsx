import * as React from 'react';
import IProps from './IProps';
import "./index.css";

const FaceRecognition = (props: IProps) => {
    return (
        <div className="center ma">
            <div className="absolute mt2">
                <img id="inputImage" src={props.imageUrl} width="500 px" height="auto"/>
                <div className="bounding-box" style={{top: props.box.topRow, right: props.box.rightCol, bottom: props.box.bottomRow, left: props.box.leftCol}}/>
            </div>
        </div>
    );
};

export default FaceRecognition;