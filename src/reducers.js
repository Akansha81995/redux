export const myReducer = (state, action) => {
    switch(action.type) {
        case "DEMO":
            return Object.assign({}, state, action.payload)
        default:
            return state
    }
}