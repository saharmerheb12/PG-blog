"use client";

import SearchPage from "./default";
import { useSearchParams } from "next/navigation";
import { searchAllPosts } from "@/lib/sanity/client";

export default function IndexPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");
  const promise = searchAllPosts(query);
  var posts = [];
  console.log("query:", query);

  promise.then(result => {
    console.log("Result:", result[0]._id);
    posts = result;
    const props = {
      query: query,
      posts: posts
    };
    console.log("props", props);
    return <SearchPage props={props} />;
  });
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
