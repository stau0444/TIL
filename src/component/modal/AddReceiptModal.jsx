import { InputBox, InputLabel, ModalButton, ModalCloseBtn, ModalCloseBtnBox, ModalContent, ModalHeaderBox, UserInput } from "../../modal";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useState, useRef } from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material';
import ReceiptIcon from '@mui/icons-material/Receipt';
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { postReceiptSuccess } from '../../redux/modules/detail';
import { postLogOut } from '../../redux/modules/user';


const AddMenuBtn = styled('button')({
    border: '0',
    height: '26px',
    borderRadius:'15px',
    padding:'6px 10px',
    position: 'absolute',
    right:'55px',
    top:'4px',
    color:'white',
    background: 'palegreen',
    transition: 'all 0.2s linear',
    "&:hover":{
        background: 'lightgray',
    }
})
const SelectedMenuBox = styled('div')({
    margin:'0 auto',
    marginTop:'-10px',
    marginBottom:"20px",
    maxWidth:'300px'
    
})


const Menu=styled('button')({
    margin: '4px',
    minWidth:'50px',
    padding:'3px 5px',
    border:'1px solid gray',
    fontSize:'10px',
    borderRadius:'20px',
    color: '#59b96e',
    fontWeight: 'bold',
    transition: 'all 0.3s ease-out',
    animation: 'modal    1.4s cubic-bezier(0.175, 0.885, 0.320, 1.275) both',
    background: 'whitesmoke',
    '&:hover':{
        background: '#56d27747'
    }
})
const MenuBox=styled('div')({
    display: 'flex',
    justifyContent:'center',
    alignItems:'center'
})
export default function AddReceiptModal({handleModalOpen}) {
    
    const dispatch = useDispatch();
    const menuRef =useRef("");
    const commentRef = useRef("");
    const [menuList,setMenuList] = useState([]);
    const {id,name} = useSelector(state=>state.detail);

    const handleMenuList = () =>{
        const menu = menuRef.current.value;
        menuRef.current.value="";
        if(menu.length === 0){
            alert('메뉴는 한글자 이상이어야 합니다.')
            return; 
        }
        if(menuList.filter(m=>m === menu).length !== 0){
            alert(`${menu}는 이미 등록 되었습니다.`)
            return;
        }
        setMenuList([...menuList,menu]);
    }
    const handleDeleteMenu=(mn)=>{
        setMenuList([...menuList.filter(m=>m!==mn)])
    }
    const handleAddReceipt = () => {
        const comment = commentRef.current.value;
        if(menuList.length === 0 || comment === ""){
            alert("메뉴와 방문평은 필수로 입력해야 합니다.")
            return;
        }
        const data={
            menuList:[...menuList],
            comment:commentRef.current.value,
            thingId:id,
            name:name
        }
        async function handleAddReceipt(){
            axios.post('/api/user/receipt',data)
            .then((resp)=>{dispatch(postReceiptSuccess(resp.data));handleModalOpen();})
            .catch((error)=>{
                if(error.response.status === 401){
                    handleModalOpen();
                    dispatch(postLogOut())
                    alert("로그인 세션이 만료되었습니다. 다시 로그인 해주세요!")
                }
            })
        }
        handleAddReceipt();
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
                                animation: 'modalSpin 0.3s linear',
                                animationDirection: 'nomal',
                            } 
                        }}fontSize='large'/>
                    </ModalCloseBtn>
                </ModalCloseBtnBox>
                <ModalHeaderBox sx={{display:'flex' ,alignItems:'center',justifyContent:'center'}}>
                    <Typography sx={{color:'gray',fontWeight:'bold'}} variant="small">영수증</Typography>
                    <ReceiptIcon  sx={{fontSize:'20px',color:'#80ce6f',marginLeft:'5px'}}/>
                </ModalHeaderBox>
                <InputBox>
                    <InputLabel>메뉴 등록</InputLabel>
                    <Box sx={{display:'flex',justifyContent:'center',position:"relative"}}>
                        <UserInput 
                            ref={menuRef}
                            onKeyPress={
                                (e)=>{
                                    if(e.key === 'Enter'){
                                        handleMenuList(e.target.value);
                                    }
                                }}
                            />
                        <AddMenuBtn onClick={handleMenuList}>추가</AddMenuBtn>
                    </Box>
                    <SelectedMenuBox>
                        {menuList.map(
                            (m,i)=><Menu  key={i}>
                                    <MenuBox>
                                        <p>{m}</p>
                                        <HighlightOffIcon 
                                            sx={{
                                                fontSize:'18px',
                                                color:"gray",
                                                marginLeft:'2px',
                                                transition:'all 0.4s linear',
                                                '&:hover':{
                                                    color:'#f05555',
                                                    animation: 'modalSpin 0.3s linear',
                                                }
                                            }}
                                            onClick={()=>{
                                                handleDeleteMenu(m);
                                            }}
                                        />
                                    </MenuBox>
                                </Menu>
                        )}
                    </SelectedMenuBox>
                </InputBox>
                <InputBox>
                    <InputLabel>이번엔 어땠나요?</InputLabel>
                    <UserInput ref={commentRef}/>
                    <ModalButton onClick={handleAddReceipt}>등록</ModalButton>
                </InputBox>
            </ModalContent>
        </>
    );
}