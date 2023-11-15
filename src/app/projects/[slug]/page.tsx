import { Metadata } from "next"
import fs from 'fs'
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";

export const metadata: Metadata = {
  title: 'Projects | NISER Astronomy Club',
  description: 'We are the Astronomy Club of NISER, Bhubaneswar',
}

const getPostContent = (slug: string) => {
  const folder = 'posts/projects/'
  const file = `${folder}${slug}.md`
  const content = fs.readFileSync(file, 'utf8')
  const matterResult = matter(content)
  return matterResult
}

export default async function PostPage(props: any) {
  const slug = props.params.slug
  const post = getPostContent(slug)

  return (
    <main>
      <h1>{post.data.title}</h1>
      <p>{post.data.date}</p>
      <article className="prose dark:prose-invert lg:prose-xl">
        <Markdown>{post.content}</Markdown>
      </article>
    </main>
  )
}

// export async function generateStaticParams() {
//   const posts = await fetch('https://.../posts').then((res) => res.json())
 
//   return posts.map((post) => ({
//     slug: post.slug,
//   }))
// }
