import { formatCurrencyUSD } from "../utils/formatCurrency";
import { useCartStore } from "../utils/store";

const SidebarCart = () => {
  const {
    cart,
    priceAmount,
    increaseQuantity,
    decreaseQuantity,
    removeProductById,
  } = useCartStore();
  return (
    <div className="relative">
      {cart.map((res) => {
        return (
          <div key={res.id}>
            <div className="flex gap-3 mb-2 items-center border rounded-md p-2 border-neutral-300 py-2 ">
              <img
                src={res.img}
                alt={res.title}
                width={80}
                height={80}
                className="object-cover"
              />
              <div className="w-full">
                <p className="line-clamp-2">{res.title}</p>
                <p className="font-semibold text-xl">
                  {formatCurrencyUSD(res.price)}
                </p>
                <div className="flex justify-between items-center mt-3 ">
                  <div className="flex gap-3 items-center">
                    <button
                      onClick={() => decreaseQuantity(res.id)}
                      aria-disabled={res.quantity == 1 ? "true" : "false"}
                      disabled={res.quantity == 1 ? true : false}
                      className="border border-neutral-200 rounded-md p-2 hover:bg-neutral-100"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        class="lucide lucide-minus"
                      >
                        <path d="M5 12h14" />
                      </svg>
                    </button>

                    <p className=" rounded-md text-sm">{res.quantity}</p>
                    <button
                      onClick={() => increaseQuantity(res.id)}
                      className="border border-neutral-200 rounded-md p-2 hover:bg-neutral-100"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12px"
                        height="12px"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        class="lucide lucide-plus"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5v14" />
                      </svg>
                    </button>
                  </div>
                  <button
                    onClick={() => {
                      removeProductById(res.id);
                      toast(`Berhasil dihapus`, {
                        position: "bottom-center",
                      });
                    }}
                    className="border border-neutral-200 rounded-md p-2 hover:bg-red-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      class="lucide lucide-trash-2"
                    >
                      <path d="M3 6h18" />
                      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                      <line x1="10" x2="10" y1="11" y2="17" />
                      <line x1="14" x2="14" y1="11" y2="17" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      {cart.length !== 0 ? (
        <div className="sticky bottom-0 left-0 right-0 bg-white p-2 border border-neutral-300 rounded-md">
          <div className="flex justify-between font-semibold mb-3">
            <p>Total: </p>
            <p>{formatCurrencyUSD(priceAmount)}</p>
          </div>
          <div>
            <button className="w-full bg-black p-2 text-white rounded-md">
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <p>Tambahkan Barang</p>
      )}
    </div>
  );
};

export default SidebarCart;
