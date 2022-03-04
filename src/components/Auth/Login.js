import { useRef } from "react";

import useHttp from "../../hooks/useHttp";

function Login() {
  const emailInput = useRef();
  const passwordInput = useRef();

  const [send, infos] = useHttp();

  async function submitHandler(e) {
    e.preventDefault();

    await send({
      path: "/users/login",
      method: "POST",
      body: {
        email: emailInput.current.value,
        password: passwordInput.current.value,
      },
    });
  }

  return (
    <div>
      {infos.error && <p>{infos.error.message}</p>}
      {infos.data && <p>{infos.data.message}</p>}
      <form onSubmit={submitHandler}>
        <label>Email</label>
        <input type="email" name="email" ref={emailInput} />
        <label>Password</label>
        <input type="password" name="password" ref={passwordInput} />
        <button type="submit" disabled={infos.isLoading}>
          {infos.isLoading ? "Loading" : "Login"}
        </button>
      </form>
    </div>
  );
}

export default Login;
