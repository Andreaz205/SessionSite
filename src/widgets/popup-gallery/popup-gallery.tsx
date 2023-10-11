import {useRouter} from "next/router";
import React, {useEffect} from "react";
import {IconButton, MediaViewer, Modal} from "@/src/shared/ui";
import tw from "tailwind-styled-components";
import {Close} from "@/src/shared/assets/ui";
import {useScreen} from "@/src/shared/hooks";
import {Media} from "@/src/shared/api/types";
import Image from "next/image";
import cn from "classnames";

type PopupGallery = {
    onClose: () => void
    isOpen: boolean
    medias: Media[] | []
    activeMedia: Media | null
    onChangeActiveMedia: (media: Media) => void
    next: () => void
    prev: () => void
}

export const PopupGallery = (props: PopupGallery) => {
    const screen = useScreen()
    const router = useRouter();

    useEffect(() => {
        props.onClose()
    }, [router]);

    return (
        <>
            <Modal
                isOpen={props.isOpen}
                onClose={() => props.onClose()}
            >
                <ModalContent>
                    <PopupGalleryWrapper>
                        <TopControls>
                            <ButtonWrap>
                                <IconButton variant="outlined" onClick={(e) => props.onClose()}>
                                    <Close />
                                </IconButton>
                            </ButtonWrap>
                        </TopControls>

                        {
                            props.medias && props.medias.length ?
                                screen === "lg" || screen === "xxl" || screen === null
                                    ? (
                                        <PopupGalleryContentDesktop>
                                            <PopupGalleryImagesLine
                                                medias={props.medias}
                                                orientation={'vertical'}
                                                activeMedia={props.activeMedia}
                                                onChangeActiveMedia={props.onChangeActiveMedia}
                                            />
                                            <GalleryImageBlock
                                                activeMedia={props.activeMedia}
                                                next={props.next}
                                                prev={props.prev}
                                            />
                                        </PopupGalleryContentDesktop>
                                    ) : screen === "md" ? (
                                        <PopupGalleryContentTablet>
                                            <TabletGalleryImageBlockWrapper>
                                                <GalleryImageBlock
                                                    activeMedia={props.activeMedia}
                                                    next={props.next}
                                                    prev={props.prev}
                                                />
                                            </TabletGalleryImageBlockWrapper>
                                            <PopupGalleryImagesLine
                                                medias={props.medias}
                                                orientation={'horizontal'}
                                                activeMedia={props.activeMedia}
                                                onChangeActiveMedia={props.onChangeActiveMedia}
                                            />
                                        </PopupGalleryContentTablet>
                                    ) : (
                                        <PopupGalleryContentMobile>
                                            {props.medias.map(media => (
                                                <PopupGalleryContentMobileMedia key={media.id}>
                                                    {media && (media.image_url || media.video_url)
                                                        ? media.image_url
                                                            ? (
                                                                <Image
                                                                    // onClick={(e) => onClick && onClick()}
                                                                    src={media.image_url}
                                                                    alt={media.image_url.toString()}
                                                                    width={'1920'}
                                                                    height={'1080'}
                                                                    // style={{width: '100%', height: "auto"}}

                                                                    className={
                                                                        "w-full h-auto"
                                                                    }
                                                                />
                                                            ) : media.video_url
                                                                ? (
                                                                    <video
                                                                        // onClick={(e) => onClick && onClick()}
                                                                        muted
                                                                        autoPlay
                                                                        loop
                                                                        className={cn(
                                                                            "w-full",
                                                                            // 'pointer-events-none'
                                                                        )}
                                                                    >
                                                                        <source src={media.video_url as string}/>
                                                                    </video>
                                                                ) : null
                                                        : null
                                                    }
                                                </PopupGalleryContentMobileMedia>
                                            ))}
                                        </PopupGalleryContentMobile>
                                    )
                                : null
                        }

                    </PopupGalleryWrapper>
                </ModalContent>
            </Modal>
        </>
    );
};

const ModalContent = tw.div`bg-white w-full h-[100vh] bg-[url('/examples/mountains.png')] bg-gray-500 bg-no-repeat bg-cover`
const PopupGalleryWrapper = tw.div`h-[85%] w-full`
const TopControls = tw.div`flex items-center justify-end md:min-h-[4rem] px-4 py-4`
const ButtonWrap = tw.div``

const PopupGalleryContentDesktop = tw.div`grid grid-cols-[200px_minmax(100px,_1fr)] h-full px-4`

const PopupGalleryContentTablet = tw.div`px-4 h-full`
const TabletGalleryImageBlockWrapper = tw.div`h-[calc(100%-8rem)]`

const PopupGalleryContentMobile = tw.div`px-4 w-full h-full flex flex-col gap-y-1 overflow-y-auto`
const PopupGalleryContentMobileMedia = tw.div`w-full`

// -------------
type PopupGalleryImagesLine = {
    medias: Media[]
    orientation: "vertical" | "horizontal"
    activeMedia: Media | null | undefined
    onChangeActiveMedia: (media: Media) => void
}

const PopupGalleryImagesLine = (props: PopupGalleryImagesLine) => {
    return (
        <PopupGalleryImagesLineWrapper
            className={cn(props.orientation === 'vertical' ? '' : 'h-auto')}
        >
            <ImagesLine
                className={cn( props.orientation === 'vertical' ? 'flex-col gap-y-1' : 'gap-x-1 overflow-x-auto flex-nowrap')}
            >
                {props.medias.map(media => (
                    <ImagesLineImage
                        key={media.id}
                        className={cn('select-none cursor-pointer', props.orientation === 'vertical' ? '' : 'inline-block min-w-[8rem] pt-0 h-32')}
                        onClick={() => props.onChangeActiveMedia(media)}
                    >
                        <ImageLayer className={cn(props.activeMedia && props.activeMedia.id === media.id ? "bg-opacity-0" : null)}/>
                        <MediaViewer
                            className={'select-none'}
                            media={media}
                            fit={'cover'}
                        />
                    </ImagesLineImage>
                ))}
            </ImagesLine>

        </PopupGalleryImagesLineWrapper>
    )
}

const PopupGalleryImagesLineWrapper = tw.div`h-full overflow-hidden`
const ImagesLine = tw.div`h-full overflow-y-auto flex justify-start`
const ImagesLineImage = tw.div`relative w-full pt-[100%] select-none`
const ImageLayer = tw.div`absolute h-full w-full bg-white bg-opacity-50 z-10 top-0 left-0`


// --------
type GalleryImageBlock = {
    activeMedia: Media | null
    next: () => void
    prev: () => void
}
const GalleryImageBlock = (props: GalleryImageBlock) => {
    return <GalleryImageBlockWrapper>
        <CursorDivider>
            <CursorDividerArea
                className={'cursor-[url(/images/chevron-left.svg),_pointer]'}
                onClick={() => props.prev()}
            />
            <CursorDividerArea
                className={'cursor-[url(/images/chevron-right.svg),_pointer]'}
                onClick={() => props.next()}
            />
        </CursorDivider>
        <MediaViewer
            className={'select-none'}
            media={props.activeMedia}
            fit={'contain'}
        />
    </GalleryImageBlockWrapper>
}

const GalleryImageBlockWrapper = tw.div`relative h-full select-none`

const CursorDivider = tw.div`absolute top-0 left-0 w-full h-full z-10 flex justify-between`
const CursorDividerArea = tw.div`w-1/2 h-full`

