const POST_LOGIN_START = "thingilove/user/POST_LOGIN_START"
const POST_LOGIN_SUCCESS = "thingilove/user/POST_LOGIN_SUCCESS"
const POST_LOGIN_FAIL = "thingilove/user/POST_LOGIN_FAIL"
const POST_LOGOUT = "thingilove/user/POST_LOGOUT"

const POST_CATEGORY_SUCCESS = "thingilove/user/POST_CATEGORY_SUCCESS"
const POST_CATEGORY_FAIL = "thingilove/user/POST_CATEGORY_FAIL"
const DELETE_CATEGORY_SUCCESS = "thingilove/user/DELETE_CATEGORY_SUCCESS"
const DELETE_CATEGORY_FAIL = "thingilove/user/DELETE_CATEGORY_FAIL"

const POST_THING_SUCCESS = "thingilove/user/POST_THING_SUCCESS"

const GET_SEARCH_THING = "thingilove/thing/GET_SEARCH_THING"

const CLICK_THING = "thingilove/thing/CLICK_THING"

// const SESSION_ALIVED = "thingilove/user/SESSION_ALIVED";
// const SESSION_EXPIRED = "thingilove/user/SESSION_EXPIRED";

// export function sessionAlived(){
//     return{
//         type:SESSION_ALIVED
//     }
// }
// export function sessionExpired(){
//     return{
//         type:SESSION_EXPIRED
//     }
// }
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

export function postCategorySuccess(updatedCategory){
    return{
        type:POST_CATEGORY_SUCCESS,
        category:updatedCategory
    }
}

export function postCategoryFail(errorMessage){
    return{
        type:POST_CATEGORY_FAIL,
        errorMessage,
    }
}
export function deleteCategorySuccess(deletedCatgory){
    return{
        type:DELETE_CATEGORY_SUCCESS,
        category:deletedCatgory
    }
}

export function deleteCategoryFail(errorMessage){
    return{
        type:DELETE_CATEGORY_FAIL,
        errorMessage
    }
}


export function postThingSuccess(thing){
    return{
        type:POST_THING_SUCCESS,
        thing
    }
}
export function clickThing(id){
    return{
        type:CLICK_THING,
        id
    }
}

export function getSearchThing(things){
    return{
        type:GET_SEARCH_THING,
        things,
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
        things:[],
        clickedThing:0
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

    if(action.type === POST_CATEGORY_SUCCESS){
        return{
            login:state.login,
            userInfo:{
                ...state.userInfo,
                categories:[...state.userInfo.categories ,action.category],
            }
        }
    }
    if(action.type === POST_CATEGORY_FAIL){
        return{
            ...state,
            errorMessage:action.errorMessage
        }
    }
    if(action.type === DELETE_CATEGORY_SUCCESS){
        return{
            login:state.login,
            userInfo:{
                ...state.userInfo,
                things:[...state.userInfo.things.filter((t)=>t.categoryId !== action.category)],
                categories:[...state.userInfo.categories.filter((c)=>c.id !== action.category)]
            }    
        }
    }
    if(action.type === POST_THING_SUCCESS){
        return{
            login:state.login,
            userInfo:{
                ...state.userInfo,
                things:[...state.userInfo.things , action.thing]
            }
        }
    }

    if(action.type === CLICK_THING){
        return{
            login:state.login,
            userInfo:{
                ...state.userInfo,
                clickedThing:action.id
            }
        }
    }
    if(action.type === GET_SEARCH_THING){
        return{
                login:state.login,
                userInfo:{
                    ...state.userInfo,
                    things:[...action.things]
                }
            }
    }
    // if(action.type === SESSION_ALIVED){
    //     return{
    //         ...state
    //     }
    // }
    // if(action.type === SESSION_EXPIRED){
    //     return{
    //         ...initialState
    //     }
    // }

    return state;
}