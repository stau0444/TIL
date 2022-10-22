import { styled ,Button} from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { ModalContent, ModalCloseBtnBox, ModalCloseBtn, ModalHeaderBox } from '../../modal';


const LogOutConfirmBtn= styled(Button)({
    border:'0',
    background:'#78e184',
    color:'white',
    width:'40%',
    height:'40px',
    borderRadius:'20px',
    marginTop:'40px',
    transition:'all 0.2s linear',
    '&:hover':{
        background:'#b7cab9',
    }
})
export default function LogOutModal({handleModalOpen}) {
    return(
        <ModalContent sx={{marginTop:'200px'}}>
        <ModalCloseBtnBox>
            <ModalCloseBtn 
                onClick={()=>{handleModalOpen()}}
            >   
                <HighlightOffIcon  sx={{
                    '&:hover':{
                        color:'#e75555',
                        animation: 'modalSpin 0.5s',
                        animationDirection: 'nomal',
                    } 
                }}fontSize='large'/>
            </ModalCloseBtn>
        </ModalCloseBtnBox>
        <ModalHeaderBox>
            <p>로그아웃 하시겠습니까?</p>
            <LogOutConfirmBtn>네</LogOutConfirmBtn>
        </ModalHeaderBox>
    </ModalContent>
    );
}