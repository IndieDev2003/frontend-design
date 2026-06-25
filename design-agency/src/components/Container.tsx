import type { ReactNode } from "react";

function Container({ children }:{children: ReactNode}) {
  return <div className="px-4 bg-orange-50">{children}</div>;
}

export default Container;
