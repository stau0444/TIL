import { styled } from '@material-ui/core';

const SelectSlider = styled('div')({
    height: '30px',
    margin:'0 auto',
    border: '1px solid gray',
    borderRadius: '20px',
    padding: '2px 5px',
    paddingTop:'0',
    display: 'flex',
    minHeight: 'fit-content',
    overflowY: 'hidden',
    '&>.selectButton':{
        height:'80%',
        margin: '4px',
        fontSize:'12px',
        padding:'5px 10px',
        borderRadius:'12px',
        /* border-bottom: 2px solid rgb(172, 149, 149);
        border-right: 2px solid rgb(172, 149, 149);
        background: rgba(240, 181, 171, 0.805); */
        color: '#59b96e',
        appearance: 'none;',
        fontWeight: 'bold',
        transition: 'all 0.3s ease-out',
        background: 'whitesmoke',
    },
    '&>.selectButton:hover':{
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
    return(
        <>
            <SelectSlider >
                <select className='selectButton'>
                    <option>물건 🍔</option>
                </select>
                <select className='selectButton'>
                    <option>장소 🏨</option>
                    <option>물건 🍔</option>
                    <option>식당 🍔</option>
                </select>
                <select className='selectButton'>
                    <option>카페 ☕️</option>
                </select>
                <select className='selectButton'>
                    <option>식당 🍕</option>
                </select>
                <select className='selectButton'>
                    <option>숙소</option>
                </select>
                <select className='selectButton'>
                    <option>물건🏨</option>
                </select>
                <select className='selectButton'>
                    <option>물건 🍔</option>
                </select>
                <select className='selectButton'>
                    <option>장소 🏨</option>
                </select>
                <select className='selectButton'>
                    <option>카페 ☕️</option>
                </select>
            </SelectSlider>
            <SearchOption >
                <button className='search-option-btn'>
                    자주간 순
                </button>
                <button className='search-option-btn'>
                    이름 순
                </button>
                <button className='search-option-btn'>
                    최근방문
                </button>
            </SearchOption>
            <ThingsListBox >
                <ul>
                  <li>
                    <div className='list-item'>
                        <h3 className='list-title'>정릉설렁탕</h3>
                        <small className='list-description'>정릉동 숨은 맛집 다신 안감</small>
                    </div>
                    <div className='list-item'>
                      <h3 className='list-title'>정릉설렁탕</h3>
                      <small className='list-description'>정릉동 숨은 맛집 다신 안감</small>
                    </div>
                    <div className='list-item'>
                      <h3 className='list-title'>정릉설렁탕</h3>
                      <small className='list-description'>정릉동 숨은 맛집 다신 안감</small>
                    </div>
                    <div className='list-item'>
                      <h3 className='list-title'>정릉설렁탕</h3>
                      <small className='list-description'>정릉동 숨은 맛집 다신 안감</small>
                    </div>
                    <div className='list-item'>
                      <h3 className='list-title'>정릉설렁탕</h3>
                      <small className='list-description'>정릉동 숨은 맛집 다신 안감</small>
                    </div>
                    <div className='list-item'>
                      <h3 className='list-title'>정릉설렁탕</h3>
                      <small className='list-description'>정릉동 숨은 맛집 다신 안감</small>
                    </div>
                  </li>
                </ul>
              </ThingsListBox>
        </>
    );
}