import { styled } from "@mui/material";
import CategorySlide from './CategorySlide';
import { useSelector, useDispatch } from 'react-redux';
import { getDetailStart, getDetailSuccess, getDetailFail } from '../../redux/modules/detail';
import axios from "axios";
import ListBeforeLogin from './ListBeforeLogin';
import { clickThing, postLogOut } from "../../redux/modules/user";
import ThingListEmpty from './ThingListEmpty';


const ThingsListBox = styled('div')({
  maxHeight: '400px',
  minHeight: '400px',
  overflow: 'scroll',
  padding: '0 10px',
  marginTop: '10px',
  border: '1px solid lightgray',
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
  border: '1px solid lightgray',
  margin: '8px 0',
  borderRadius: '10px',
  /* background: rgba(240, 181, 171, 0.805); */
  boxShadow: '5px 5px 5px rgba(164, 152, 152, 0.3)',
  WebkitTransition:'all 0.3s ease-out',
  transition: 'all 0.3s ease-out',
  '&:hover':{
    background: '#b2fbe9',
    boxShadow: '1px 1px 5px rgba(164, 152, 152, 0.3)',
    margin: '10px 0',
  }
})


export default function ThingsListBody({handleModalOpen}) {

    
    const login = useSelector(state=>state.user.login);
    const {things,clickedThing} = useSelector(state=>state.user.userInfo);
    const dispatch = useDispatch();
    
    
    const handleThingDetail = (id) =>{
        dispatch(clickThing(id));
        async function handleThingDetail(){
          dispatch(getDetailStart());
          await axios.get('/api/user/content/'+id)
          .then((resp)=>{
            setTimeout(()=>{dispatch(getDetailSuccess(resp.data))},3000);
          })
          .catch((error)=>{
            if(error.response.status === 401){
              alert("로그인 세션이 만료되었습니다. 다시 로그인 해주세요!")
              dispatch(postLogOut())
            }
            dispatch(getDetailFail());
          })
        }
        handleThingDetail();
    }
    return(
        <>
            {
              login?
                <>
                  <CategorySlide handleModalOpen={handleModalOpen}/>
                  <ThingsListBox >
                    {
                      things.length === 0 ?
                      <ThingListEmpty/>
                      :
                      <ul>
                      {
                        things.map((t)=>{
                          return <ThigsItem 
                                    key={t.id}
                                    sx={{
                                      animation: {
                                        xs:'swing-in-bottom-bck 0.9s cubic-bezier(0.250, 0.460, 0.450, 0.940)',
                                        lg:'swing-in-bottom-bck1 0.9s cubic-bezier(0.250, 0.460, 0.450, 0.940) '
                                      },
                                      background: t.id===clickedThing? '#b2fbe9':"#eff0e5",
                                    }}
                                    >
                                    <a href="#detail"  onClick={()=>handleThingDetail(t.id)}>
                                      <div className='list-item'>
                                          <h3 className='list-title'>{t.name}</h3>
                                          <small className='list-description'>{t.comment}</small>
                                      </div>
                                    </a>  
                                </ThigsItem>
                        })
                      }
                    </ul>
                    }
                  </ThingsListBox>
                </>  
              :
              <ListBeforeLogin handleModalOpen={handleModalOpen}/>
            }
            
        </>
    );
}