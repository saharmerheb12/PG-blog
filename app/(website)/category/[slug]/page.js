import CategoryPage from "./default";
import {
  getPostsByCategory,
  getTopCategories,
  searchAllPosts
} from "@/lib/sanity/client";

// export async function generateMetadata({ params }) {
//   const categories = await getTopCategories();
//   const category = categories.find(
//     category => category.slug.current === params.slug
//   );
//   console.log("title", category.title);
//   return { title: category.title };
// }

export default async function IndexPage({ params }) {
  const categories = await getTopCategories();
  const category = categories.find(
    category => category.slug.current === params.slug
  );
  const posts = await getPostsByCategory(params.slug);
  const props = {
    category: category.title,
    posts: posts
  };

  return <CategoryPage props={props} />;
}

// export const revalidate = 60;
