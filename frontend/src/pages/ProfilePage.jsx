import { useAuth } from "../context/AuthContext";

function ProfilePage() {
  //usamos el contexto
  const { user } = useAuth();

  return (
    <div>
      <h1 className="text-center text-5xl">WELCOME</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}

export default ProfilePage;
