import LoginIcon from '@mui/icons-material/Login';
import { useSelector } from 'react-redux';
import { styled,  } from '@mui/material';



const UserFormBox = styled('div')({
    margin:'10px auto',
    maxWidth:'438px',
    position: 'relative',
    height: '80px',
    background: '#eff0e5',
    marginBottom:'10px',
    borderRadius:'20px',
    alignItems:'center',
    display: 'flex',
    boxShadow: '10px 10px 10px #4b46464b',
    // borderTop:'5px solid #a1979741',
    // borderLeft:'5px solid #a1979741',
    borderBottom:'5px solid #423c3c41',
    borderRight:'5px solid #55505041',
 })
const ContentLogoBox = styled('div')({
    padding:'10px',
    paddingTop:'14px',
    width: "20%",
})
const ContentImageBox =styled('div')({
    textAlign: 'center',
    marginBottom: '3px',
    marginLeft:'5px'
})
const ContentLogoImage =styled('img')({
    borderRadius: '5px',
    width: '70px',
    border: '1px solid #78a150',
})

const ContentLogoDesc = styled('p')({
    margin: '0',
    marginTop: '-3px',
    fontSize: '5px',
    color:'#bfce84',
    // fontFamily: "'Alata', sans-serif",
    fontFamily: "'Spicy Rice', cursive",

})
const ContentLoginBox = styled('div')({
    width:'70%',
    
})
const LoginBox = styled('div')({
    borderRadius:'20px',
    margin:" 5px 11px 0 0",
    height: '22px',
    display: 'flex',
    alignItems:'center',
    float: 'right',
    '&>a':{
        marginTop:'10px',
        fontSize:'11px',
        color: '#695a5ac8',
        fontWeight:'bold',
        padding:'5px',
        borderRadius:'20px',
        animation: 'swing-in-bottom-bck 1.4s cubic-bezier(0.175, 0.885, 0.320, 1.275) both',
    },
    
})
const LoginLink = styled('a')({
        width:'60px',
        textAlign:'center',
        fontSize:'13px',
        color: '#695a5ac8',
        fontWeight:'bold',
        border: '1px solid gray',
        marginLeft:'240px',
        WebkitTransition:'all 0.3s ease-out',
        transition: 'all 0.3s ease-out',
        animation: 'swing-in-bottom-bck 1.4s cubic-bezier(0.175, 0.885, 0.320, 1.275) both',
        '&:hover':{
            background: '#b3e7a7',
            color:'white'
        }        
})
const UserFunctionLink = styled('a')({
    fontSize:'13px',
    color: '#695a5ac8',
    fontWeight:'bold',
})
const UserInfo =styled('div')({
    position: 'absolute',
    boxShadow: '10px 10px 10px #4b46464b',
    borderBottom:'3px solid #423c3c41',
    borderRight:'3px solid #55505041',
    top:'-46px',
    right: '-20px',
    display: 'flex',
    alignItems:'center',
    animation: 'swing-in-bottom-bck 1.4s cubic-bezier(0.175, 0.885, 0.320, 1.275) both',
    color: 'gray',
    borderRadius:'20px',
    padding:'4px 10px',
    background: 'palegreen',
    marginRight:'18px',
    marginLeft:'3px',
    '&>.user-thumb':{
        width: '20px',
        padding:'3px',
        borderRadius:'100px',
        background: 'whitesmoke',
    },
    '&>.user-id':{
        fontFamily: "'Alata', sans-serif",   
        fontSize:'11px',
        
        // fontWeight:'bold',
        marginRight: '3px',
    }
})
const ContentSlogun = styled('div')({
    color: '#695a5ac8',
    display:'flex',
    fontSize: '8px',
    float:'right',
    marginRight:'10px',
    marginTop:'-6px'
})


export default function UserForm({handleModalOpen}) {
    const {login,userInfo} = useSelector(state=>state.user);
    return(
        <>  
            <UserFormBox>
                <ContentLogoBox className='content-logoBox'>
                    {/* sx={{background:'#86940b4a',paddingBottom:'2px',borderRadius:'15px'}} */}
                    <ContentImageBox className='content-imageBox'>
                        <ContentLogoImage className='content-logo' src='/tilLogo.png' alt=''/>
                        {/* <ContentLogoText  sx={{animation: {xs:'shadow-pop-tr 0.8s both',lg:'shadow-pop-tr2 0.8s both'},}} variant='p' >TIL</ContentLogoText> */}
                        <ContentLogoDesc className='content-logo-desc'>Things I Love</ContentLogoDesc>
                    </ContentImageBox>   
                </ContentLogoBox>
                <ContentLoginBox>
                    <ContentSlogun className='content-slogun'>
                                <small>내가 좋아하는 것들만 저장해요! 🍔 🌮 🍷  ☕️  🥩</small>
                                {
                                        login?
                                        <UserInfo sx={{right:""}}>
                                            <p className='user-id'>{userInfo.email}</p>
                                            <img height="21px" className='user-thumb' src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" />
                                        </UserInfo>
                                        :
                                        ""
                                }
                    </ContentSlogun>
                    <LoginBox>
                        {   
                            login?
                            <>
                                <UserFunctionLink href="#" alt=""  onClick={()=>{handleModalOpen("update-category")}}>카테고리 수정 &nbsp; | </UserFunctionLink>
                                <UserFunctionLink href="#" alt="" onClick={()=>{handleModalOpen("add-place")}}>장소추가 &nbsp; |</UserFunctionLink>
                                <UserFunctionLink href="#" alt="" onClick={()=>{handleModalOpen("log-out")}}>로그아웃 </UserFunctionLink>
                            </>
                            :
                            <>
                                <LoginLink href='#' onClick={()=>{handleModalOpen("log-in");}}>
                                    Login 
                                    <LoginIcon 
                                    sx={{
                                        fontSize:"15px",
                                        color:"royalblue",
                                        verticalAlign:'middle',
                                        paddingBottom:'1px',
                                    }}
                                    />
                                </LoginLink>
                            </>
                        }
                        {/* login 이전 ui */}
                    </LoginBox>
                </ContentLoginBox>
            </UserFormBox>    
        </>
    );
}