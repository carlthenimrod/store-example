export interface User {
  email: string;
  password: string;
  name: {
    first: string;
    last: string;
  };
}

export type Users = User[];
