import MainPageItemPropsType from '../types/MainPageItemPropsType';
const MainPageItem = ({ title, para, ellipse }: MainPageItemPropsType) => {
  return (
    <div
      className="pl-[33px] pr-[28px] py-[8px] relative
       max-w-[231px] h-[82px] flex flex-col gap-[1px]
    bg-[#fdfdfd] border-textWhiteBlur border-[1px] border-opacity-70 z-10"
    >
      <div className="w-[100%] h-[100%] relative z-10 ">
        <h4 className="uppercase text-[16px] leading-[19px] text-black">
          {title}
        </h4>
        <p className="text-[13px] text-black text-opacity-40 leading-[15px]">
          {para}
        </p>
      </div>
      <div className="absolute z-0 left-[-50px] top-[-50px]">
        <img src={ellipse} alt="ellipse" />
      </div>
    </div>
  );
};

export default MainPageItem;
