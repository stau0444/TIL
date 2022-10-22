
import {  styled,  } from '@material-ui/core';
import { Box,Grid, Typography } from '@mui/material';


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
    boxShadow:'5px 5px 10px #020000'
}));

const AnimatedLogo = (props)=>{
    return <Typography
            sx={{
                animation: {xs:'shadow-pop-tr 0.8s both',lg:'shadow-pop-tr2 0.8s both'},
                fontSize: '60px',
                color: '#bbe4e8',
                // color: "#b3ded2",
                fontFamily: "'Alata', sans-serif",
            }}
            >
            {props.text}
          </Typography>
}


export default function LogoText() {
    return( 
        <>
            <LogoTextGrid item  
                xs={12} 
                lg={2} 
                sx={{
                    marginRight:{lg:'30px'},
                    marginLeft:{xs:"30px"}
                }}>
                <Box>
                    <AnimatedLogo text="THINGS"/>
                    <TextLine width="210px"/>
                    <AnimatedLogo text="I"/>
                    <TextLine width="50px"/>
                    <AnimatedLogo text="LOVE"/>
                    <TextLine width="150px"/>
                </Box>
            </LogoTextGrid>
        </>
    );
}