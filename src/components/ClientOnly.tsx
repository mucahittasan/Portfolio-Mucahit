"use client";
import { useEffect, useState } from 'react'

interface ClientOnlyProps {
    children: React.ReactNode
}

const ClientOnly: React.FC<ClientOnlyProps> = ({
    children
}) => {

    const [hasMounted, setHasMounted] = useState<boolean>(false);

    useEffect(() => {
        setHasMounted(true);
    }, [])


    return (
        <div>
            {children}
        </div>
    )
}

export default ClientOnly;