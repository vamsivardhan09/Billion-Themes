import React from 'react';

interface FilterBarProps {
  categories: string[];
  activeCategory: string;
  onChange: (category: string) => void;
}

export function FilterBar({ categories, activeCategory, onChange }: FilterBarProps) {
  return (
    <div className="flex overflow-x-auto no-scrollbar space-x-8 md:space-x-12 py-4 mb-8">
      {categories.map((category) => {
        const isActive = activeCategory === category;
        return (
          <button
            key={category}
            onClick={() => onChange(category)}
            className={`label-text whitespace-nowrap pb-2 border-b-2 transition-all duration-300 ${
              isActive
                ? 'text-gold border-gold'
                : 'text-muted border-transparent hover:text-charcoal'
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
