
import { styled } from '@mui/material';

export const ModalContent=styled('div')({
    background: 'white',
    zIndex:'1',
    borderRadius:'20px',
    animation: 'modal 0.4s',
    animationDirection: 'alternate',
    margin: '100px auto', /* 15% from the top and centered */
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
    transition: 'all 0.2s linear',
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
    animation: 'modal 0.5s',
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