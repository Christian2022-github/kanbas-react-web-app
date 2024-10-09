import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <input id="wd-username" className="form-control mb-2" value="alice" placeholder="username" />
      <input id="wd-password" className="form-control mb-2" value="123" placeholder="password"
        type="text" />
      <input id="wd-firstname" className="form-control mb-2" value="Alice" placeholder="First Name" />
      <input id="wd-lastname" className="form-control mb-2" value="Wonderland" placeholder="Last Name" />
      <input id="wd-dob" className="form-control mb-2" placeholder="mm/dd/yyyy" type="date" />
      <input id="wd-email" className="form-control mb-2" value="alice@wonderland.com" type="email" />
      <select id="wd-role" className="form-control mb-2">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>
      <Link id="wd-signin-btn"
        to="/Kanbas/Account/Signout"
        className="btn btn-danger w-100">
        Signout </Link>

    </div>
  );
}

