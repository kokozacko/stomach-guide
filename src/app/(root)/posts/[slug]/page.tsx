import { posts } from "@/data/constans";
import { Dot, Tag, User } from "lucide-react";

export default function Posts({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug.toString() === params.slug);
  console.log(post);
  return (
    <section className="flex flex-col px-4 pt-48">
      <div className="flex flex-col md:flex-row justify-between border-b gap-4 border-indigo-400 pb-4">
        <h1 className="sm:text-3xl ">{post?.title}</h1>
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <User className="text-indigo-600 shrink-0" />{" "}
            <span className="w-max">{post?.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Tag className="text-indigo-600" />{" "}
            <span className="capitalize">{post?.category}</span>
          </div>
        </div>
      </div>
      <article className="pt-10 flex flex-col gap-6 sm:text-xl">
        <p className="text-justify ">{post?.content}</p>
        {post?.content2 ? (
          <p className="text-justify">{post?.content2}</p>
        ) : null}
        {post?.ul ? (
          <ul className="flex flex-col gap-4 list-disc mt-10 ">
            {post.ul.map((li) => (
              <li className="flex items-center">
                <Dot className="w-10 h-10 shrink-0" />
                <span>{li}</span>
              </li>
            ))}
          </ul>
        ) : null}
        {post?.ol ? (
          <ul className="flex flex-col gap-10 list-disc mt-10 ">
            {post.ol.map((li, i) => (
              <li className="flex flex-col gap-2">
                <h3 className="text-2xl">
                  {`${i + 1}. `}
                  <span className="capitalize">{li.title}</span>
                </h3>
                <span>{li.text}</span>
              </li>
            ))}
          </ul>
        ) : null}
        {post?.content3 ? (
          <p className="text-justify mt-10">{post?.content3}</p>
        ) : null}
        {post?.content4 ? (
          <p className="text-justify mt-10">{post?.content4}</p>
        ) : null}
        {post?.paragraphs ? (
          <ul className="flex flex-col gap-10 list-disc mt-10 ">
            {post.paragraphs.map((li, i) => (
              <li className="flex flex-col gap-2">
                <h3 className="text-2xl underline">{li.title}</h3>
                <span>{li.text}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </article>
    </section>
  );
}
