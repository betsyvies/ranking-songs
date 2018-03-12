import React, {Component} from 'react';
import { connect } from 'react-redux';
import {next , previous} from '../actions';

class ContainerImg extends Component
{
  render()
  {
    const {counter, next, previous} = this.props;

    return(
      <div className='flex'>
        <img className = 'padding' src="assets/icons/previous.png" alt="" onClick={previous}/>
        <img className = 'padding' src="assets/images/2.jpg" />
        <h1>{counter}</h1>
        <img className = 'padding' src="assets/icons/next.png" alt="" onClick={next}/>    
      </div>
    )
  }
}

const mapStateToProps = state => ({
  counter: state.counter.currentId
})
   
const mapDispatchToProps = (dispatch) => {
  return {
    next: () => {
    dispatch(next());
    },
    previous: () => {
    dispatch(previous());
    }
  }
}
  
const final = connect(mapStateToProps, mapDispatchToProps)(ContainerImg) ;
   
export default final;