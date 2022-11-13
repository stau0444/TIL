import { styled } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useState } from 'react';
import { ModalCloseBtn, ModalContent, ModalCloseBtnBox, ModalHeaderBox, InputBox, UserInput, InputLabel, NotValidAlert, ModalButton } from '../../modal';
import axios from 'axios';



const SignUpSuccessImg= styled('img')({
    width: '80%',
    marginTop:'-30px'
})

export default function SignUpModal({handleModalOpen}) {
    const pwdRegExp=  new RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,15}$/);
    const emailRegExp = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    const [pwd,setPwd] = useState("");
    const [pwdConf,setPwdConf] =useState("");
    const [email,setEmail] = useState("");
    const [signUpSuccess,setSignUpSuccess] = useState(false);

    const handleSignUp = () =>{
        //input값들 검증하고
        validInputValues();
        //가입 요청
        axios
        .post('/api/user',{email:email,password:pwd})        
        .then((resp)=>{
            setSignUpSuccess(true);
        })
        .catch((error)=>{alert(error.response.data)});
        //이메일 중복확인 후 중복시 alert처리
        
    }
    const validInputValues = () =>{
        if(pwd!==pwdConf||!pwdRegExp.test(pwd) || !emailRegExp.test(email)){
            alert("형식에 맞게 다시 입력해주세요.")
            return
        }
    }
    
    
    return(
        <ModalContent>
            <ModalCloseBtnBox>
                <ModalCloseBtn 
                    onClick={(e)=>{handleModalOpen()}}
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
            <ModalHeaderBox>
                <p>회원가입</p>
            </ModalHeaderBox>
            <InputBox>
                {signUpSuccess?
                <>
                    <SignUpSuccessImg src='SignUpSucces.gif' alt=''/>
                    <p style={{marginBottom:'15px'}}>회원가입에 성공했습니다.</p>
                </>
                :
                    <>
                    <div>
                        <InputLabel>이메일</InputLabel>
                        {
                            emailRegExp.test(email)||email.length===0?
                            <>
                                <UserInput  onChange={(e)=>{setEmail(e.target.value)}}/>
                            </>
                            :
                            <>
                                <UserInput sx={{
                                    border:"1px solid #e75555",
                                    '&:focus':{border:"1px solid #e75555",boxShadow:' 0px 0px 5px #e75555',
                                    }}} 
                                    onChange={(e)=>{setEmail(e.target.value)}}
                                />
                                {email.length>0?<NotValidAlert >이메일 형식에 맞게 작성해주세요</NotValidAlert>:""}
                            </>
                        }
                    </div>
                    <div>
                        <InputLabel>비밀번호</InputLabel>
                        {
                            pwdRegExp.test(pwd)||pwd.length===0?
                            <>
                                <UserInput type="password" onChange={(e)=>{setPwd(e.target.value)}}/>
                            </>
                            :
                            <>
                                <UserInput sx={{
                                    border:"1px solid #e75555",
                                    '&:focus':{border:"1px solid #e75555",boxShadow:' 0px 0px 5px #e75555',
                                    }}} 
                                    onChange={(e)=>{setPwd(e.target.value)}}
                                    type="password"
                                />
                                {pwd.length>0?<NotValidAlert >영문,숫자,특수문자 포함 6~15자 사이로 작성해주세요.</NotValidAlert>:""}
                            </>
                        }
                    </div>
                    <div>
                        <InputLabel>비밀번호 확인</InputLabel>
                        {
                            (pwdRegExp.test(pwdConf)&& pwd === pwdConf)||pwdConf.length===0?
                            <>
                                <UserInput type="password" onChange={(e)=>{setPwdConf(e.target.value)}}/>
                            </>
                            :
                            <>
                                <UserInput sx={{
                                    border:"1px solid #e75555",
                                    '&:focus':{border:"1px solid #e75555",boxShadow:' 0px 0px 5px #e75555',
                                    }}} 
                                    onChange={(e)=>{setPwdConf(e.target.value)}}
                                    type="password"
                                />
                                {pwd.length>0?<NotValidAlert >비밀번호가 일치하지 않습니다.</NotValidAlert>:""}
                            </>
                        }
                    </div>
                    
                    <ModalButton onClick={()=>{handleSignUp()}}>회원 가입</ModalButton>
                </>
                }
            </InputBox>
        </ModalContent>
    );
}