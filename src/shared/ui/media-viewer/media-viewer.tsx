import cn from "classnames";
import Image from "next/image";
import {useEffect, useRef, useState} from "react";
import {Media} from "@/src/shared/api/types";

import tw from "tailwind-styled-components";

import BrokenImage from "@/src/shared/assets/media/broken-image.png";

type MediaViewerProps = {
    media: Media | null;
    fit?: "contain" | "cover" | "fill";
    className?: string;
    onClick?: () => void;
    priority?: boolean
    onErrorLoadingCallback?: () => void,
    priorityFirst?: number
};

export const MediaViewer = (props: MediaViewerProps) => {
    const [isError, setIsError] = useState(false)
    // const [imgSrc, setImgSrc] = useState<string | StaticImageData>(props.media?.image_url ?? '');
    const ref = useRef<null | HTMLImageElement>(null)

    const errorCallback = () => setIsError(true)

    useEffect(() => {
        ref.current?.addEventListener('error', errorCallback)
        return () => ref.current?.removeEventListener('error', errorCallback)
    }, [ref.current])

    useEffect(() => {
        if (isError) setIsError(false)
    }, [props.media])

    if (props.media && (props.media.image_url || props.media.video_url)) {
        if (props.media.image_url) {
            return (
                <Image
                    ref={ref}
                    priority={props.priority || (props.priorityFirst !== null && props.priorityFirst === 0)}
                    onClick={(e) => props.onClick && props.onClick()}
                    src={isError ? BrokenImage : props.media.image_url}
                    // src={props.media.image_url}
                    alt={props.media.image_url.toString()}
                    fill
                    // onLoadingComplete={(result) => {
                    //     console.log(result)
                    //   if (result.naturalWidth === 0) {
                    //     setIsError(true)
                    //     // setImgSrc(BrokenImage);
                    //   }
                    // }}
                    className={cn(
                        props.fit === 'fill' ? `object-fill` : props.fit === 'cover' ? 'object-cover' : "object-contain",
                        // props.fit === "cover" ? "object-cover" : "object-contain",
                        "absolute left-0 top-0 w-full h-full",
                        props.className
                    )}
                />
            );
        } else if (props.media.video_url) {
            return <div
                onClick={(e) => props.onClick && props.onClick()}
                className={cn('absolute top-0 left-0 w-full h-full cursor-pointer', props.className)}
            >
                <video
                    muted
                    autoPlay
                    loop
                    className={cn(
                        props.fit === 'fill' ? `object-fill` : props.fit === 'cover' ? 'object-cover' : "object-contain",
                        "w-full h-full ",
                        'pointer-events-none'
                    )}
                >
                    <source src={props.media.video_url as string}/>
                </video>
            </div>;
        }
        return <FallBackElement />;
    } else {
        return <FallBackElement />;
    }
}
// (prevProps, nextProps) => {
//   if (nextProps.media?.image_url || nextProps.media?.video_url) {
//     if (prevProps.media) {
//       if (prevProps.media.image_url) {
//         if (prevProps.media.image_url === nextProps.media.image_url) {
//           return prevProps.className === nextProps.className;
//         }
//       } else if (prevProps.media.video_url) {
//         if (prevProps.media.video_url === nextProps.media.video_url) {
//           return prevProps.className === nextProps.className;
//         }
//       }
//       return false
//     }
//     return false
//   }
//   return false
// }
// );

const LinkWrapper = tw.div``

const FallBackElement = () => {
    return (
        <Image
            src={BrokenImage}
            alt={"error"}
            className="absolute left-0 top-0 w-full h-full object-contain"
        />
    );
};
