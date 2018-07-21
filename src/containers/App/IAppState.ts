interface IAppState {
    input: string;   // input from text box
    imageUrl: string; // to send to Clarifai
    box: {
        topRow: number;
        leftCol: number;
        bottomRow: number;
        rightCol: number;
    } // return face co-ordinates
    route: string;
}

export default IAppState;