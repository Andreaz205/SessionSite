import {StaticImageData} from "next/image";
import DocumentOnePageOne from "*.png";

export interface IDocuments {
    id: number,
    title: string,
    doc_url: StaticImageData,
    card_url: StaticImageData
    pages: DocPageType[]
}

export type DocPageType = {
    id: number,
    doc_url: StaticImageData,
}