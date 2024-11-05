import { Button, Card, Input, Label } from "../components/ui";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export function RegisterPage() {
  //execute useForm()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //navigate
  const navigate = useNavigate();

  //llamamos al contexto
  const { signup, error } = useAuth();

  const onSubmit = handleSubmit(async (data) => {
    const user = await signup(data);
    if (user) {
      navigate("/login");
    }
  });

  return (
    <div className="h-[calc(100vh-64px)] flex items-center justify-center ">
      <Card>
        {error &&
          error.map((err) => (
            <p className="text-red-500 text-center font-bold">{err}</p>
          ))}
        <h1 className="text-4xl font-bold my-2 text-center">Register</h1>
        <form onSubmit={onSubmit}>
          <Label htmlFor="name">Name</Label>
          <Input
            {...register("name", { required: true })}
            type="text"
            placeholder="Enter your fullname"
          />
          {errors.name && <p className="text-red-500">Name is required</p>}

          <Label htmlFor="email">Email</Label>
          <Input
            {...register("email", { required: true })}
            type="email"
            placeholder="Enter your email"
          />
          {errors.email && <p className="text-red-500">Email is required</p>}

          <Label htmlFor="password">Password</Label>
          <Input
            {...register("password", { required: true })}
            type="password"
            placeholder="Enter your password"
          />
          {errors.password && (
            <p className="text-red-500">Password is required</p>
          )}
          <Button>Register</Button>

          <div className="flex justify-between my-4">
            <p>Already have an account? </p>
            <Link className="text-blue-600 font-bold" to="/login">
              Login
            </Link>
          </div>
        </form>
      </Card>
    </div>
  );
}
