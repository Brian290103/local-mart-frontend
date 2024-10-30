import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { toast } from "sonner";
import { getAppName } from "@/lib/utils.ts";

const useCartStore = create(
  persist(
    (set, get) => ({
      cart: [],

      // Add item to cart (if exists, increment quantity)
      addToCart: (product) => {
        set((state) => {
          const existingItem = state.cart.find(
            (item) => item.id === product.id,
          );

          if (existingItem) {
            // Update quantity if item already exists
            toast.success(getAppName(), {
              description: "Product already in Cart",
            });
            return {
              cart: state.cart.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item,
              ),
            };
          } else {
            // Add new item if not in cart
            toast.success(getAppName(), {
              description: "Product Added to Cart",
            });
            return {
              cart: [...state.cart, { ...product, quantity: 1 }],
            };
          }
        });
      },

      // Remove item from cart (decrease quantity or remove if quantity is 1)
      removeFromCart: (productId) => {
        set((state) => ({
          cart: state.cart
            .map((item) =>
              item.id === productId
                ? { ...item, quantity: item.quantity - 1 }
                : item,
            )
            .filter((item) => item.quantity > 0),
        }));
        toast.success(getAppName(), {
          description: "Item removed from cart",
        });
      },

      // Empty the entire cart
      emptyCart: () => {
        set({ cart: [] });
        toast.success(getAppName(), {
          description: "Your cart has been deleted",
        });
      },
    }),
    {
      name: "cart-storage", // Unique name for local storage key
      getStorage: () => createJSONStorage(() => localStorage),
    },
  ),
);

export default useCartStore;