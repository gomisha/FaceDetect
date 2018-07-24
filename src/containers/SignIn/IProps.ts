import User from "../App/User";

interface IProps {
    onRouteChange: (route: string) => void;
    loadUser: (user: User) => void;
}

export default IProps;