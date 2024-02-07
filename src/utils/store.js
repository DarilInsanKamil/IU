import { create } from 'zustand'

export const useStore = create((set) => ({
    count: 1,
    inc: () => set((state) => ({ count: state.count + 1 })),
}))

export const useCartStore = create((set) => ({
    cart: [],
    priceAmount: 0,
    addToCart: (id, title, price, img, quantity = 1) => {
        set((state) => {
            const existingProduct = state.cart.find(product => product.id === id);

            // If the product already exists in the cart, update the quantity
            if (existingProduct) {
                const updatedCart = state.cart.map(product =>
                    product.id === id ? { ...product, quantity: product.quantity + quantity } : product
                );
                return {
                    cart: updatedCart,
                    priceAmount: state.priceAmount + price * quantity
                };
            }

            // If the product is not in the cart, add it with the specified quantity
            return {
                cart: [
                    ...state.cart,
                    {
                        id,
                        title,
                        price,
                        img,
                        quantity
                    }
                ],
                priceAmount: state.priceAmount + (Number(price) * quantity)
            };
        });
    },
    removeAllProduct: () => set((state) => ({ cart: [] })),
    removeProductById: (id) => {
        set((state) => {
            const deleteProductId = state.cart.filter(product => product.id !== id)
            const productPrice = state.cart.find(product => product.id === id)?.price
            const productQuantity = state.cart.find(product => product.id === id)?.quantity
            return {
                cart: deleteProductId,
                priceAmount: state.priceAmount - (Number(productPrice) * Number(productQuantity))
            }
        })
    },
    increaseQuantity: (id) => {
        set((state) => {
            const updatedCart = state.cart.map(product =>
                product.id === id ? { ...product, quantity: product.quantity + 1 } : product
            );
            const productPrice = state.cart.find(product => product.id === id)?.price

            return {
                cart: updatedCart,
                priceAmount: state.priceAmount + Number(productPrice)
            };
        });
    },
    decreaseQuantity: (id) => {
        set((state) => {
            const existingProduct = state.cart.find(product => product.id === id);
            if (existingProduct && existingProduct.quantity > 1) {
                const updatedCart = state.cart.map(product =>
                    product.id === id ? { ...product, quantity: product.quantity - 1 } : product
                );
                return {
                    cart: updatedCart,
                    priceAmount: state.priceAmount - Number(existingProduct.price)
                };
            }
            return state;
        });
    },
}))
