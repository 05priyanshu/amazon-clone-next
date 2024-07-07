import Link from "next/link";
import "./Signup.css";
import { hash } from "bcrypt";
import { redirect } from "next/dist/server/api-utils";
import { connectToDatabase } from "@/utils/DbConnect";
import { users } from "@/models/userModel";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Signup = () => {
  const signUphandler = async (formdata) => {
    "use server";

    const name = formdata.get("name");
    const email = formdata.get("email");
    const password = formdata.get("password");
    if (!name || !email || !password) {
      toast.error("please provide all the fields");
    }
    //connection with database
    await connectToDatabase();
    const user = await users.findOne({ email });
    if (user) toast.error("user already exists");

    const hashedPassword = await hash(password, 10);

    //create new user
    await users.create({ name, email, password: hashedPassword });
    // redirect("/login")
  };
  return (
    <div className="signup">
      <Link href="/">
        <img
          className="signup__image"
          src="http://pngimg.com/uploads/amazon/amazon_PNG21.png"
          alt="amazon"
        />
      </Link>
      <div className="signup__container">
        <h1>Create Account</h1>
        <form action={signUphandler}>
          <h5 className="signup__label">Name</h5>
          <input
            type="text"
            // value={userEmail}
            // onChange={(e) => setUserEmail(e.target.value)}
            name="name"
            id=""
          />
          <h5 className="signup__label">Email</h5>
          <input
            type="email"
            // value={userPassword}
            // onChange={(e) => setUserPassword(e.target.value)}
            name="email"
            id=""
          />
          <h5 className="signup__label">Password</h5>
          <input
            type="password"

            name="password"
            id=""
          />
          <button
            type="submit"
       
            className="signup__signupButton"
          >
            Sign up
          </button>
        </form>
        <p className="signup__terms">
          ℹ Passwords must be at least 6 characters.
        </p>
      </div>
      <div className="signup__login">
        <p>Already have an account?</p>
        <Link href="/login">
          <button className="signup__loginButton">
            Sign in
            </button>
        </Link>
      </div>
    </div>
  );
};

export default Signup;
