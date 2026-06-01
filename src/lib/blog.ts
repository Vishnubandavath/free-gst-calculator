import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

export interface BlogPost {
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  category: string;
  tags: string[];
  featuredImage?: string;
  contentHtml: string;
  draft?: boolean;
}

const postsDirectory = path.join(process.cwd(), 'src/content/blog');

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      const { data, content } = matter(fileContents);
      const contentHtml = marked.parse(content) as string;

      return {
        slug: data.slug || slug,
        title: data.title || '',
        description: data.description || '',
        publishedAt: data.publishedAt || '',
        updatedAt: data.updatedAt || undefined,
        author: data.author || '',
        category: data.category || 'Guides',
        tags: data.tags || [],
        featuredImage: data.featuredImage || undefined,
        draft: data.draft || false,
        contentHtml,
      } as BlogPost;
    })
    .filter((post) => !post.draft)
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));

  return allPostsData;
}

export function getPostBySlug(slug: string): BlogPost | null {
  const allPosts = getAllPosts();
  return allPosts.find((post) => post.slug === slug) || null;
}

export const POSTS_PER_PAGE = 12;

export interface PaginationInfo {
  currentPage: number;
  totalPages: number;
  totalPosts: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  posts: BlogPost[];
}

export function getPaginatedPosts(pageNumber: number = 1): PaginationInfo {
  const allPosts = getAllPosts();
  const totalPosts = allPosts.length;
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);
  
  // Ensure page is within valid range
  const validPage = Math.max(1, Math.min(pageNumber, totalPages || 1));
  
  const startIdx = (validPage - 1) * POSTS_PER_PAGE;
  const endIdx = startIdx + POSTS_PER_PAGE;
  const posts = allPosts.slice(startIdx, endIdx);

  return {
    currentPage: validPage,
    totalPages,
    totalPosts,
    hasNextPage: validPage < totalPages,
    hasPrevPage: validPage > 1,
    posts,
  };
}
