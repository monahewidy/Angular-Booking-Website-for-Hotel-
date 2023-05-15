export interface IUser {
    id?:number;
  userName: String;

  userPassword: String;

  userPhone: Number;

  userEmail: String;

  userAddress: String;

  dob?: Date | undefined ;

  timestamps?: Date | undefined ;
 
}
