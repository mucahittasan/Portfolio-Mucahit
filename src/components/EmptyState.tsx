import React, { FC } from 'react'

interface EmptyStateProps {
    title: string;
    subtitle?: string;
}

const EmptyState: FC<EmptyStateProps> = ({ title, subtitle }) => {
    return (
        <div className='text-center mt-16'>
            <h3 className='text-3xl gradient-text dark:gradient-dark-tex font-bold'>{title}</h3>
            <p className='text-gray-400 text-sm mt-2'>{subtitle}</p>
        </div>
    )
}

export default EmptyState