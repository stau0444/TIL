import { styled } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useState, useRef } from 'react';
import { ModalContent, ModalCloseBtnBox, ModalCloseBtn, ModalHeaderBox, UserInput, InputBox, InputLabel, NotValidAlert, ModalButton } from '../../modal';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { postThingSuccess } from '../../redux/modules/user';
import LoyaltyIcon from '@mui/icons-material/Loyalty';

const UserInputSelect = styled('select')({
    borderRadius:'10px',
    border:'1px solid #a8e9b0',
    marginBottom:'15px',
    width: '73%',
    fontSize:'13px',
    padding:'5px',
    paddingBottom:'3px',
    height: '35px',
    fontWeight:'500',
    color:'gray',
    textAlign:'center',
    transition: 'all 0.2s linear',
    ' &:focus ':{
        outline: 'none',
        borderColor: '#a8e9b0',
        boxShadow:' 0px 0px 5px #a8e9b0',
    },
})


export default function AddThingModal({handleModalOpen}) {
    const dispatch = useDispatch();

    const handleAddThing = () =>{
        validInputValues();

        const data={
            name:placeName,
            categoryId:selectRef.current.value,
            comment:comment,
            email:email
        }
        async function handleAddThing(){
            await axios.post("/api/user/thing",data)
                    .then((resp)=>{dispatch(postThingSuccess(resp.data)); handleModalOpen()})
                    .catch((error)=>{alert(error.response.data.error)})
        }
        handleAddThing()
    }
    const validInputValues = () =>{
        if(placeName.length > 10 || placeName.length === 0){
            alert("장소 이름은 1~10자 이하로 작성 가능합니다. 다시 작성 해주세요.")
            return
        }
        if(comment.length >30 || comment.length === 0){
            alert("한줄평은 1~30자 이하로 작성 가능합니다. 다시 작성 해주세요.")
            return
        }
        if(selectRef.current.value === '404'){
            alert("카테고리를 설정 해주세요.")
            return
        }
    }
    const selectRef = useRef("");
    const [placeName,setPlaceName] = useState("");
    const [comment,setComment] = useState("");
    const {categories,email} = useSelector(state => state.user.userInfo);
    return(
        <ModalContent>
            <ModalCloseBtnBox>
                <ModalCloseBtn 
                    onClick={(e)=>{handleModalOpen()}}
                >   
                    <HighlightOffIcon  sx={{
                        '&:hover':{
                            color:'#e75555',
                            animation: 'modalSpin 0.3s linear',
                        } 
                    }}fontSize='large'/>
                </ModalCloseBtn>
            </ModalCloseBtnBox>
            <ModalHeaderBox sx={{display:'flex' ,alignItems:'center',justifyContent:'center'}}>
                <p>장소추가</p>
                <LoyaltyIcon sx={{fontSize:'20px',color:'#80ce6f',marginLeft:'5px'}}/>
            </ModalHeaderBox>
            <InputBox>
                <div>
                    <InputLabel>장소</InputLabel>
                    {
                        placeName.length <11?
                        <>  
                            <UserInput onChange={(e)=>{setPlaceName(e.target.value)}}/>  
                        </>
                        :
                        <>
                            <UserInput sx={{
                                border:"1px solid #e75555",
                                '&:focus':{border:"1px solid #e75555",boxShadow:' 0px 0px 5px #e75555',
                                }}} 
                                onChange={(e)=>{setPlaceName(e.target.value)}}
                            />
                            <NotValidAlert >1~10자 사이로 작성해주세요</NotValidAlert>
                        </>
                    }
                </div>
                <div>
                    <InputLabel>카테고리 설정</InputLabel>
                    <UserInputSelect ref={selectRef} defaultValue={"404"}>
                        <option value="404"  disabled>카테고리 선택</option>
                        {categories.map(
                            (c)=>
                            <option key={c.id} value={c.id} >{c.name}</option>
                        )}
                    </UserInputSelect>
                </div>
                <div>
                    <InputLabel>한줄평</InputLabel>
                    {
                        comment.length <31 ?
                        <>
                            <UserInput  onChange={(e)=>{setComment(e.target.value)}}/>
                        </>
                        :
                        <>
                            <UserInput sx={{
                                border:"1px solid #e75555",
                                '&:focus':{border:"1px solid #e75555",boxShadow:' 0px 0px 5px #e75555',
                                }}} 
                                onChange={(e)=>{setComment(e.target.value)}}
                            />
                            <NotValidAlert >1~30자 사이로 작성해주세요</NotValidAlert>
                        </>
                    }
                </div>
                <ModalButton onClick={()=>{handleAddThing()}}>장소 추가</ModalButton>
            </InputBox>
        </ModalContent>
    );
}