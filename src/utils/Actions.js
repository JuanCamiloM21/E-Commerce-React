export const setCart = (payload) => ({
  type: 'ADD_CART',
  payload,
});

export const removeCart = (payload) => ({
  type: 'REMOVE_CART',
  payload,
});
