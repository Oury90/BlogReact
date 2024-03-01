import "./nav.css"

function Navbar(){
    return (
        <div className="container-nav">
            <div className="navbar">
                <h1 className="logo">Amadou</h1>
                <div className="nav">
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Careers</a>
                    <a href="#">Contact</a>
                </div>
            </div>
        </div>
    )
}
export default Navbar;