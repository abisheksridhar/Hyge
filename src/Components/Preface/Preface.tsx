import { Grid,Box, Typography,Chip,Button } from '@mui/material'
import Image from 'next/image';
import React,{useState,useEffect} from 'react'
import {ImageGrid} from '@components';
import { process,h2,h2Primary,h2PrimaryHollow,caption,buttonPrimary,circle,hLarge,darkHallow, circleDark,circleBlack,buttonPrimaryBlack } from '@/constants';

const Preface = () => {
    const [scrollY,setScrollY] = useState(0);

    useEffect(()=>{
        const handleScroll = () => {
            setScrollY(window.scrollY);
          };
          handleScroll();
          window.addEventListener("scroll", handleScroll);
          return () => {
            window.removeEventListener("scroll", handleScroll);
          };
    },[])
  return (
      <div>
            <Grid container justifyContent={'center'} mt={5} ml={{lg:3,xs:2}}>
                <Grid item lg={9} xs={12}>
                    <Typography variant='h2' sx={h2}  component={'h2'}>
                        Reshape the future 
                    </Typography>
                    <Typography variant='h2' sx={h2}  component={'h2'}>
                        With our
                    </Typography>
                    <Grid container lg={12} justifyContent={'space-between'}>
                    <Typography sx={h2Primary} variant='h2' component={'h2'}  >
                        Revenue
                        <Box component="div" sx={h2PrimaryHollow}>
                            &ensp;Cycle Management
                        </Box>
                    </Typography>
                    </Grid>
                </Grid>
             <Grid container lg={9} sm={12} mt={2}  >
                <Grid item lg={7} xs={10} >
                    <Typography align='left' variant='caption' sx={caption} >
                    Discover new heights with our IT services.
                    Our innovative approaches for RCM, digital marketing, 
                    and DevOps can turn your business operations into a revenue-generating powerhouse.
                    Let us show you how to leverage these services and take your business to the next level.
                    </Typography>
                </Grid>
                    <Grid item lg={2} ml={1} sx={{display:{lg:'inline-flex',xs:'none'}}}>
                <a href="#whatSetUsApart">
                    <Box sx={{
                        height: {lg:'195px',xs:'76px'},
                        width:{lg:'195px',xs:'76px'},
                        borderRadius:'50%',
                        border:'1px solid #000',
                        marginLeft:'50px',
                        marginTop:'30px',
                        opacity:0.3
                    }}>
                        <Box
                           component={'img'}
                           src='vector.png'
                            alt='vector'
                            sx={{width:{lg:'100px',xs:'54px'},height:{lg:'122px',xs:'56px'}, marginLeft: {lg:'45px',xs:'12px'},
                            marginTop: {lg:'30px',xs:'7px'}}}
                        />
                    </Box>
                    </a>
                    </Grid>
                    </Grid>
                <Grid container mt={2} lg={9}>
                    <Grid item>
                        <Button variant={'outlined'} onClick={()=>{}} sx={buttonPrimary}>
                            Discover Me
                        </Button>
                    </Grid>
                    <Grid item ml={-1}>
                    <Button variant={'outlined'} onClick={()=>{}} sx={circle}>
                        <img
                        src={'right.png'}
                        alt={'right arrow'}
                        width={35}
                        height={30}
                        style={{marginTop:'5px'}}
                        loading='eager'
                        />
                    </Button>
                    </Grid>
                    </Grid>
            </Grid>
            <Grid container ml={scrollY/15} >
                <Typography sx={hLarge} >
                    hyge
                </Typography>
            </Grid>
            <Grid container id="whatSetUsApart">
                <Typography variant={'body2'} align='left' ml={2} sx={{fontSize:'20px',color:'#afafaf'}} mt={2} >
                    What set us apart?
                </Typography>
            </Grid>
            <Grid container justifyContent={'center'}>
                <Grid item xs={12} sm={8} ml={{lg:0,xs:3}} mt={2}>
                    <Typography variant='h4' sx={{
                        fontFamily: 'Poppins',
                        fontSize: {lg:'52px', xs:'26px'},
                        fontWeight: 700,
                    }}>
                    Nothing ever becomes comfortable till you experience it with
                    <Box component="div" sx={{ display: 'inline',color:'#EEB609' }}> hyge</Box>
                    </Typography>
                    <Typography sx={{
                        fontFamily: 'Montserrat',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        fontSize: {lg:'40px', xs:'20px'},
                        lineHeight:{lg:'65px', xs:'40px'},
                        color: '#6C7A89'
                    }} variant={'h6'} mt={2}>
                    Our solutions are tailored to your needs, with hyper-flexibility, expert customer support, continuous improvement, and collaborative partnerships. Experience the comfort of working with us and streamline your business processes seamlessly.
                    </Typography>
                </Grid>
            </Grid>
            <Grid container justifyContent={'center'} mt={12}>
                    <Typography variant={'h1'} sx={{fontWeight:'700',fontFamily:'Poppins', fontSize: {lg:'80px',xs : '40px'},}}>
                        Know the <Box component="div" sx={{ display: 'inline',color:'#EEB609' }}>[</Box>Hyge<Box component="div" sx={{ display: 'inline',color:'#EEB609' }}>]</Box>
                    </Typography>
            </Grid>
            <Grid container justifyContent={'center'}>
                    <Typography variant={'h1'} sx={darkHallow}>
                    difference
                    </Typography>
            </Grid>
            <ImageGrid scrollY={scrollY}  />
        <Grid container mt={10}>
            <Typography sx={{fontSize:'20px',color:'#afafaf'}} ml={2}>
               How we do?
            </Typography>
            <Grid container lg={5} xs={12} justifyContent={'center'} ml={2}>
            <Typography variant={'h1'} sx={{fontWeight:'900',fontSize:{lg:'100px',md:'75px',xs:'50px'},color:'#0033FF'}} >
                process
            </Typography>
            </Grid>
            <Grid container  justifyContent={{lg:'right',xs:'center'}} xs={12}>
            <Typography variant='h1' sx={{fontWeight:'900', fontSize:{lg:'100px',md:'75px',xs: '50px'},}}>
            <Box component="div"  sx={{ display: {lg:'inline',xs:'block'},color:'#EEB609', }}>driven</Box>  design
            </Typography>
            </Grid>
            </Grid>

            <Grid container justifyContent={'center'} mt={5} >
                    <Box
                        component="img"
                        src='processD.png'
                        alt={'process'}
                        sx={{
                            display:{lg:'block',xs:'none'},
                            width:'90%'
                        }}
                        />
                           <Box
                        component="img"
                        src='processM.png'
                        alt={'process'}
                        sx={{
                            display:{lg:'none',xs:'block'},
                            width:'90%'
                        }}
                        />
                <Grid item xs={12} sx={{textAlign:'center',display:{lg:'none',xs:'block'}}} mt={3}> 
                    <Grid container justifyContent={'center'} mt={3}>
                    {
                        process.map((proc,index)=>{
                            return (
                                <Grid item justifyContent={'center'} xs={8} key={index} mt={1}>
                                    <Typography variant={'h5'} sx={{fontWeight:'600'}} align='center'>
                                        {proc.id}
                                    </Typography>
                                    <Grid container justifyContent={'center'}>
                                    <Chip variant='outlined' label={proc.topic} sx={{border:'1px solid black',color:'#EEB609',fontSize:'15px',fontFamily:'poppins',fontWeight:'900'}}></Chip>
                                    </Grid>
                                    <Typography variant='body1' align='center'>
                                        {proc.text}
                                    </Typography>
                                </Grid>
                            )
                        })
                    }
                    </Grid>
                </Grid>
            </Grid>
            <Grid container  mt={8} ml={{lg:2,xs:0}} mb={8}>
                <Grid item xs={12} lg={6} >
                            <Typography sx={{
                                fontSize: "80px",
                                fontWeight: '700',
                                textAlign: "center",
                                color:"#EEB609",
                                display:{lg:'none',xs:'block'}
                            }}>
                                * 
                            </Typography>
                    <Typography sx={{
                        fontFamily: 'Poppins',
                        fontSize: {lg:'160px',md:'80px',xs:"40px"},
                        fontWeight: '700',
                        textAlign: {lg:'left',xs : "center"},  
                        marginTop: { xs:'-50px',lg:'0px'},
                    }}>
                       We Are 
                    </Typography>
                </Grid>
                <Grid item xs={12} lg={6} mt={3} >
                <Typography sx={{
                        fontFamily: 'Poppins',
                        fontSize: {lg:'45px',md:'30px',xs:"21px"},
                        fontWeight: '400',
                        textAlign:'center',
                    }}>
                       commited to delivering, user centric, Effective and sustainable solution.
                    </Typography>
                </Grid>
            </Grid>
            <Grid container justifyContent={'center'} sx={{display:{lg:'none',xs:'flex'}}}>
                <Typography variant={'h1'} sx={darkHallow}>
                    Certifications
                </Typography>
            </Grid>
        <Grid container mt={3} justifyContent={{xs:'space-between',lg: 'center'}} alignItems={'center'} sx={{backgroundColor:{lg:'#0033FF',xs:"#fff"},height:{lg:'300px',xs:'200'}}}>
            <Grid item lg={4} xs={12} sx={{textAlign:'center'}} mt={{lg:12,xs: 4}}>
            <Box
                        component="img"
                        src='158.png'
                        alt={'logo'}
                        sx={{
                            display:{lg:'inline-flex',xs:'none'},
                        }}
                        />
            <Box
                        component="img"
                        src='158Dark.png'
                        alt={'logo'}
                        sx={{
                            display:{lg:'none',xs:'inline-flex'},
                        }}
                        />
            </Grid>
            <Grid item lg={4} xs={6} sx={{textAlign:'center'}} mt={{lg:12,xs: 4}}>
            <Box
                        component="img"
                        src='138.png'
                        alt={'logo'}
                        sx={{
                            display:{lg:'inline-flex',xs:'none'},
                        }}
                        />
            <Box
                        component="img"
                        src='138Dark.png'
                        alt={'logo'}
                        sx={{
                            display:{lg:'none',xs:'inline-flex'},
                        }}
                        />
            </Grid>
            <Grid item lg={4} xs={6} sx={{textAlign:'center'}} mt={{lg:12,xs: 4}}>
            <Box
                        component="img"
                        src='139.png'
                        alt={'logo'}
                        sx={{
                            display:{lg:'inline-flex',xs:'none'},
                        }}
                        />
            <Box
                        component="img"
                        src='139Dark.png'
                        alt={'logo'}
                        sx={{
                            display:{lg:'none',xs:'inline-flex'},
                        }}
                        />
            </Grid>
                <Typography variant='body1' sx={{color:'#fff',display:{lg:'block',xs:'none'}}} pt={5}>
                    Compliances & Certifications
                </Typography>
 </Grid>

        <Grid container sx={{
                backgroundColor:{xs:"#000",lg:"#fff"},
                color:{xs:"#ffffff",lg:"#000"},
                borderRadius: {xs:"25% 5% 25% 5%" ,lg:"0"}
                }} mt={5}>
            <Grid container  xs={12} sm={12} sx={{display:{lg:'block',xs:'none'}}}>
                    <Box  sx={circleDark} >
                        <Image 
                            src='/vectorLight.png'
                            alt='vector'
                            width={100}
                            height={122}
                            style={{height: '122px',
                                width: '100px',
                                marginLeft: '45px',
                                marginTop: '30px',}}
                            priority
                        />
                    </Box>
                </Grid>
            <Grid container justifyContent={'center'} >
            <Typography variant='h2' sx={h2} component={'h2'} mt={5} mb={5}>
                        Let's talk  
            </Typography>
            </Grid>
            <Grid container mt={4}  justifyContent={'center'} lg={12}   sx={{display:{lg:'flex',xs:'none'}}} mb={5}>
                    <Grid item>
                        <Button variant={'outlined'} onClick={()=>{}} sx={buttonPrimary}>
                            Discover Me
                        </Button>
                    </Grid>
                    <Grid item ml={-1}>
                    <Button variant={'outlined'} onClick={()=>{}} sx={circle}>
                        <img
                        src={'/right.png'}
                        alt={'right arrow'}
                        width={30}
                        height={30}
                        style={{marginTop:'5px'}}
                        loading='eager'
                        />
                    </Button>
                    </Grid>
                    </Grid>
            <Grid container justifyContent={'center'} mb={5} sx={{display:{lg:'none',xs:'flex'}}} >
                    <Grid item>
                        <Button variant={'outlined'} onClick={()=>{}} sx={buttonPrimaryBlack}>
                            Discover Me
                        </Button>
                    </Grid>
                    <Grid item ml={-1}>
                    <Button variant={'outlined'} onClick={()=>{}} sx={circleBlack}>
                        <Box
                        component="img"
                        src='rightLight.png'
                        alt={'right arrow'}
                        sx={{
                            display:{lg:'none',xs:'block'},
                            width:'20px',
                            height:'20px'
                        }}
                        />
                    </Button>
                    </Grid>
                </Grid>
        </Grid>
    </div>
  )
}

export default Preface
