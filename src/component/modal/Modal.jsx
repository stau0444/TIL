import LoginModal from './LoginModal';
import CategoryUpdateModal from './CategoryUpdateModal';
import AddPlaceModal from './AddPlaceModal';
import LogOutModal from './LogOutModal';
import SignUpModal from './SignUpModal';
import FindIdModal from './FindIdModal';
import FindPwdModal from './FindPwdModal';
import { ModalBackground } from '../../modal';
import AddReceiptModal from './AddReceiptModal';


const ModaBackgroundWrapper= (props)=>{
    return <ModalBackground>
                {props.comp}
           </ModalBackground>
}
export default function Modal({mode ,handleModalOpen}) {
    switch (mode) {
        case "log-in":
            return  <ModaBackgroundWrapper comp={<LoginModal handleModalOpen={handleModalOpen}/>}/>
        case "update-category":    
            return  <ModaBackgroundWrapper comp={<CategoryUpdateModal handleModalOpen={handleModalOpen}/>}/>
        case "add-place":    
        return  <ModaBackgroundWrapper comp={<AddPlaceModal handleModalOpen={handleModalOpen}/>}/>
        case "log-out":    
        return  <ModaBackgroundWrapper comp={<LogOutModal handleModalOpen={handleModalOpen}/>}/>
        case "sign-up":    
        return  <ModaBackgroundWrapper comp={<SignUpModal handleModalOpen={handleModalOpen}/>}/>
        case "find-id":    
        return  <ModaBackgroundWrapper comp={<FindIdModal handleModalOpen={handleModalOpen}/>}/>
        case "find-pwd":    
        return  <ModaBackgroundWrapper comp={<FindPwdModal handleModalOpen={handleModalOpen}/>}/>         
        case "add-receipt":
        return <ModaBackgroundWrapper comp={<AddReceiptModal handleModalOpen={handleModalOpen}/>}/>
        default:
            return  <ModaBackgroundWrapper comp={<SignUpModal handleModalOpen={handleModalOpen}/>}/>;
    }
}