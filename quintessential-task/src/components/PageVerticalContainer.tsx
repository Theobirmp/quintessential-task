import ChildrenPropsType from '../types/ChildrenPropsType';

const PageVerticalContainer = ({ children }: ChildrenPropsType) => {
  return (
    <div className="dark:bg-bgDarkBlue transition-[background-color] ease-linear duration-200 flex flex-col w-[100%]">
      {children}
    </div>
  );
};

export default PageVerticalContainer;
