
import { styled } from '@mui/material';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Slide = styled('div')({
    height: '30px',
    margin:'0 auto',
    border: '1px solid gray',
    borderRadius: '20px',
    padding: '4px 5px',
    paddingTop:'0',
    display: 'flex',
    minHeight: 'fit-content',
    overflowY: 'hidden',
    '&>button>option':{
      color: '#59b96e',
      fontWeight: 'bold',    
    },
    '&>button':{
        height:'80%',
        margin: '5px 3px',
        fontSize:'12px',
        border: '1px solid gray',
        padding:'5px 8px',
        borderRadius:'12px',
        color: '#59b96e',
        fontWeight: 'bold',
        WebkitTransition:'all 0.3s ease-out',
        transition: 'all 0.3s ease-out',
        background: 'whitesmoke',
    },
    '&>button:hover':{
        backgroundColor:'#b2fbe9'
    }
})

const SearchOption = styled('div')({
    height: '30px',
    margin:'0 auto',
    padding: '2px 5px',
    display: 'flex',
    minHeight: 'fit-content',
    overflowY: 'hidden',
    '&>.search-option-btn':{
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
    },
    '&>.search-option-btn:hover':{
        backgroundColor:'#b2fbe9'
    }
  })

export default function CategorySlide() {
    const categoryList = useSelector(state => state.user.userInfo.categories);
    
    const [searchCondition, setSearchCondition] = useState({orderBy:"" , category:""});

    const handleCategory = (value) => {
        setSearchCondition({orderBy:searchCondition.orderBy , category: value})  
        console.log(searchCondition)
        //검색
    } 
    const handleOrderBy = (value) => {
    setSearchCondition({orderBy:value , category: searchCondition.category})  
    console.log(searchCondition)
    }  

    return(
        <>
            <Slide>
            {  
                categoryList.map((c,i)=>{
                return <button  key={c.id} onClick={()=>{handleCategory(c)}}>
                            <option>
                            {c.name}
                            </option>
                        </button>
                })
            }
            </Slide>
            <SearchOption>
                <button className='search-option-btn' onClick={()=>{handleOrderBy("visitTime")}}>
                    자주간 순
                </button>
                <button className='search-option-btn' onClick={()=>{handleOrderBy("name")}}>
                    이름 순
                </button>
                <button className='search-option-btn' onClick={()=>{handleOrderBy("recently")}}>
                    최근방문
                </button>
            </SearchOption>
        </>
    );
}