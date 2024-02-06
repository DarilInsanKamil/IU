import { useParams } from "react-router-dom";
import { DiscographyMusic } from "../../utils/data";
import EmbedSpotify from "../../components/embedSpotify";
const DetailDiscography = () => {
  const { id } = useParams();
  const filterMusic = DiscographyMusic.filter((el) => el.id === Number(id));
  return (
    <main className=" px-5 py-10">
      <section className="">
        {filterMusic.map((res) => (
          <section className="grid lg:grid-cols-12 grid-cols-6 ">
            <div className="lg:col-start-5 col-start-2 col-span-4 py-10">
              <div className="flex lg:flex-row flex-col gap-5 ">
                <img
                  src={res.img}
                  alt={res.title}
                  className="object-cover w-[240px] h-[240px]"
                />
                <div>
                  <article className="mb-5">
                    <h3 className="text-xl font-semibold">{res.title}</h3>
                    <p className="text-neutral-400">{res.releaseAt}</p>
                  </article>
                  {res.music.map((data, idx) => (
                    <ul className="font-medium">
                      <li>
                        {idx + 1}. {data.title}
                      </li>
                    </ul>
                  ))}
                </div>
              </div>
            </div>
            <div className="lg:col-start-4 col-start-1 col-span-6 bg-slate-300 mt-10">
              <EmbedSpotify src={res.spotify} />
            </div>
          </section>
        ))}
      </section>
    </main>
  );
};
export default DetailDiscography;
