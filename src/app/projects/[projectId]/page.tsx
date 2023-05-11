import React from 'react'

const ProjectDetail = (props: any) => {

    const projectId = props.params.projectId;

    return (
        <div>{projectId}</div>
    )
}

export default ProjectDetail