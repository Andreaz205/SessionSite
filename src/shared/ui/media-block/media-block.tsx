import Image from "next/image";
import {Typography} from "@/src/shared/ui/typography/typography";

type MediaBlockProps = {
    image_url: string,
    image_wrapper_classes?: string,
    image_classes?: string,
    description?: string,
    description_wrapper_classes?: string
}
export default function MediaBlock(props: MediaBlockProps) {
    return <div className={'w-full'}>
        <div className={`relative w-full pt-[100%] ${props.image_wrapper_classes}`}>
            <Image
                src={props.image_url}
                alt={'Изображение'}
                className={`absolute w-full ${props.image_classes}`}
            />
        </div>
        {props.description ? (
            <div className={`${props.description_wrapper_classes} mt-[1.8rem]`}>
                <Typography variant={'semibold-sm'}>
                    {props.description}
                </Typography>
            </div>
        ) : null}

    </div>
}