import CardMerch from "../../components/cardMerch";
import SwiperComponents from "../../components/swiper";
import { MerchData, MusicData, PhotoBookData, AllData } from "../../utils/data";
import Sosmed2 from "../../components/sosmed2";
import NavbarMerch from "../../components/navbarMerch";
import { Link } from "react-router-dom";
const Merchandise = () => {
  return (
    <main>
      <section className="relative">
        <SwiperComponents />

        <section className="grid lg:grid-cols-12 grid-cols-6 py-10 px-5">
        <section className="lg:col-start-2 col-start-1 lg:col-span-12 col-span-6 my-10">
          <ul className="flex gap-3 items-center">
            <Link className="border border-neutral-200 px-3 py-1 rounded-md" to="/merchandise">All</Link>
            <Link className="border border-neutral-200 px-3 py-1 rounded-md" to="/merchandise/items">Merch</Link>
            <Link className="border border-neutral-200 px-3 py-1 rounded-md" to="/merchandise/music">Music</Link>
            <Link className="border border-neutral-200 px-3 py-1 rounded-md" to="/merchandise/photobook">PhotoBook</Link>
          </ul>
        </section>
          <section className="bg-white grid lg:grid-cols-4 grid-cols-1 lg:col-start-2 col-start-1 lg:col-span-10 col-span-6 gap-4">
            {MerchData.map((res) => {
              return <CardMerch key={res.id} data={res} />;
            })}
            {MusicData.map((res) => {
              return <CardMerch key={res.id} data={res} />;
            })}
            {PhotoBookData.map((res) => {
              return <CardMerch key={res.id} data={res} />;
            })}
          </section>
          <section className="col-start-1 lg:col-span-12 col-span-6 flex justify-center mt-10">
            <Sosmed2 />
          </section>
        </section>
      </section>
    </main>
  );
};

export default Merchandise;
