export enum UserType {
  Default = 'default',
  Pro = 'pro',
}

export type User = {
  name: string;
  email: string;
  avatar: string;
  password: string;
  type: UserType.Default | UserType.Pro;
};
