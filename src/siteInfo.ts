
export type PagePaths = { [key: string]: string; };
export type PageInfo = {
    name: string;
    path: string;
};
export const pagesKey: { [key: string]: PageInfo; } = {
    'coding': { name: 'Coding', path: '/coding' },
    'toolkits': { name: 'Toolkits', path: '/toolkits' },
    // 'project': { name: 'Projects', path: '/project' },
    'resume': { name: 'Resume', path: '/resume' },
    'blog': { name: 'Thoughts', path: '/blog' },
}

export const navItems = Object.values(pagesKey).map(o => o.name);
export const pages: PagePaths = Object.values(pagesKey).reduce((a, o) => { a[o.name] = o.path; return a }, {} as PagePaths);
export const brand = 'THI';
export const myName = 'Thi Nguyen'
export const siteName = 'justThiNguyen.com'
export const getPageTitle = (pageName: string): string => `${pageName} - ${myName}`;