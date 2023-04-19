import React,{useState} from 'react'
import Label from '../../Components/Atoms/Label/Label'
import Button from '../../Components/Atoms/Button/Button'
import {infoButtons} from "../../Constants/Utility"
import close from '../../Assets/Icons/close.png'
import tick from '../../Assets/Icons/tick.png'
import Path from '../../Assets/Images/Path.png'
import './KnowTheHyge.scss'

const KnowTheHyge = () => {

    const[selectedIndex,setSelectedIndex] = useState([]);
    
    const onInfoButtonClick = (id)=>{
        console.log(id);
        if(selectedIndex?.indexOf(id) === -1){
            setSelectedIndex(previousValue=>{return [...previousValue,id]})
        }else{
            setSelectedIndex(selectedIndex.filter(index=>{return index !== id}));
        }
    }

    console.log(selectedIndex);

    const getByText=(id)=>{
        if(selectedIndex.indexOf(id) === -1){
            return <img src={close} alt="close" className='close'></img>;
        }else{
            return <img src={tick} alt="close" className='tick'></img>;
        }
    }
  return (
    <div className='knowTheHyge'>
      <Label labelText={"Know the"} styleClass={"label_poppins larger"}></Label>
      <Label labelText={"["} styleClass={"label_poppins larger primary_larger paddLeft"}></Label>
      <Label labelText={"hyge"} styleClass={"label_poppins large"}></Label>
      <Label labelText={"]"} styleClass={"label_poppins larger primary_larger"}></Label>
        <br />
      <Label labelText={"difference"} styleClass={"label_poppins very_large shadow"}></Label>

      <div className="infoPanel">
        {infoButtons?.map((buttons,index)=>{
            return(<div className={"buttonPanel " + (index % 2 === 0 ? "alignLeft" : "alignRight")}>
                <Button buttonClass={selectedIndex?.indexOf(index) === -1 ? "infoButton "+buttons.color : "infoButton primary_background" } buttonText={buttons.text} onButtonClick={()=>{onInfoButtonClick(index)}}></Button>
                <Button buttonClass={"roundInfoButton" } buttonText={getByText(index)} onButtonClick={()=>{onInfoButtonClick(index)}}></Button>
            </div>)
        })}
     <img src={Path} alt='img' className='path'></img>
      </div>
    </div>
  )
}

export default KnowTheHyge
