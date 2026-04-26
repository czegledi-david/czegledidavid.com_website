import { getPostData, getSortedPostsData } from '@/lib/posts';
import Link from 'next/link';
import { notFound } from 'next/navigation'; // EZ HIÁNYZOTT!

export async function generateStaticParams() {
  const posts = await getSortedPostsData();
  return posts.map((post) => ({
    id: post.id,
  }));
}

export default async function PostPage({ params }: { params: Promise<{ id: string }> }) {
  // Next.js 15-ben be kell várni a params-ot!
  const { id } = await params;

  try {
    const postData = await getPostData(id);

    return (
      <div className="max-w-3xl mx-auto py-16 px-4">
        <Link href="/blog" className="text-cyan-400 hover:text-white transition-colors mb-8 inline-block text-sm">
          &larr; Vissza a bloghoz
        </Link>
        
        <article className="prose prose-invert prose-cyan max-w-none">
          <header className="mb-10 border-b border-slate-800 pb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase">
                Bejegyzés
              </span>
              <span className="text-slate-500 text-sm">{postData.date}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white leading-tight">
              {postData.title}
            </h1>
          </header>

          <div 
            className="text-slate-300 leading-relaxed text-lg"
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }} 
          />
        </article>
      </div>
    );
  } catch (error) {
    notFound();
  }
}