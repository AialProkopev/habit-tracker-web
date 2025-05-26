import { getProjectsMocks } from "@/shared/api/mymocks";
import { UI_TEXT } from "@/shared/texts/ui-text";
import { Button } from "@mui/material";

export default function Projects() {
  const projects = getProjectsMocks();

  return (
    <div>
      <h3 className="text-center">{UI_TEXT.menu_projects}</h3>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <Button>{project.name}</Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
