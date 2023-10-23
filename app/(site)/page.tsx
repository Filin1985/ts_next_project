import { Htag, Card } from '@/components';
import styles from './page.module.css';
import {getAllPosts} from '@/api/posts';

export default async function Home() {
  const posts = await getAllPosts()

  return (
    <main className={styles.wrapper}>
      {posts?.map((post: any) => (
        <Card
        key={post.id}
        title={post.title}
        tag="Front-end"
        text={post.body}
      />
      ))}
    </main>
  );
}
