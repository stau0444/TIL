
import { styled, Button } from '@mui/material';

export const ModalBackground=styled('div')({
    position: 'fixed',
    zIndex: '1',
    left: '0',
    top: '0%',
    width: '100%',
    height: '100%',
    overflow: 'auto',
    backgroundColor: '#654d4d48',
})

export const ModalContent=styled('div')({
    background: 'white',
    zIndex:'1',
    borderRadius:'20px',
    animation: 'modal 0.35s ease-in-out',
    margin: '100px auto',
    padding: '50px 0',
    maxWidth:'380px',
    width: '80%',
})

export const ModalCloseBtn = styled('button')({
    color:'gray',
    backgroundColor:  'inherit',
    border:'none',
    borderRadius:'20px',
    margin: '-35px 12px 0 0',
    textAlign:'right',
    cursor: 'pointer',
    float: 'right',
    padding: '0',
})


export const ModalCloseBtnBox= styled('div')({
    width: '100%',
    height: '10%',
})

export const ModalHeaderBox=styled("div")({
    width: '100%',
    fontSize:'20px',
    textAlign:'center',
    margin: "10px 0 35px 0px",
    '&>p':{
        fontWeight:'bold',
        color:'gray'
    }
})

export const InputBox = styled("div")({
    width: '100%',
    fontSize:'20px',
    textAlign:'center',
    '&>p':{
        fontWeight:'bold',
        color:'gray'
    }
})
export const InputLabel =styled('p')({
    fontSize:'12px',
    margin: '6px 0 6px 60px',
    color:'#59b96e',
    fontWeight:'bold',
    textAlign:'left'
})


export const NotValidAlert= styled('p')({
    fontSize:'10px',
    color:"#b96759",
    WebkitAnimation: 'modal 0.5s linear',
    animation: 'modal 0.5s linear',
    marginBottom:'10px'
    
})
export const UserInput = styled('input')({
    borderRadius:'10px',
    border:'1px solid #a8e9b0',
    marginBottom:'15px',
    width: '70%',
    fontSize:'13px',
    padding:'5px',
    paddingBottom:'3px',
    height: '25px',
    fontWeight:'500',
    color:'gray',
    textAlign:'center',
    WebkitTransition:'all 0.2s linear',
    transition: 'all 0.2s linear',
    '&::placeholder':{
        fontWeight:'normal',
        fontSize:'11px'
    },
    ' &:focus ':{
        outline: 'none',
        borderColor: '#a8e9b0',
        boxShadow:' 0px 0px 5px #a8e9b0',
    }
})

export const ModalButton = styled(Button)({
    border:'0',
    background:'#78e184',
    color:'white',
    width:'30%',
    height:'40px',
    fontWeight:'bold',
    borderRadius:'20px',
    marginTop:'20px',
    WebkitTransition:'all 0.2s linear',
    transition:'all 0.2s linear',
    '&:hover':{
        background:'#b7cab9',
    }
})

export const VerificationInputBox = styled("div")({
    width: '100%',
    fontSize:'20px',
    textAlign:'center',
    marginTop:'10px',
    '&>p':{
        fontWeight:'bold',
        color:'gray'
    }
})
