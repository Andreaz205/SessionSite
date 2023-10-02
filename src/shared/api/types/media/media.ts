import {StaticImageData} from "next/image";
import {ObjectFitTypes} from "@/src/shared/api/types";

export type Media = {
    id: number
    video_url: string | StaticImageData | null;
    image_url: string | StaticImageData | null;
    object_fit?: ObjectFitTypes
};