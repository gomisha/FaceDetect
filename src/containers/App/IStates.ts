import IBox from "./Box";
import IUser from "./User";

interface IState {
    input: string;   // input from text box
    imageUrl: string; // to send to Clarifai
    box: IBox, // face co-ordinates
    user: IUser,
    route: string;
}

export default IState;