import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import type { Writing } from '../types';

interface Props {
  writings: Writing[];
}

export default function WritingGrid({ writings }: Props) {
  const [selected, setSelected] = useState<Writing | null>(null);

  useEffect(() => {
    if (!selected) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [selected]);

  return (
    <>
      <div className="grid grid-cols-3 gap-0">
        {writings.map((piece) => (
          <button
            key={piece.id}
            onClick={() => setSelected(piece)}
            className="relative aspect-square overflow-hidden bg-dark focus:outline-none group focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            <img
              src={piece.previewImage}
              alt={piece.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
              <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 text-center">
                {piece.title}
              </span>
            </div>
          </button>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          onClick={() => setSelected(null)}
        >
          <div className="absolute inset-0 bg-black/85 backdrop-blur-sm"></div>

          <div
            className="relative z-10 max-w-lg w-full mx-4 animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative bg-black rounded-t-lg overflow-hidden">
              <img
                src={selected.previewImage}
                alt={selected.title}
                className="w-full aspect-square object-contain"
              />
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/40 transition-colors"
                aria-label="Close"
              >
                <X size={16} />
              </button>
            </div>

            <div className="bg-white rounded-b-lg p-4">
              <h3 className="font-serif text-lg font-semibold text-text-primary mb-1">
                {selected.title}
              </h3>
              <span className="text-xs font-semibold tracking-wider uppercase text-primary mb-3 block">
                {selected.type}
              </span>
              <p className="text-sm text-text-secondary leading-relaxed whitespace-pre-line">
                {selected.fullText || selected.excerpt}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
