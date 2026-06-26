import type { ReactNode } from "react"


function Conatainer({children}:{children:ReactNode}) {
  return (
      <div className=" py-4 px-4 bg-gray-50/20">{children}</div>
  )
}

export default Conatainer