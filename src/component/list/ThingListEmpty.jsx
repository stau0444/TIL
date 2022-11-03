import { styled } from '@mui/material';



const ThingListEmptyBox=styled('div')({
    minHeight:'400px',    
    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
    position: 'relative'
})
const ThingListemptyText=styled('p')({
    color:'gray',
    marginTop:'130px',
})
const ThingListemptyImg=styled('img')({
    color:'gray',
    width: '110px',
    position: 'absolute',
    top: '110px'
    
})
export default function ThingListEmpty() {
    return(
        <>
            <ThingListEmptyBox>
                <ThingListemptyImg src='ThingList.png' alt=''/>
                <ThingListemptyText>리스트를 추가해주세요!</ThingListemptyText>
            </ThingListEmptyBox>
        </>
    );
}