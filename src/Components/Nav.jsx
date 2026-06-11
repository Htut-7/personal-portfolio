import "../Css/Nav.css";

export default function Nav() {
  return (
    <nav className="nav-bar">
        <div className="nav-container"> 
            <div className="logo">
                <h3>Champ</h3>
                <span>Aspiring Full-Stack Developer</span>
            </div>

            <ul className="nav-links">
                <li>
                    <a href="#home">Home</a>
                </li>

                <li>
                    <a href="#about">About</a>
                </li>


                <li>
                    <a href="#experience">Experiences</a>
                </li>

                <li>
                    <a href="#project">Projects</a>
                </li>

                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}
