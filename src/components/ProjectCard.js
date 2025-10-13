// src/components/ProjectCard.js
"use client";

export default function ProjectCard({ project = {} }) {
  const {
    title = 'Untitled Project',
    status = '',
    description = '',
    tech = [],
    live = null,
    github = null,
    image = null,
  } = project;

  // safe id for aria-labelledby
  const id = `project-${String(title).toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;

  function handleKeyDown(e) {
    if (e.key === 'Enter' && live) {
      // open live site in a new tab when card is focused and Enter is pressed
      if (typeof window !== 'undefined') {
        window.open(live, '_blank', 'noopener,noreferrer');
      }
    }
  }

  const isClickable = Boolean(live);

  return (
    <article
      className={`group bg-white dark:bg-slate-900 rounded-2xl shadow-md hover:shadow-xl transition-shadow p-3 max-w-[300px] border border-transparent hover:border-slate-100 dark:hover:border-slate-800 ${isClickable ? 'cursor-pointer hover:-translate-y-0.5 transform-gpu' : ''} transform-gpu transition duration-200 ease-out`}
      role="article"
      tabIndex={0}
      aria-labelledby={id}
      onKeyDown={handleKeyDown}
      onClick={() => {
        if (isClickable && typeof window !== 'undefined') {
          window.open(live, '_blank', 'noopener,noreferrer');
        }
      }}
    >
      <div className="flex items-start gap-4">
          {image ? (
          <img
            src={image}
            alt={`${title} screenshot`}
            className="w-16 h-12 rounded-md object-cover flex-shrink-0 shadow-sm"
          />
        ) : (
          <div className="w-16 h-12 rounded-md bg-gradient-to-tr from-sky-400 via-indigo-500 to-emerald-400 flex items-center justify-center text-white font-semibold text-sm shadow-sm">
            <span>{(title || 'P').slice(0, 2).toUpperCase()}</span>
          </div>
        )}

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between">
            <h3 id={id} className="text-base sm:text-lg font-semibold text-slate-900 dark:text-slate-100 truncate">{title}</h3>
            {status && (
              <div className="text-xs py-1 px-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 ml-3">{status}</div>
            )}
          </div>

          <p className="text-slate-600 dark:text-slate-300 mt-2 mb-2 text-sm leading-relaxed line-clamp-3">{description}</p>

          <div className="flex flex-wrap items-center gap-2 mb-3">
            {tech.slice(0, 6).map((t, i) => (
              <span key={`${t}-${i}`} className="text-[11px] px-2 py-0.5 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-700 dark:text-slate-200">
                {t}
              </span>
            ))}
            {tech.length > 6 && (
              <span className="text-[11px] px-2 py-1 bg-slate-50 dark:bg-slate-800 rounded-full text-slate-500 dark:text-slate-400">+{tech.length - 6}</span>
            )}
          </div>

          <div className="flex items-center gap-3">
            {live ? (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-md text-sm transform-gpu transition duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-400"
                aria-label={`Open live site for ${title}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path d="M12.5 2a.75.75 0 01.75.75V5a.75.75 0 01-1.5 0V3.56L7.72 7.84a.75.75 0 11-1.06-1.06L10.69 2.5H9.25a.75.75 0 010-1.5h3z" />
                </svg>
                <span>Live</span>
              </a>
            ) : (
              <span className="inline-block px-3 py-1 text-xs text-slate-500 bg-slate-50 rounded-md">No demo</span>
            )}

            {github ? (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2 py-1 border border-slate-200 dark:border-slate-800 rounded-md text-sm transform-gpu transition duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-slate-50 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-300"
                aria-label={`Open GitHub repository for ${title}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.35-1.3-1.71-1.3-1.71-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.71 0-1.26.45-2.29 1.19-3.1-.12-.3-.52-1.52.11-3.16 0 0 .97-.31 3.18 1.18a11.1 11.1 0 012.9-.39c.98 0 1.97.13 2.9.39 2.2-1.5 3.17-1.18 3.17-1.18.63 1.64.23 2.86.11 3.16.74.81 1.19 1.84 1.19 3.1 0 4.44-2.69 5.41-5.25 5.7.42.36.79 1.06.79 2.14 0 1.54-.01 2.78-.01 3.16 0 .31.21.68.8.56A10.52 10.52 0 0023.5 12C23.5 5.73 18.27.5 12 .5z" />
                </svg>
                <span className="truncate">Code</span>
              </a>
            ) : (
              <span className="text-sm text-slate-500">—</span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}