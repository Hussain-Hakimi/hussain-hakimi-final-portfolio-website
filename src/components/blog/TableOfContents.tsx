export interface TocItem { id: string; text: string; level: number; }
export default function TableOfContents({ items }: { items: TocItem[] }) { return <nav className="toc" aria-label="Table of contents">{items.map(item => <a key={item.id} href={`#${item.id}`} className={`toc-link level-${item.level}`}>{item.text}</a>)}</nav>; }
