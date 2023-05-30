import { Link } from "react-router-dom";

function Header(props) {



    return (
        <header>
            <div className="AppName">
                <h1>A T C</h1>
                <h3>around the corner</h3>
            </div>
        {/* <nav style={navStyle}> */}
        <nav className="Nav">
          <Link to="/locations">
            <div>Locations</div>
          </Link>
          </nav>
        {/* </nav> */}
      </header>
    );
  }
  
  export default Header;