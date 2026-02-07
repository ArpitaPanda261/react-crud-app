import axios from "axios";
import type { User } from "../types/user";

const API = axios.create({
  baseURL: "https://698703c28bacd1d773ec4ffc.mockapi.io/crud/api"
});

export const getUsers = () => API.get<User[]>("/users");

export const createUser = (user: Omit<User, "id">) =>
  API.post("/users", user);

export const updateUser = (id: number, user: Omit<User, "id">) =>
  API.put(`/users/${id}`, user);

export const deleteUser = (id: number) =>
  API.delete(`/users/${id}`);
