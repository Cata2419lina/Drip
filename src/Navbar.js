export default function Navbar() {
    return <nav className="nav">
        <a href="/" className="site-title">D.R.I.P Music Group</a>
        <ul>
            <li>
                <a href="/about">About Us</a>
            </li>
            <li>
                <a href="/artists">Artists</a>
            </li>
            <li>
                <a href="/tours">Tours</a>
            </li>
            <li>
                <a href="/careers">Careers</a>
            </li>
            <li>
                <a href="/contact">Contact</a>
            </li>
        </ul>
    </nav>
}