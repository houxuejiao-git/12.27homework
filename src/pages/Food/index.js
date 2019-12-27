import view from './view'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import *as foodsFn from '../../actions/foodsAction'
export default  connect(
    (state)=>({data:state.foods}),
    dispatch=>bindActionCreators(foodsFn,dispatch)
)(view)