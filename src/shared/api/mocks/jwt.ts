import { jwtVerify, SignJWT } from "jose";

const JWT_SECRET_KEY = new TextEncoder().encode("secret-key");
const ACCESS_TOKEN_EXPIRY = "3s";
const REFRESH_TOKEN_EXPIRY = "7d";

export async function generateTokens(userId: string) {
  const accessToken = await new SignJWT({ userId })
    .setExpirationTime(ACCESS_TOKEN_EXPIRY)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .sign(JWT_SECRET_KEY);

  const refreshToken = await new SignJWT({ userId })
    .setExpirationTime(REFRESH_TOKEN_EXPIRY)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .sign(JWT_SECRET_KEY);

  return { accessToken, refreshToken };
}

export async function verifyToken(token: string): Promise<string> {
  const { payload } = await jwtVerify(token, JWT_SECRET_KEY);

  return (payload as { userId: string }).userId;
}
