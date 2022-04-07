import './Navbar.css'

const Navbar = () => {
    return ( 
        <div className="content container">
            <h1 className='title'>Hamsa</h1>
            <div className="nav_links">
                <a href="/">Home</a>
                <a href="#" style={{ border: "1px solid white", padding: "3px", borderRadius: "5px",}}>New Blog</a>
            </div>
        </div>
     );
}
 
export default Navbar;