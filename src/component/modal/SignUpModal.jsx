import { styled, Button } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useState } from 'react';
import { ModalCloseBtn, ModalContent, ModalCloseBtnBox, ModalHeaderBox, InputBox, UserInput, InputLabel, NotValidAlert } from '../../modal';


const SignUpBtn = styled(Button)({
    border:'0',
    background:'#78e184',
    color:'white',
    width:'30%',
    height:'40px',
    fontWeight:'bold',
    borderRadius:'20px',
    marginTop:'20px',
    transition:'all 0.2s linear',
    '&:hover':{
        background:'#b7cab9',
    }
})


const SignUpSuccessImg= styled('img')({
    width: '80%',
    marginTop:'-30px'
})
export default function SignUpModal({handleModalOpen}) {
    const pwdRegExp=  new RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,15}$/);
    const emailRegExp = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    const handleSignUp = () =>{
        //input값들 검증하고
        validInputValues();
        //가입 요청
        //이메일 중복확인 후 중복시 alert처리
        
    }
    const validInputValues = () =>{
        if(pwd!==pwdConf||!pwdRegExp.test(pwd) || !emailRegExp.test(email)){
            alert("형식에 맞게 다시 입력해주세요.")
            return
        }
        console.log("회원가입성공")
        setSignUpSuccess(true);
    }
    
    const [pwd,setPwd] = useState("");
    const [pwdConf,setPwdConf] =useState("");
    const [email,setEmail] = useState("");
    const [signUpSuccess,setSignUpSuccess] = useState(false);
    
    return(
        <ModalContent>
            <ModalCloseBtnBox>
                <ModalCloseBtn 
                    onClick={(e)=>{handleModalOpen()}}
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
                <p>회원가입</p>
            </ModalHeaderBox>
            <InputBox>
                {signUpSuccess?
                <>
                    <SignUpSuccessImg src='SignUpSucces.gif' alt=''/>
                    <p>회원가입에 성공했습니다.</p>
                </>
                :
                    <>
                        {/* <div>
                        <InputLabel>아이디</InputLabel>
                        {
                            idRegExp.test(id)||id.length===0?
                            <>  
                                <UserInput onChange={(e)=>{setId(e.target.value)}}/>  
                            </>
                            :
                            <>
                                <UserInput sx={{
                                    border:"1px solid #e75555",
                                    '&:focus':{border:"1px solid #e75555",boxShadow:' 0px 0px 5px #e75555',
                                    }}} 
                                    onChange={(e)=>{setId(e.target.value)}}
                                />
                                {id.length>0?<NotValidAlert >영문,숫자 조합하여 6~15자 사이로 작성해주세요</NotValidAlert>:""}
                            </>
                        }
                    </div> */}
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
                    
                    <SignUpBtn onClick={()=>{handleSignUp()}}>회원 가입</SignUpBtn>
                </>
                }
            </InputBox>
        </ModalContent>
    );
}