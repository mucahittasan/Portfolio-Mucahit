
import { FC, ReactNode } from "react"

interface ContainerProps {
    children: ReactNode;
    className?: string;
}

const Container: FC<ContainerProps> = ({ children, className }) => {
    return (
        <div className={`max-w-4xl mx-auto md:px-20 px-4 h-full ${className}`}>
            {children}
        </div>
    )
}

export default Container