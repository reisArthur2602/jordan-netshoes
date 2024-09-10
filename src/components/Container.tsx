import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface IContainer {
  children: ReactNode;
  classname?: string;
}

const Container = ({ children, classname }: IContainer) => {
  return (
    <div
      className={twMerge(
        "mx-auto w-full max-w-80 sm:max-w-[44rem] lg:max-w-[76rem]",
        classname,
      )}
    >
      {children}
    </div>
  );
};

export default Container;
