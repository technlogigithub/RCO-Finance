import { FC } from 'react'
import { Button } from '../ui/button'
import { IconRightArrow } from '../Icons/Icons';

interface GlobalButtonProps {
    title:string,
    icon?:any,
    onClick?:() => {};
}
const GlobalButton:FC<GlobalButtonProps> = ({title, icon = <IconRightArrow />, onClick}) => {
  return (
    <div className="flex items-center gap-2 font-satoshi font-bold text-[18px] sm:text-xl">
             {title}
              <Button
                variant="white"
                shape="circle"
                className="w-8 sm:w-[54px] h-8 sm:h-[54px] btn-shadow ml-4 max-sm:p-0"
                onClick={onClick}
              >
               
                {icon}
              </Button>
            </div>
  )
}

export default GlobalButton