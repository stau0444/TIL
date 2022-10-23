import { styled } from "@mui/material";
import CategorySlide from './CategorySlide';
import { useSelector, useDispatch } from 'react-redux';
import { getDetailStart, getDetailSuccess, getDetailFail } from '../../redux/modules/detail';
import axios from "axios";


const ThingsListBox = styled('div')({
  minHeight: '200px',
  maxHeight: '400px',
  overflow: 'scroll',
  padding: '0 10px',
  marginTop: '10px',
  border: '1px solid gray',
  borderRadius: '20px',
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
const ThigsItem = styled('li')({
  padding: '10px',
  border: '1px solid gray',
  margin: '10px 0',
  borderRadius: '10px',
  /* background: rgba(240, 181, 171, 0.805); */
  boxShadow: '5px 5px 5px rgba(164, 152, 152, 0.3)',
  transition: 'all 0.3s ease-out',
  '&:hover':{
    background: '#b2fbe9',
  }
})


export default function ThingsListBody() {
    const state = useSelector(state=>state);
    const thingsList = useSelector(state=>state.login.userInfo.things);
    const dispatch = useDispatch();
    const handleThingDetail = (id) =>{
        async function handleThingDetail(){
          dispatch(getDetailStart());
          await axios.get('/api/user/content/'+id)
          .then((resp)=>{
            setTimeout(()=>{dispatch(getDetailSuccess(resp.data)); console.log("loading")},3000);
            console.log(state);
          })
          .catch((resp)=>{
            dispatch(getDetailFail());
          })
        }
        handleThingDetail();
    }
    return(
        <>
            <CategorySlide/>
            <ThingsListBox>
                <ul>
                  {
                    thingsList.map((t,i)=>{
                      return <ThigsItem 
                                key={i}
                                sx={{
                                  animation: {
                                    xs:'swing-in-bottom-bck 0.9s cubic-bezier(0.250, 0.460, 0.450, 0.940)',
                                    lg:'swing-in-bottom-bck1 0.9s cubic-bezier(0.250, 0.460, 0.450, 0.940) '
                                  }
                                }}
                                >
                                <a href="#detail" onClick={()=>{handleThingDetail(t.id)}}>
                                  <div className='list-item'>
                                      <h3 className='list-title'>{t.name}</h3>
                                      <small className='list-description'>{t.comment}</small>
                                  </div>
                                </a>  
                             </ThigsItem>
                    })
                  }
                </ul>

              </ThingsListBox>
        </>
    );
}