import Image from "next/image";
import {Typography} from "@/src/shared/ui/typography/typography";

type MediaBlockProps = {
    image_url: string,
    description?: string
}
export default function MediaBlock(props: MediaBlockProps) {
    return <div className={'w-full'}>
        <div className={'relative w-full pt-[100%]'}>
            <Image
                src={props.image_url}
                alt={'Изображение'}
                className={'absolute top-0 left-0 w-full'}
            />
        </div>
        {props.description ? (
            <div className={'mt-7'}>
                <Typography variant={'semibold-sm'}>
                    {props.description}
                </Typography>
            </div>
        ) : null}

    </div>
}