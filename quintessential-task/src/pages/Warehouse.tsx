import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import WarehouseItem from '../components/WarehouseItem';
import { v4 as uuidv4 } from 'uuid';
import {} from 'redux';
import { useSelector } from 'react-redux';
import WareHouseItems from '../types/WarehouseItem';
import { motion } from 'framer-motion';

const Warehouse = () => {
  const { warehouseNumber } = useParams();
  const [warehouseItems, setWarehouseItems] = useState<WareHouseItems[]>([]);
  const data = useSelector((state: any) => state.items);
  useEffect(() => {
    let temp = data.items.filter(
      (dato: WareHouseItems) => dato.warehouse == Number(warehouseNumber)
    );
    setWarehouseItems(temp);
  }, [warehouseNumber, data]);
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.75 } }}
      className="flex justify-center gap-10 flex-wrap p-10 pb-[200px] md:pb-10"
    >
      {warehouseItems &&
        warehouseItems.map((item) => (
          <WarehouseItem key={uuidv4()} {...item} />
        ))}
    </motion.section>
  );
};

export default Warehouse;
