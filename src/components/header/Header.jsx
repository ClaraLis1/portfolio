import React from 'react'
import logo from '../../images/logo.svg'
import logoHtml from '../../images/logoHtml.svg';
import logoJs from '../../images/logoJs.svg';
import logoCss from '../../images/logoCss.svg';
import './header.modules.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars} from '@fortawesome/free-solid-svg-icons'


const Header = () => {
 
  const [isOpen, setIsOpen] = useState(false);

  console.log(isOpen);
  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (  
    <header>
      <div className='headerMobile'>               
               <Link to ='/'className='headerNameMobile'>Clara Lisle</Link>
        <nav className='navMobile'>
              <span className="burgerLine" ><FontAwesomeIcon icon={faBars} size="2xl" style={{color: "#fafafa"}} onClick={handleToggleMenu}/></span>
              <div className={`${isOpen ? "infoMobile": "infoNone"}`}>
                  <ul className='listMobile'>
                      <Link className='listDataMobile' to={'/'}>           <li onClick={handleToggleMenu}>  HOME     </li></Link>
                      <Link className='listDataMobile' to= {'/about'}>     <li onClick={handleToggleMenu}> ABOUT ME  </li></Link>
                      <Link className='listDataMobile' to= {'/resume'}>    <li onClick={handleToggleMenu}> RESUME    </li></Link>
                      <Link className='listDataMobile' to= {'/portfolio'}> <li onClick={handleToggleMenu}> PORTFOLIO </li></Link>
                      <Link className='listDataMobile' to= {'/contact' }>  <li onClick={handleToggleMenu}> CONTACT   </li></Link>
                  </ul>
        </div>
        </nav>
      </div>


    <div className="App-header">  
        <Link to ='/'>
          <div className='images'></div>    
        </Link>
        <div className='headerName'>
            <p>Clara Lisle</p>
        </div>
        <div className='info'>
            <ul className='list'>
                 <Link className='listData' to={'/'}>           <li>  HOME     </li></Link>
                 <Link className='listData' to= {'/about'}>     <li> ABOUT ME  </li></Link>
                 <Link className='listData' to= {'/resume'}>    <li> RESUME    </li></Link>
                 <Link className='listData' to= {'/portfolio'}> <li> PORTFOLIO </li></Link>
                 <Link className='listData' to= {'/contact' }>  <li> CONTACT   </li></Link>
            </ul>
        </div>
        <div className='logos'>
            <img src={logo} className="appLogo" id='app-logo-react' alt="logoReact" />
            <img src={logoHtml} className="appLogo" alt="logoHtml" />
            <img src={logoJs} className="appLogo"  alt="logoJs" />
            <img src={logoCss} className="appLogo" alt="logoJs" />
        </div>     
    </div>    
    </header>
 
  )
}

export default Header