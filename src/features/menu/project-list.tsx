import React from "react";

import { NavLink } from "react-router";
import { rqClient } from "@/shared/api/instance";
import { ApiProject } from "@/shared/api/schema";
import { ROUTES } from "@/shared/routes";
import { UI_TEXT } from "@/shared/texts/ui-text";

export default function ProjectList() {
  const { data } = rqClient.useQuery("get", "/projects");

  console.log("render ProjectList");

  return (
    <div>
      <h3 className="text-center">{UI_TEXT.menu_projects}</h3>
      <ul>
        {data?.map((project) => (
          <li key={project.id}>
            <ProjectButton project={project} />
          </li>
        ))}
      </ul>
    </div>
  );
}

const ProjectButton = React.memo((props: { project: ApiProject }) => {
  const {
    project: { id, name },
  } = props;

  console.log("render button", name);

  return (
    <NavLink to={{ pathname: ROUTES.PROJECT.replace(":projectId", id) }} state={{ projectName: name }} end>
      {name}
    </NavLink>
  );
});
