import { styled } from "@mui/material";
import { useState } from 'react';

const SelectSlider = styled('div')({
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
        paddingTop:'3.5px',
        borderRadius:'12px',
        color: '#59b96e',
        fontWeight: 'bold',
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

const ThingsListBox = styled('div')({
  minHeight: '200px',
  maxHeight: '400px',
  overflow: 'scroll',
  padding: '0 10px',
  marginTop: '10px',
  border: '1px solid gray',
  borderRadius: '20px',
  '& .list-item':{
    padding: '10px',
    border: '1px solid gray',
    margin: '10px 0',
    borderRadius: '10px',
    /* background: rgba(240, 181, 171, 0.805); */
    boxShadow: '5px 5px 5px rgba(164, 152, 152, 0.3)',
    transition: 'all 0.3s ease-out',
  },
  '& .list-item:hover':{
    background: '#b2fbe9',
  },
  '& .list-title':{
    margin: '3px 0',
    fontSize: '15px',
    color: '#59b96e',
  },
  
  '& .list-description':{
    margin: '3px 0',
    color: '#616756',
  },
  /* background: rgb(65, 222, 172); */
})
export default function ThingsListBody() {
  const [thingsList,setThingsList] = useState(
                    [
                      {thingName:"정릉설렁탕",comment:"정릉동 숨은 맛집 다신 안감"},
                      {thingName:"정릉설렁탕",comment:"정릉동 숨은 맛집 다신 안감"},
                      {thingName:"정릉설렁탕",comment:"정릉동 숨은 맛집 다신 안감"},
                      {thingName:"정릉설렁탕",comment:"정릉동 숨은 맛집 다신 안감"},
                      {thingName:"정릉설렁탕",comment:"정릉동 숨은 맛집 다신 안감"},
                      {thingName:"정릉설렁탕",comment:"정릉동 숨은 맛집 다신 안감"},
                      {thingName:"정릉설렁탕",comment:"정릉동 숨은 맛집 다신 안감"},
                      {thingName:"정릉설렁탕",comment:"정릉동 숨은 맛집 다신 안감"},
                    ]);
  const[categoryList,setCategoryList] = useState(
                    [
                      "물건 🍔" , "장소 🏨", "카페 ☕️" , "식당 🍕" , "물건🏨","물건 🍔" , "장소 🏨", "카페 ☕️" , "식당 🍕" , "물건🏨",
                    ]
  );
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
            <SelectSlider >
                {
                  categoryList.map((c,i)=>{
                    return <button key={i} onClick={()=>{handleCategory(c)}}>
                              <option>
                                {c}
                              </option>
                           </button>
                  })
                }
            </SelectSlider>
            <SearchOption >
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
            <ThingsListBox sx={{
                    animation: {
                      xs:'modal 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940)',
                      lg:'modal1 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) '
                    }
                    }} >
                <ul>
                  {
                    thingsList.map((t,i)=>{
                      return <li key={i}>
                                <div className='list-item'>
                                    <h3 className='list-title'>{t.thingName}</h3>
                                    <small className='list-description'>{t.comment}</small>
                                </div>
                             </li>
                    })
                  }
                </ul>

              </ThingsListBox>
        </>
    );
}