import React,{useEffect} from 'react'
import {imagePaths} from '@constants'
import { Grid,Box } from '@mui/material'

const ImageGrid = (scrollY) => {
    const getMargin = (index)=>{
        let position;
        if(index < 3){
            position =  index*3;
        }else if( index > 2 && index < 7){
            position= (index-3)*3;
        }else{
            position = index;
        }
       return position;
        
    }


  return (
    <Grid container lg={12} xs={12} justifyContent={'center'} ml={{lg:-(scrollY.scrollY/80)+25,xs: 0}}>
        {
            imagePaths.map((image,index)=>{
                return(
                    <Grid item lg={2.5} sm={4} xs={6} key={index} mt={{lg:getMargin(index),xs:0}}>
                        <Box 
                        component='img'
                        src={image}
                        alt={'difference' + index}
                        sx={{width:{lg:'300px',sm:'210px',xs:'172px'},height:{lg:'300px',sm:'210px',xs:'172px'}}}
                        />
                    </Grid>
                )
            })
        }
    </Grid>
  )
}

export default ImageGrid