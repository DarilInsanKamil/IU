import MasonryImage from "../components/masonryImage";
import Sosmed2 from "../components/sosmed2";

const About = () => {
  return (
    <main className="relative">
      <section className="bg-profile bg-center bg-fixed bg-cover min-h-[80vh] bg-no-repeat  bg-black "></section>
      <section className="grid lg:grid-cols-12 grid-cols-6 lg:pb-20 pb-10">
        <div className="lg:col-start-1 col-start-1 col-span-6 lg:col-span-12 text-center sticky top-0 w-full left-0 right-0 z-10 bg-white/10 backdrop-blur-md py-3">
          <h2 className="font-bold tracking-tighter text-4xl">IU</h2>
          <p className="text-neutral-500">Lee Ji-eun</p>
        </div>
        <div className="lg:col-start-3 col-start-1 lg:col-span-8 col-span-6 mt-10 px-5 py-10">
          <article>
            <p className="text-neutral-500">
              <strong className="text-black">Lee Jieun (이지은)</strong> ,
              popularly known as IU, is a highly-acclaimed South Korean singer,
              songwriter, philanthropist, and actress under
              <span className="text-blue-500"> EDAM Entertainment</span> .
              {`She is also known in South Korea as "The
              Nation's Little Sister." Besides her talent in singing and
              songwriting, IU is also loved by fans worldwide for her
              performance as an actress in dramas such as "Moon Lovers: Scarlet
              Heart Ryeo," "Hotel Del Luna," and "My Mister."`}
            </p>
          </article>
          <section className="mt-5 mb-10">
            <Sosmed2 />
          </section>
        </div>
        <div className="lg:col-start-3 col-start-1 lg:col-span-8 col-span-6 mt-10 px-5">
          <MasonryImage />
        </div>
      </section>
    </main>
  );
};
export default About;
