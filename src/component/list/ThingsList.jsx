import ThingsListBody from './ThingListBody';
import UserForm from './UserForm';
import { Grid, styled } from '@mui/material';




const ThingsListGrid = styled(Grid)({
    
});


const ThingsListBox= styled('div')({
    margin:'0px auto',
    maxWidth:'400px',
    minWidth:'400px',
   padding: '14px',
   borderRadius:'20px',
   background: '#eff0e5',
   boxShadow: '10px 10px 10px #4b46464b',
   //    borderTop:'5px solid #a1979741',
//    borderLeft:'5px solid #a1979741',
    borderBottom:'5px solid #423c3c41',
    borderRight:'5px solid #55505041',
})


export default function ThingsList({handleModalOpen}) {
    
    return(
        <>
            <ThingsListGrid item xs={12} lg={4} sx={{
                // animation: {
                //                 xs:'modal 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) ',
                //                 lg:'modal1 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) '
                //            },
            }}>
                    <UserForm handleModalOpen={handleModalOpen}/>
                    <ThingsListBox>
                        <ThingsListBody/>
                    </ThingsListBox>
            </ThingsListGrid>
        </>
    );
}