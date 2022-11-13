import LogoText from '../component/LogoText';
import ThingsList from '../component/list/ThingsList';
import ThingsDetail from '../component/detail/ThingsDetail';
import { useState } from 'react';
import Modal from '../component/modal/Modal';
import { styled, Grid } from '@mui/material';
import { useSelector } from 'react-redux';


 const  HomeContainer = styled(Grid)({
    display: 'flex',
    alignItems:'center',
    justifyContent:'center',
    padding:'20px',
    position: 'relative'
});


export default function Home() {
    const login = useSelector(state => state.user.login)
    const {clickedThing} =useSelector(state=>state.user.userInfo)
    const [isModalOpen,setIsModalOpen] = useState({mode:"",isOpen:false});
    const handleModalOpen = (props) =>{
        if(props === "sign-up" || props === "find-pwd" || props === "find-id"){
            setIsModalOpen({mode:props,isOpen:isModalOpen.isOpen?true:false}); 
            return;   
        }
        setIsModalOpen({mode:props,isOpen:isModalOpen.isOpen?false:true});
    }
    return(
        <>
            <HomeContainer container sx={{
                    marginTop:{xs:'0px',lg:"20px"},
                }}>
                {
                    isModalOpen.isOpen?
                        <Modal
                            sx={{display:isModalOpen.isOpen?"block":"none"}} 
                            mode={isModalOpen.mode} 
                            handleModalOpen={handleModalOpen}
                        />
                    :
                    ""
                }

                <LogoText/>
                <ThingsList handleModalOpen={handleModalOpen}/>
                {
                    
                    login&&clickedThing>0?
                    <ThingsDetail handleModalOpen={handleModalOpen}/>
                    :
                    ""
                }
            </HomeContainer>
        </>
    );
}