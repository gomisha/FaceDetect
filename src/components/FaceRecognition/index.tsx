import * as React from 'react';
import IFaceRecognitionProps from './IFaceRecognitionProps';

const FaceRecognition = (props: IFaceRecognitionProps) => {
    console.log("FaceRecognition>props.imageUrl=" + props.imageUrl);

    return (
        <div className="center ma">
            <div className="absolute mt2">
                <img src={props.imageUrl} width='500 px' height='auto'/>
            </div>
        </div>
    );
};

export default FaceRecognition;