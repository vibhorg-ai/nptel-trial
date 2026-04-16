/**
 * Convert a notes section heading to its URL anchor id.
 * Must match the id generation in /notes/[weekId]/page.tsx.
 */
export function sectionToAnchor(heading: string): string {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function getNotesLink(week: number, sectionHeading: string): string {
  return `/notes/${week}#${sectionToAnchor(sectionHeading)}`;
}
