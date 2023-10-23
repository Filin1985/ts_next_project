import { API } from '@/app/api';
import { PostItem } from '@/interfaces/post.interface';

export async function getAllPosts(): Promise<PostItem[] | null | undefined> {
  try {
    const res = await fetch(API.post.getAll);
    console.log(res);
    if (!res.ok) {
      return null;
    }
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}
