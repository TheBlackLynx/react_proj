import { ArticleBlockType, ArticleType } from "entities/Article";
import { User } from "entities/User";


export interface Article {
    id: string,
    title: string,
    user: User,
    subtitle: string,
    img: string,
    views: number,
    createdAt: string,
    type: ArticleType[],
    blocks: ActicleBlocks[]
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
