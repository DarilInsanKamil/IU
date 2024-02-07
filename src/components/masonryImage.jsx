import { LazyLoadImage } from "react-lazy-load-image-component";

const MasonryImage = () => {
  return (
    <div className="grid lg:grid-cols-4 grid-cols-1 gap-4 lg:col-start-3 lg:col-span-8 col-start-1 col-span-6 ">
      <div className="grid gap-4">
        <div className="w-fit h-fit overflow-hidden">
          <LazyLoadImage
            width={344}
            height={280}
            className="h-auto max-w-full rounded-lg hover:scale-150 hover:-rotate-6 transition-all duration-150"
            src="/images/iu1.jpg"
            alt="iu1"
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div className="h-fit overflow-hidden">
          <LazyLoadImage
            width={344}
            height={280}
            className="lg:h-[280px] h-[240px] object-cover w-full max-w-full rounded-lg hover:scale-150 hover:-rotate-6 transition-all duration-150"
            src="/images/iu2.jpg"
            alt="iu1"
          />
        </div>
        <div className="h-fit overflow-hidden">
          <LazyLoadImage
            width={344}
            height={280}
            className="h-[180px] w-full object-cover rounded-lg hover:scale-150 hover:-rotate-6 transition-all duration-150"
            src="/images/iu4.jpg"
            alt="iu1"
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div className="h-fit overflow-hidden">
          <LazyLoadImage
            width={344}
            height={280}
            className="h-auto w-full object-cover rounded-lg hover:scale-150 hover:-rotate-6 transition-all duration-150"
            src="/images/iu3.jpg"
            alt="iu1"
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div className="h-fit overflow-hidden">
          <LazyLoadImage
            width={344}
            height={280}
            className="h-[200px] object-cover w-full rounded-lg hover:scale-150 hover:-rotate-6 transition-all duration-150"
            src="/images/iu6.jpg"
            alt="iu1"
          />
        </div>
        <div className="overflow-hidden h-fit">
          <LazyLoadImage
            width={344}
            height={280}
            className="h-[260px] object-cover w-full rounded-lg hover:scale-150 hover:-rotate-6 transition-all duration-150"
            src="/images/iu5.jpg"
            alt="iu1"
          />
        </div>
      </div>
    </div>
  );
};
export default MasonryImage;
