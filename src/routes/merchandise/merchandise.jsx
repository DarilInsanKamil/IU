import CardMerch from "../../components/cardMerch";
import SwiperComponents from "../../components/swiper";
import { MerchData, MusicData, PhotoBookData } from "../../utils/data";
import Sosmed2 from "../../components/sosmed2";
import NavbarMerch from "../../components/navbarMerch";
const Merchandise = () => {
  return (
    <main>
      <section className="relative">
        <SwiperComponents />
        <section className="sticky top-0 left-0 right-0 w-full bg-white mt-10 z-30">
        <NavbarMerch/>
        </section>
        <section className="grid lg:grid-cols-12 grid-cols-6 py-10 px-5">
          <section className="h-screen bg-white grid lg:grid-cols-4 grid-cols-1 lg:col-start-2 col-start-1 lg:col-span-10 col-span-6 gap-4">
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
        </section>
          {/* <section className="col-start-1 lg:col-span-12 col-span-6 flex justify-center">
            <Sosmed2 />
          </section> */}
      </section>
    </main>
  );
};

export default Merchandise;
