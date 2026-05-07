import { useState } from 'react';
import type { Writing } from '../../types';
import {
  filterByType,
  groupByMonth,
  countByType,
  type SortMode,
  type TypeFilter,
} from '../../lib/writing';
import WritingTile from './WritingTile';
import WritingFilterRow from './WritingFilterRow';
import MonthDivider from './MonthDivider';

interface Props {
  entries: Writing[];
}

const TILE_GRID = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6';

export default function WritingGrid({ entries }: Props) {
  const [typeFilter, setTypeFilter] = useState<TypeFilter>('all');
  const [sortMode, setSortMode] = useState<SortMode>('latest');

  const filtered = filterByType(entries, typeFilter);
  const counts = countByType(entries);

  return (
    <div>
      <WritingFilterRow
        counts={counts}
        typeFilter={typeFilter}
        onTypeFilter={setTypeFilter}
        sortMode={sortMode}
        onSortMode={setSortMode}
      />

      {filtered.length === 0 ? (
        <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-text-muted text-center py-16">
          No {typeFilter === 'all' ? 'writing' : typeFilter} yet.
        </p>
      ) : sortMode === 'latest' ? (
        <div className={TILE_GRID}>
          {filtered.map((entry) => (
            <WritingTile key={entry.id} entry={entry} />
          ))}
        </div>
      ) : (
        // BY MONTH: one <section> per month, each with its own grid.
        // Chosen over grid-column:1/-1 approach — simpler, no coupling between
        // MonthDivider width and grid column math. Plan notes both are equally good.
        <div>
          {groupByMonth(filtered).map((group, i) => (
            <section key={group.monthKey}>
              <MonthDivider label={group.monthLabel} isFirst={i === 0} />
              <div className={TILE_GRID}>
                {group.items.map((entry) => (
                  <WritingTile key={entry.id} entry={entry} />
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
