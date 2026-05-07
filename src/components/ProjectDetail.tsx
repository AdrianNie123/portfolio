import { X, ExternalLink } from 'lucide-react';
import type { Project, ProjectScreenshot, ProjectReference } from '../types';

interface Props {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDetail({ project, onClose }: Props) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto" onClick={onClose}>
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"></div>

      <div className="relative min-h-screen flex items-center justify-center p-4 md:p-8">
        <div
          className="relative bg-surface rounded-xl shadow-2xl max-w-6xl w-full overflow-hidden animate-fade-in-up"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-dark/80 text-white flex items-center justify-center hover:bg-dark transition-colors"
            aria-label="Close"
          >
            <X size={18} />
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left — screenshots or fallback image */}
            <div className="lg:h-[640px] overflow-y-auto bg-primary-light">
              {project.screenshots && project.screenshots.length > 0 ? (
                <div className="p-4 flex flex-col gap-4">
                  {project.screenshots.map((shot: ProjectScreenshot, i: number) => (
                    <div
                      key={i}
                      style={{
                        border: '1px solid #e2e8f0',
                        borderRadius: '6px',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                        overflow: 'hidden',
                      }}
                    >
                      <img
                        src={shot.src}
                        alt={shot.caption}
                        className="w-full object-cover"
                        loading="lazy"
                      />
                      <p style={{ color: '#6b7280', fontSize: '13px', padding: '8px 12px', margin: 0 }}>
                        {shot.caption}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="h-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>

            {/* Right — scrollable content column */}
            <div className="lg:h-[640px] overflow-y-auto p-8 md:p-10 flex flex-col gap-0">
              <span className="inline-block self-start text-xs font-semibold tracking-wider uppercase text-primary bg-primary-light px-3 py-1.5 rounded-full mb-4">
                {project.category}
              </span>

              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-text-primary mb-4">
                {project.title}
              </h2>

              {/* Tagline — leads with the finding */}
              {project.tagline ? (
                <p className="text-base text-text-secondary leading-relaxed mb-5 border-l-2 border-primary pl-4">
                  {project.tagline}
                </p>
              ) : (
                <p className="text-base text-text-secondary leading-relaxed mb-5">
                  {project.description}
                </p>
              )}

              {/* Technical bullets */}
              {project.bullets && project.bullets.length > 0 && (
                <ul className="mb-6 flex flex-col gap-2.5">
                  {project.bullets.map((bullet: string, i: number) => (
                    <li key={i} className="flex gap-2.5 text-sm text-text-secondary leading-relaxed">
                      <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-primary"></span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}

              {/* Tech stack */}
              <div className="mb-6">
                <p className="text-xs font-semibold tracking-wider uppercase text-text-muted mb-2">
                  Tools Used
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech: string) => (
                    <span key={tech} className="text-sm text-text-secondary bg-bg px-3 py-1.5 rounded-md border border-border">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Methodology */}
              {project.methodology && project.methodology.length > 0 && (
                <div className="mb-6 pt-5 border-t border-border">
                  <p className="text-xs font-semibold tracking-wider uppercase text-text-muted mb-3">
                    Methodology
                  </p>
                  <div className="flex flex-col gap-3">
                    {project.methodology.map((para: string, i: number) => (
                      <p key={i} className="text-sm text-text-secondary leading-relaxed">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              )}

              {/* References */}
              {project.references && project.references.length > 0 && (
                <div className="mb-6 pt-5 border-t border-border">
                  <p className="text-xs font-semibold tracking-wider uppercase text-text-muted mb-3">
                    References
                  </p>
                  <ol className="flex flex-col gap-2">
                    {project.references.map((ref: ProjectReference, i: number) => (
                      <li key={i} className="text-xs text-text-muted leading-relaxed">
                        {ref.url ? (
                          <a
                            href={ref.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary transition-colors"
                          >
                            {ref.citation}
                          </a>
                        ) : (
                          ref.citation
                        )}
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {/* Link */}
              {project.link && (
                <div className="mt-auto pt-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary font-medium hover:underline transition-all"
                  >
                    View Project <ExternalLink size={16} />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
