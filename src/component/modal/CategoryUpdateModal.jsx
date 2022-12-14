
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useRef,  } from 'react';
import { styled, Button, Typography } from '@mui/material';
import { ModalContent, ModalCloseBtnBox, ModalCloseBtn, InputBox, UserInput } from '../../modal';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { postCategorySuccess, deleteCategorySuccess, postLogOut } from '../../redux/modules/user';
import { resetDetail } from '../../redux/modules/detail';
import CategoryIcon from '@mui/icons-material/Category';

const CategoryListBox = styled('div')({
    textAlign:'center',
    width: '80%',
    border: '1px solid #a8e9b0',
    marginLeft:'30px',
    marginTop: '10px',
    borderRadius:'20px',
    padding:'10px',
    paddingBottom:'20px',
    minHeight:'190px',
    overflowY:'scroll',
    maxHeight:'55%',
})
const CategoryBox=styled('div')({
    display: 'flex',
    justifyContent:'center',
    alignItems:'center'
})
const Category=styled('button')({
    margin: '4px',
    minWidth:'50px',
    marginBottom:'0',
    padding:'6px 8px',
    border:'1px solid gray',
    fontSize:'12px',
    borderRadius:'20px',
    marginTop:'6px',
    color: '#59b96e',
    fontWeight: 'bold',
    transition: 'all 0.3s ease-out',
    animation: 'modal    1.4s cubic-bezier(0.175, 0.885, 0.320, 1.275) both',
    background: 'whitesmoke',
    '&:hover':{
        background: '#56d27747'
    }
})


const CategorySubmmitBtn = styled(Button)({
    background:'#78e184',
    color:'white',
    borderRadius:'20px',
    padding:'3px 0px',
    fontWeight:'bold',
    fontSize:'12px',
    minWidth:'45px',
    transition:'all 0.2s linear',
    '&:hover':{
        background:'#b7cab9',
    }
})
const ModalHeaderBox=styled("div")({
    width: '100%',
    height: '5%',
    fontSize:'20px',
    textAlign:'center',
    margin: "10px 0px 0px 0px",
    '&>p':{
        fontWeight:'bold',
        color:'gray'
    }
})

export default function CategoryUpdateModal({handleModalOpen}) {
    const categoryRef = useRef();
    const {categories,email} = useSelector(state => state.user.userInfo);
    const dispatch = useDispatch();
    
    const handleCategorySubmit = () =>{
        if(categoryRef.current.value.length>10){
            alert("??????????????? 10????????? ?????? ???????????????.");
            return;
        }
        if(categories.length>9){
            alert("??????????????? 10????????? ?????? ???????????????.");
            return;
        }
        if(categoryRef.current.value === ''){
            alert("????????? ??????????????? ????????? ?????????.");
            return;
        }
        if(categories.find(c=>c === categoryRef.current.value) !== undefined){
            alert("??????????????? ????????? ??? ????????????.");
            categoryRef.current.value='';
            return;
        }

        async function handleCategorySubmit(){
            await axios.post("/api/user/category",{category:categoryRef.current.value,userEmail:email})
                    .then((resp)=>{dispatch(postCategorySuccess(resp.data));})
                    .catch((error)=>{
                        if(error.response.status === 401){
                            handleModalOpen();
                            dispatch(postLogOut())
                            alert("????????? ????????? ?????????????????????. ?????? ????????? ????????????!")
                        }
                    })
        }
        handleCategorySubmit();
        categoryRef.current.value='';
    }
    const handleDeleteCategory=(id)=>{
        async function handleDeleteCategory(){
            await axios.delete(`/api/user/category/${id}`)
            .then((resp)=>{dispatch(deleteCategorySuccess(resp.data.id));dispatch(resetDetail())})
            .catch((error)=>{
                if(error.response.status === 401){
                    handleModalOpen();
                    dispatch(postLogOut())
                    alert("????????? ????????? ?????????????????????. ?????? ????????? ????????????!")
                }
            })
        }
        handleDeleteCategory();
    }
    return(
        <>  
            <ModalContent sx={{padding:'40px 0'}}>
                <ModalCloseBtnBox>
                    <ModalCloseBtn 
                        onClick={()=>{handleModalOpen()}}
                    >   
                        <HighlightOffIcon  sx={{
                            '&:hover':{
                                color:'#e75555',
                                animation: 'modalSpin 0.3s linear',
                            } 
                        }}fontSize='large'/>
                    </ModalCloseBtn>
                </ModalCloseBtnBox>
                <ModalHeaderBox sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <p>???????????? ??????</p>
                    <CategoryIcon sx={{fontSize:'20px',color:'#80ce6f',marginLeft:'5px'}}/>
                </ModalHeaderBox>
                <Typography sx={{
                    fontSize:'10px',
                    textAlign:'center' ,
                    margin:'10px 0 0 0',
                    color:'coral'
                    }}>
                        * ??????????????? 10????????? ?????? ???????????????.
                </Typography>
                <CategoryListBox>
                    {
                        
                        categories.map((c)=>{
                            return  <Category  key={c.id}>
                                        <CategoryBox>
                                            <p>{c.name}</p>
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
                                                    const DeleteConfirm = window.confirm(`* ??????????????? ???????????? ??????????????? ????????? ???????????? ?????? ???????????????.\n "${c.name}"???(???) ?????????????????????????`);
                                                    if(DeleteConfirm){
                                                        handleDeleteCategory(c.id);
                                                    }
                                                }}
                                            />
                                        </CategoryBox>
                                    </Category>;
                        })
                    }
                </CategoryListBox>
                <InputBox>
                    <UserInput
                        sx={{width:'60%' ,margin:'25px 5px 0 0'}} 
                        placeholder='???????????? ?????? (10??? ????????? ????????? ?????????.)'
                        onKeyPress={
                            (e)=>{
                                if(e.key === 'Enter'){
                                    handleCategorySubmit()
                                }
                            }} ref={categoryRef}/>
                    <CategorySubmmitBtn onClick={handleCategorySubmit}>??????</CategorySubmmitBtn>
                </InputBox>
            </ModalContent>
        </>
    );
}