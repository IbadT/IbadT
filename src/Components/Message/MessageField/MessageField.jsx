import React from "react";
import s from './Messagestyle.module.css'
import {updateNewMessage} from '../../redux/sendMessageReducer'


const Mess = (props) => {
    return (
        <div className={s.sendMessages}>
            {props.message}
            <img alt="#" src="https://mustact.by/img/empty/artist.avatar.png" />
        </div>
    )
}

// let Name = (props) => {
//     return (
//         <div>
//             {props.name}
//         </div>
//     )
// }

const MessageField = (props) => {
    let state = props.store.getState().sendMessage;

    let mess = state.messageData.map(i => <Mess message={i.message}/>)

    // let r = props.name.map(i => <Name name={i.name} />)

    let onSendMessage = () => {
        props.store.dispatch(updateNewMessage())
    }   
    
    let onUpdateMessage = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessage(body))
    }

    return (
        <div>
            <div className={s.head}>
                <div>Back</div>
                <div>Dmitriy</div>
                <div>
                    <span className={s.points}>...</span>
                    <img alt="#" src="https://mustact.by/img/empty/artist.avatar.png" />
                </div>
            </div>

            <div className={s.message}>
                <div>{mess}</div>
            </div>

            <div>
                <input onChange={ onUpdateMessage } value={state.newMessageBody}  placeholder="Input message"/>
                <span>
                    <button onClick={ onSendMessage }>Send</button>
                </span>
            </div>
            {/* <div>{r}</div> */}
        </div>
    )
}

export default MessageField;