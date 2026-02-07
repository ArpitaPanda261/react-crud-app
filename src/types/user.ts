export interface User {
  id?: number;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
}

/* Form type (without id) */
export type UserFormData = Omit<User, "id">;
