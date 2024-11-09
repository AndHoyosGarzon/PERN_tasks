import {
  Card,
  Button,
  Input,
  Label,
  Container,
} from "../components/ui/index.js";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext.jsx";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //navigate
  const navigate = useNavigate();

  //llamamos al contexto
  const { signin, error, isAuth } = useAuth();

  const onSubmit = handleSubmit(async (data) => {
    const user = await signin(data);

    if (user) {
      navigate("/tasks");
    }
  });

  return (
    <Container className="h-[calc(100vh-7rem)] flex justify-center items-center">
      <Card>
        {error &&
          error.map((err, idx) => (
            <p key={idx} className="text-red-500 text-center font-bold">
              {err}
            </p>
          ))}

        <h1 className="text-4xl font-bold my-2 text-center">Sign in</h1>
        <form onSubmit={onSubmit}>
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

          <Button>Sign in</Button>

          <div className="flex justify-between my-4">
            <p className="mr-4">Don't have an account? </p>
            <Link className="text-blue-600 font-bold" to="/register">
              Register
            </Link>
          </div>
        </form>
      </Card>
    </Container>
  );
}

export default LoginPage;
