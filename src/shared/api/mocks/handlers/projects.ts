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

const tasks: ApiSchemas["Task"][] = [
  // Задачи для "Утренние привычки"
  {
    id: "660e8400-e29b-41d4-a716-446655440000",
    projectId: "550e8400-e29b-41d4-a716-446655440000",
    title: "Выпить стакан воды",
    completed: true,
    createdAt: "2023-01-01T08:05:00Z",
    updatedAt: "2023-01-10T09:30:00Z"
  },
  {
    id: "660e8400-e29b-41d4-a716-446655440001",
    projectId: "550e8400-e29b-41d4-a716-446655440000",
    title: "Зарядка 10 минут",
    completed: false,
    createdAt: "2023-01-01T08:10:00Z",
    updatedAt: "2023-01-01T08:10:00Z"
  },

  // Задачи для "Спортивный режим"
  {
    id: "660e8400-e29b-41d4-a716-446655440002",
    projectId: "550e8400-e29b-41d4-a716-446655440001",
    title: "Тренировка в зале",
    completed: true,
    createdAt: "2023-01-05T14:30:00Z",
    updatedAt: "2023-01-15T16:45:00Z"
  },
  {
    id: "660e8400-e29b-41d4-a716-446655440003",
    projectId: "550e8400-e29b-41d4-a716-446655440001",
    title: "Пробежка 5 км",
    completed: false,
    createdAt: "2023-01-05T14:35:00Z",
    updatedAt: "2023-01-05T14:35:00Z"
  },

  // Задачи для "Продуктивность на работе"
  {
    id: "660e8400-e29b-41d4-a716-446655440004",
    projectId: "550e8400-e29b-41d4-a716-446655440002",
    title: "Составить план на день",
    completed: true,
    createdAt: "2023-01-10T10:20:00Z",
    updatedAt: "2023-01-20T11:20:00Z"
  },

  // Задачи для "Здоровое питание"
  {
    id: "660e8400-e29b-41d4-a716-446655440005",
    projectId: "550e8400-e29b-41d4-a716-446655440003",
    title: "Приготовить полезный завтрак",
    completed: true,
    createdAt: "2023-01-15T12:05:00Z",
    updatedAt: "2023-01-25T13:10:00Z"
  },
  {
    id: "660e8400-e29b-41d4-a716-446655440006",
    projectId: "550e8400-e29b-41d4-a716-446655440003",
    title: "Выпить 2 литра воды",
    completed: false,
    createdAt: "2023-01-15T12:10:00Z",
    updatedAt: "2023-01-15T12:10:00Z"
  },

  // Задачи для "Вечерний ритуал"
  {
    id: "660e8400-e29b-41d4-a716-446655440007",
    projectId: "550e8400-e29b-41d4-a716-446655440004",
    title: "Чтение 30 минут",
    completed: false,
    createdAt: "2023-01-20T18:35:00Z",
    updatedAt: "2023-01-20T18:35:00Z"
  },
  {
    id: "660e8400-e29b-41d4-a716-446655440008",
    projectId: "550e8400-e29b-41d4-a716-446655440004",
    title: "Медитация перед сном",
    completed: true,
    createdAt: "2023-01-20T18:40:00Z",
    updatedAt: "2023-01-30T20:00:00Z"
  }
];


export const projectsHandlers = [
  http.get("/projects", () => {
    return HttpResponse.json(projects);
  }),
  http.get("/projects/{projectId}/tasks", ({params}) => {
    const {projectId} = params;

    const projectTasks = tasks.filter(task => projectId === task.projectId);
    return HttpResponse.json(projectTasks);
  })
]