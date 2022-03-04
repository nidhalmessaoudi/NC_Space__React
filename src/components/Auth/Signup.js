import { useRef } from "react";
import useHttp from "../../hooks/useHttp";

function Signup() {
  const nameInput = useRef();
  const emailInput = useRef();
  const passwordInput = useRef();
  const passwordConfirmInput = useRef();

  const [send, infos] = useHttp();

  async function submitHandler(e) {
    e.preventDefault();

    await send({
      path: "/users/signup",
      method: "POST",
      body: {
        name: nameInput.current.value,
        email: emailInput.current.value,
        password: passwordInput.current.value,
        passwordConfirm: passwordConfirmInput.current.value,
      },
    });
  }

  console.log(infos);

  return (
    <div>
      {infos.data && <p>{infos.data}</p>}
      {infos.error && <p>{infos.error.message}</p>}
      <form onSubmit={submitHandler}>
        <label>Name</label>
        <input type="text" name="name" ref={nameInput} />
        <label>Email</label>
        <input type="email" name="email" ref={emailInput} />
        <label>Password</label>
        <input type="password" name="password" ref={passwordInput} />
        <label>Confirm Password</label>
        <input
          type="password"
          name="passwordConfirm"
          ref={passwordConfirmInput}
        />
        <button type="submit" disabled={infos.isLoading}>
          {infos.isLoading ? "Loading" : "Sign Up"}
        </button>
      </form>
    </div>
  );
}

export default Signup;
