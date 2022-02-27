function Signup() {
  return (
    <div>
      <form>
        <label>Email</label>
        <input name="email" />
        <label>Username</label>
        <input name="username" />
        <label>Password</label>
        <input name="password" />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
