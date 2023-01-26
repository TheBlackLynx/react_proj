export interface Article {
    id: string,
    title: string,
    subtitle: string,
    img: string,
    views: number,
    createdAt: string,
    type: ArticleType[],
    blocks: ActicleBlocks[]
}

export enum ArticleType {
    'IT' = 'it',
    'WEB' = 'web',
    'FRONTEND' = 'frontend'
}


export enum ArticleBlockType {
    CODE = 'CODE',
    TEXT = 'TEXT',
    IMAGE = 'IMAGE'
}


export type ActicleBlocks = ArticleCodeBlock | ArticleTextBlock | ArticleImageBlock;

export interface ArticleBlocksBase {
    id: string,
    type: ArticleBlockType
}

export interface ArticleCodeBlock extends ArticleBlocksBase{
    type: ArticleBlockType.CODE;
    code: string
}

export interface ArticleTextBlock extends ArticleBlocksBase{
    type: ArticleBlockType.TEXT,
    title?: string;
    paragraphs: string[]

}
export interface ArticleImageBlock extends ArticleBlocksBase{
    type: ArticleBlockType.IMAGE;
    src: string;
    title: string
}

export interface ArticleDetailSchema {
    isLoading: boolean;
    error?: string;
    data?: Article
}
