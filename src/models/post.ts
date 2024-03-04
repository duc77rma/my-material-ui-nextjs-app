export interface Post {
    id: string | number,
    title: string,
    publishedDate: string | number,
    tagList: string[],
    description: string
}