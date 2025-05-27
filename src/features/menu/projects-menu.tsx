import { rqClient } from "@/shared/api/instance";
import { ROUTES } from "@/shared/routes";
import { UI_TEXT } from "@/shared/texts/ui-text";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";

export default function ProjectsMenu() {
  const { data } = rqClient.useQuery("get", "/projects");
  const navigate = useNavigate();

  const handleClick = (projectId: string) => {
    navigate(ROUTES.PROJECT.replace(":projectId", projectId));
  };

  return (
    <div>
      <h3 className="text-center">{UI_TEXT.menu_projects}</h3>
      <ul>
        {data?.map((project) => (
          <li key={project.id}>
            <Button
              onClick={() => {
                handleClick(project.id);
              }}
            >
              {project.name}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
