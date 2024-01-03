import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";

export function Header() {
  return (
    <header>
      <a href="/">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a> |
      <Link to="/about">About</Link> |
      <Link to="/login">Login</Link> |
      <Link to="/signup">Signup</Link> |
      <LogoutLink />
    </header>
  );
}
