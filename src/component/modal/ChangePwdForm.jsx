
import { useState } from 'react';
import { styled, Button,  } from '@mui/material';
import { UserInput, NotValidAlert, InputBox,InputLabel } from '../../modal';

const ChangePwdBtn = styled(Button)({
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


export default function ChangePwdForm({setIsPwdChanged}) {
    const pwdRegExp=  new RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,15}$/);
    const [pwd,setPwd] = useState("");
    const [pwdConf,setPwdConf] =useState("");
    const handleChangePwd = () => {
        if(pwd === pwdConf && pwdRegExp.test(pwd)){
            setIsPwdChanged(true)
        }
    }
    return(
        <InputBox>
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
                        {pwd.length>0?<NotValidAlert>영문,숫자,특수문자 포함 6~15자 사이로 작성해주세요.</NotValidAlert>:""}
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
            <ChangePwdBtn onClick={()=>{handleChangePwd()}}>비밀번호 변경</ChangePwdBtn>
        </InputBox>
    );
}