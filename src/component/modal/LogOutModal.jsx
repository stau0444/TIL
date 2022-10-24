import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { ModalContent, ModalCloseBtnBox, ModalCloseBtn, ModalHeaderBox, ModalButton } from '../../modal';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { postLogOut } from '../../redux/modules/login';
import { resetDetail } from '../../redux/modules/detail';


export default function LogOutModal({handleModalOpen}) {
    const dispatch = useDispatch();
    const handleLogOut = () =>{
        async function handleLogOut(){
            axios.post("/api/user/logout",{userId:1})
            .then((resp)=>{console.log(resp)})
            .catch((resp)=>{
                console.log(resp);
                dispatch(postLogOut());
                dispatch(resetDetail())
                handleModalOpen();
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
                        animation: 'modalSpin 0.5s linear',
                        animationDirection: 'nomal',
                    } 
                }}fontSize='large'/>
            </ModalCloseBtn>
        </ModalCloseBtnBox>
        <ModalHeaderBox>
            <p>로그아웃 하시겠습니까?</p>
            <ModalButton onClick={()=>{handleLogOut()}}sx={{marginTop:'50px'}}>네</ModalButton>
        </ModalHeaderBox>
    </ModalContent>
    );
}