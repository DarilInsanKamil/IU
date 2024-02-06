import CardMerch from "../../components/cardMerch";
import Sosmed2 from "../../components/sosmed2";
import { PhotoBookData } from "../../utils/data";

const PhotobookPage = () => {
  return (
    <main className="py-10 px-5">
      <section className="grid lg:grid-cols-12 grid-cols-6 ">
        <section className="h-screen bg-white grid lg:grid-cols-4 grid-cols-1 lg:col-start-2 col-start-1 lg:col-span-10 col-span-6 gap-4">
          {PhotoBookData.map((res) => {
            return <CardMerch data={res} />;
          })}
        </section>
        <section className="col-start-1 lg:col-span-12 col-span-6 flex justify-center mt-10">
          <Sosmed2 />
        </section>
      </section>
    </main>
  );
};

export default PhotobookPage;
