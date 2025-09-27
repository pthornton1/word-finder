import { solutionArray } from "./solution";

export async function GET() {
  return Response.json({ solutionArray, msg: "Success" });
}
