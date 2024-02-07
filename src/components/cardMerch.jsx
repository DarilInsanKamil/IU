import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

const CardMerch = ({ data }) => {
  return (
    <section key={data.id} className="w-full">
      <Link
        preventScrollReset={false}
        to={`/merchandise/${data.category}/${data.id}`}
      >
        <figure className="overflow-hidden h-fit rounded-md">
          <LazyLoadImage
            src={data.img}
            width={344}
            height={280}
            alt={data.title}
            className="hover:scale-105 transition-all duration-300"
          />
        </figure>
        <div>
          <p className="font-semibold tracking-tight text-lg">{data.title}</p>
          <p className="text-neutral-500 text-sm">{data.price}</p>
        </div>
      </Link>
    </section>
  );
};

export default CardMerch;
