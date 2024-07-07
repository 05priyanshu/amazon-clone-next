"use client";

import React from "react";
import Image from "next/image";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Link from "next/link";
import { useStateValue } from "@/components/StateProvider";
import { toast } from "react-toastify";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

function Header() {
  const [{ basket }] = useStateValue();
  const { data: session, status } = useSession();
  const router = useRouter();

  const notify = () => {
    toast.info("This function is in development !!!");
  };

  const handleLoginLogout = () => {
    if (status === "loading") return;

    if (session && session.user.email) {
      signOut({ callbackUrl: "/" });
      return;
    }

    router.push("/login");
  };

  return (
    <nav className="header">
      <Link href="/">
        <Image
          src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
          alt="logo"
          width={150} 
          height={50} 
          className="header__logo"
        />
      </Link>
      <div className="header__search">
        <input type="text" name="" id="" className="header__searchbar" />
        <SearchIcon className="header__searchIcon" onClick={notify} />
      </div>
      <div className="header__nav">
        <span className="header__link">
          <div className="header__option" onClick={handleLoginLogout}>
            <span className="header__option__lineOne">
              {status !== "loading" && session ? session.user.email : "Hello"}
            </span>
            <span className="header__option__lineTwo">
              {status !== "loading" && session ? " Sign out" : "Sign In"}
            </span>
          </div>
        </span>
        <Link href="" className="header__link">
          <div className="header__option" onClick={notify}>
            <span className="header__option__lineOne">Returns</span>
            <span className="header__option__lineTwo">& Orders</span>
          </div>
        </Link>
        <Link href="" className="header__link">
          <div className="header__option" onClick={notify}>
            <span className="header__option__lineOne">Your</span>
            <span className="header__option__lineTwo">Prime</span>
          </div>
        </Link>
        <Link href="/checkout" className="header__link">
          <div className="header__option__basket">
            <ShoppingCartOutlinedIcon style={{ fontSize: 30 }} />
            <span className="header__option__lineTwo header__basket__count">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
