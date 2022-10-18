import LogoText from '../component/LogoText';
import ThingsDetail from '../component/ThingsDetail';
import ThingsList from '../component/ThingsList';
import { Grid, styled } from '@material-ui/core';


 const  HomeContainer = styled(Grid)({
    transition: 'all 1s',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems:'center',
    justifyContent:'center',
    padding:'20px'
});

export default function Home() {
    return(
        <HomeContainer container >
            <LogoText/>
            <ThingsList/>
            <ThingsDetail/>
        </HomeContainer>
    );
}