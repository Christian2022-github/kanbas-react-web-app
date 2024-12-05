import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? [{ name: "Profile", path: "/Kanbas/Account/Profile" }] : [
    { name: "Signin", path: "/Kanbas/Account/Signin" },
    { name: "Signup", path: "/Kanbas/Account/Signup" },
  ];
  const { pathname } = useLocation();
  const active = (path: string) => (pathname.includes(path) ? "active" : "");

  return (
    <div id="wd-account-navigation" className="rounded-0 wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link
          key={link.name}
          to={link.path}
          id={`wd-${link.name.toLowerCase()}-screen`}
          className={`list-group-item ${pathname === link.path ? "active bg-white text-black" : "text-danger"
            } border border-0`}
        >
          {link.name}
        </Link>
      ))}
      {currentUser && currentUser.role === "ADMIN" && (
        <Link to={`/Kanbas/Account/Users`} className={`list-group-item ${active("Users")}`}> Users </Link>)}

    </div>
  );
}


