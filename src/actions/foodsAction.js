import axios from 'axios'
export const foodsFn = (val)=>{
    return{
        type:"all",
        val
    }
}
export const fetchFoods = ()=>{
    return(dispatch)=>{
        axios.get("./food.json").then((res)=>{
            dispatch(foodsFn(res.data.dataInfo))
        })
    }
}
