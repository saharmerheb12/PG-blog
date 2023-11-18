import PostPage from "./default";

import {
  getAllPostsSlugs,
  getPostBySlug,
  getTopCategories
} from "@/lib/sanity/client";

function isArabic(text) {
  const arabicRanges = [
    /[\u0600-\u06FF]/, // Arabic
    /[\u0750-\u077F]/, // Arabic Supplement
    /[\u08A0-\u08FF]/ // Arabic Extended-A
  ];

  return arabicRanges.some(range => range.test(text));
}

export async function generateStaticParams() {
  return await getAllPostsSlugs();
}

export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug);
  return { title: post.title };
}

export default async function PostDefault({ params }) {
  const post = await getPostBySlug(params.slug);
  post.isArabic = isArabic(post.title);
  const categories = await getTopCategories();

  return <PostPage post={post} categories={categories} />;
}

export const revalidate = 60;
