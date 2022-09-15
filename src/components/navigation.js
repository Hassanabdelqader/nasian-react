import {Link } from "react-router-dom";
import logo from "../components/innerImage/logo.png"

export const Navigation = (props) => {
  return (
    <>
    
       
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
        <img src={logo}  className="navbarlogo" />
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          
          <Link className='navbar-brand page-scroll' to='/'>
            NASAIAN
          </Link>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>

          <li>
              <Link to='/' className='page-scroll'>
               Home
              </Link>
            </li> 
          <li>
              <Link to='/Image' className='page-scroll'>
               Images
              </Link>
            </li>
            <li>
              <Link to='/Video' className='page-scroll'>
               Videos
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
    </>
  )
}
