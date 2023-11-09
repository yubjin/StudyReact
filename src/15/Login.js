import { useEffect, useState } from "react";
import LoginForm from "./LoginForm" ;
import Logout from "./Logout";

const Login = () => {

  return (
    <main className="container">
      <LoginForm />
      <Logout />
    </main>
  )
}

export default Login