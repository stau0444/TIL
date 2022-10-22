import { Box, Button, styled } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { ModalContent, ModalCloseBtnBox, ModalCloseBtn, ModalHeaderBox, InputBox, UserInput,InputLabel } from '../../modal';




const LoginBtn = styled(Button)({
    border:'0',
    background:'#78e184',
    color:'white',
    width:'40%',
    height:'40px',
    borderRadius:'20px',
    marginTop:'0px',
    transition:'all 0.2s linear',
    '&:hover':{
        background:'#b7cab9',
    }
})
const UserButton =styled(Button)({
    fontSize:"12px",
    color:'gray'
})

export default function LoginModal({handleModalOpen}) {
    const handleLogin = () =>{
        //로그인 정보가지고 서버에 요청
        //로그인 성공시 redux에 login state 전달
        //LogoText.jsx ui 변경 
    }
    return(
    <>
        <ModalContent>
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
                <p>로그인</p>
            </ModalHeaderBox>
            <InputBox>
                <Box>
                    <InputLabel >아이디</InputLabel>
                    <UserInput/>
                </Box>
                <Box sx={{marginTop:'-10px'}}>
                    <InputLabel >비밀번호</InputLabel>
                    <UserInput type="password"/>
                </Box>
                <Box>
                    <LoginBtn onClick={handleLogin}>로그인</LoginBtn>
                </Box>
                <Box sx={{marginTop:'25px'}}>
                    <UserButton onClick={()=>{handleModalOpen("sign-up")}}>회원가입 </UserButton>
                    <UserButton onClick={()=>{handleModalOpen("find-id")}}>아이디 찾기 </UserButton>
                    <UserButton onClick={()=>{handleModalOpen("find-pwd")}}>비밀번호 찾기</UserButton>
                </Box>
            </InputBox>
        </ModalContent>
    </>
    );
}