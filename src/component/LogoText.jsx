
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
    background:"none",
    border:"none",
    margin: '0',
    boxShadow:'5px 5px 10px #020000',
    WebkitAnimation:'modal 0.5s linear',
    animation: 'modal 0.5s linear',
    
}));


const AnimatedLogo = (props)=>{
        return  <>
                <Typography
                    component={'span'}
                    sx={{
                        animation: {xs:'shadow-pop-tr 0.8s both',lg:'shadow-pop-tr2 0.8s both'},
                        fontSize: {xs:'60px',sm:'65px'},
                        transition: 'font-size 0.1s linear',
                        color: '#13d2e3de',
                        background: 'palegreen',
                        padding:'0 15px 0 10px',
                        borderRadius:'20px',
                        fontFamily: "'Alata', sans-serif",
                        border:'1px solid #b3ded2',
                        display: 'inline',

                    }}
                    >
                    {props.text}
                </Typography>
                <TextLine 
                    width={props.borderWidth}
                    sx={{
                        animation: {xs:'modal 0.8s both',lg:'modal 0.8s both'},
                        marginBottom:'5px'
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
                sx={{margin:{xs:'0 0 10px 0px',lg:'-15px 55px 295px 0'}}}
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