export type Skill = {
  label: string,
  description: string[]
}

export type Work = {
  title: string,
  slug: string,
  shortDescription: string,
  language: string,
  frameworks: string[],
  year: number,
  role?: string
}
