import { useAuth } from "../context/AuthContext";

function HomePage() {
  //de la siguiente manera se utiliza el contexto
  const data = useAuth();
  console.log(data);
  return <div>Home</div>;
}

export default HomePage;
