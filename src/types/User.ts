type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  creation_date: Date;
  canAddCategory: boolean;
  canAddProduct: boolean;
};

export default User;
