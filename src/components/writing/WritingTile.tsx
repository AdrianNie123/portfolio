import type { Writing } from '../../types';
import { formatTileDate } from '../../lib/writing';

interface Props {
  entry: Writing;
}

export default function WritingTile({ entry }: Props) {
  return entry.type === 'Essay' ? (
    <EssayTile entry={entry} />
  ) : (
    <PoemTile entry={entry} />
  );
}

function PoemTile({ entry }: { entry: Writing }) {
  return (
    <a
      href={`/writing/${entry.slug}`}
      className="group flex flex-col aspect-[4/5] bg-surface border border-border rounded-xl overflow-hidden hover:border-text-subtle hover:-translate-y-0.5 transition-[transform,border-color] duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
    >
      <div className="flex-1 p-6 overflow-hidden">
        <p className="font-serif italic text-base lg:text-lg text-text-primary leading-[1.7]">
          {entry.excerpt}
        </p>
      </div>
      <div className="px-6 pb-6">
        <div className="border-t border-border pt-4 flex justify-between items-baseline gap-3">
          <span className="font-mono text-[10px] tracking-[0.08em] text-text-muted truncate min-w-0">
            {entry.title}
          </span>
          <span className="font-mono text-[10px] text-text-subtle shrink-0">
            {formatTileDate(entry.date)}
          </span>
        </div>
      </div>
    </a>
  );
}

function EssayTile({ entry }: { entry: Writing }) {
  const overline = entry.readingTime ? `ESSAY · ${entry.readingTime} MIN` : 'ESSAY';
  return (
    <a
      href={`/writing/${entry.slug}`}
      className="group flex flex-col aspect-[4/5] bg-primary rounded-xl overflow-hidden hover:-translate-y-0.5 transition-transform duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-dark focus-visible:ring-offset-2"
    >
      {entry.coverImage && (
        <div className="h-2/5 shrink-0 overflow-hidden">
          <img
            src={entry.coverImage}
            alt={entry.title}
            className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
            loading="lazy"
          />
        </div>
      )}
      <div className="flex flex-col justify-between flex-1 p-6">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-bg/60 mb-4">
            {overline}
          </p>
          <h3 className="font-serif text-2xl font-medium text-bg leading-[1.2] tracking-[-0.01em]">
            {entry.title}
          </h3>
        </div>
        <div className="border-t border-bg/20 pt-4 flex justify-between items-baseline">
          <span className="font-mono text-[10px] text-bg/50">
            {formatTileDate(entry.date)}
          </span>
          <span className="font-mono text-[10px] text-bg/70 group-hover:text-bg transition-colors">
            Read →
          </span>
        </div>
      </div>
    </a>
  );
}
