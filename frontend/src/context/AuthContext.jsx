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
        return setError(error.response.data);
      }
      setError([error.response.data.message]);
    }
  };

  const signout = async () => {
    await client.post("/signout");
    setUser(null);
    setIsAuth(false);
  };

  useEffect(() => {
    if (Cookie.get("token")) {
      client
        .get("/profile")
        .then((res) => {
          setUser(res.data);
          setIsAuth(true);
        })
        .catch((err) => {
          setUser(null);
          setIsAuth(false);
        });
    }
  }, []);

  useEffect(() => {
    const clean = setTimeout(() => {
      setError(null);
    }, 5000);

    return () => clearTimeout(clean);
  }, [error]);

  return (
    <AuthContext.Provider
      value={{ user, isAuth, error, signup, signin, signout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
