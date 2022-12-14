import LoginIcon from '@mui/icons-material/Login';
import { useSelector } from 'react-redux';
import { styled, Box, Typography } from '@mui/material';



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
    boxShadow: '8px 8px 10px #4b46464b',
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

const ContentSlogun = styled('div')({
    color: '#695a5ac8',
    display:'flex',
    fontSize: '8px',
    float:'right',
    marginRight:'10px',
    marginTop:'-6px'
})

export const UserInfo =styled('div')({
    height: '25px',
    boxShadow:'inset 3px 3px 5px #423c3c41',
    display: 'flex',
    alignItems:'center',
    color: '#847e7e',
    justifyContent:'center',
    borderRadius:'20px',
    padding:'4px 10px',
    background: '#d3dad5',
    '&>.user-thumb':{
        padding:'3px',
        borderRadius:'100px',
        background: 'whitesmoke',
    },
    '&>.user-id':{
        fontFamily: "'Alata', sans-serif",   
        fontSize:'12px',
        
        // fontWeight:'bold',
        marginRight: '4px',
    }
})

const UserInfoBox = ({children})=>{
    return <Box component={'div'} sx={{
        animation: 'swing-in-bottom-bck 1.4s cubic-bezier(0.175, 0.885, 0.320, 1.275) both',
        width:'160px',
        borderRadius:'20px' ,
        padding:'3px',
        marginRight:{xs:'10px',sm:'0'},
        background: '#eff0e5',
        boxShadow: '3px 5px 5px #4b46464b',
        borderBottom:'3px solid #423c3c41',
        borderRight:'3px solid #55505041',
    }}>
        {children}
    </Box>
}


export default function UserForm({handleModalOpen}) {
    const {login,userInfo} = useSelector(state=>state.user);
    return(
        <>  
            <UserFormBox>
                <ContentLogoBox className='content-logoBox'>
                    <ContentImageBox className='content-imageBox'>
                    {
                            login?
                                <UserInfoBox
                                    children={
                                        <UserInfo sx={{animation: 'swing-in-bottom-bck 1.4s cubic-bezier(0.175, 0.885, 0.320, 1.275) both',fontSize:'12px'}}>
                                            <p className='user-id'>{userInfo.email}</p>
                                            <img height="21px" className='user-thumb' src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" />
                                        </UserInfo>
                                    }
                                />
                            :
                            <UserInfoBox
                                children={
                                <UserInfo>
                                    <Typography  sx={{
                                        fontSize:"11px",
                                        fontFamily:"'NanumSquare' , san-serif",
                                        fontWeight:'bold'
                                        }}>
                                            ???????????? ??? ?????????????????????.
                                    </Typography>
                                </UserInfo>
                                }
                            />
                    }
                    </ContentImageBox>   
                </ContentLogoBox>
                <ContentLoginBox>
                    <ContentSlogun className='content-slogun'>
                                <small>?????? ???????????? ????????? ????????????! ???? ???? ????  ??????  ????</small>
                    </ContentSlogun>
                    <LoginBox>
                        {   
                            login?
                            <>
                                <UserFunctionLink href="#" alt=""  onClick={()=>{handleModalOpen("update-category")}}>???????????? ?????? &nbsp; | </UserFunctionLink>
                                <UserFunctionLink href="#" alt="" onClick={()=>{handleModalOpen("add-place")}}>???????????? &nbsp; |</UserFunctionLink>
                                <UserFunctionLink href="#" alt="" onClick={()=>{handleModalOpen("log-out")}}>???????????? </UserFunctionLink>
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
                    </LoginBox>
                </ContentLoginBox>
            </UserFormBox>    
        </>
    );
}