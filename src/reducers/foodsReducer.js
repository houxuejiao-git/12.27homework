export default (state=[],action)=>{
    switch (action.type) {
        case "all":
            let newState = action.val
            return newState;
        default:
            return state;
    }
}