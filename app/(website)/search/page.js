"use client";

import { useSearchParams } from "next/navigation";
import SearchPage from "./default";
import { searchAllPosts } from "@/lib/sanity/client";

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
