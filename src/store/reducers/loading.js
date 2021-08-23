
export default function loadingReducer ( state = false, action ) {
    if (action.type === 'changed') return action.payload
    return state
}
