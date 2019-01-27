const mainReducer = (state={token:null,movies:[]}, action) => {
    switch (action.type) {
        case "LOGIN_USER":
            return {
                ...state,
                token: action.data
            };
        case "LOGOUT_USER":
            return {
                ...state,
                token: null
            };
        case "GET_ALL_FILMS":
            return {
                ...state,
                movies: action.data
            };
        // case "ADD_TO_WATCHLIST":
        //     return{
        //         ...state,
        //         watchList : [].push(action.data)
        //     };

        default:
            return state;
    }
};

export default mainReducer;