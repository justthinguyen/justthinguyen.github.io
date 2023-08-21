export interface IEducationHistory {
    degree: string, school: string, graduation: string, major: string, minor: string, more?: string, links?: ITextLink
};
export interface IWorkHistory {
    position: string, company: string, duration: string, location?: string, details: string[], links?: ITextLink
};
export interface ISkills { [key: string]: string[] };
export interface ITextLink { [text: string]: string };
export interface IResume {
    'SKILLS': ISkills,
    'WORK HISTORY': IWorkHistory[],
    'EDUCATION': IEducationHistory[]
};