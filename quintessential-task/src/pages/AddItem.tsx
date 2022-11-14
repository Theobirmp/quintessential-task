import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { itemsActions } from '../features/itemSlice';
import { motion } from 'framer-motion';
const AddItem = () => {
  const [itemName, setItemName] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [itemWarehouse, setItemWarehouse] = useState<string>('0');
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();
  const handleAddItem = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(
      itemsActions.addItem({
        item: itemName,
        description: itemDescription,
        warehouse: itemWarehouse,
      })
    );
    setOpenModal(true);
    setItemName('');
    setItemDescription('');
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.75 } }}
      className="flex flex-col gap-10"
    >
      <form
        className="w-[100%] flex flex-col gap-10 max-w-[600px] mx-auto mt-[100px]
      bg-bgPage shadow-md rounded-md px-10 py-6"
      >
        <div className="flex flex-col gap-5">
          {/* <label htmlFor="name">Item Name</label> */}
          <input
            value={itemName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setItemName(e.currentTarget.value)
            }
            className="border-[#b8b8b8] border-[2px] rounded-[8px] px-[8px]
             py-[16px] text-center text-textBlue hover:border-textBlue
              focus:border-textBlue text-[18px] leading-[22px] tracking-[3%]"
            id="name"
            type="text"
            placeholder="Item Name"
          />
        </div>
        <div className="flex flex-col gap-5">
          {/* <label htmlFor="desription">Item Description</label> */}
          <input
            value={itemDescription}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setItemDescription(e.currentTarget.value)
            }
            className="border-[#b8b8b8] border-[2px] rounded-[8px] px-[8px]
             py-[16px] text-center text-textBlue hover:border-textBlue
              focus:border-textBlue text-[18px] leading-[22px] tracking-[3%]"
            id="desription"
            type="text"
            placeholder="Item Description"
          />
        </div>
        <div>
          <label
            htmlFor="countries"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            Select an option
          </label>
          <select
            value={itemWarehouse}
            defaultValue="0"
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setItemWarehouse(e.currentTarget.value)
            }
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900
             text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500
              block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
               dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                dark:focus:border-blue-500"
          >
            <option value="0" defaultChecked disabled>
              Choose a Warehouse
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <button
          onClick={handleAddItem}
          disabled={
            itemName == '' || itemDescription == '' || itemWarehouse == '0'
              ? true
              : false
          }
          className="disabled:bg-error mt-[30px] bg-bgDarkBlue text-white
          transition-[background-color] ease-linear duration-200 px-[90px] py-[13px] text-center
          text-[18px] leading-[22px] tracking-[4%] rounded-[8px]"
        >
          Add Item
        </button>
      </form>
      <Link
        to={`/warehouse${itemWarehouse}`}
        className={`${
          openModal
            ? 'opacity-100 transition-opacity ease-linear duration-300 max-w-[200px] mx-auto mt-[30px] bg-bgDarkBlue text-white px-[10px] py-[13px] text-center text-[18px] leading-[22px] tracking-[4%] rounded-[8px]'
            : 'pointer-events-none opacity-0'
        }`}
      >
        Go to Warehouse {itemWarehouse}
      </Link>
    </motion.section>
  );
};

export default AddItem;
