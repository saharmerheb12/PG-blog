import { revalidatePath } from "next/cache";

export async function GET(req: Request) {
  var message = "success";
  const params = await getParams(req);
  if (params?.secret !== process.env.REVALIDATE_TOKEN) {
    message = "Invalid token";
  } else {
    try {
      // this should be the actual path not a rewritten path
      // e.g. for "/blog/[slug]" this should be "/blog/post-1"
      if (params?.slug) {
        const path = `/${params?.type}/${params?.slug}`;
        console.log(`path to revalidate: ${path}`);
        revalidatePath(path);
      } else {
        message = "slug is required";
      }
    } catch (err) {
      message = err.message;
    }
  }

  return new Response(message, {
    status: message === "success" ? 200 : 400
  });
}

async function getParams(req: Request) {
  const stateSymbol = Object.getOwnPropertySymbols(req).find(
    symbol => String(symbol) === "Symbol(state)"
  );
  if (stateSymbol) {
    const stateValue = req[stateSymbol];
    const searchParams = stateValue.url.searchParams;

    const type = searchParams.get("type") || "post";
    const secret = searchParams.get("secret");
    const slug = searchParams.get("slug");
    console.log(type, slug, secret);
    return { secret, type, slug };
  }
}
