
import { FC, ReactNode } from "react"

interface ContainerProps {
    children: ReactNode;
    className?: string;
}

const Container: FC<ContainerProps> = ({ children, className }) => {
    return (
        <div className={`max-w-4xl mx-auto xl:px-20 md:px-10 sm:px-2 px-4 h-full ${className}`}>
            {children}
        </div>
    )
}

export default Container