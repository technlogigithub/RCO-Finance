import { FC } from 'react'

interface CardsProps{
    children: any;
    classNames?: string;
    style?: any
}
const Cards:FC<CardsProps> = ({ children, classNames, style })  => {
  return (
    <div className={`w-full h-96 bannerBtnShadow rounded-[32px] px-6 lg:px-8 py-12 ${classNames ? classNames : ''}`} style={style}>
         {children}
    </div>
  )
}

export default Cards