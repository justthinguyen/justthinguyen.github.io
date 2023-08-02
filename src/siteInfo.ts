
export type PagePaths = { [key: string]: string; };
export const pages: PagePaths = {
    'Coding': '/coding',
    'Blog': '/blog',
    'Resume': '/resume',
    'Work with Me': '/work-with-me'
};
export const navItems = Object.keys(pages);
export const brand = 'THI';