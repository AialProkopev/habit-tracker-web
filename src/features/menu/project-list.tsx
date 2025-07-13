import React from "react";
import { NavLink } from "react-router";

import TextureIcon from "@mui/icons-material/Texture";
import { IconButton, Menu, MenuItem } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import { rqClient } from "@/shared/api/instance";
import { ApiProject } from "@/shared/api/schema";
import { ROUTES } from "@/shared/routes";
import { UI_TEXT } from "@/shared/texts/ui-text";

export default function ProjectList() {
  const { data } = rqClient.useQuery("get", "/projects");

  return (
    <div className="w-full">
      <h3 className="text-center">{UI_TEXT.menu_projects}</h3>
      <ul>
        {data?.map((project) => (
          <li key={project.id} className="h-10">
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

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [iconHidden, setIconHidden] = React.useState(true);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMouseEnter = () => {
    setIconHidden(false);
  };
  const handleMouseLeave = () => {
    setIconHidden(true);
  };

  return (
    <div className="h-full w-full hover:bg-sky-700" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="flex items-center h-full">
        <NavLink
          className="flex gap-1 min-w-0 w-full"
          to={{ pathname: ROUTES.PROJECT.replace(":projectId", id) }}
          state={{ projectName: name }}
          end
        >
          <TextureIcon />
          <span className="overflow-hidden text-ellipsis whitespace-nowrap">{name}</span>
        </NavLink>
        <IconButton onClick={handleClick}>
          <MoreHorizIcon color={iconHidden ? "disabled" : "action"} />
        </IconButton>
      </div>

      <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem>Edit</MenuItem>
        <MenuItem>Delete</MenuItem>
      </Menu>
    </div>
  );
});
