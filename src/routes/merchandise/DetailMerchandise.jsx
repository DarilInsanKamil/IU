import { useParams } from "react-router-dom";
import { MerchData, MusicData, PhotoBookData } from "../../utils/data";
import { useEffect, useState } from "react";
import { formatCurrencyUSD } from "../../utils/formatCurrency";
import Sosmed2 from "../../components/sosmed2";
import Help from "../../components/help";
import { useCartStore, useStore } from "../../utils/store";
const DetailMerchandise = () => {
  const { id, category } = useParams();
  const [data, setData] = useState([]);
  const [help, setHelp] = useState(false);
  const [detail, setDetail] = useState(true);
  const [count, setCount] = useState(0);
  useEffect(() => {
    const newArr = MerchData.concat(MusicData).concat(PhotoBookData);
    setData(newArr);
  }, []);
  let filterData = data.filter(
    (res) => res.category == category.toString() && res.id === Number(id)
  );
  const { cart, increaseQuantity, addToCart, quantity } = useCartStore();
  return (
    <main className="py-10 ">
      <section>
        {filterData.map((data) => (
          <section
            key={data.id}
            className="grid lg:grid-cols-12 grid-cols-6 gap-5 w-full px-5"
          >
            <div className=" lg:col-start-2 col-start-1 lg:col-span-5 col-span-6">
              <img
                src={data.img}
                alt={data.title}
                className="object-cover w-full h-max rounded-md"
              />
            </div>
            <div className="lg:col-start-7 col-start-1 lg:col-span-4 col-span-6 w-full">
              <div>
                <h3 className="text-3xl">{data.title}</h3>
                <p className="text-3xl font-semibold mt-5">
                  {formatCurrencyUSD(Number(data.price))}
                </p>
              </div>
              {/* <section className="bg-neutral-50 p-5 rounded-md mt-10">
                <h3 className="text-lg">{data.title}</h3>
                <div className="flex gap-2 items-center mt-5 justify-between w-full">
                  <div className="flex gap-2 items-center ">
                    <button className="border border-neutral-300 rounded-md w-8 h-8 font-semibold hover:bg-neutral-100 transition-all duration-150">
                      -
                    </button>
                    <p>{count + cart.length}</p>
                    <button
                      onClick={increaseQuantity}
                      className="border border-neutral-300 rounded-md w-8 h-8 font-semibold hover:bg-neutral-100 transition-all duration-150"
                    >
                      +
                    </button>
                  </div>
                  <p>{formatCurrencyUSD(Number(data.price) * cart.length)}</p>
                </div>
              </section> */}
              <section className="flex flex-col gap-2 mt-10">
                <button className="bg-black text-white p-3 hover:bg-neutral-900 hover:text-white transition-all rounded-md duration-200">
                  Buy Now
                </button>
                <button
                  onClick={() => {
                    addToCart(data.id, data.title, data.price, data.img);
                  }}
                  className="border-black border p-3 hover:bg-neutral-100  transition-all rounded-md duration-200"
                >
                  Add to bag
                </button>
              </section>
            </div>
            <div className="lg:col-start-2 col-start-1 lg:col-span-10 col-span-6 mt-10">
              <div className="flex ">
                <button
                  className={`w-full rounded-tl-md rounded-bl-md ${
                    detail && "bg-black text-white"
                  } ${
                    !detail && "hover:bg-neutral-100"
                  } transition-all duration-200 p-3 `}
                  onClick={() => {
                    setDetail(true);
                    setHelp(false);
                  }}
                >
                  Product Detail
                </button>
                <button
                  className={`w-full rounded-tr-md rounded-br-md ${
                    help && "bg-black text-white "
                  } p-3 ${
                    !help && "hover:bg-neutral-100"
                  } transition-all duration-200`}
                  onClick={() => {
                    setHelp(true);
                    setDetail(false);
                  }}
                >
                  Help
                </button>
              </div>
              <div className="py-10 transition-all duration-300">
                {detail && (
                  <img
                    src={data.img_detail}
                    alt={data.title}
                    className="object-cover w-full mb-10"
                  />
                )}
                {help && <Help />}
              </div>
            </div>
          </section>
        ))}
        <section className="col-start-1 lg:col-span-12 col-span-6 flex justify-center mt-10">
          <Sosmed2 />
        </section>
      </section>
    </main>
  );
};

export default DetailMerchandise;
