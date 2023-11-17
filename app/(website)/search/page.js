"use client";

import { useSearchParams } from "next/navigation";
import SearchPage from "./default";
import { searchAllPosts } from "@/lib/sanity/client";

// eslint-disable-next-line @next/next/no-async-client-component
export default async function IndexPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");
  const posts = await searchAllPosts(query);
  const props = {
    query: query,
    posts: posts
  };
  return <SearchPage props={props} />;
}

// export const revalidate = 60;
// async function getParams(req: Request) {
//   const stateSymbol = Object.getOwnPropertySymbols(req).find(
//     symbol => String(symbol) === "Symbol(state)"
//   );
//   if (stateSymbol) {
//     const stateValue = req[stateSymbol];
//     const searchParams = stateValue.url.searchParams;

//     const type = searchParams.get("type") || "post";
//     const secret = searchParams.get("secret");
//     const slug = searchParams.get("slug");
//     console.log(type, slug, secret);
//     return { secret, type, slug };
//   }
// }
