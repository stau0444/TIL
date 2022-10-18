
import { Grid, styled, Box } from '@material-ui/core';

const ThingsDetailGrid = styled(Grid)({
    paddingTop:'11px'
});

const ThingsDetailsBox = styled(Box)({
    margin:'10px auto',
    maxWidth:'410px',
    minWidth:'410px',
    background: '#eff0e5',
    boxShadow: '5px 5px 5px #2c2a2a4c',
    borderRadius:'20px',
    height: '570px',
    padding: '15px',
    borderTop:'5px solid #a1979741',
    borderLeft:'5px solid #a1979741',
})

const ThingsDeatailsInner = styled('div')({
    borderRadius:'20px',
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
        borderRight:'2px solid gray'
    }
})
const ThingsDetailInfo = styled('div')({
    fontSize:'12px',
    display: 'flex',
    border:'1px solid gray',
    padding: '8px 0px',
    paddingLeft:'10px',
    borderRadius:'20px',
    marginLeft:'-15px'
})
const ThingsSearchLink = styled('a')({
    textDecoration:'none',
    color:'#1f6b29',
    fontWeight:'bold',
    marginLeft:"10px",
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
    maxHeight:'412px',
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
    '& > .comment-content':{
        fontSize:'14px'
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
    const NAVER_SEARCH_URL = 'https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query='
    return(
        <>
            <ThingsDetailGrid item xs={12}lg={4}>
                <ThingsDetailsBox>
                    <ThingsDeatailsInner>
                        <ThingsDetailHeader>
                            <div>
                                <ThingsDetailTitle>정릉설렁탕</ThingsDetailTitle>
                                <OneLineReviewBox>
                                    <p className='my-review'>" 정릉동 숨은 맛집 다신안감 "</p>
                                </OneLineReviewBox>
                                <ThingsDetailInfo>
                                    <p>정릉설렁탕에 5번 방문했어요!</p>   
                                    <ThingsSearchLink href={NAVER_SEARCH_URL+"정릉설렁탕"} target="_blank" rel="noreferrer">네이버로 검색하기</ThingsSearchLink>
                                    <ThingSearchNaverImg src='https://i.pinimg.com/564x/fb/71/04/fb71048e03a5ada757f70d61b583d0bf.jpg' alt=''/>
                                </ThingsDetailInfo>
                            </div>
                            <div>
                                <small>comments</small>
                            </div>
                        </ThingsDetailHeader>
                        <CommentListBox>
                            <ul>
                                <li>
                                    <CommentBox>
                                        <CommentLeft>
                                            <p className='comment-menu'>메뉴: 김치찌개 , 삼겹살 , 계란찜</p>
                                            <p className='comment-content'>comment description</p>
                                        </CommentLeft>
                                        <CommentRight>
                                            <span>2020/12/11</span>
                                        </CommentRight>
                                    </CommentBox>
                                </li>
                                <li>
                                <CommentBox>
                                        <CommentLeft>
                                            <p className='comment-menu'>메뉴: 김치찌개 , 삼겹살 , 계란찜</p>
                                            <p className='comment-content'>comment description</p>
                                        </CommentLeft>
                                        <CommentRight>
                                            <span>2020/12/11</span>
                                        </CommentRight>
                                    </CommentBox>
                                </li>
                                <li>
                                    <CommentBox>
                                        <CommentLeft>
                                            <p className='comment-menu'>메뉴: 김치찌개 , 삼겹살 , 계란찜</p>
                                            <p className='comment-content'>comment description</p>
                                        </CommentLeft>
                                        <CommentRight>
                                            <span>2020/12/11</span>
                                        </CommentRight>
                                    </CommentBox>
                                </li>
                                <li>
                                <CommentBox>
                                        <CommentLeft>
                                            <p className='comment-menu'>메뉴: 김치찌개 , 삼겹살 , 계란찜</p>
                                            <p className='comment-content'>comment description</p>
                                        </CommentLeft>
                                        <CommentRight>
                                            <span>2020/12/11</span>
                                        </CommentRight>
                                    </CommentBox>
                                </li>
                                <li>
                                <CommentBox>
                                        <CommentLeft>
                                            <p className='comment-menu'>메뉴: 김치찌개 , 삼겹살 , 계란찜</p>
                                            <p className='comment-content'>comment description</p>
                                        </CommentLeft>
                                        <CommentRight>
                                            <span>2020/12/11</span>
                                        </CommentRight>
                                    </CommentBox>
                                </li>
                                <li>
                                <CommentBox>
                                        <CommentLeft>
                                            <p className='comment-menu'>메뉴: 김치찌개 , 삼겹살 , 계란찜</p>
                                            <p className='comment-content'>comment description</p>
                                        </CommentLeft>
                                        <CommentRight>
                                            <span>2020/12/11</span>
                                        </CommentRight>
                                    </CommentBox>
                                </li>
                                <li>
                                <CommentBox>
                                        <CommentLeft>
                                            <p className='comment-menu'>메뉴: 김치찌개 , 삼겹살 , 계란찜</p>
                                            <p className='comment-content'>comment description</p>
                                        </CommentLeft>
                                        <CommentRight>
                                            <span>2020/12/11</span>
                                        </CommentRight>
                                    </CommentBox>
                                </li>
                            </ul>
                        </CommentListBox>
                    </ThingsDeatailsInner>
                </ThingsDetailsBox>
            </ThingsDetailGrid>
        </>
    );
}