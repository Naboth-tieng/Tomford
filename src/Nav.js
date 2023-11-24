import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Nav(){
    return(
        <>
        <div className="nav">
            <div className="nav-left"><Link to="/" className="logo"> Tomford</Link></div>
            <div className="nav_right">
            <Customlink to="/products">Fragrances</Customlink>
            <Customlink to="/cart">Cart</Customlink></div>
              </div>
        </>
    )
}
function Customlink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  
    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    );
  }