import { IJordan } from "../../contants/jordan";
import CardItem from "./CardItem";

interface ICardList {
  data: IJordan[];
}

const CardList = ({ data }: ICardList) => {
  return (
    <ul className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
      {data.map((item) => (
        <CardItem key={item.name} {...item} />
      ))}
    </ul>
  );
};

export default CardList;
