import { HttpResponse } from "msw";
import { ApiSchemas } from "../../schema";
import { http } from "../http";

const projects: ApiSchemas["Project"][] = [
  {
    id: "550e8400-e29b-41d4-a716-446655440000",
    name: "Утренние привычки",
    createdAt: "2023-01-01T08:00:00Z",
    updatedAt: "2023-01-10T09:30:00Z"
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440001",
    name: "Спортивный режим",
    createdAt: "2023-01-05T14:25:00Z",
    updatedAt: "2023-01-15T16:45:00Z"
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440002",
    name: "Продуктивность на работе",
    createdAt: "2023-01-10T10:15:00Z",
    updatedAt: "2023-01-20T11:20:00Z"
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440003",
    name: "Здоровое питание",
    createdAt: "2023-01-15T12:00:00Z",
    updatedAt: "2023-01-25T13:10:00Z"
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440004",
    name: "Вечерний ритуал",
    createdAt: "2023-01-20T18:30:00Z",
    updatedAt: "2023-01-30T20:00:00Z"
  }
];

export const handlers = [
  http.get("/projects", () => {
    return HttpResponse.json(projects);
  })
]