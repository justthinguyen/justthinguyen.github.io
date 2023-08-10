export interface IEducationHistory {
    degree: string, school: string, graduation: string, major: string, minor: string, more?: string
}
export interface IWorkHistory {
    position: string, company: string, duration: string, location?: string, details: string[]
}
export interface ISkills { [key: string]: string[] }

export interface IResume {
    'SKILLS': ISkills,
    'WORK HISTORY': IWorkHistory[],
    'EDUCATION': IEducationHistory[]
}