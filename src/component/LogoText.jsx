
import { Box, Grid, Typography, styled } from '@mui/material';
import { useSelector } from 'react-redux';

const LogoTextGrid = styled(Grid)({
    borderRadius:'20px',
    
    padding: "10px",
    '&>div':{
        marginBottom:'20px',
        margin: '0px auto',
        paddingRight: '130px',
        maxWidth:'300px',
        minWidth:'300px',
    },
});

const TextLine = styled('hr')(({
    height: "2px",
    background:"inherit",
    border:"none",
    margin: '0',
    boxShadow:'5px 5px 10px #020000',
    WebkitAnimation:'modal 0.5s linear',
    animation: 'modal 0.5s linear',
    
}));



const AnimatedLogo = (props)=>{
        return  <>
                <Typography
                    sx={{
                        animation: {xs:'shadow-pop-tr 0.8s both',lg:'shadow-pop-tr2 0.8s both'},
                        fontSize: '60px',
                        color: '#9be8ef',
                        // color: "#b3ded2",
                        fontFamily: "'Alata', sans-serif",
                    }}
                    >
                    {props.text}
                </Typography>
                <TextLine 
                    width={props.borderWidth}
                    sx={{
                        animation: {xs:'modal 0.8s both',lg:'modal 0.8s both'},
                        marginBottom:props.marginBottom
                    }}
                    />
            </>

}



export default function LogoText() {
    const login = useSelector(state=>state.user.login);
    return( 
        <>
            <LogoTextGrid item  
                xs={12} 
                lg={2} 
                sx={{
                    marginRight:{lg:login?'30px':'80px'},
                    marginLeft:{xs:"5px"}
                }}>
                <Box>
                    <AnimatedLogo text="THINGS" borderWidth="210px"/>
                    <AnimatedLogo text="I" borderWidth="50px"/>
                    <AnimatedLogo text="LOVE" borderWidth="150px" marginBottom="20px"/>
                </Box>
            </LogoTextGrid>
        </>
    );
}