import getAllProjects from "./getAllProjects";

export default function getProjectDetail(id: number) {
    const projects = getAllProjects();

    const currentProject = projects.find(item => item.id === id)

    return currentProject;
}