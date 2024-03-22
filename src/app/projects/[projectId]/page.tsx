import getProjectDetail from '@/actions/getProjectDetail'
import EmptyState from '@/components/EmptyState'
import Image from 'next/image'
import Link from 'next/link'
import { AiFillGithub } from 'react-icons/ai'
import { CgArrowLeft, CgWebsite } from 'react-icons/cg'

const ProjectDetail = (props: any) => {
  const projectId = props.params.projectId

  const currentProject = getProjectDetail(Number(projectId))

  if (!currentProject) {
    return (
      <EmptyState
        title="There is no any project!"
        subtitle="You can go back to see other projects."
      />
    )
  }

  return (
    <section className="my-20">
      <div className="mb-12">
        <div className="flex items-center ">
          <Link
            href={'/projects'}
            className="w-[30px] h-[30px] bg-white text-black rounded-full flex items-center justify-center transition-all duration-200 hover:bg-white/70"
          >
            <CgArrowLeft size={18} />
          </Link>
          <h2 className="text-center w-full text-4xl dark:gradient-dark-text gradient-text font-bold">
            {currentProject.title}
          </h2>
        </div>
        <div className="flex flex-wrap mt-2 justify-center  dark:text-gray-700 text-gray-300 font-medium text-sm technologies">
          {currentProject.technologies.map((technologie, index) => (
            <span
              key={index}
              className="mr-2 ml-0"
            >
              {technologie} <span>-</span>
            </span>
          ))}
        </div>
      </div>
      <div className="relative w-full rounded-lg overflow-hidden">
        <Image
          className="object-cover rounded-lg h-full !relative group-hover:scale-110 transition-all duration-200"
          fill
          alt={currentProject?.title}
          src={currentProject?.image}
        />
      </div>

      <p className="text-gray-400 mt-12 dark:text-gray-600">
        {currentProject.description}
      </p>

      <div className="mt-16 flex gap-x-8">
        <Link
          target="_blank"
          href={currentProject.source}
          className="btn btn-primary"
        >
          <AiFillGithub />
          <span>Github</span>
        </Link>
        <Link
          target="_blank"
          href={currentProject.demo}
          className="btn btn-primary"
        >
          <CgWebsite />
          <span>Demo</span>
        </Link>
      </div>
    </section>
  )
}

export default ProjectDetail
