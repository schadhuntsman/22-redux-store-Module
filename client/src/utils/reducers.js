import {
    UPDATE_PRODUCTS,
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY
} from "./actions";

export const reducer = (state, action) => {
    switch (action.type) {
        //if action value is the value of "update products"return a new state object with an updated products array 
        case UPDATE_PRODUCTS: 
        return {
            ...state,
            products: [...action.products],
        };
        //if it's none of these actions, do notupdate state at all and keep everything the same
        defualt:
        return state;
    }
};