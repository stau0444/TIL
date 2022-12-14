
import { styled } from '@mui/material';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios  from 'axios';
import { getSearchThing, postLogOut } from '../../redux/modules/user';

const Slide = styled('div')({
    height: '30px',
    margin:'0 auto',
    border: '1px solid lightgray',
    borderRadius: '20px',
    padding: '4px 5px',
    paddingTop:'0',
    display: 'flex',
    minHeight: 'fit-content',
    overflowY: 'hidden',
    scrollBehavior:'smooth',
    '&>button>option':{
      color: '#59b96e',
      fontWeight: 'bold',    
    },

})

const SearchOption = styled('div')({
    height: '30px',
    margin:'0 auto',
    padding: '2px 5px',
    display: 'flex',
    minHeight: 'fit-content',
    justifyContent:'center',
    overflowY: 'hidden',
  })
  const CategoryBtn=styled('button')({
    cursor: 'pointer',
    height:'80%',
    paddingTop: '3px',
    margin: '5px 3px',
    fontSize:'12px',
    border: '1px solid lightgray',
    borderRadius:'12px',
    color: '#59b96e',
    fontWeight: 'bold',
    transition: 'all 0.3s ease-out',
    '&:hover':{
        backgroundColor:'#b2fbe9'
    },
  })
  const OrderByBtn=styled('button')({
        cursor: 'pointer',
        height:'80%',
        margin: '4px',
        marginBottom:'0',
        fontSize:'12px',
        borderRadius:'20px',
        border: '0px',
        marginTop:'6px',
        color: '#59b96e',
        fontWeight: 'bold',
        transition: 'all 0.3s ease-out',
        background: 'whitesmoke',
    '&:hover':{
        backgroundColor:'#b2fbe9'
    }
  })
  

export default function CategorySlide() {
    
    const {categories,email} = useSelector(state => state.user.userInfo);
    const dispatch = useDispatch();
    
    const [searchCondition, setSearchCondition] = useState({sort:"" , category:""});
    const handleSearch=(cond)=>{
        async function handleSearch(){
            const data = {...cond}
            await axios.get(`/api/user/content/search?category=${data.category.name}&sort=${data.sort}&email=${email}`)
                    .then((resp)=>{console.log('email',email);dispatch(getSearchThing(resp.data.thingList))})
                    .catch((error)=>{
                        if(error.response.status === 401){
                            alert("????????? ????????? ?????????????????????. ?????? ????????? ????????????!")
                            dispatch(postLogOut())
                        }
                    })
        }
        handleSearch();
    }
    const handleCategory = (value) => {
        setSearchCondition({sort:searchCondition.sort , category: value})  
        handleSearch({sort:searchCondition.sort , category: value});
    } 
    const handleOrderBy = (value) => {
        setSearchCondition({sort:value , category: searchCondition.category})  
        handleSearch({sort:value , category: searchCondition.category});
    }  

    const OrderByBtnWrapper= ({query,value}) =>{
        return <OrderByBtn 
                    sx={{
                        backgroundColor: searchCondition.sort===value?'#b2fbe9':'whitesmoke',
                        border: searchCondition.sort===value?'1px solid lightgray':'',
                    }}
                    onClick={()=>{handleOrderBy(value)
                }}>
                    {query}
                </OrderByBtn>
    }

    return(
        <>
                {
                    categories.length===0?
                    <Slide>
                            <CategoryBtn>
                                ??????????????? ??????????????????
                            </CategoryBtn>
                    </Slide>
                    :
                    <Slide>    
                        <CategoryBtn
                                    key={0} 
                                    sx={{
                                        backgroundColor: searchCondition.category.name==="all"?'#b2fbe9':'whitesmoke',
                                        padding: '3px 10px',
                                        minWidth:'48px'
                                        }}
                                     onClick={()=>{handleCategory({id:0,name:"all"})}}
                                        >
                                            ??????
                        </CategoryBtn>
                        {  
                            categories.map((c,i)=>{
                            return <>
                                        <CategoryBtn  
                                            sx={{
                                                backgroundColor: searchCondition.category.name===c.name?'#b2fbe9':'whitesmoke',
                                            }}
                                            key={c.id} 
                                            onClick={()=>{handleCategory(c)}}>
                                                <option key={c.id}>
                                                {c.name}
                                                </option>
                                        </CategoryBtn>
                                    </>
                            })
                        }
                    </Slide>
                }
            <SearchOption>
                <OrderByBtnWrapper value="visitTime" query="????????? ???"/>
                <OrderByBtnWrapper value="byName" query="?????? ???"/>
                <OrderByBtnWrapper value="recently" query="????????????"/>
            </SearchOption>
        </>
    );
}