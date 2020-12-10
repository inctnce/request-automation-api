type User = {
  id: string;
  name: string;
  email: string;
  password?: string;
  creation_date: Date;
  canAddCategory: boolean;
  canAddProduct: boolean;
  accessToken?: string;
  refreshToken?: string;
};

export default User;
