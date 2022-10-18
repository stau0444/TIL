
import { Box, styled } from '@material-ui/core';
import { Grid } from '@material-ui/core';

const LogoTextGrid = styled(Grid)({
  

  fontSize: '60px',
  color: '#bbe4e8',
  fontFamily: "'Alata', sans-serif",
  '&>div':{
    margin: '10px auto',
    paddingRight: '130px',
    maxWidth:'300px',
    minWidth:'300px',
  },
    '&>div>p':{
    },
});


export default function LogoText() {
    return( 
        <>
            <LogoTextGrid item  xs={12} lg={2}>
                <Box>
                    <p className='text-logo-first'>THINGS</p>
                    <p className='text-logo-second'>I</p>
                    <p className='text-logo-third'>LOVE</p>
                </Box>
            </LogoTextGrid>
        </>
    );
}