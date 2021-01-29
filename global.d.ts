interface ILanguage {
    text: string
    description: string,
    red: number,
    green: number,
    blue: number
}

interface IProject {
    title: string,
    description: string,
    images: Array<string>,
    technologies: Array<string>,
    accessLink?: string,
}
