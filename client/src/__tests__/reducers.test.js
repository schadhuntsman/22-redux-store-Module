import { reducer } from '../utils/reducers';
import {
  UPDATE_PRODUCTS,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
  ADD_TO_CART,
  ADD_MULTIPLE_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  CLEAR_CART,
  TOGGLE_CART
} from '../utils/actions';

const initialState = {
  products: [],
  categories: [{ name: 'Food' }],
  currentCategory: '1',
  cart: [
  {
    _id: '1',
    name: 'Soup',
    purchasQuantity: 1
  },
  {
    _id: '2',
    name: 'Bread',
    purchasQuantity: 2
  }
  ],
  cartOpen: false
};

test('ADD_TO_CART', () => {
  let newState = reducer(initialState, {
    type: ADD_TO_CART,
    product: { purchaseQuantity: 1}
  });
  expect(newState.cart.length).toBe(3);
  expect(initialState.cart.length).toBe(2);
});

test('ADD_MULTIPLE_TO_CART', () => {
  let newState = reducer(initialState, {
    type: ADD_MULTIPLE_TO_CART,
    products: [{}, {}]
  });

  expect(newState.cart.length).toBe(4);
  expect(initialState.cart.length).toBe(2);
});

test('TOGGLE_CART', () => {
  let newState = reducer(initialState, {
    type: TOGGLE_CART
  });

  expect(newState.cartOpen).toBe(true);
  expect(initialState.cartOpen).toBe(false);

  let newState2 = reducer(newState, {
    type: TOGGLE_CART
  });

  expect(newState2.cartOpen).toBe(false);
});

test('UPDATE_CART_QUANTITY', () => {
  let newState = reducer(initialState, {
    type: UPDATE_CART_QUANTITY,
    _id:'1',
    purchasQuantity: 3
  });

  expect(newState.cartOpen).toBe(true);
  expect(newState.cart[0].purchasQuantity).toBe(3);
  expect(newState.cart[1].purchasQuantity).toBe(2);

  expect(initialState.cartOpen).toBe(false);
});

test('CLEAR_CART', () => {
  let newState = reducer(initialState, {
    type: CLEAR_CART
  });

  expect(newState.cartOpen).toBe(false);
  expect(newState.cart.cart.length).toBe(0);
  expect(initialState.cart.length).toBe(2);
});

test('REMOVE_FROM_CART', () => {
  let newState1 = reducer(initialState, {
    type: REMOVE_FROM_CART,
    _id:'1'
  });

  //cart is still open
  expect(newState.cartOpen).toBe(true);

  //second item should now be the first
  expect(newState1.cart.length).toBe(1);
  expect(newState1.cart.length[0]._id).toBe(2);
});


let newState2 = reducer(newState1, {
  type: REMOVE_FROM_CART,
  id: '2'
});
 // cart is empty and closed
expect(newState2.cartOpen).toBe(false);
expect(initialState2.cart.length).toBe(0);

expect(initialState.cart.length).toBe(2);

test('UPDATE_CATEGORIES', () => {
  let newState = reducer(initialState, {
    type: UPDATE_CATEGORIES,
    categories: [{}, {}]
  });

  expect(newState.categories.length).toBe(2);
  expect(initialState.categories.length).toBe(1);
});

test('UPDATE_CURRENT_CATEGORY', () => {
  let newState = reducer(initialState, {
    type: UPDATE_CURRENT_CATEGORY,
    currentCategory: '2'
  });

  expect(newState.currentCategory).toBe('2');
  expect(initialState.currentCategory).toBe('1');
});