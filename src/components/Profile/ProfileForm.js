import { useContext, useState } from "react";
import classes from "./ProfileForm.module.css";
import TokenContext from "../../store/token-context";

const ProfileForm = () => {
  const [newPassword, setNewPassword] = useState("");
  const tokenContext = useContext(TokenContext);

  const token = tokenContext.token;

  const changePasswwordHandler = (e) => {
    e.preventDefault();

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBe9mfCwSPjP7-4N-uhpaKvCFoX8lBQEys",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: token,
          password: newPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            alert(data.error.message);
            throw new Error("Authentication failed");
          });
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <form onSubmit={changePasswwordHandler} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          onChange={(e) => setNewPassword(e.target.value)}
          type="password"
          id="new-password"
        />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
