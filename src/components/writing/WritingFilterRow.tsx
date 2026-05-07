import type { SortMode, TypeFilter } from '../../lib/writing';

interface Props {
  counts: { all: number; poems: number; essays: number };
  typeFilter: TypeFilter;
  onTypeFilter: (f: TypeFilter) => void;
  sortMode: SortMode;
  onSortMode: (m: SortMode) => void;
}

const FILTERS: [TypeFilter, string][] = [
  ['all', 'ALL'],
  ['poems', 'POEMS'],
  ['essays', 'ESSAYS'],
];

function countFor(f: TypeFilter, counts: Props['counts']): number {
  if (f === 'all') return counts.all;
  if (f === 'poems') return counts.poems;
  return counts.essays;
}

export default function WritingFilterRow({
  counts,
  typeFilter,
  onTypeFilter,
  sortMode,
  onSortMode,
}: Props) {
  return (
    <div className="mb-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-6">
        {/* Type filter — mono labels matching project tile overline treatment */}
        <div className="flex items-center gap-5">
          {FILTERS.map(([f, label]) => (
            <button
              key={f}
              onClick={() => onTypeFilter(f)}
              className={`font-mono text-[10px] uppercase tracking-[0.12em] transition-all duration-150 border-b pb-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 ${
                typeFilter === f
                  ? 'text-text-primary border-text-primary'
                  : 'text-text-muted border-transparent opacity-50 hover:opacity-75 hover:text-text-secondary'
              }`}
            >
              {label} · {countFor(f, counts)}
            </button>
          ))}
        </div>

        {/* Sort toggle */}
        <button
          onClick={() => onSortMode(sortMode === 'latest' ? 'by-month' : 'latest')}
          className="font-mono text-[10px] uppercase tracking-[0.12em] text-text-muted hover:text-text-primary transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1"
        >
          {sortMode === 'latest' ? 'LATEST FIRST ↓' : 'BY MONTH ↓'}
        </button>
      </div>

      <div className="border-t border-border" />
    </div>
  );
}
