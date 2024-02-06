import { useParams } from "react-router-dom";
import { MerchData, MusicData, PhotoBookData } from "../../utils/data";
import { useEffect, useState } from "react";
const DetailMerchandise = () => {
  const { id, category } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    const newArr = MerchData.concat(MusicData).concat(PhotoBookData);
    setData(newArr);
  }, []);
  let filterData = data.filter(
    (res) => res.category == category.toString() && res.id === Number(id)
  );
  return (
    <main>
      <section>
        {filterData.map((data) => (
          <div key={data.id}>
            <p>{data.title}</p>
            <img src={data.img} alt={data.title} />
          </div>
        ))}
      </section>
    </main>
  );
};

export default DetailMerchandise;
