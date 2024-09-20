export type TUserLogin = {
    login: string;
    password: string;
};

export type TUserCreation = {
    name: string;
    username: string;
    email: string;
    birthdate: Date;
    password: string;
    image: string;
};

export type TUserUpdate = Partial<TUserCreation>;