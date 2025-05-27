import { useParams } from "react-router";

import { rqClient } from "@/shared/api/instance";
import Task from "./task";
import { PathParams, ROUTES } from "@/shared/routes";

// TODO: projectName - add enpoint to schema getProject or use useQuery

function ProjectPage() {
  const { projectId = "" } = useParams<PathParams[typeof ROUTES.PROJECT]>();

  const {
    data: projectTasks,
    isError,
    isLoading,
  } = rqClient.useQuery("get", "/projects/{projectId}/tasks", {
    params: { path: { projectId: projectId } },
  });

  if (!projectTasks) {
    return <div>No data</div>;
  }
  if (isLoading) {
    return <div>Loading data</div>;
  }

  if (isError) {
    return <div>Something went wrong...</div>;
  }

  return (
    <div className="w-full">
      <h3>Some Project Name</h3>
      <ul>
        {projectTasks.map((task) => (
          <li key={task.id}>
            <Task data={task} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export const Component = ProjectPage;
