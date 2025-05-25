import { getProjectsMocks } from "@/shared/api/mymocks";

function TodayPage() {
  const projects = getProjectsMocks();

  console.log(projects);

  return <div>today</div>;
}

export const Component = TodayPage;
