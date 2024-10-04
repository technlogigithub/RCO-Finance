import { FC } from 'react'

interface CardsProps{
    children: any;
    classNames?: string;
}
const Cards:FC<CardsProps> = ({ children, classNames })  => {
  return (
    <div className={`w-full h-96 bannerBtnShadow rounded-[32px] px-6 lg:px-8 py-12 ${classNames ? classNames : ''}`}>
         {children}
    </div>
  )
}

export default Cards