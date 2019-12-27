import view from './view'
import { connect } from 'react-redux'
import *as goodsFn from '../../actions/goodsAction'
import { bindActionCreators } from 'redux'
export default connect(
    (state)=>({data:state.goods}),
    dispatch=>bindActionCreators(goodsFn,dispatch)
)(view)