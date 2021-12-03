import { useState } from "react";

export default function Login() {
  const [intent, setIntent] = useState("Login");
  return (
    <div
      style={{
        flexDirection: "column",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ textAlign: "center" }}>{intent}</h1>
      <form
        method="post"
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          width: 500,
          margin: "auto",
        }}
      >
        <div style={{ padding: 8 }}>
          <label style={{ marginBottom: 8 }}>
            <input
              onChange={(e) => setIntent("Login")}
              type="radio"
              name="loginType"
              value="login"
              defaultChecked
            />{" "}
            Login
          </label>
          <label style={{ marginLeft: 8, marginBottom: 8 }}>
            <input
              onChange={(e) => setIntent("Register")}
              type="radio"
              name="loginType"
              value="register"
            />{" "}
            Register
          </label>
        </div>

        <label htmlFor="email-input">Email</label>
        <input
          style={{ height: 40, marginBottom: 8, width: "50%", border:'none', backgroundColor:'#E8F0FE', boxShadow: "inset 0px 0px 8px -7px #000000" }}
          type="email"
          id="email-input"
          name="email"
        />

        <label htmlFor="password-input">Password</label>
        <input
          style={{ height: 40, marginBottom: 8, width: "50%", border:'none',backgroundColor:'#E8F0FE', boxShadow: "inset 0px 0px 8px -7px #000000" }}
          id="password-input"
          name="password"
          type="password"
        />
        {intent === "Register" ? (
          <>
            <label htmlFor="email-input">Name</label>
            <input
              style={{ height: 40, marginBottom: 8, width: "50%", border:'none',backgroundColor:'#E8F0FE', boxShadow: "inset 0px 0px 8px -7px #000000" }}
              type="text"
              id="name-input"
              name="name"
            />
          </>
        ) : null}
        <button
          type="submit"
          style={{ padding: 6, fontWeight: "700", width: 100 }}
        >
          {intent}
        </button>
      </form>
    </div>
  );
}
