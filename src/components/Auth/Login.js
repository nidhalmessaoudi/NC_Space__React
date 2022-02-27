function Login() {
  return (
    <div>
      <form>
        <label>Username</label>
        <input name="username" />
        <label>Password</label>
        <input name="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
