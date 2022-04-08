import React from "react";
import s from "./Content.module.css";
import MyPosts from "../MyPosts/MyPosts";

class Content extends React.Component {
  constructor(props){
    super(props)
    this.state = {likesCount : 0};
  }
  updateLikesCount(){
    this.setState((prev)=>{
      return{likesCount : prev.likesCount + 1}
    })
  }
  render() {
    return (
      <div className={s.container}>
        <div className={s.bord}>
          <img
            alt="#"
            className={s.img}
            src="https://www.ronenbekerman.com/wp-content/uploads/2010/05/Grand-prize-winner-bertrand-benoit-exterior-1200px.jpg"
          />
        </div>

        <div className={s.discription}>
          <div className={s.ava}>
            <img
              alt="#"
              className={s.avatar}
              src="https://html5css.ru/howto/img_avatar.png"
            />
          </div>

          <div className={s.forSimbols}>
            <span onClick={()=>this.updateLikesCount()} className={s.symbolHeart}>❤{this.state.likesCount}</span>
            <span>comm</span>
          
          </div>

          {/* <div className={s.p}>
            <input id="toggle-heart" type="checkbox" />
            <label for="toggle-heart" aria-label="like">
              ❤
            </label>
            <img className={s.com} src="https://thumbs.dreamstime.com/b/%D0%BA%D0%BE%D0%BC%D0%BC%D0%B5%D0%BD%D1%82%D0%B8%D1%80%D1%83%D0%B5%D1%82-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D1%80%D0%B0%D0%B7%D0%B3%D0%BE%D0%B2%D0%BE%D1%80-%D1%81%D0%BE%D0%BE%D0%B1%D1%89%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B1%D0%B5%D1%81%D0%B5%D0%B4%D1%83%D0%B5%D1%82-%D1%81%D0%BA%D0%B0%D0%B6%D0%B5%D0%BC-%D0%B2-%D1%82%D0%BE%D0%B2%D0%B0%D1%80-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80-197490804.jpg" />
          </div> */}

          <div className={s.secondiscription}>
            <div className={s.name}>
              {this.props.lastName} {this.props.name}
            </div>

            <div className={s.info}>
              <div>Date of Birth: 26 April</div>
              <div>City: Minsk</div>
              <div>Education: BSPU</div>
              <div>Web Site: https://github.com/IbadT</div>
            </div>
          </div>
        </div>

        <MyPosts newPostText={this.props.stateData.messagesPage.newPostText} 
                 posts={this.props.stateData.messagesPage.posts} 
                 // addPost={this.props.addPost}
                 // updateNewPost={this.props.updateNewPost} 
                 dispatch={this.props.dispatch}
        />
        
      </div>
    );
  }
}

export default Content;
