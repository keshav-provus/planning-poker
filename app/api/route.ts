import GenSession from "../../lib/genSession";

export async function GET(request: Request) {
    // const { ticket } = await request.json();
    // const session = await GenSession();
    // return new Response(JSON.stringify({ session }));

    return new Response(JSON.stringify({ session: "123" }));
}