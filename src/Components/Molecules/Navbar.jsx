import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import PropTypes from 'prop-types'
import Logo from '../../Assets/Icons/Logo.png'
import './Navbar.scss'
import Label from '../Atoms/Label/Label'
import Button from '../Atoms/Button/Button'

const Navbar = ({navItems}) => {
    const [active,setActive] = useState(0);
    const navigate = useNavigate();
    const onNavClick = (index)=>{
        setActive(index);
        navigate(navItems?.[index]?.location);
    }
  return (
    <nav className = "navBar">
      <div className="siteLogo">
        <img src={Logo} className="logo" alt="hyge logo"></img>
      </div>
      <div className="navPages">
      {
        navItems.map((item,index)=>{
            return(
            <div className="navItem" key={index}>
                {item?.type !== "button" ? 
                    <Label styleClass={index === active ? "navLabel active" : "navLabel inactive"}  labelText={item.text} onLabelClick={()=>{onNavClick(index)}}/> :
                    <Button buttonClass={"borderRounded dark"} buttonText = {item.text} onButtonClick={()=>{onNavClick(index)}} />
                }
            </div>
            )
        })
      }
      </div>
    </nav>
  )
}

Navbar.propTypes = {
    navItems:PropTypes.array
}

Navbar.defaultProp = {
    navItems:[]
}

export default Navbar
