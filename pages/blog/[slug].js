// Генерация статических путей
export async function getStaticPaths() {
  const posts = await getAllPosts()
  
  return {
    paths: posts.map((post) => ({
      params: { slug: post.slug }
    })),
    fallback: false
  }
}

// Получение данных во время сборки
export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug)
  
  return {
    props: {
      post
    }
  }
}

// Компонент страницы
export default function BlogPost({ post }) {
  return (
    <article>
      <h1>{post.title}</h1>
      <div>{post.content}</div>
    </article>
  )
} 