import type { ReactNode } from "react";
import backImg from '../assets/background.jpg'
function Container({ children }: { children: ReactNode }) {
  return (
    <div className=" overflow-x-hidden relative">
      <img src={backImg} alt="background Image" className="absolute z-10 h-full w-full object-bottom object-cover" />
      <div className="z-20 relative px-4">{children}</div>
    </div>
  );
}

export default Container;
