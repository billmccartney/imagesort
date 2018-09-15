import Swipeable from 'react-swipeable';
import React from 'react';
import './swipe.css';

export class SwipeComponent extends React.Component {
  state = {index:0, visible:false};
  next = ()=>{
    if(this.state.index <= this.props.data.length-2){
      this.setState({index:this.state.index+1});
    }
  };
  prev = ()=>{
    if(this.state.index > 1){
      this.setState({index:this.state.index-1});
    }
  };
  componentDidMount(){
    this.setState({visible:true});
    console.log("state.index",this.state.index);
  }
  swipedUp=(e, deltaY, isFlick)=>{
    console.log("You Swiped Up...", e, deltaY, isFlick)
  };
  swipedLeft=(e, deltaY, isFlick)=>{
    console.log("You Swiped Left...", e, deltaY, isFlick)
    this.prev();
  };
  swipedRight=(e, deltaY, isFlick)=>{
    console.log("You Swiped Right...", e, deltaY, isFlick)
    this.next();
  };
  swipedDown=(e, deltaY, isFlick)=>{
    console.log("You Swiped Down...", e, deltaY, isFlick)
  };
  keyPress=(e)=>{
    //console.log("keyPress",e.key);
    switch(e.key){
      case 'a':
        this.swipedLeft();
        break;
      case 'w':
        this.swipedUp();
        break;
      case 's':
        this.swipedDown();
        break;
      case 'd':
        this.swipedRight();
        break;
      default:
        return;
    }
    e.preventDefault();
  };
  render() {
    let selected = null;
    if(this.state.visible) {
      selected = this.props.data[this.state.index];
    }
    return (
      <div onKeyPress={this.keyPress} tabIndex="0">
        <Swipeable
          className={"swipe-region"}
          //onSwiping={this.swiping}
          //onSwipingLeft={this.swipingLeft}
          //onSwiped={this.swiped}
          onSwipedUp={this.swipedUp}
          onSwipedDown={this.swipedDown}
          onSwipedLeft={this.swipedLeft}
          onSwipedRight={this.swipedRight}
          preventDefaultTouchmoveEvent={true}
          trackMouse={true}
          stopPropagation={true}
        >
          You can swipe here or use the keys (WASD) to indicate the direction. If you mark an image as
          {selected?(<img src={selected.location} className={"image"}/>):selected}
        </Swipeable>
        <p>{selected?selected.timestamp:null}{selected?selected.usersaved.toString():null}</p>
      </div>
    )
  }
}