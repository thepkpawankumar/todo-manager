import * as React from "react";
import { AppwriteContext } from '../components/Appwrite';

const authContext = React.createContext();

// This is fake auth for now and i am not using this in the application
function useAuth() {

    const appwrite = useContext(AppwriteContext);
    const [authed, setAuthed] = React.useState(false);
  
    return {
      authed,
      login() {
        return new Promise((response) => {
          setAuthed(true);
          response();
        });
      },
      logout() {
        return new Promise((response) => {
          setAuthed(false);
          response();
        });
      },
    };
  }
  
  export function AuthProvider({ children }) {
    const auth = useAuth();
  
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
  }
  
  export default function AuthConsumer() {
    return React.useContext(authContext);
  }