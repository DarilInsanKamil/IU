import SwiperComponents from "../../components/swiper";

const Merchandise = () => {
  return (
    <main>
      <section className="relative">
        <SwiperComponents />
        <section className="sticky top-0 right-0 left-0 z-10 bg-white/10 backdrop-blur-md flex w-full justify-center py-4 mt-10">
          <h3 className="font-bold tracking-tighter text-2xl">Best Product</h3>
        </section>
        <section className="h-screen bg-white"></section>
        <section className="h-screen bg-white"></section>
        <section className="h-screen bg-white"></section>
      </section>
    </main>
  );
};

export default Merchandise;
