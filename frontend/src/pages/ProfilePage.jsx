import { useAuth } from "../context/AuthContext";

function ProfilePage() {
  //usamos el contexto
  const { user } = useAuth();

  return (
    <div>
      <h1 className="text-center text-5xl">WELCOME</h1>
      <p className="font-bol text-2xl bg-blue-700">{user && user.name}</p>
    </div>
  );
}

export default ProfilePage;
