import { experiences } from '../../data/experiences'
import ExperienceCard from '../cards/ExperienceCard'

const ExperiencePage = () => {
  return (
    <div>
      <div className="primary-title">
        <h3 className="select-none">Experience</h3>
        <h3 className="primary-title-dark">Experience</h3>
      </div>
      <div className="mt-10 flex flex-col gap-y-8">
        {experiences.map((item, index) => (
          <ExperienceCard
            item={item}
            key={item.company_name}
          />
        ))}
      </div>
    </div>
  )
}

export default ExperiencePage
