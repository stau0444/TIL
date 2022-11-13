
import { Box, Grid, Typography, styled } from '@mui/material';

const LogoTextGrid = styled(Grid)({
    borderRadius:'20px',
    marginBottom:'50px',
    '&>div':{
        maxWidth:'100%',
        minWidth:'100%',
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
                        marginBottom:props.marginBottom,
                    }}
                    />
            </>

}



export default function LogoText() {
    return( 
        <>
            <LogoTextGrid item  
                xs={12} 
                lg={2}
                sx={{margin:{xs:'0 0 50px 15px',lg:'-50px 20px 0 0'}}}
                >
                <Box >
                    <AnimatedLogo text="THINGS" borderWidth="210px"/>
                    <AnimatedLogo text="I" borderWidth="30px"/>
                    <AnimatedLogo text="LOVE" borderWidth="160px"/>
                </Box>
            </LogoTextGrid>
        </>
    );
}