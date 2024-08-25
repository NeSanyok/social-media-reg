export interface IUser {
    mail: string;
    phone_number: string;
    user_id: number;
    name: string;
    reg_date: Date;
    city: string;
  }
  
  export interface IGetUserResponse {
    status: number;
    message: IUser
  }
  