interface User {
    id: string;
    name: string;
    email: string;
    joined: Date | string;
    entries: number;
}

export default User;