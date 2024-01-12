import { Metadata } from "next"
import fs from 'fs'
// import Markdown from "markdown-to-jsx";
// import matter from "gray-matter";

export const metadata: Metadata = {
  title: 'Events | NISER Astronomy Club',
  description: 'We are the Astronomy Club of NISER, Bhubaneswar',
}

// const getPostContent = (slug: string) => {
//   const folder = 'posts/'
//   const file = `${folder}${slug}.md`
//   const content = fs.readFileSync(file, 'utf8')
//   const matterResult = matter(content)
//   return matterResult
// }

export default async function PostPage() {
  // const slug = props.params.slug
  // const post = getPostContent(slug)

  return (
    <main className="project-post">
      {/* <h1>{post.data.title}</h1>
       <p>{post.data.date}</p> 
      <article className="prose dark:prose-invert lg:prose-xl">
        <Markdown>{post.content}</Markdown>
      </article>*/}
      <p className="page-description">Page under construction.<br/>Come back later!</p>
    </main> 
  )
}
