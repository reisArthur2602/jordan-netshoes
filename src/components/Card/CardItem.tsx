import { IJordan } from "../../contants/jordan";
import { formatPrice } from "../../utils/FormatPrice";

const CardItem = ({ name, price, src, tag }: IJordan) => {
  return (
    <div className="flex max-h-[20.375rem] flex-col gap-6 font-medium">
      <img
        src={src}
        alt={name}
        className="h-[12.5rem] w-full cursor-pointer object-cover transition-all duration-300 hover:scale-110"
      />
      <div className="space-y-3">
        <p className="sm:text-lg">{name}</p>
        <span className="text-brand-color-10">{tag}</span>
      </div>
      <b className="text-xl">{`R$ ${formatPrice(price)}`}</b>
    </div>
  );
};

export default CardItem;
