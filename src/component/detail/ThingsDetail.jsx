import { Box, Grid, styled, Typography,Skeleton } from "@mui/material";
import { useSelector } from 'react-redux';
import ReceiptSkeleton from '../modal/ReceiptSkeleton';


const ThingsDetailGrid = styled(Grid)({
    paddingTop:'11px',
    animation: 'modal 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) ',
});

const ThingsDetailsBox = styled(Box)({
    margin:'10px auto',
    maxWidth:'400px',
    background: '#eff0e5',
    boxShadow: '10px 10px 10px #4b46464b',
    borderRadius:'20px',
    height: '575px',
    padding: '15px',
    borderBottom:'5px solid #423c3c41',
    borderRight:'5px solid #55505041',
})

const ThingsDeatailsInner = styled('div')({
    borderRadius:'20px',
    // animation: 'modal 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) ',
})
const ThingsDetailHeader = styled('div')({
    paddingLeft: '15px',
    '& > div ':{
        marginBottom: '12px',
    },
    '& > div > small':{
        color: '#59b96e',
        fontSize:'14px',
        background: "#d3e0907e",
        padding:'2px',
        borderRadius:'3px',
        fontWeight:'bold',
        borderBottom:'2px solid gray',
        borderRight:'2px solid gray',
    }
})
const ThingsDetailInfo = styled('div')({
    fontSize:'12px',
    display: 'flex',
    border:'1px solid gray',
    padding: '8px 0px',
    paddingLeft:'5px',
    borderRadius:'20px',
    marginLeft:'-14px'
})
const ThingsSearchLink = styled('a')({
    textDecoration:'none',
    color:'#1f6b29',
    fontWeight:'bold',
    marginLeft:"10px",
    WebkitTransform:'all 0.2s linear',
    transition: 'all 0.2s linear',
    borderRadius:'20px',
    '&:hover':{
        background: "#47f45e",
    }
})
const ThingSearchNaverImg =styled('img')({
    width: "15px",
    marginLeft:'2px',
    marginTop: '-2px'
})
const ThingsDetailTitle = styled('h3')({
    color: '#59b96e',
    background: "#d3e0907e",
    display: 'inline-block',
    borderRadius:'3px',
    padding:'3px',
    paddingBottom:'1px',
    margin:'10px 0 15px 0',
    borderBottom:'2px solid gray',
    borderRight:'2px solid gray'
    
})
const CommentListBox = styled('div')({
    border: '1px solid gray',
    borderRadius:'20px',
    padding: '0 10px',
    maxHeight:'416px',
    marginTop:'15px',
    overflowY:'scroll'
})
const CommentBox = styled('div')({
    border: '1px solid gray',
    borderRadius:'20px',
    marginBottom:'10px', 
    padding:'10px',
    display: 'flex',
})
const CommentLeft=styled('div')({
    width: '70%',
    marginLeft:'5px',
    '& > .comment-content':{
        fontSize:'12px',
        marginTop:'5px'
    },
    '& > .comment-menu':{
        fontSize:'10px',
        color:'gray',
        margin:'3px 0'
    },
})
const CommentRight=styled('div')({
    width: '30%',
    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
    fontSize: '12px',
    color:'gray',    
})
const OneLineReviewBox=styled('div')({
    '&>.my-review':{
        fontSize:'14px',
        marginBottom:'11px',
        fontStyle:'italic',
        fontWeight:'bold',
        color:'gray'
    }
})
export default function ThingsDetail() {
    
    const {loading,receiptList,name,comment,visitTime} = useSelector(state => state.detail)
    const NAVER_SEARCH_URL = 'https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query='
    return(
        <>
            <ThingsDetailGrid item xs={12} lg={4} >
                <ThingsDetailsBox>
                    <ThingsDeatailsInner sx={{
                        animation: {
                            xs:'modal 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940)',
                            lg:'modal1 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) '
                          }
                    }}>
                        <ThingsDetailHeader>
                            <div>
                                {
                                    loading?
                                    <>
                                        <Skeleton sx={{width:"100px",height:"45px",padding:"0"}} animation="wave"/>
                                        <Skeleton sx={{width:"200px",height:"30px",marginBottom:"10px",marginTop:"-5px"}} animation="wave"/>
                                    </>
                                    :
                                    <>
                                        <ThingsDetailTitle>{name}</ThingsDetailTitle>
                                        <OneLineReviewBox>
                                            <p className='my-review'>" {comment} "</p>
                                        </OneLineReviewBox>
                                    </>
                                }
                                <ThingsDetailInfo>
                                    {
                                        loading?
                                            <Skeleton sx={{width:"150px",height:"18px",marginLeft:'10px'}} animation="wave"/>
                                            :
                                            <Typography variant="p"sx={{margin:'0 10px 0 10px','&>span':{color:'rgb(114, 183, 117)',fontWeight:"800",fontSize:"12px"}}}><span>{name}</span>에 <span>{visitTime}</span>번 방문했어요!</Typography>   
                                    }
                                    <ThingsSearchLink href={NAVER_SEARCH_URL+name} target="_blank" rel="noreferrer">네이버로 검색하기</ThingsSearchLink>
                                    <ThingSearchNaverImg src='https://i.pinimg.com/564x/fb/71/04/fb71048e03a5ada757f70d61b583d0bf.jpg' alt=''/>
                                </ThingsDetailInfo>
                            </div>
                            <div>
                                <small>comments</small>
                            </div>
                        </ThingsDetailHeader>
                        <CommentListBox>
                            <ul>
                                {   
                                loading?
                                    <>
                                      <ReceiptSkeleton num={11}/>  
                                    </>
                                :
                                    receiptList.map((c,i)=>{
                                    return  <li key={i}>
                                                <CommentBox sx={{
                                                    animation: {
                                                        xs:'swing-in-bottom-bck 0.9s cubic-bezier(0.250, 0.460, 0.450, 0.940)',
                                                        lg:'swing-in-bottom-bck1 0.9s cubic-bezier(0.250, 0.460, 0.450, 0.940) '
                                                      }
                                                }}>
                                                    <CommentLeft>
                                                        <p className='comment-menu'>메뉴: {c.menu.map(m=>m+",")}</p>
                                                        <p className='comment-content'>{c.comment}</p>
                                                    </CommentLeft>
                                                    <CommentRight>
                                                        <span>{c.visitDate}</span>
                                                    </CommentRight>
                                                </CommentBox>
                                            </li>
                                    })
                                }
                            </ul>
                        </CommentListBox>
                    </ThingsDeatailsInner>
                </ThingsDetailsBox>
            </ThingsDetailGrid>
        </>
    );
}