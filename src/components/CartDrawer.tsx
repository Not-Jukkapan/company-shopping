import { Product } from "@/types/Product";
import { useCartStore } from "@/store/useCartStore";

const CartDrawer = () => {
  const cartItems = useCartStore((state) => state.items);

  return (
    <div className="fixed top-0 right-0 w-full md:w-1/3 h-full bg-white shadow-lg">
      <h2 className="text-lg font-bold p-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-center p-4">Your cart is empty.</p>
      ) : (
        <ul className="divide-y divide-gray-200">
          {cartItems.map((item: Product) => (
            <li key={item.id} className="p-4 flex justify-between">
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-500">${item.price.toFixed(2)}</p>
              </div>
              <button className="text-red-500">Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartDrawer;
