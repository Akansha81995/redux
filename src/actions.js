export const myActionCreator = (newName) => {
    return {
        type: 'DEMO',
        payload: {
            name: newName
        }
    }
}