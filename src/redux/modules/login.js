const POST_LOGIN_START = "thingilove/login/POST_LOGIN_START"
const POST_LOGIN_SUCCESS = "thingilove/login/POST_LOGIN_SUCCESS"
const POST_LOGIN_FAIL = "thingilove/login/POST_LOGIN_FAIL"
const POST_LOGOUT = "thingilove/login/POST_LOGOUT"

export function postLogOut(){
    return{
        type:POST_LOGOUT,
        loading:false,
    }
}

export function postLoginStart(){
    return{
        type:POST_LOGIN_START,
        loading:true,
    }
}

export function postLoginSuccess(loginState){
    return{
        type:POST_LOGIN_SUCCESS,
        loading:false,
        loginState
    }
}

export function postLoginFail(message){
    return{
        type:POST_LOGIN_FAIL,
        message:message,
        loading:false,
    }
}

const initialState = {
    login:false,
    userInfo:{
        email: "",
        id: 0,
        profileUrl:"",
        createdAt: "",
        categories:[],
        things:[]
    }
};

export default function  reducer(state = initialState, action) {
    if(action.type === POST_LOGOUT){
        return {...initialState};
    }
    if(action.type === POST_LOGIN_START){
        return {
            ...state,
            loginState:false
        };
    } 
    if(action.type === POST_LOGIN_SUCCESS){
        const {email,createdAt,categories,things} = action.loginState;
        return {
          login: true,
          userInfo: {
            email,
            createdAt,
            categories,
            things,
          },
        };
    }
    if(action.type === POST_LOGIN_FAIL){
        return{
            login:false,
            error:action.message,
            userInfo:{
                ...initialState.userInfo
            }
        }
    }
    return state;
}