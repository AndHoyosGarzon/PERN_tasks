import client from "../api/axios.js";
import { createContext, useContext, useState, useEffect } from "react";
import Cookie from "js-cookie";

const AuthContext = createContext();

//HOOK PERSONALIZADO PARA EXPORTAR EL CONTEXTO
export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  //verifica si el usuario ya esta autenticado
  const [isAuth, setIsAuth] = useState(false);
  //manejo de errores que vienen desde el backend
  const [error, setError] = useState(null);

  //peticiones con axios

  //login
  const signin = async (data) => {
    try {
      const response = await client.post("/signin", data);
      setUser(response.data);
      setIsAuth(true);
      return response.data;
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setError(error.response.data);
      }
      setError([error.response.data.message]);
    }
  };

  //register
  const signup = async (data) => {
    try {
      const response = await client.post("/signup", data);
      setUser(response.data);
      setIsAuth(true);
      return response.data;
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        console.log(error.response.data);
        return setError(error.response.data);
      }
      setError([error.response.data.message]);
    }
  };

  useEffect(() => {
    if (Cookie.get("token")) {
      client
        .get("/profile")
        .then((res) => {
          console.log(res.data);
          setUser(res.data);
          setIsAuth(true);
        })
        .catch((err) => {
          console.log(err);
          setUser(null);
          setIsAuth(false);
        });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, isAuth, error, signup, signin }}>
      {children}
    </AuthContext.Provider>
  );
}
