import { styled } from '@material-ui/core';
import LoginIcon from '@mui/icons-material/Login';


const UserFormBox = styled('div')({
    margin:'10px auto',
    maxWidth:'438px',
    minWidth:'438px',
    height: '80px',
    background: '#eff0e5',
    marginBottom:'10px',
    borderRadius:'20px',
    alignItems:'center',
    display: 'flex',
    boxShadow: '5px 5px 5px #2c2a2a4c',
    borderTop:'5px solid #a1979741',
    borderLeft:'5px solid #a1979741',
 })
const ContentLogoBox = styled('div')({
    padding:'10px',
    paddingTop:'14px',
    width: "20%",
})
const ContentImageBox =styled('div')({
    textAlign: 'center',
    marginBottom: '5px',
})
const ContentLogoImage =styled('img')({
    borderRadius: '5px',
    width: '70px',

})
const ContentLogoDesc = styled('p')({
    margin: '0',
    marginTop: '-4px',
    fontSize: '5px',
    color:'#38b677',
    fontFamily: "'Alata', sans-serif",
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
    },
    
    '&>.category-update-link':{
        
    },
    '&>.add-thing-link':{
        
    },
    
})
const LoginLink = styled('a')({
        fontSize:'13px',
        color: '#695a5ac8',
        fontWeight:'bold',
        border: '1px solid gray',
        marginLeft:'240px',
        transition: 'all 0.3s ease-out',
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
    display: 'flex',
    alignItems:'center',

    color: 'gray',
    border: '1px solid #b3dea8',
    borderRadius:'20px',
    height: "30%",
    padding:'4px 7px',
    background: 'palegreen',
    marginRight:'30px',
    '&>.user-thumb':{
        width: '22px',
        padding:'3px',
        borderRadius:'100px',
        background: 'whitesmoke',
    },
    '&>.user-id':{
        fontFamily: "'Alata', sans-serif",   
        fontSize:'13px',
        // fontWeight:'bold',
        marginRight: '3px',
    }
})
const ContentSlogun = styled('div')({
    color: '#695a5ac8',
    fontSize: '8px',
    float:'right',
    marginRight:'10px',
    marginTop:'-6px'
})


export default function UserForm({handleModalOpen}) {
    const login =true;

    return(
        <>  
            <UserFormBox>
                <ContentLogoBox className='content-logoBox'>
                    <ContentImageBox className='content-imageBox'>
                        <ContentLogoImage className='content-logo' src='/tilLogo.png' alt=''/>
                        <ContentLogoDesc className='content-logo-desc'>Things I love</ContentLogoDesc>
                    </ContentImageBox>   
                </ContentLogoBox>
                <ContentLoginBox>
                    <ContentSlogun className='content-slogun'>
                                <small>내가 좋아하는 것들만 저장해요! 🍔 🌮 🍷  ☕️  🥩</small>
                    </ContentSlogun>
                    <LoginBox>
                        {
                            login?
                            <>
                                <UserFunctionLink href="#" alt="" className='category-update-link' onClick={()=>{handleModalOpen()}}>카테고리 수정 &nbsp; | </UserFunctionLink>
                                <UserFunctionLink href="https://blog.ugosdev.com" alt="" className='add-thing-link'>장소추가 &nbsp; |</UserFunctionLink>
                                <UserFunctionLink href="https://blog.ugosdev.com" alt="" className='logout-thing-link'>로그아웃 </UserFunctionLink>
                            </>
                            :
                            <>
                                <LoginLink href='123'>
                                    Login 
                                    <LoginIcon sx={{fontSize:"15px",color:"royalblue",verticalAlign:'middle',paddingBottom:'1px'}}/>
                                </LoginLink>
                            </>
                        }
                        {/* login 이전 ui */}
                    </LoginBox>
                </ContentLoginBox>
                {
                    login?
                    <UserInfo>
                        <p className='user-id'>stau04</p>
                        <img className='user-thumb' src="logo192.png" alt="" />
                    </UserInfo>
                    :
                    ""
                }
            </UserFormBox>    
        </>
    );
}