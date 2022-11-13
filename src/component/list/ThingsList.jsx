import ThingsListBody from './ThingListBody';
import UserForm from './UserForm';
import { Grid, styled } from '@mui/material';




const ThingsListGrid = styled(Grid)({
    
});


const ThingsListBox= styled('div')({
    margin:'0px auto',
    maxWidth:'410px',
    padding: '14px',
    borderRadius:'20px',
    background: '#eff0e5',
    boxShadow: '8px 8px 10px #4b46464b',
    borderBottom:'5px solid #423c3c41',
    borderRight:'5px solid #55505041',
})


export default function ThingsList({handleModalOpen}) {
    return(
        <>
            <ThingsListGrid item xs={12} lg={4}>
                    <UserForm handleModalOpen={handleModalOpen}/>
                    <ThingsListBox>
                        <ThingsListBody handleModalOpen={handleModalOpen}/>
                    </ThingsListBox>
            </ThingsListGrid>
        </>
    );
}