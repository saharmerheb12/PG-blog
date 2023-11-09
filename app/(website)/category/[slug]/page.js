import CategoryPage from "./default";
import { getPostsByCategory } from "@/lib/sanity/client";

export default async function IndexPage({ params }) {
  const category = params.slug;
  const posts = await getPostsByCategory(category);
  const props = {
    category: category,
    posts: posts
  };

  return <CategoryPage props={props} />;
}

// export const revalidate = 60;
