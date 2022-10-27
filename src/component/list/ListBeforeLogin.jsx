import { styled } from '@mui/material';
import { ReceiptListBox } from '../detail/ReceiptList';

const ListBeforeLoginBox = styled('div')({
    height: '480px',
    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
    position: "relative"
})
const DecoBox = styled('div')({
    textAlign:'center',
    position: 'absolute',
    top:'80px'
})
const DecoImg = styled('img')({
    width: "400px",
    background: "whitesmoke"
})
const DecoText = styled('p')({
    color:'gray'
})
const SignUpBtn = styled('button')({
    marginTop:'15px',
    fontSize:'20px',
    padding: '5px 10px',
    color: '#64b568',
    cursor: 'pointer',
    border:'1px solid gray',
    borderRadius:'20px',
    transition: 'all 0.3s linear',
    '&:hover':{
        background: '#7ff485',
        color:'white'
    }
})
const TextBtnBox = styled('div')({
    position: 'absolute',
    left:'20%',
    right:'20%',
    top:'180px'
})

export default function ListBeforeLogin() {
    return(
        <>
        <ReceiptListBox sx={{minHeight:'460px',borderColor:'#9eac99'}}>
           <ListBeforeLoginBox>
            <DecoBox>
             <DecoImg src="deco.gif" alt=""/>
             <TextBtnBox>
                <DecoText>나만의 리스트를 만들어보세요!</DecoText>
                <SignUpBtn>회원 가입</SignUpBtn>
             </TextBtnBox>
            </DecoBox> 
           </ListBeforeLoginBox> 
        </ReceiptListBox>   
        </>
    );
}