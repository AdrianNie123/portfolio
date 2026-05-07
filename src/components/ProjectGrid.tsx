import { useState } from 'react';
import type { Project } from '../types';
import ProjectDetail from './ProjectDetail';

interface Props {
  projects: Project[];
}

const categories = ['Show All', 'Econometrics', 'Regulatory', 'Causal Inference', 'ML', 'Visualization', 'Policy', 'Dashboard'];

export default function ProjectGrid({ projects }: Props) {
  const [activeFilter, setActiveFilter] = useState('Show All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const visibleProjects = projects.filter((p) => !p.draft);

  const filtered =
    activeFilter === 'Show All'
      ? visibleProjects
      : visibleProjects.filter((p) => p.category === activeFilter);

  const availableCategories = categories.filter(
    (cat) => cat === 'Show All' || visibleProjects.some((p) => p.category === cat)
  );

  function handleCardClick(project: Project, e: React.MouseEvent) {
    if (project.hasWriteup) {
      return;
    }
    e.preventDefault();
    setSelectedProject(project);
  }

  return (
    <>
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {availableCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-150 border ${
              activeFilter === cat
                ? 'bg-primary text-white border-primary'
                : 'bg-transparent text-text-muted border-border hover:border-primary hover:text-primary'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((project) => (
          <a
            key={project.id}
            href={project.hasWriteup ? `/projects/${project.slug}` : '#'}
            onClick={(e) => handleCardClick(project, e)}
            className="group cursor-pointer bg-surface rounded-xl overflow-hidden border border-border hover:border-text-subtle hover:-translate-y-0.5 transition-[transform,border-color] duration-150 block"
          >
            <div className="aspect-[16/10] overflow-hidden bg-primary-light/30">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-primary mb-3">
                {project.category}{project.year ? ` · ${project.year}` : ''}
              </p>
              <h3 className="font-serif text-xl font-medium text-text-primary mb-2 leading-[1.2] tracking-[-0.01em]">
                {project.title}
              </h3>
              <p className="text-[13.5px] text-text-muted leading-[1.55] line-clamp-2 mb-4">
                {project.description}
              </p>
              <p className="font-mono text-[11px] text-primary tracking-[0.05em]">
                {project.hasWriteup ? 'Read →' : 'View →'}
              </p>
            </div>
          </a>
        ))}
      </div>

      <ProjectDetail
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
