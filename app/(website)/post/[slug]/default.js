import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/container";
import { notFound } from "next/navigation";
import { PortableText } from "@/lib/sanity/plugins/portabletext";
import { urlForImage } from "@/lib/sanity/image";
import { parseISO, format } from "date-fns";

import CategoryLabel from "@/components/blog/category";
import AuthorCard from "@/components/blog/authorCard";
import Sidebar from "@/components/sidebar";
import SocialShare from "@/components/socialshare";

export default function Post({ post, categories }) {
  const slug = post?.slug;
  const direction = post?.isArabic ? "rtl" : "ltr";

  if (!slug) {
    notFound();
  }

  const imageProps = post?.mainImage
    ? urlForImage(post?.mainImage)
    : null;

  const AuthorimageProps = post?.author?.image
    ? urlForImage(post.author.image)
    : null;
  const sidebarProps = {
    categories: categories,
    related: post.related
  };
  return (
    <>
      <Head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5437877457883303"
          crossorigin="anonymous"></script>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:type" content="website" />
        <meta
          name="og:title"
          property="og:title"
          content={post.title}
        />
        <meta
          name="og:description"
          property="og:description"
          content={post.excerpt}
        />
        <meta property="og:site_name" content="Site Name" />
        <meta
          property="og:url"
          content={`posts/${post.slug.current}`}
        />
        <meta
          name="og:image"
          property="og:image"
          content={post?.mainImage}
        />
      </Head>
      <div className="relative z-0 flex min-h-[calc(100vh-30vh)] items-center">
        <div className="absolute -z-10 h-full w-full before:absolute before:z-10 before:h-full before:w-full before:bg-black/30">
          {imageProps && (
            <Image
              src={imageProps.src}
              alt={post.mainImage?.alt || "Thumbnail"}
              loading="eager"
              fill
              sizes="100vw"
              className="object-cover"
            />
          )}
        </div>
        <div className="mx-auto max-w-screen-lg px-5 py-20 text-center">
          <h1 className="text-brand-primary mb-3 mt-2 text-3xl font-semibold tracking-tight text-white lg:text-5xl lg:leading-tight">
            {post.title}
          </h1>
          <div className="mt-8 flex justify-center space-x-3 text-gray-500 ">
            <div className="flex flex-col gap-3 md:flex-row md:items-center">
              <div className="flex gap-3">
                <div className="relative h-5 w-5 flex-shrink-0">
                  {AuthorimageProps && (
                    <Link
                      href={`/author/${post.author.slug.current}`}>
                      <Image
                        src={AuthorimageProps.src}
                        alt={post?.author?.name}
                        className="rounded-full object-cover"
                        fill
                        sizes="40px"
                      />
                    </Link>
                  )}
                </div>
                <p className="text-gray-100">
                  <Link href={`/author/${post.author.slug.current}`}>
                    {post.author.name}
                  </Link>
                  <span className="hidden pl-2 md:inline"> .</span>
                </p>
              </div>
              <div>
                <div className="flex space-x-2 text-sm md:flex-row md:items-center">
                  <time
                    className="text-gray-500 dark:text-gray-400"
                    dateTime={post?.publishedAt || post._createdAt}>
                    {format(
                      parseISO(post?.publishedAt || post._createdAt),
                      "MMMM dd, yyyy"
                    )}
                  </time>

                  <span className="text-gray-100">
                    · {post.estReadingTime || "5"} min read
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-14 flex max-w-screen-xl flex-col gap-5 px-5 md:flex-row">
        <article className="flex-1">
          <div
            dir={direction}
            className="prose mx-auto my-3 dark:prose-invert prose-a:text-blue-600">
            {post.body && <PortableText value={post.body} />}
            <SocialShare
              articleTitle={post.title}
              articleSlug={slug.current}
            />
          </div>
        </article>
        <aside className="sticky top-0 w-full self-start md:w-96">
          <div className="mt-5 font-sans">
            <div>
              <Sidebar props={sidebarProps} />
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}

const MainImage = ({ image }) => {
  return (
    <div className="mb-12 mt-12 ">
      <Image {...urlForImage(image)} alt={image.alt || "Thumbnail"} />
      <figcaption className="text-center ">
        {image.caption && (
          <span className="text-sm italic text-gray-600 dark:text-gray-400">
            {image.caption}
          </span>
        )}
      </figcaption>
    </div>
  );
};
