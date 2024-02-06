import { Link } from "react-router-dom";

const CardMerch = ({ data }) => {
  return (
    <section key={data.id} className="w-full">
      <Link preventScrollReset={false} to={`/merchandise/${data.category}/${data.id}`}>
        <figure className="overflow-hidden h-fit rounded-md">
          <img
            src={data.img}
            alt={data.title}
            className="w-[344px] h-[280px] object-cover  hover:scale-105 transition-all duration-200"
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
