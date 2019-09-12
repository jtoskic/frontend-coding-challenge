export default (state = {}, action) => {
    switch(action.type) {
        case 'SHOW_OFFICES':
            return {...state, offices:action.payload}

        case 'SHOW_POPUP':
            return {...state, showSelectedOffice:action.payload}
        default: return state
    }
}
