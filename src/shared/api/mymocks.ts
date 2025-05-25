import projects from "./projects.json";

export function getProjectsMocks() {
    const json = JSON.stringify(projects);
    
    return JSON.parse(json);
}

