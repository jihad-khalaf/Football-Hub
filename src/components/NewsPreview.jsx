import { Link } from 'react-router-dom'
import { news } from '../data/news.js'

export default function NewsPreview() {
  const [lead, ...rest] = news

  return (
    <section id="news" className="flex min-w-0 flex-col gap-5">
      <div className="flex items-end justify-between gap-4">
        <h2 className="font-display text-[44px] font-bold uppercase leading-none">Latest</h2>
        <Link to="/news" className="shrink-0 font-semibold text-gold hover:text-ink">
          All news
        </Link>
      </div>

      <Link to="/news" className="group flex flex-col gap-3.5">
        <span className="block overflow-hidden">
          <img
            src={lead.photo}
            alt={lead.photoAlt}
            loading="lazy"
            className="h-[250px] w-full object-cover object-[center_30%] transition-transform duration-700 group-hover:scale-105"
          />
        </span>
        <span className="text-xs font-semibold uppercase tracking-[0.12em] text-gold">{lead.category}</span>
        <span className="text-2xl font-semibold leading-tight group-hover:text-gold">{lead.title}</span>
      </Link>

      {rest.map((story) => (
        <Link key={story.id} to="/news" className="group flex flex-col gap-1.5 border-t border-line pt-4">
          <span className="text-xs font-semibold uppercase tracking-[0.12em] text-mute">{story.category}</span>
          <span className="text-lg font-medium leading-snug group-hover:text-gold">{story.title}</span>
        </Link>
      ))}
    </section>
  )
}
