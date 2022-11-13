import { styled } from '@mui/material';

export const ReceiptListBox = styled('div')({
    border: '1px solid lightgray',
    borderRadius:'20px',
    padding: '0 10px',
    maxHeight:'400px',
    minHeight: '400px',
    overflowY:'scroll'
})

export const ReceiptBox = styled('div')({
    border: '1px solid lightgray',
    borderRadius:'20px',
    marginBottom:'10px', 
    padding:'10px',
    display: 'flex',
})
const ReceiptLeft=styled('div')({
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
    '& > .comment-total-price':{
        fontSize:'10px',
        color:'gray',
        marginTop:'6px'
    }
})
const ReceiptRight=styled('div')({
    width: '30%',
    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
    fontSize: '12px',
    color:'gray',    
})
export default function ReceiptList({receiptList}) {
    return(
        <ReceiptListBox>
            <ul>
                {
                    receiptList.map((r)=>{
                    return  <li key={r.id}>
                                <ReceiptBox sx={{
                                    animation: {
                                        xs:'swing-in-bottom-bck 0.9s cubic-bezier(0.250, 0.460, 0.450, 0.940)',
                                        lg:'swing-in-bottom-bck1 0.9s cubic-bezier(0.250, 0.460, 0.450, 0.940) '
                                        }
                                }}>
                                    <ReceiptLeft>
                                        <p className='comment-menu'>
                                            메뉴: {r.menuList.map(
                                                    m=>{ 
                                                        if(r.menuList[r.menuList.length-1] !== m){
                                                            return m+","
                                                        }
                                                        return m;
                                                    })
                                                    }
                                            </p>
                                        <p className='comment-content'>{r.comment}</p>
                                        {/* <p className='comment-total-price'>결제금액:</p> */}
                                    </ReceiptLeft>
                                    <ReceiptRight>
                                        <span>{r.createdAt}</span>
                                    </ReceiptRight>
                                </ReceiptBox>
                            </li>
                    })
                }
            </ul>
        </ReceiptListBox>
    );
}