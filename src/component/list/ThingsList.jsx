import {Grid,styled } from '@material-ui/core';
import ThingsListBody from './ThingListBody';
import UserForm from './UserForm';




const ThingsListGrid = styled(Grid)({
});


const ThingsListBox= styled('div')({
    margin:'0px auto',
    maxWidth:'400px',
    minWidth:'400px',
   padding: '14px',
   borderRadius:'20px',
   background: '#eff0e5',
   boxShadow: '5px 5px 5px #2c2a2a4c',
   borderTop:'5px solid #a1979741',
   borderLeft:'5px solid #a1979741',
})


export default function ThingsList({handleModalOpen}) {
    
    return(
        <>
            
            <ThingsListGrid item xs={12} lg={4}>
                    <UserForm handleModalOpen={handleModalOpen}/>
                    <ThingsListBox>
                        <ThingsListBody/>
                    </ThingsListBox>
            </ThingsListGrid>
        </>
    );
}