import { rqClient } from "@/shared/api/instance";
import { useParams } from "react-router";

function ProjectPage() {
  const { projectId = "1" } = useParams();
  console.log(projectId);
  const tasksQuery = rqClient.useQuery("get", "/projects/{projectId}/tasks", {
    params: { path: { projectId: projectId } },
  });

  return <div>{tasksQuery.data?.map((task) => <div key={task.id}>{task.title}</div>)}</div>;
}

export const Component = ProjectPage;
