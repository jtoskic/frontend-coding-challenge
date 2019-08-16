
export const showOffices = (offices) => {
    return {
        type:'SHOW_OFFICES',
        payload:offices
    }
}

export const showPopup = (showSelectedOffice) => {
    return {
        type:'SHOW_POPUP',
        payload:showSelectedOffice
    }
}
