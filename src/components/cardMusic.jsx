import { Link } from "react-router-dom";

const Card = ({ data }) => {
  return (
    <section key={data.id} className="w-full">
      <Link preventScrollReset={false} to={`/discography/${data.id}`}>
        <figure className="overflow-hidden h-fit rounded-md">
          <img
            src={data.img}
            alt={data.title}
            className="w-[344px] h-[280px] object-cover  hover:scale-105 transition-all duration-200"
          />
        </figure>
        <div>
          <p className="font-semibold tracking-tight text-lg">{data.title}</p>
          <p className="text-neutral-500 text-sm">{data.category}</p>
          <p className="text-neutral-500 text-sm">{data.releaseAt}</p>
        </div>
      </Link>
    </section>
  );
};

export default Card;
