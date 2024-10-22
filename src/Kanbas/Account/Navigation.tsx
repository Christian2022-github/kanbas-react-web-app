import { Link } from "react-router-dom";
export default function AccountNavigation() {
  return (

    <div id="wd-account-navigation" className="rounded-0 wd list-group fs-5 rounded-0">
      <Link to="/Kanbas/Account/Signin" id="wd-signin-screen"
        className="list-group-item active border bg-white text-black border-0"> Signin </Link>
      <Link to="/Kanbas/Account/Signup" id="wd-signup-screen"
        className="list-group-item text-danger border border-0"> Signup </Link>
      <Link to="/Kanbas/Account/Profile" id="wd-profile-screen"
        className="list-group-item text-danger border border-0"> Profile </Link>
    </div>


  );
}
