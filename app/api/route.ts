import GenSession from "../../lib/genSession";

export async function GET(request: Request) {
    const session = await GenSession();
    return Response.json({ session });
}