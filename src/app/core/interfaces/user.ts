export interface IuserRegister {
    userId?: number; 
    userName: string;
    emailId: string;
    fullName: string;
    password: string;
}

export interface IuserLogin {
    userName: string;
    password: string;
}