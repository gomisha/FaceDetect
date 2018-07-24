import Box from "./Box";
import User from "./User";

interface IStates {
    input: string;   // input from text box
    imageUrl: string; // to send to Clarifai
    box: Box, // face co-ordinates
    user: User,
    route: string;
}

export default IStates;