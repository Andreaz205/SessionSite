import {StaticImageData} from "next/image";

export interface IDocuments {
    id: number,
    title: string,
    doc_url: StaticImageData,
    card_url: StaticImageData
}