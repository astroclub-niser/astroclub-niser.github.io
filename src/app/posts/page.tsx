import Link from 'next/link'
import { getAllPosts } from '../../../lib/api'

export default async function Page() {
  const posts = await getAllPosts()

  return (
    <div>
      <h1>My blog</h1>

      <h2>All posts:</h2>
      <ul>
        {posts.map(post => {
          const { id, date, title } = post
          return (
            <li key={id}>
              <Link href={`/posts/${id}`}>
                {date} - {title}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}