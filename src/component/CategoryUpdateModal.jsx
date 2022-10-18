
import { styled } from '@material-ui/core';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useRef, useState } from 'react';

const ModalBackground=styled('div')({
    width: '100%',
    height: '400%',
    background: '#423b3b7b',
    zIndex:'0',
    display: 'flex',
    alignItems:'center',
    justifyContent:'center',
    position:'absolute'
})

const UpdateModal=styled('div')({
    width: '400px',
    height: '450px',
    position: 'sticky',
    top: '100px',
    background: 'white',
    zIndex:'1',
    borderRadius:'20px',
    animation: 'modal 0.4s',
    animationDirection: 'alternate',
    padding: '0',
})

const UpdateModalCloseBtn = styled('button')({
    color:'gray',
    backgroundColor:  'inherit',
    border:'none',
    borderRadius:'20px',
    margin: '15px 10px 0 0',
    transition: 'all 0.2s linear',
    textAlign:'right',
    cursor: 'pointer',
    float: 'right',
    padding: '0',
    
})
const UpdateModalCloseBtnBox= styled('div')({
    width: '100%',
    height: '10%',
    
})

const CategoryListBox = styled('div')({
    textAlign:'center',
    width: '80%',
    height: '55%',
    border: '1px solid #a8e9b0',
    marginLeft:'30px',
    marginTop: '20px',
    borderRadius:'20px',
    padding:'10px',
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
    background: 'whitesmoke',
    '&:hover':{
        background: '#56d27747'
    }
})


const CategoryInputBox = styled('div')({
    width: '80%',
    height: '15%',
    marginLeft:'35px',
    marginTop:'5px',
    padding:'0 10px',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
})
const CategoryInput = styled('input')({
    border: '0',
    borderBottom:'1px solid #a8e9b0',
    marginRight:'5px',
    width: '150px',
    fontSize:'13px',
    padding:'5px',
    paddingBottom:'3px',
    height: '25px',
    fontWeight:'500',
    color:'gray',
    textAlign:'center',
    transition: 'all 0.1s linear',
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

const CategorySubmmitBtn = styled('button')({
    border: '0',
    background: '#51e674',
    color:'white',
    borderRadius:'20px',
    padding:'6px 10px',
    fontWeight:'bold',
    
})
const ModalHeaderBox=styled("div")({
    width: '100%',
    height: '5%',
    fontSize:'20px',
    textAlign:'center',
    margin: "-10px 0 20px 30px",
    '&>p':{
        fontWeight:'bold',
        color:'gray'
    }
})

export default function CategoryUpdateModal({handleModalOpen}) {
    const categoryRef = useRef();
    const [categoryList,setCategoryList] = useState(["양식","한식","중식","서울","아시안","성북구","가족끼리 갔던 곳","제주도 서귀포"]);

    const handleCategorySubmit = () =>{
        if(categoryList.length>9){
            alert("카테고리는 10개까지 저장 가능합니다.");
            return;
        }
        if(categoryRef.current.value === ''){
            alert("추가할 카테고리를 입력해 주세요.");
            return;
        }
        if(categoryList.find(c=>c === categoryRef.current.value) !== undefined){
            alert("카테고리는 중복될 수 없습니다.");
            categoryRef.current.value='';
            return;
        }
        setCategoryList([...categoryList,categoryRef.current.value]);
        categoryRef.current.value='';
    }
    return(
        <ModalBackground>
            <UpdateModal>
                <UpdateModalCloseBtnBox>
                    <UpdateModalCloseBtn 
                        onClick={()=>{handleModalOpen()}}
                    >   
                        <HighlightOffIcon  sx={{
                            '&:hover':{
                                color:'#e75555',
                                animation: 'modalSpin 0.5s',
                                animationDirection: 'nomal',
                            } 
                        }}fontSize='large'/>
                    </UpdateModalCloseBtn>
                </UpdateModalCloseBtnBox>
                <ModalHeaderBox>
                    <p>카테고리 목록</p>
                </ModalHeaderBox>
                <CategoryListBox>
                    {
                        categoryList.map((c,i)=>{
                            return  <Category  key={i}>
                                        <CategoryBox>
                                            <p>{c}</p>
                                            <HighlightOffIcon 
                                                sx={{
                                                    fontSize:'18px',
                                                    color:"gray",
                                                    marginLeft:'2px',
                                                    transition:'all 0.4s linear',
                                                    '&:hover':{
                                                        color:'#f05555',
                                                        animation: 'modalSpin 0.5s',
                                                        animationDirection: 'nomal',
                                                    }
                                                }}
                                                onClick={()=>{
                                                    const DeleteConfirm = window.confirm(c+"을(를) 삭제하시겠습니까?");
                                                    if(DeleteConfirm){
                                                        setCategoryList(categoryList.filter((ca)=>ca !== c))
                                                    }
                                                }}
                                            />
                                        </CategoryBox>
                                    </Category>;
                        })
                    }
                </CategoryListBox>
                <CategoryInputBox>
                    <CategoryInput 
                        placeholder='카테고리를 입력해주세요'
                        onKeyPress={
                            (e)=>{
                                if(e.key === 'Enter'){
                                    handleCategorySubmit()
                                }
                            }} ref={categoryRef}/>
                    <CategorySubmmitBtn onClick={handleCategorySubmit}>추가</CategorySubmmitBtn>
                </CategoryInputBox>
            </UpdateModal>
        </ModalBackground>
    );
}