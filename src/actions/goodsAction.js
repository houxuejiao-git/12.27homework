import axios from 'axios'
export const goodsFn = (val)=>{
    return{
        type:"all",
        val
    }
}
export const fetchGoods = ()=>{
    return(dispatch)=>{
        axios.get('./data.json').then((res)=>{
            dispatch(goodsFn(res.data.dataaInfo))
        })
    }
}