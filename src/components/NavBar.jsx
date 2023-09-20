import Link from "../Link.jsx";

function NavBar() {
    return (
        <nav>
            <div className="logo">
                <h1 className="logo-1">Company</h1>
                <h1 className="logo-2">Logo</h1>
            </div>
            <Link to="/home">Home</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    )
}

export default NavBar