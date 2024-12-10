import { create } from "zustand";

const useBasket = create((set, get) => {
  return {
    // data
    // actions
    items: [],
    invoice: {
      totalPrice: 0,
      deliveryCost: 0,
      totalDiscount: 0,
      finalPrice: 0,
    },

    actions: {
      // add to basket
      addToBasket: (payload) => {
        const alreadyExist = get().items.some(
          (_item) => _item.id === payload.id
        );
        // alreadyExist
        if (alreadyExist) {
          set((oldState) => {
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
          });
        }

        // set new
        else {
          set((oldState) => {
            return {
              invoice: {
                ...oldState.invoice,
                totalPrice: oldState.invoice.totalPrice + payload.price,
              },
              items: [...oldState.items, { ...payload, quantity: 1 }],
            };
          });
        }
      },
      // remove from basket
      removeFromBasket: (payload) => {
        const shouldRemove = payload.quantity === 1;
        // should remove item from basket
        if (shouldRemove) {
          set((oldState) => {
            return {
              invoice: {
                ...oldState.invoice,
                totalPrice: oldState.invoice.totalPrice - payload.price,
              },
              items: oldState.items.filter((_item) => _item.id !== payload.id),
            };
          });
        }
        // decrease quantity item
        else {
          set((oldState) => {
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
          });
        }
      },
    },
  };
});

export default useBasket;
