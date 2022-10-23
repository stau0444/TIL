import { Box, Button, styled } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { ModalContent, ModalCloseBtnBox, ModalCloseBtn, ModalHeaderBox, InputBox, UserInput, InputLabel, ModalButton } from '../../modal';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { postLoginFail, postLoginStart, postLoginSuccess } from '../../redux/modules/login';
import { useState } from 'react';



const UserButton =styled(Button)({
    fontSize:"12px",
    color:'gray'
})

export default function LoginModal({handleModalOpen}) {
    const dispatch = useDispatch();
    const [email,setEmail] = useState("");
    const [pwd,setPwd] = useState("");
    const handleLogin = () =>{
        async function handleLogin(){
            dispatch(postLoginStart())
            const data ={email:"stau04@gmail.com",pwd:"asdasd12"}
            await axios
                    .post('/api/user/login',data)        
                    .then((resp)=>{
                        console.log('success',resp.data);
                        dispatch(postLoginSuccess(resp.data))
                    })
                    .catch((error)=>{
                        dispatch(postLoginFail())
                        alert(error);
                    });
        }
        handleLogin();
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
                    <UserInput onChange={(e)=>{setEmail(e)}}/>
                </Box>
                <Box sx={{marginTop:'-10px'}}>
                    <InputLabel >비밀번호</InputLabel>
                    <UserInput type="password" onChange={(e)=>{setPwd(e)}}/>
                </Box>
                <Box>
                    <ModalButton onClick={handleLogin}>로그인</ModalButton>
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