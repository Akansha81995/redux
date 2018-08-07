export const myReducer = (state, action) => {
    switch(action.type) {
        case "DEMO":
            let tempStatete = Object.assign({}, state)
            tempStatete.animalNames.push(action.payload.name)
            return tempStatete
        default:
            return state
    }
}