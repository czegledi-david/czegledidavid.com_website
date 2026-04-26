import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';

export default async function BlogIndex() {
  const allPosts = await getSortedPostsData();

  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-white mb-10 border-l-4 border-cyan-500 pl-6">Szakmai Blog</h1>
      
      {allPosts.length === 0 && (
        <p className="text-slate-500 italic text-center py-20 border border-dashed border-slate-800 rounded-2xl">
          Még nincsenek bejegyzések. Dobj be egy .md fájlt a src/posts mappába!
        </p>
      )}

      <div className="grid gap-8">
        {allPosts.map(({ id, date, title, category }) => (
          <Link 
            href={`/blog/${id}`} // Itt az ID a fájlnév lesz (pl. elso-poszt)
            key={id} 
            className="group p-6 bg-slate-900/40 border border-slate-800 rounded-2xl hover:border-cyan-500/50 transition-all shadow-lg"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-cyan-400 text-xs font-mono uppercase tracking-widest">{category}</span>
              <span className="text-slate-500 text-xs">{date}</span>
            </div>
            <h2 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
              {title}
            </h2>
            <p className="text-slate-500 text-sm mt-2 font-medium">Kattints az olvasáshoz &rarr;</p>
          </Link>
        ))}
      </div>
    </div>
  );
}