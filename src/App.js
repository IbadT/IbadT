import React from "react";
import "./index.css";
import "./App.css";
import Header from "./Components/Header/Header";
import SideBar from "./Components/SideBar/SideBar";
import Content from "./Components/Content/Content";
import Message from "./Components/Message/Message";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MessageField from "./Components/Message/MessageField/MessageField";


// let PersonalMessages = (props) => {
//   return (
//     <Route path={'/message/'+props.name.map(i => i.name)}
//     element={<MessageField dispatch={this.props.dispatch} store={this.props.store} name={this.props.store.getState().messagesPage.messagesPage.dialogsData}/>}
//     />
//   )
// }


class Site extends React.Component {
  render() {
    debugger
    return (
      <BrowserRouter>
        <div className="wrapperContainer">
          <div className="container">
            <div className="header">
              <Header />
            </div>
            <div className="sidebar">
              <SideBar />
            </div>
            <div className="content">
              <Routes>
                <Route path="/profile"
                  element={<Content lastName="Kononovich" name="Eduard" 
                  stateData={this.props.stateData} 
                  // addPost={this.props.addPost}
                  // updateNewPost={this.props.updateNewPost} 
                  dispatch={this.props.dispatch}/>}
                />
                <Route path="/message" 
                  element={<Message  dialogsData={this.props.stateData.messagesPage.messagesPage.dialogsData} />} 
                />
                <Route path="/news" 
                  element={<News />} 
                />
                <Route path="/music" 
                  element={<Music />} 
                />
                <Route path="/settings" 
                  element={<Settings />} 
                />
                <Route path="/message/Dmitriy" 
                  element={<MessageField dispatch={this.props.dispatch} store={this.props.store} />} 
                />

                <Route path="/message/Andrey" 
                  element={<MessageField dispatch={this.props.dispatch} store={this.props.store} name={this.props.store.getState().messagesPage.messagesPage.dialogsData}/>} 
                />
                
                <Route path="/message/Sveta" 
                  element={<MessageField dispatch={this.props.dispatch} store={this.props.store} />} 
                />
                
                <Route path="/message/Sasha" 
                  element={<MessageField dispatch={this.props.dispatch} store={this.props.store} />} 
                />
                
                <Route path="/message/Viktor" 
                  element={<MessageField dispatch={this.props.dispatch} store={this.props.store} />} 
                />
                
                <Route path="/message/Valeriy" 
                  element={<MessageField dispatch={this.props.dispatch} store={this.props.store} />} 
                />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default Site

// class Button extends React.Component{
//     constructor(){
//         super();
//         this.state = {count : 0,}
//     }
//     updateCount(){
//         this.setState((prev)=>{
//             return {count : prev.count + 1}
//         })
//     }
//     render(){
//         return (
//             <button onClick={()=>this.updateCount()}>
//                 Ckick {this.state.count} times
//             </button>
//         )
//     }
// }

// ReactDOM.render(
//     <Button/>,
//     document.getElementById('root')
// )
