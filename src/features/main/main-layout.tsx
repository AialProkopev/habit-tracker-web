import { Outlet } from "react-router";
import Menu from "../menu";

export function MainLayout() {
  return (
    <div className="flex w-full h-full bg-smokyblack text-french-grey">
      <Menu />
      <Outlet />
    </div>
  );
}
