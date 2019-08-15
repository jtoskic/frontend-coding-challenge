
export default (state = {}, action) => {
    if(action.type === 'SHOW_OFFICES' ) {
        return {...state, offices:action.payload}
    }
    return state
}

