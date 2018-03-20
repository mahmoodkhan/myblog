export class Article {
  constructor(
    public id: number | null,
    public title: string,
    public content: string,
    public isPrivate: boolean,
    public status: 'draft'| 'published' | 'archieved',
  ) {}
}
