import { CartContext } from "./cartcontext";

function CartProvider({ children }) {

    const [cart, setCart] = useState([]);

    const getQuantity = () => {
        return cart.reduce((acc, item) => acc + item.quantity, 0);
    }
    return (
        <CartContext.Provider value={{cart, getçQuantity}}>
            {children}
        </CartContext.Provider>
    )
}