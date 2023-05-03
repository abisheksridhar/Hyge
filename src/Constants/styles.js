export const h2 = {
    fontSize:{lg:'60px',xs:'35px',md:'45px'},
    fontFamily:'Poppins',
    fontWeight:900,
}

export const h2PrimaryHollow = {
    ...h2,
    WebkitTextStroke:' 0.1px #EEB609',
    WebkitTextFillColor:'#ffffff',
    display:'inline'
}

export const h2Primary = {
    ...h2,
    color:'#EEB609'
}

export const caption = {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize:{xs:'13px',lg:'26px',md:'18px'},
    lineHeight:{xs:'20px',lg:'40px',md:'30px'},
    letterSpacing: '0.01em',
    color: '#6C7A89',
}

export const buttonPrimary = {
    width:'150px',
    height:'71px',
    border:'1px solid #000000',
    borderRadius:'50px',
    background:'linear-gradient(to left, white 50%, #EEB609 50%) right',
    backgroundSize:'200% 100%',
    color:'#000',
    '&:hover':{
        backgroundPosition: 'left',
        transition:'all 2s ease',
        borderColor:'#000',
    }
}

export const circle = {
    width:'71px',
    height:'72px',
    borderRadius:'50%',
    border:'1px solid #000000',
    marginLeft:'10px',
    background:'linear-gradient(to left, white 50%, #EEB609 50%) right',
    backgroundSize:'200% 100%',
    '&:hover':{
        backgroundPosition: 'left',
        transition:'all 2s ease',
        borderColor:'#000',
    }
}


export const hLarge = {
    WebkitTextStroke:'0.1rem #000',
    WebkitTextFillColor:'#ffffff',
    fontSize:{lg:'300px',  xs:'150px'},
    opacity:0.4,
}

export const darkHallow = {
    fontWeight:'500',
    fontFamily:'Poppins',
    WebkitTextStroke:'0.02em black',
    WebkitTextFillColor:'#ffffff',
    fontSize:{lg:'80px',xs:'40px'}
}

export const circleDark={
    backgroundColor:'#000000',
    marginLeft:{lg:'auto',xs:'45px'},
    marginRight:{lg:'auto',xs:'35px'},
    height: {lg:'195px',xs:'76px'},
    width:{lg:'195px',xs:'76px'},
    borderRadius:'50%', 
    border:'1px solid #000'
}

export const circleBlack = {
    width:'71px',
    height:'71px',
    borderRadius:'50%',
    border:'1px solid #fff',
    marginLeft:'10px',
    background:'linear-gradient(to left, black 50%, #EEB609 50%) right',
    backgroundSize:'200% 100%',
    '&:hover':{
        backgroundPosition: 'left',
        transition:'all 2s ease',
        borderColor:'#fff',
    }
}

let buttonBlack = {...buttonPrimary}
buttonBlack.background = 'linear-gradient(to left, black 50%, #EEB609 50%) right';
buttonBlack.color='#fff';
buttonBlack.border='1px solid #fff'
buttonBlack['&:hover'] = {
    backgroundPosition: 'left',
    transition:'all 2s ease',
    borderColor:'#fff',
}
export const buttonPrimaryBlack = buttonBlack;