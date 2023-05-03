import React, {useState,useEffect } from 'react'
import { Grid, Typography } from '@mui/material'
import Image from 'next/image'
import { navItem } from '@constants'

const Navbar = () => {
  const [active,setActive] = useState(0);
  const [visible,setVisible] =useState(false);

  return (
    <div >
                <Grid container  alignItems={'center'}>
                  <Grid item xs={12} lg={5}>
                    <Grid container >
                    <Grid item xs={8}>
                    <Image
                    src={"/infotechLogo.png"}
                    alt="Hype Logo"
                    height={90}
                    width={201}
                    priority
                    />
                    </Grid>
                    <Grid item xs={4} justifyContent={'right'} alignItems={'center'} sx={{display:{xs:'flex',lg:'none'}}}>
                    <Image 
                      src={!visible ? '/hamburgerOutlined.png' : '/cancel.png'}
                      alt = 'button'
                      height={40}
                      width={40}
                      onClick={()=>{setVisible(!visible)}}
                      priority
                    />
                    </Grid>
                    </Grid>
                  </Grid>
                  <Grid item lg={7} xs={12} sx={{display:{lg:'flex',xs:'none'}}} > 
                      <Grid container justifyContent={'space-evenly'} alignItems={'center'} sx={{height:'100%'}}>
                      {
                        navItem.map((item,index)=>{
                          return (<Grid item key={index}>
                         <Typography sx={{
                              fontStyle: 'normal',
                              fontWeight: '500',
                              fontSize: '20px',
                              lineHeight: '40px',
                              letterSpacing: '0.01em',
                              color: '#000000',
                              borderBottom: active===index ? ' 2px solid #EEB609' : 'none'
                            }}
                            onClick={()=>{setActive(index);setVisible(false)}}>
                              {item.text}
                            </Typography>
                          </Grid>) 
                        })
                      }
                    </Grid>
                  </Grid>
                </Grid>
               {visible && (
                    <Grid container xs={12} justifyContent={'center'}>
                      {
                        navItem.map((item,index)=>{
                          return (
                          <Grid item xs={12}  key={index}>
                            <Typography sx={{
                              fontStyle: 'normal',
                              fontWeight: '500',
                              fontSize: '20px',
                              lineHeight: '40px',
                              letterSpacing: '0.01em',
                              color: '#000000',
                              textDecoration:active===index ?'underline':'none',
                              textDecorationColor:'#EEB609'
                            }}
                            onClick={()=>{setActive(index);setVisible(false)}}>
                              {item.text}
                            </Typography>
                          </Grid>) 
                        })
                      }
                     </Grid>)
                  }
            </div>
  )
}

export default Navbar
