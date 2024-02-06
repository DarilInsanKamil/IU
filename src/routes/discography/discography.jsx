import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Card from "../../components/cardMusic";
import { DiscographyMusic } from "../../utils/data";
import Sosmed2 from "../../components/sosmed2";
const Discography = () => {
  const videoRef = useRef();
  useEffect(() => {
    let isMounted = true;
    setTimeout(() => {
      if (isMounted && videoRef.current) {
        videoRef.current.play();
      }
    }, 1000);
    return () => {
      isMounted = true;
      if (videoRef.current) {
        videoRef.current.pause();
      }
    };
  }, []);
  return (
    <main className="relative">
      <section className="w-full lg:h-[80vh] h-[60vh] flex justify-center items-center ">
        <video
          loop
          muted
          ref={videoRef}
          className="fixed right-0 top-0 min-w-[100%] lg:h-[80vh] h-[60vh] -z-10 object-cover mix-blend-multiply bg-blend-multiply"
        >
          <source src="/loopedit.mp4"></source>
        </video>
        <div className="py-3 relative group cursor-pointer ">
          <Link
            to="https://youtu.be/JleoAppaxi0?si=SSSPShOXNoqVpUoz"
            className="tracking-tighter text-white mix-blend-difference w-fit"
          >
            <h1 className="font-bold text-6xl">Love wins all</h1>
            <hr className="w-[60%] mt-1"></hr>
            <p>Love wins all</p>
            <div className="absolute -top-2 -right-8 group-hover:translate-y-0 group-hover:translate-x-0 translate-y-8 -translate-x-8 duration-200 transition-all">
              <Arrow />
            </div>
          </Link>
        </div>
      </section>

      <section className="grid lg:grid-cols-12 grid-cols-6 px-5 py-10 bg-white relative  h-auto">
        <div className="lg:col-start-1 col-start-1 col-span-6 lg:col-span-12 tracking-tighter font-bold text-2xl text-center mt-10">
          <h2>Discography</h2>
        </div>
        <div className="lg:col-start-2 lg:col-span-10 col-start-1 col-span-6 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4 mt-10  ">
          {DiscographyMusic.map((res) => {
            console.log(res);
            return <Card data={res} key={res.id} />;
          })}
        </div>
        <section className="lg:col-start-6 col-start-2 lg:col-span-4 text-center mt-20 ">
          <Sosmed2 />
        </section>
      </section>
    </main>
  );
};
export default Discography;

const Arrow = () => {
  return (
    <div className=" text-white rounded-full border-2 border-white w-fit">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="0px"
        height="0px"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-arrow-up-right group-hover:w-[18px] group-hover:h-[18px]"
      >
        <path d="M7 7h10v10" />
        <path d="M7 17 17 7" />
      </svg>
    </div>
  );
};
