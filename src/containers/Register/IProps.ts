import IUser from "../App/User";

interface IProps {
    onRouteChange: (route: string) => void;
    loadUser: (user: IUser) => void;
}

export default IProps;