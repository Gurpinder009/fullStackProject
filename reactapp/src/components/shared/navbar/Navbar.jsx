import "./navbar.css"
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Navbar = ({ isLoggedIn, handleLogin }) => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  function handleNavLogic() {

    if (isLoggedIn) {
      handleLogin();
      navigate("/");
    } else {
      navigate("/admin/login");

    }

  }


  const collections = [
    { name: 'Rings', path: 'rings' },
    { name: 'Necklaces', path: 'necklaces' },
    { name: 'Bracelets', path: 'bracelets' },
    { name: 'Earrings', path: 'earrings' }

  ];



  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  return (
    <div className='navbar'>
      <div className='nav-name'>
        <p>Jewellery</p>
      </div>

      <ul className='nav-menu'>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About Us</NavLink></li>

        {/* drop down list */}
        <li
          className='dropdown'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <p>Collections</p>
          {dropdownOpen && (
            <ul className='dropdown-menu'>

              {collections.map((collection, index) => (
                <li key={index}>
                  <NavLink to={`/collections/${collection.path}`}>{collection.name}</NavLink>
                </li>
              ))}
            </ul>
          )}
        </li>

        <li><NavLink to="/contact-us">Contact Us</NavLink></li>

        {(isLoggedIn) ? <li><NavLink to="/admin/collections/create">Add Jewellery</NavLink></li> : <></>}

      </ul>

      {/* Login Button */}
      {
        (isLoggedIn) ? <div className='nav-login'>
          <button onClick={handleNavLogic}>Logout</button>
        </div> : <div className='nav-login'>
          <button onClick={handleNavLogic}>Login</button>
        </div>
      }

    </div>
  );
}

export default Navbar;
