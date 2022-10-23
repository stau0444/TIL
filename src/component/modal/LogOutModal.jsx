import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { ModalContent, ModalCloseBtnBox, ModalCloseBtn, ModalHeaderBox, ModalButton } from '../../modal';


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
            <ModalButton sx={{marginTop:'50px'}}>네</ModalButton>
        </ModalHeaderBox>
    </ModalContent>
    );
}