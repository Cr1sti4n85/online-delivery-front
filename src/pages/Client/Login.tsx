import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import type { LoginRequest } from "../../types";
import { login } from "../../http/apiRequests";
import { toast } from "react-toastify";
import { StoreContext } from "../../context/storeContext";

const Login = () => {
  const setToken = useContext(StoreContext)?.setToken;
  const navigate = useNavigate();
  const [data, setData] = useState<LoginRequest>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await login(data);
      if (response.status === 200 && setToken) {
        toast.success("Inicio de sesión exitoso");
        setToken(response.data.token);
        setData({ email: "", password: "" });
        localStorage.setItem("jwt", response.data.token);
        navigate("/");
      } else {
        toast.error("Error en el proceso. Inténtalo nuevamente");
      }
    } catch {
      toast.error("Error al iniciar sesión");
    }
  };

  return (
    <div className="login-container">
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card border-0 shadow rounded-3 my-5 mx-2">
            <div className="card-body p-4 p-sm-5">
              <h5 className="card-title text-center mb-5 fw-light fs-5">
                Inicio de sesión
              </h5>
              <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                  />
                  <label htmlFor="floatingInput">Email</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    name="password"
                    value={data.password}
                    onChange={handleChange}
                  />
                  <label htmlFor="floatingPassword">Password</label>
                </div>

                <div className="d-grid">
                  <button
                    className="btn btn-outline-primary btn-login text-uppercase"
                    type="submit"
                  >
                    Iniciar sesión
                  </button>
                  <button
                    className="btn btn-outline-danger btn-login text-uppercase mt-2"
                    type="reset"
                  >
                    Reset
                  </button>
                </div>
                <div className="mt-4">
                  ¿No tienes cuenta? <Link to={"/register"}>Registrate</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
