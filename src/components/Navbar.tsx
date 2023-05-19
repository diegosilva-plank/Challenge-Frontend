import '../css/navbar.css'

export const Navbar = () => (
    <div className="nav">
        <input type="checkbox" id="nav-check" />
        <div className="nav-header">
            <div className="nav-title">
                <a href="/" style={{left: '0px', color: 'white', textDecoration: 'none'}}>Rocket System</a>
            </div>
        </div>
        <div className="nav-btn">
            <label htmlFor="nav-check" id="sandwich">
                <span></span>
                <span></span>
                <span></span>
            </label>
        </div>

        <div className="nav-links">
            <a className="menu-item" href="rockets">Rockets</a>
            <a className="menu-item" href="launches.html">Launches</a>
            <a className="menu-item" href="crews.html">Crews</a>
            <a className="menu-item" href="crewmen.html">Crewmen</a>
        </div>
    </div>
)