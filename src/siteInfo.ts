
export type PagePaths = { [key: string]: string; };
export type PageInfo = {
    name: string;
    path: string;
};
export const pagesKey: { [key: string]: PageInfo; } = {
    'coding': { name: 'Coding Resources', path: '/coding' },
    'blog': { name: 'Blog', path: '/blog' },
    'resume': { name: 'Resume', path: '/resume' },
    'work': { name: 'Work with Me', path: '/work-with-me' }
}

export const navItems = Object.values(pagesKey).map(o => o.name);
export const pages: PagePaths = Object.values(pagesKey).reduce((a, o) => { a[o.name] = o.path; return a }, {} as PagePaths);
export const brand = 'THI';