/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-unused-vars */
export async function GET(request: Request): Promise<Response> {
  return new Response('Hello, Next.js!');
}
