'use client'
import { experiences } from '../../data/experiences'
import ExperienceCard from '../cards/ExperienceCard'
import { motion as m } from 'framer-motion'

const ExperiencePage = () => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
    >
      <m.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="primary-title"
      >
        <h3 className="select-none">Experience</h3>
        <h3 className="primary-title-dark">Experience</h3>
      </m.div>
      <m.div
        className="mt-10 flex flex-col gap-y-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {experiences.map((item, index) => (
          <m.div
            key={item.company_name}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.4 + index * 0.2,
              ease: 'easeOut',
            }}
          >
            <ExperienceCard item={item} />
          </m.div>
        ))}
      </m.div>
    </m.div>
  )
}

export default ExperiencePage
