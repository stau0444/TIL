const GET_DETAIL_START = "thingilove/DETAIL/GET_DETAIL_START";
const GET_DETAIL_SUCCESS = "thingilove/DETAIL/GET_DETAIL_SUCCESS";
const GET_DETAIL_FAIL = "thingilove/DETAIL/GET_DETAIL_FAIL";

const RESET_DETAIL = "thingilove/DETAIL/RESET_DETAIL";

const POST_RECEIPT_SUCCESS = "thingilove/DETAIL/POST_RECEIPT_SUCCESS"

export function getDetailStart(){
    return{
        type:GET_DETAIL_START,
        loading:true
    }
}

export function resetDetail(){
    return{
        type:RESET_DETAIL,
        loading:false
    }
}
export  function getDetailSuccess(detail){
    return{
        type:GET_DETAIL_SUCCESS,
        loading:false,
        detail,
    }
}
export function getDetailFail(){
    return{
        type:GET_DETAIL_FAIL,
        loading:false
    }
}

export function postReceiptSuccess(receipt){
    return{
        type:POST_RECEIPT_SUCCESS,
        receipt
    }
}

const initialState = {
  name:"",
  comment:"",
  visitTime:0,
  receiptList:[],
  loading:false,
};

export default function  reducer(state = initialState, action) {
    if(action.type === GET_DETAIL_START){
        return {...initialState,loading:action.loading};
    } 
    if(action.type === GET_DETAIL_SUCCESS){
        return {
            loading:action.loading,
            ...action.detail,
        };
    }
    if(action.type === GET_DETAIL_FAIL){
        console.log("get_detail_fail")
        return {...initialState,loading:action.loading};
    }
    if(action.type === RESET_DETAIL){
        return {...initialState};
    }

    if(action.type === POST_RECEIPT_SUCCESS){
        return{
            ...state,
            visitTime:state.visitTime+1,
            receiptList:[...state.receiptList , action.receipt]
        }
    }
    return state;
}