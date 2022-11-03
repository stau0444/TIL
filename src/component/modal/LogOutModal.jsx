import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { ModalContent, ModalCloseBtnBox, ModalCloseBtn, ModalHeaderBox, ModalButton } from '../../modal';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { postLogOut } from '../../redux/modules/user';
import { resetDetail } from '../../redux/modules/detail';
import { Box } from '@mui/material';

export default function LogOutModal({handleModalOpen}) {
    const dispatch = useDispatch();
    const email = useSelector(state => state.user.userInfo.email);
    const headers={
        "Content-Type":"application/x-www-form-urlencoded",
    }
    const handleLogOut = () =>{
        async function handleLogOut(){
            axios.post("/logout",{headers:headers})
            .then((resp)=>{
                dispatch(postLogOut());
                dispatch(resetDetail())
                handleModalOpen();
            })
            .catch((resp)=>{
                console.log(resp)
            })
        }
        handleLogOut();
    } 
    return(
        <ModalContent sx={{marginTop:'200px'}}>
        <ModalCloseBtnBox>
            <ModalCloseBtn 
                onClick={()=>{handleModalOpen()}}
            >   
                <HighlightOffIcon  sx={{
                    '&:hover':{
                        color:'#e75555',
                        animation: 'modalSpin 0.3s linear',
                        animationDirection: 'nomal',
                    } 
                }}fontSize='large'/>
            </ModalCloseBtn>
        </ModalCloseBtnBox>
        <ModalHeaderBox sx={{marginBottom:'0'}}>
            <Box sx={{display:'flex',color:'gray',justifyContent:'center',}}>
                <p>로그아웃 하시겠습니까?</p>
                
            </Box>
            <ModalButton onClick={()=>{handleLogOut()}}sx={{marginTop:'50px'}}>네</ModalButton>
        </ModalHeaderBox>
    </ModalContent>
    );
}