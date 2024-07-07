"use client";
import Link from "next/link";
import { getProviders, signIn } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "./Login.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {


  const loginhandler = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    if (!email || !password === null) {
      // console.log(email, password);
      // toast.error("Please enter email and password");
      return;
    }

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result.ok) {
      router.push("/");
    } else {
      toast.error("Incorrect email and password");
    }
  };
  const [providers, setProviders] = useState(null);
  const router = useRouter();

  useEffect(() => {
    async function loadProviders() {
      const providers = await getProviders();
      setProviders(providers);
    }
    loadProviders();
  }, []);

  return (
    <div className="login">
      <Link href="/">
        <img
          className="login__image"
          src="http://pngimg.com/uploads/amazon/amazon_PNG21.png"
          alt="amazon"
        />
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>
        {providers &&
          Object.values(providers).map((provider) => (
            <div key={provider.name}>
              {provider.name === "Credentials" ? (
                <form
                  method="post"
                  action="/api/auth/callback/credentials"
                  className="login__form"
                  onSubmit={loginhandler}
                >
                  <h5 className="login__label">E-mail</h5>
                  <input
                    type="email"
                    name="email"
                    className="login__input"
                    required
                  />
                  <h5 className="login__label">Password</h5>
                  <input
                    type="password"
                    name="password"
                    className="login__input"
                    required
                  />
                  <button type="submit" className="login__signinButton">
                    Login
                  </button>
                </form>
              ) : (
                <button
                  className="login__signinButton"
                  onClick={() => signIn(provider.id)}
                >
                  Sign in with {provider.name}
                </button>
              )}
            </div>
          ))}
        <p className="login__terms">
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
      </div>
      <div className="login__signup">
        <p>New to Amazon?</p>
        <Link href="/signup">
          <button className="login__signupButton">
            Create your Amazon account
          </button>
        </Link>
      </div>
    </div>
  );
}
