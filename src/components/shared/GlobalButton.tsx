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
    <div className="flex items-center gap-2 font-satoshi font-bold text-xl">
             {title}
              <Button
                variant="white"
                shape="circle"
                className="w-[54px] h-[54px] btn-shadow ml-4"
                onClick={onClick}
              >
               
                {icon}
              </Button>
            </div>
  )
}

export default GlobalButton