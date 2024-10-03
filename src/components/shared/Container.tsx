import { FC } from 'react'

interface ContainerProps{
    children: any;
    classNames?: string;
}

const Container: FC<ContainerProps> = ({ children, classNames }) => {
  return (
    <div className={`py-36 text-white ${classNames ? classNames : ''}`}>
        {children}
    </div>
  )
}

export default Container
