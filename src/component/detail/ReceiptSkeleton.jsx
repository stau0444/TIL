import { Skeleton ,styled} from "@mui/material";

const CommentBox = styled('div')({
    border: '1px solid lightgray',
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

export default function ReceiptSkeleton({num}) {
    return(
        <>
            <CommentBox>
                <CommentLeft>
                    <Skeleton sx={{width:"180px",height:"15px"}} animation="wave"/>
                    <Skeleton sx={{width:"200px",height:"15px"}} animation="wave"/>
                </CommentLeft>
                <CommentRight>
                    <span><Skeleton sx={{width:"80px",height:"15px"}} animation="wave"/></span>
                </CommentRight>
            </CommentBox>
            <CommentBox>
                <CommentLeft>
                    <Skeleton sx={{width:"180px",height:"15px"}} animation="wave"/>
                    <Skeleton sx={{width:"200px",height:"15px"}} animation="wave"/>
                </CommentLeft>
                <CommentRight>
                    <span><Skeleton sx={{width:"80px",height:"15px"}} animation="wave"/></span>
                </CommentRight>
            </CommentBox>
            <CommentBox>
                <CommentLeft>
                    <Skeleton sx={{width:"180px",height:"15px"}} animation="wave"/>
                    <Skeleton sx={{width:"200px",height:"15px"}} animation="wave"/>
                </CommentLeft>
                <CommentRight>
                    <span><Skeleton sx={{width:"80px",height:"15px"}} animation="wave"/></span>
                </CommentRight>
            </CommentBox>
            <CommentBox>
                <CommentLeft>
                    <Skeleton sx={{width:"180px",height:"15px"}} animation="wave"/>
                    <Skeleton sx={{width:"200px",height:"15px"}} animation="wave"/>
                </CommentLeft>
                <CommentRight>
                    <span><Skeleton sx={{width:"80px",height:"15px"}} animation="wave"/></span>
                </CommentRight>
            </CommentBox>
            <CommentBox>
                <CommentLeft>
                    <Skeleton sx={{width:"180px",height:"15px"}} animation="wave"/>
                    <Skeleton sx={{width:"200px",height:"15px"}} animation="wave"/>
                </CommentLeft>
                <CommentRight>
                    <span><Skeleton sx={{width:"80px",height:"15px"}} animation="wave"/></span>
                </CommentRight>
            </CommentBox>
            <CommentBox>
                <CommentLeft>
                    <Skeleton sx={{width:"180px",height:"15px"}} animation="wave"/>
                    <Skeleton sx={{width:"200px",height:"15px"}} animation="wave"/>
                </CommentLeft>
                <CommentRight>
                    <span><Skeleton sx={{width:"80px",height:"15px"}} animation="wave"/></span>
                </CommentRight>
            </CommentBox>
            <CommentBox>
                <CommentLeft>
                    <Skeleton sx={{width:"180px",height:"15px"}} animation="wave"/>
                    <Skeleton sx={{width:"200px",height:"15px"}} animation="wave"/>
                </CommentLeft>
                <CommentRight>
                    <span><Skeleton sx={{width:"80px",height:"15px"}} animation="wave"/></span>
                </CommentRight>
            </CommentBox>
            <CommentBox>
                <CommentLeft>
                    <Skeleton sx={{width:"180px",height:"15px"}} animation="wave"/>
                    <Skeleton sx={{width:"200px",height:"15px"}} animation="wave"/>
                </CommentLeft>
                <CommentRight>
                    <span><Skeleton sx={{width:"80px",height:"15px"}} animation="wave"/></span>
                </CommentRight>
            </CommentBox>
            <CommentBox>
                <CommentLeft>
                    <Skeleton sx={{width:"180px",height:"15px"}} animation="wave"/>
                    <Skeleton sx={{width:"200px",height:"15px"}} animation="wave"/>
                </CommentLeft>
                <CommentRight>
                    <span><Skeleton sx={{width:"80px",height:"15px"}} animation="wave"/></span>
                </CommentRight>
            </CommentBox>
            <CommentBox>
                <CommentLeft>
                    <Skeleton sx={{width:"180px",height:"15px"}} animation="wave"/>
                    <Skeleton sx={{width:"200px",height:"15px"}} animation="wave"/>
                </CommentLeft>
                <CommentRight>
                    <span><Skeleton sx={{width:"80px",height:"15px"}} animation="wave"/></span>
                </CommentRight>
            </CommentBox>
        </>
    );
}