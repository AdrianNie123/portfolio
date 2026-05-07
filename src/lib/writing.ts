import type { Writing } from '../types';
import writingData from '../data/writing.json';

export type SortMode = 'latest' | 'by-month';
export type TypeFilter = 'all' | 'poems' | 'essays';

export function loadAllWriting(): Writing[] {
  return [...(writingData as Writing[])].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function filterByType(items: Writing[], filter: TypeFilter): Writing[] {
  if (filter === 'all') return items;
  if (filter === 'poems') return items.filter(i => i.type === 'Poetry' || i.type === 'Prose');
  return items.filter(i => i.type === 'Essay');
}

export function groupByMonth(
  items: Writing[]
): Array<{ monthKey: string; monthLabel: string; items: Writing[] }> {
  const map = new Map<string, Writing[]>();
  for (const item of items) {
    const [year, month] = item.date.split('-');
    const key = `${year}-${month}`;
    if (!map.has(key)) map.set(key, []);
    map.get(key)!.push(item);
  }
  return [...map.entries()]
    .sort(([a], [b]) => b.localeCompare(a))
    .map(([monthKey, entries]) => {
      const [year, month] = monthKey.split('-');
      const label = new Date(Number(year), Number(month) - 1, 1).toLocaleString('en-US', {
        month: 'long',
        year: 'numeric',
      });
      return {
        monthKey,
        monthLabel: label,
        items: [...entries].sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        ),
      };
    });
}

export function formatTileDate(iso: string): string {
  const [, month, day] = iso.split('-');
  return `${month}.${day}`;
}

export function countByType(items: Writing[]): { all: number; poems: number; essays: number } {
  return {
    all: items.length,
    poems: items.filter(i => i.type === 'Poetry' || i.type === 'Prose').length,
    essays: items.filter(i => i.type === 'Essay').length,
  };
}
