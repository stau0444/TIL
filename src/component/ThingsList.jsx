import {Grid,styled } from '@material-ui/core';
import ThingsListBody from './ThingListBody';
import UserForm from './UserForm';
import { useState } from 'react';
import CategoryUpdateModal from './CategoryUpdateModal';



const ThingsListGrid = styled(Grid)({
    
});


const ThingsListBox= styled('div')({
    margin:'0px auto',
    maxWidth:'410px',
    minWidth:'410px',
   padding: '14px',
   borderRadius:'20px',
   background: '#eff0e5',
   boxShadow: '5px 5px 5px #2c2a2a4c',
   borderTop:'5px solid #a1979741',
   borderLeft:'5px solid #a1979741',
})


export default function ThingsList() {
    const [isModalOpen,setIsModalOpen] = useState(false);
    const handleModalOpen = () =>{
        setIsModalOpen(isModalOpen?false:true);
    }
    return(
        <>
            {
                isModalOpen?
                    <CategoryUpdateModal handleModalOpen={handleModalOpen}/>
                :
                ""
            }
            <ThingsListGrid item xs={12} lg={4}>
                    <UserForm handleModalOpen={handleModalOpen}/>
                    <ThingsListBox>
                        <ThingsListBody/>
                    </ThingsListBox>
            </ThingsListGrid>
        </>
    );
}