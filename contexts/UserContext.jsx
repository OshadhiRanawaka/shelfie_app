import { createContext, useState } from "react";
import { account } from "../lib/appwrite";
import { ID } from "react-native-appwrite";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  async function login(email, password) {
    try {
      await account.createEmailSession(email, password);
      const response = await account.get();
      setUser(response);
    } catch (error) {
      console.log(error);
    }
  }

  async function register(email, password) {
    try {
      await account.createEmailPasswordUser(ID.unique(), email, password);
    } catch (error) {
      console.log(error);
    }
  }

  async function logout() {}

  return (
    <UserContext.Provider value={{ user, login, register, logout }}>
      {children}
    </UserContext.Provider>
  );
}
