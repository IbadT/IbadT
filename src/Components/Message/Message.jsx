import React from "react";
import s from "./Message.module.css";
import { NavLink } from "react-router-dom";

const Dialog = (props) => {
  return (
    <div>
      <img alt="#" className={s.avatar} src="https://mustact.by/img/empty/artist.avatar.png" />
      <NavLink className={s.items} to={`/message/${props.name}`}>
        {props.name}
      </NavLink>
    </div>
  );
};

// const Mess = (props) => {
//   return (
//     <div>
//       <div>{props.m}</div>
//     </div>
//   );
// };

//or mey imput id for everyone person => id=1 insted of to={`/message/${props.name}`} === to={'/message/' + props.id}

class Message extends React.Component {
  render() {

  let d = this.props.dialogsData.map(i => <Dialog name = {i.name}/>)
  // let m = this.props.messagesData.map(i => <Mess m={i.message} />)
    return (
      <div className={s.container}>
        <div className={s.dialogs}>
          {d}
          {/* <Dialog name={dialogsData.map(i => <div key ={i.id}>{i.name}</div>)} /> */}
        </div>
        <div className={s.messages}>
          {/* {m} */}
          {/* <Mess m = {messagesData.map(i => <div key={i.key}>{i.message}</div>)} /> */}
        </div>
      </div>
    );
  }
}

export default Message;