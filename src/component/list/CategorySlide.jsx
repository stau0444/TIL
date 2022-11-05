
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
    const categoryList = useSelector(state => state.user.userInfo.categories);
    const dispatch = useDispatch();
    
    const [searchCondition, setSearchCondition] = useState({sort:"" , category:""});
    const handleSearch=(cond)=>{
        async function handleSearch(){
            const data = {...cond}
            await axios.get(`/api/user/content/search?category=${data.category.name}&sort=${data.sort}`)
                    .then((resp)=>{dispatch(getSearchThing(resp.data.thingList))})
                    .catch((error)=>{
                        if(error.response.status === 401){
                            alert("로그인 세션이 만료되었습니다. 다시 로그인 해주세요!")
                            dispatch(postLogOut())
                        }
                        console.log(error);
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
                    categoryList.length===0?
                    <Slide>
                            <CategoryBtn>
                                카테고리를 추가해주세요
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
                                            전체
                        </CategoryBtn>
                        {  
                            categoryList.map((c,i)=>{
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
                <OrderByBtnWrapper value="visitTime" query="자주간 순"/>
                <OrderByBtnWrapper value="byName" query="이름 순"/>
                <OrderByBtnWrapper value="recently" query="최근방문"/>
            </SearchOption>
        </>
    );
}