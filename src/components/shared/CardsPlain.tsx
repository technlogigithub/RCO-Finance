import { FC } from 'react'

interface CardsProps{
    children: any;
    classNames?: string;
}
const Cards:FC<CardsProps> = ({ children, classNames })  => {
  return (
    <div className={`w-full h-96 bannerBtnShadow1 rounded-[32px] px-6 lg:px-8 py-12 ${classNames ? classNames : ''}`}
    style={{
      backgroundColor: 'rgba(217, 217, 217, 0.03)' // Added background color
    }}
    >
         {children}
    </div>
  )
}

export default Cards