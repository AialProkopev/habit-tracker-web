import { rqClient } from "@/shared/api/instance";
import { UI_TEXT } from "@/shared/texts/ui-text";
import { Button } from "@mui/material";

export default function Projects() {
  const projectsQuery = rqClient.useQuery("get", "/projects");

  return (
    <div>
      <h3 className="text-center">{UI_TEXT.menu_projects}</h3>
      <ul>
        {projectsQuery.data?.map((project) => (
          <li key={project.id}>
            <Button>{project.name}</Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
