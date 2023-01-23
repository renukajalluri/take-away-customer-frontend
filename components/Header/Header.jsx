import classes from "../../styles/Header.module.css";
import AuthContext from "../../stores/authContext";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";
import axios from "axios";
import Link from "next/link";
import Icon from "../Cart/cartIcon";
const Header = () => {
  const [username, setUserName] = useState("");
  const token = useContext(AuthContext);
  // console.log(token,"token")
  const router = useRouter();
  const logout = () => {
    console.log("click");
    window.localStorage.removeItem("userToken");
    router.reload();
  };

  useEffect(() => {
    const getUsername = async () => {
      try {
        const data = await axios.get(
          "https://take-away-backend.vercel.app/restaurant/customerUser/customer",
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
              Authorization: token,
            },
          }
        );
        const res = data.data;
        // console.log("a",res)
        if (res) {
          console.log(res.name, "username");
          setUserName(res.name);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getUsername();
  }, []);

  return (
    <div>
      <div className={classes.header}>
        <Link href="/restaurant">
          <h1 style={{ cursor: "pointer" }}>Foodie Hunter</h1>
        </Link>

        <div className={classes["header-flex"]}>
          {/* <h2>Kavya</h2> */}
          <h2 className={classes.username}>{username}</h2>
          <div className={classes.cart}>
            <Icon />
          </div>
          <button type="button" onClick={logout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
