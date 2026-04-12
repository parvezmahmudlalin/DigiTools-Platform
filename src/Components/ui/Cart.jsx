import { toast } from "react-toastify";


  const Cart = ({ carts, setCarts }) => {

    const handlePayment = () => {
      setCarts([]);
      toast.success("Payment Successful")
    }

    const handleRemove = (item) => {
      const filteredArray = carts.filter((c) => c.id !== item.id);
      setCarts(filteredArray);

      toast.success("Product deleted")
    }

  return (
    <div className="border border-zinc-200 p-6 rounded-lg mb-40">
      <h1 className="font-extrabold text-3xl mb-6">Your Cart</h1>

      {carts.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-2xl font-medium">Your Cart is Empty</p>
          <p className="text-gray-500 mt-2"></p>
        </div>
      ) : (
        <>
          {carts.map((cart, index) => (
            <div 
              key={index}
              className="bg-base-300 border rounded-lg mt-4 mb-8 p-5"
            >
              <div className="flex justify-between items-center">
                <div className="flex gap-5 items-center">
                  <div className="text-4xl border rounded-full border-zinc-200 w-14 h-14 flex items-center justify-center">
                    {cart.icon}
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold">{cart.name}</h1>
                    <p className="text-[#627382]">${cart.price}</p>
                  </div>
                </div>

                <button 
                  className="btn btn-ghost rounded-full text-red-500 hover:text-red-600"
                  onClick={() => handleRemove(cart)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          
          <div className="mt-8 pt-6 border-t">
            <div className="flex justify-between text-xl font-semibold mb-6">
              <span>Total:</span>
              <span>${carts.reduce((sum, item) => sum + item.price, 0)}</span>
            </div>
            
            <button onClick={handlePayment} className="btn btn-primary w-full py-3 text-lg rounded-full">
              Proceed To Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;