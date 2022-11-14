import { useDispatch } from 'react-redux';
import { itemsActions } from '../features/itemSlice';

type WarehouseItemPropsType = {
  item: string;
  description: string;
  warehouse: number;
};

const WarehouseItem = ({
  item,
  description,
  warehouse,
}: WarehouseItemPropsType) => {
  const dispatch = useDispatch();
  const handleRemoveItem = () => {
    dispatch(itemsActions.removeItem(item));
  };
  return (
    <div className="bg-[#fdfdfd] shadow-md rounded-md flex flex-col gap-4 px-4 py-2 justify-center items-center">
      <h4 className="uppercase text-[16px] leading-[19px] text-black">
        {item}
      </h4>
      <p className="text-[13px] text-black text-opacity-40 leading-[15px]">
        {description}
      </p>
      <span className="text-sm self-end">Warehouse Number: {warehouse}</span>
      <button
        className="bg-error px-4 py-2 text-white font-bold text-sm rounded-md
        hover:scale-110 transition-transform duration-150 ease-linear"
        onClick={handleRemoveItem}
      >
        Remove Item
      </button>
    </div>
  );
};

export default WarehouseItem;
