import projects from "./projects.json";

export type Task = {
    id: number,
    description: string,
    name: string,
};

export type Project = {
    id: number,
    name: string,
    tasks: Task[]
};

export function getProjectsMocks(): Project[] {
    return projects.projects;
}

