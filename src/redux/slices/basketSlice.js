import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  invoice: {
    totalPrice: 0,
    deliveryCost: 0,
    totalDiscount: 0,
    finalPrice: 0,
  },
};
export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addBasket: (oldState, { payload }) => {
      const alreadyExist = oldState.items.some(
        (_item) => _item.id === payload.id
      );

      if (alreadyExist) {
        return {
          invoice: {
            ...oldState.invoice,
            totalPrice: oldState.invoice.totalPrice + payload.price,
          },
          items: oldState.items.map((_item) => {
            // return
            if (_item.id === payload.id) {
              return {
                ..._item,
                quantity: _item.quantity + 1,
              };
            } else return _item;
          }),
        };
      } else {
        return {
          invoice: {
            ...oldState.invoice,
            totalPrice: oldState.invoice.totalPrice + payload.price,
          },
          items: [...oldState.items, { ...payload, quantity: 1 }],
        };
      }
    },
    removeBasket: (oldState, { payload }) => {
      const shouldRemove = payload.quantity === 1;

      if (shouldRemove) {
        return {
          invoice: {
            ...oldState.invoice,
            totalPrice: oldState.invoice.totalPrice - payload.price,
          },
          items: oldState.items.filter((_item) => _item.id !== payload.id),
        };
      } else {
        return {
          invoice: {
            ...oldState.invoice,
            totalPrice: oldState.invoice.totalPrice - payload.price,
          },
          items: oldState.items.map((_item) => {
            // return
            if (_item.id === payload.id) {
              return {
                ..._item,
                quantity: _item.quantity - 1,
              };
            } else return _item;
          }),
        };
      }
    },
  },
});

export const basketStates = (state) => state.basket;
export const { addBasket, removeBasket } = basketSlice.actions;
export default basketSlice.reducer;
