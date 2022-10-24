import { Typography,  } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useState } from 'react';
import ChangePwdForm from './ChangePwdForm';
import { Box } from '@mui/material';
import { ModalCloseBtn, ModalContent, ModalCloseBtnBox, ModalHeaderBox, InputBox, UserInput, InputLabel, NotValidAlert, ModalButton, VerificationInputBox } from '../../modal';


export default function FindPwdModal({handleModalOpen}) {
    const emailRegExp = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    const [isVerified,setIsVerified] = useState(false);
    const [isEmailSent,setIsEmailSent] = useState(false);
    const [userEmail,setUserEmail] = useState("");
    const [userInput,setUserInput] = useState("");
    const [verifyNum , setVerifyNum] = useState("");
    const [isPwdChanged,setIsPwdChanged] = useState(false);
    const handleSendVerifyNum = () => {
        if(!emailRegExp.test(userEmail)){
            alert("이메일 형식이 잘못되었습니다.");
            return;
        }
        //이메일 전송 
        //인증번호 확인창 
        setIsEmailSent(true);
        setVerifyNum("12345")
    }
    const handleVerification = () =>{
        if(userInput === verifyNum){
            setIsVerified(true);
        }else{
            alert("인증번호가 일치하지 않습니다. 다시 시도해 주세요.")
        }
    }
    return(
        <>
        <ModalContent sx={{marginTop:'200px'}}>
                 <ModalCloseBtnBox>
                    <ModalCloseBtn onClick={(e)=>{handleModalOpen()}}>   
                        <HighlightOffIcon  sx={{
                            '&:hover':{
                                color:'#e75555',
                                animation: 'modalSpin 0.5s linear',
                            } 
                        }}fontSize='large'/>
                    </ModalCloseBtn>
                </ModalCloseBtnBox>
            {
                isVerified?
                <>
                    {
                        isPwdChanged?
                        <Box sx={{color:"#59b96e",textAlign:'center',marginTop:'10px'}}>
                            <Typography sx={{fontWeight:'500'}}>비밀번호가 변경되었습니다.</Typography>
                            <img width="140px" src='successd.gif' alt=''/>
                        </Box>
                        :
                        <>
                            <ModalHeaderBox> 
                                <p>비밀번호 변경</p>
                            </ModalHeaderBox>
                            <ChangePwdForm setIsPwdChanged={setIsPwdChanged}/>
                        </>
                    }
                   
                </>
                :
                <>
                    <ModalHeaderBox>
                        <p>비밀번호 찾기</p>
                    </ModalHeaderBox>
                    <InputBox>
                        <div>
                            <InputLabel>이메일</InputLabel>
                            {
                                emailRegExp.test(userEmail)||userEmail.length===0?
                                <>
                                    <UserInput  onChange={(e)=>{setUserEmail(e.target.value)}}/>
                                </>
                                :
                                <>
                                    <UserInput sx={{
                                        border:"1px solid #e75555",
                                        '&:focus':{border:"1px solid #e75555",boxShadow:' 0px 0px 5px #e75555',
                                        }}} 
                                        onChange={(e)=>{setUserEmail(e.target.value)}}
                                    />
                                    {userEmail.length>0?<NotValidAlert >이메일 형식에 맞게 작성해주세요</NotValidAlert>:""}
                                </>
                            }
                        </div>
                        <ModalButton onClick={handleSendVerifyNum}>인증번호 전송</ModalButton>
                    </InputBox>
                    {
                        isEmailSent?
                        <VerificationInputBox>
                            <div>
                                <InputLabel>인증번호</InputLabel>
                                <UserInput onChange={(e)=>{setUserInput(e.target.value)}}/>
                            </div>
                            <ModalButton onClick={()=>{handleVerification()}}>확인</ModalButton>
                        </VerificationInputBox>   
                        :
                        ""
                    }
                 </>
           }
         </ModalContent>
    </>
    );
}