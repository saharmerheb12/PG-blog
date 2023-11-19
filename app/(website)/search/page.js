import SearchPage from "./default";
import { searchAllPosts } from "@/lib/sanity/client";

export default async function IndexPage(props) {
  const query = props.searchParams?.q || "";
  const posts = await searchAllPosts(query);

  return <SearchPage query={query} posts={posts} />;
}

// export const revalidate = 60;
