export interface User {
  id: string;
  name: string;
  address: string;
  cellphone: string;
}

export interface UnSavedUser extends Omit<User, "id"> {
  id?: undefined | null | string;
}
