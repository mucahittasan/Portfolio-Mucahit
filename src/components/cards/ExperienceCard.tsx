import { Experience } from '../../data/experiences'

const ExperienceCard = ({ item }: { item: Experience }) => {
  return (
    <div className="border-b border-b-gray-700 pb-4">
      <div className="flex flex-col items-start gap-y-2 mb-4">
        <article className="flex sm:flex-row flex-col sm:items-center gap-x-2">
          <h3 className="md:text-2xl text-xl font-bold">{item.company_name}</h3>
          <p className="text-gray-400">
            ({item.work_time.start} - {item.work_time.end}){' '}
            <span className="text-gray-500">{item.work_time?.total}</span>
          </p>
        </article>
        <h4 className="md:text-lg text-base font-bold text-gray-500">
          {item.job_title}
        </h4>
      </div>
      <ul className="md:ml-10 ml-4 flex flex-col gap-y-2">
        {item.about_job.map((item, i) => (
          <li
            key={i}
            className="list-disc text-gray-300 font-medium md:text-base text-sm"
          >
            {item}
          </li>
        ))}
      </ul>
      <h4 className="font-bold mt-4 md:text-xl text-lg">Technologies</h4>
      <p className="md:ml-10 mt-4">
        {item.technologies.map((item) => (
          <span className="font-medium text-gray-400">{item} | </span>
        ))}
      </p>
    </div>
  )
}

export default ExperienceCard
