import React from 'react'
import RevenueImage from '../../Assets/Images/RevenueImage.png';
import Label from '../../Components/Atoms/Label/Label';
import Button from '../../Components/Atoms/Button/Button';
import LeftBlack from "../../Assets/Icons/LeftBlack.png"
import hamburger from "../../Assets/Icons/hamburger.png"
import './RevenueCycleManagement.scss'

const RevenueCycleManagement = () => {
    const onbtnClick=()=>{

    }
  return (
    <div className="contentDark">
    <div className="revenueCycleManagement">
      <div className="revenueContent">
        <Label styleClass="label_h1 light" labelText={"Reshape the future"}/>
        <Label styleClass="label_h1 light" labelText={" with our"}/>
        <Label styleClass="label_h1 primary" labelText={"Revenue"}/>
        <Label styleClass="label_h1 primaryBordered" labelText={"Cycle Management"}/>
        <div className='revenueTextDiv'>
        <p className="revenueText">
        Discover new heights with our IT services. Our innovative approaches for RCM, digital marketing, and DevOps can turn your business operations into a revenue-generating powerhouse. Let us show you how to leverage these services and take your business to the next level.
        </p>
        <div className="revenueButton">
        <Button buttonClass={"borderRounded btnlight"} onClick={onbtnClick} buttonText={"Discover More"}/>
        <Button buttonClass={"roundButton primaryBtn"} onClick={onbtnClick} buttonText={<img src={LeftBlack} alt="icon Left"></img>}/>
        </div>
        </div>
      </div>
      <div className ="revenueImg">
        <img src={RevenueImage} alt={"img"}></img>
      </div>
      <div className='revenuemenuIcon'>
      <Button buttonClass={"roundButton opaque"} onClick={onbtnClick} buttonText={<img src={hamburger} alt="icon hamburger"></img>}/>
      </div>
    </div>
    <div className='content2'>
        <div>
        <Label styleClass="label_text small" labelText={"What Sets Us Apart?"}/>
        </div>
        <div className="content2Text">
        <Label styleClass="label_text big" labelText={"Nothing ever becomes comfortable till you experience it with"}/>
        <Label styleClass="label_text big primary_big " labelText={"hyge"}/>
        </div>
        <div>
        <Label styleClass="label_h1 primary " labelText={"*"}/>
        </div>
    </div>
    <div className='content3'>
        <p className="content3Text">
        Our solutions are tailored to your needs, with hyper-flexibility, expert customer support, continuous improvement, and collaborative partnerships. Experience the comfort of working with us and streamline your business processes seamlessly.
        </p>
        <div className="revenueButton">
        <Button buttonClass={"borderRounded btnPrimary"} onClick={onbtnClick} buttonText={"Discover More"}/>
        <Button buttonClass={"roundButton lightBtn"} onClick={onbtnClick} buttonText={<img src={LeftBlack} alt="icon Left"></img>}/>
        </div>
    </div>
    
    </div>
  )
}

export default RevenueCycleManagement
