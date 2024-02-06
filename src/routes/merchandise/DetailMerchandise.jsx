import { useParams } from "react-router-dom";
const DetailMerchandise = () => {
  const { id } = useParams();

  return (
    <main>
      <section>
        <p>{id}</p>
      </section>
    </main>
  );
};

export default DetailMerchandise;
