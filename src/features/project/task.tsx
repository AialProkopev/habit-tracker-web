import { ApiSchemas } from "@/shared/api/schema";

interface TaskProps {
  data: ApiSchemas["Task"];
}

export default function Task({ data }: TaskProps) {
  return <div>{data.title}</div>;
}
