import { Box, Button, styled } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { ModalContent, ModalCloseBtnBox, ModalCloseBtn, ModalHeaderBox, InputBox, UserInput, InputLabel, ModalButton } from '../../modal';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { postLoginFail, postLoginStart, postLoginSuccess } from '../../redux/modules/login';
import {useRef } from 'react';



const UserButton =styled(Button)({
    fontSize:"12px",
    color:'gray'
})

export default function LoginModal({handleModalOpen}) {
    const dispatch = useDispatch();
    const emailRef = useRef("");
    const pwdRef = useRef("");

    const handleLogin = () =>{
        async function handleLogin(){
            dispatch(postLoginStart())

            await axios
                    .post('/api/user/login',{email:emailRef.current.value , pwd:pwdRef.current.value})        
                    .then((resp)=>{
                        console.log('success',resp.data);
                        dispatch(postLoginSuccess(resp.data));
                        handleModalOpen();
                    })
                    .catch((error)=>{
                        dispatch(postLoginFail());
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
                            animation: 'modalSpin 0.5s linear',
                            WebkitAnimation:'modalSpin 0.5s linear',
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
                    <UserInput ref={emailRef}/>
                </Box>
                <Box sx={{marginTop:'-10px'}}>
                    <InputLabel >비밀번호</InputLabel>
                    <UserInput ref={pwdRef} type="password"/>
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