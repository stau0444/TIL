
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useRef,  } from 'react';
import { styled, Button, Typography } from '@mui/material';
import { ModalContent, ModalCloseBtnBox, ModalCloseBtn, InputBox, UserInput } from '../../modal';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { postCategorySuccess, deleteCategorySuccess } from '../../redux/modules/user';
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
            alert("카테고리는 10이내로 작성 가능합니다.");
            return;
        }
        if(categories.length>9){
            alert("카테고리는 10개까지 저장 가능합니다.");
            return;
        }
        if(categoryRef.current.value === ''){
            alert("추가할 카테고리를 입력해 주세요.");
            return;
        }
        if(categories.find(c=>c === categoryRef.current.value) !== undefined){
            alert("카테고리는 중복될 수 없습니다.");
            categoryRef.current.value='';
            return;
        }

        async function handleCategorySubmit(){
            await axios.post("/api/user/category",{category:categoryRef.current.value,userEmail:email})
                    .then((resp)=>{dispatch(postCategorySuccess(resp.data));})
                    .catch((resp)=>{alert("잘못된 값이 입력되었습니다.")})
        }
        handleCategorySubmit();
        categoryRef.current.value='';
    }
    const handleDeleteCategory=(id)=>{
        async function handleDeleteCategory(){
            await axios.delete(`/api/user/category/${id}`)
            .then((resp)=>{dispatch(deleteCategorySuccess(resp.data.id));dispatch(resetDetail())})
            .catch((error)=>console.log(error))
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
                    <p>카테고리 목록</p>
                    <CategoryIcon sx={{fontSize:'20px',color:'#80ce6f',marginLeft:'5px'}}/>
                </ModalHeaderBox>
                <Typography sx={{
                    fontSize:'10px',
                    textAlign:'center' ,
                    margin:'10px 0 0 0',
                    color:'coral'
                    }}>
                        * 카테고리는 10개까지 저장 가능합니다.
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
                                                    const DeleteConfirm = window.confirm(`* 카테고리를 삭제하면 카테고리에 포함된 컨텐츠도 함께 삭제됩니다.\n "${c.name}"을(를) 삭제하시겠습니까?`);
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
                        placeholder='카테고리 입력 (10자 이내로 작성해 주세요.)'
                        onKeyPress={
                            (e)=>{
                                if(e.key === 'Enter'){
                                    handleCategorySubmit()
                                }
                            }} ref={categoryRef}/>
                    <CategorySubmmitBtn onClick={handleCategorySubmit}>추가</CategorySubmmitBtn>
                </InputBox>
            </ModalContent>
        </>
    );
}