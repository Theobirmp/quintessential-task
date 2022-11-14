import MainPageItem from '../components/MainPageItem';
import data from '../data/mainPageData';
import { v4 as uuidv4 } from 'uuid';
import { motion } from 'framer-motion';
const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.75 } }}
      className=" h-[100%]  px-[84px]
     flex gap-[80px]
      flex-wrap mt-[80px] md:mt-[50px] lg:mt-[138px] justify-center"
    >
      {data.map((item) => (
        <MainPageItem
          title={item.title}
          para={item.para}
          ellipse={item.ellipse}
          key={uuidv4()}
        />
      ))}
    </motion.div>
  );
};

export default Home;
