import React, {Component} from 'react';
import { connect } from 'react-redux';
import {next , previous} from '../actions/action-img';
import Previous from '../components/Previous'
import Next from '../components/Next'
import Img from '../components/Img'

const ContainerImg = ({store}) => (  
  <div className='flex'>
    <Previous next={next}/>
    <Img id={store}/>
    <Next previous={previous}/>
  </div>
);

const mapStateToProps = state => ({
  idCurrent: state.currentId
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