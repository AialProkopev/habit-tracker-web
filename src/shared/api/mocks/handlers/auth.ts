import { HttpResponse } from "msw";
import { ApiSchemas } from "../../schema";
import { http } from "../http";
import { generateTokens } from "../jwt";

// const usersAuthResponse: ApiSchemas["AuthResponse"][] = [
//   {
//     id: "asdfasf-123sdfsdfsf",
//     email: "someuser@mail.com",
//     username: "someuser",
//     accessToken: "asdfalkj1DFKLSDJFKSLDf",
//     refreshToken: "jsKJKLSDJfjwe123sd1",
//     expiresIn: 3600,
//   }
// ]

type UserInput = ApiSchemas["RegisterRequest"];

const users = new Map<string, UserInput>();

export const authHandlers = [
  http.post("/auth/register", async ({ request }) => {
    const { username, email, password } = await request.clone().json();

    if (!validateUserInput({ username, email, password })) {
      return HttpResponse.json({ error: "Bad request" }, { status: 400 });
    }

    const userId = generateId();
    const { accessToken, refreshToken } = await generateTokens(userId);

    const registerResponse = {
      id: userId,
      username,
      email,
      accessToken,
      refreshToken,
      expiresIn: 3600,
    };

    users.set(userId, {
      username,
      email,
      password,
    });
    console.log("user created: ", username, email);

    return HttpResponse.json(registerResponse, { status: 200 });
  }),
  http.get("/auth/verify", ({ request }) => {
    const token = request.headers.get("Authorization");

    // if (token) {
    // }

    return HttpResponse.json({ message: `token is ${token}` }, { status: 200 });
  }),
];

function validateUserInput({ username, password, email }: UserInput): boolean {
  return Boolean(username && email && password && password.length >= 4);
}

function generateId(length = 16) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const randomValues = new Uint32Array(length);
  crypto.getRandomValues(randomValues);
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars[randomValues[i] % chars.length];
  }
  return result;
}
