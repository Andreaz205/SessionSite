import Image from "next/image";
import MediaBlock from "@/src/shared/ui/media-block/media-block";
import CityBackground from '/public/banner/city-background.png';
import {Container, IconButton, Modal} from '../../shared/ui';
import ProfileLogo from '/public/banner/profile-logo.svg';
import GroupLogo from '/public/banner/group-logo.svg';
import HandsLogo from '/public/banner/hands-logo.svg';
import MoneyLogo from '/public/banner/money-logo.svg';
import InstallmentMedia1 from '/public/installment/media_1.png';
import InstallmentMedia2 from '/public/installment/media_2.png';
import InstallmentMedia3 from '/public/installment/media_3.png';
import InstallmentMedia4 from '/public/installment/media_4.png';
import MePhoto from '/public/me/me.png';
import DocumentOnePageOne from '/public/examples/docs/document_1/page_1.png';
import DocumentOnePageTwo from '/public/examples/docs/document_1/page_2.jpg';
import DocumentOnePageThree from '/public/examples/docs/document_1/page_3.jpg';
import DocumentTwoPageOne from '/public/examples/docs/document_2/page_1.png';
import DocumentTwoPageTwo from '/public/examples/docs/document_2/page_2.jpg';
import DocumentTwoPageThree from '/public/examples/docs/document_2/page_3.jpg';
import DocumentTwoPageFour from '/public/examples/docs/document_2/page_4.jpg';
import DocumentThreePageOne from '/public/examples/docs/document_3/page_1.png';
import DocumentThreePageTwo from '/public/examples/docs/document_3/page_2.jpg';
import DocumentThreePageThree from '/public/examples/docs/document_3/page_3.jpg';
import DocumentFourPageOne from '/public/examples/docs/document_4/page_1.png';
import DocumentFourPageTwo from '/public/examples/docs/document_4/page_2.jpg';
import DocumentFourPageThree from '/public/examples/docs/document_4/page_3.jpg';
import DocumentFourPageFour from '/public/examples/docs/document_4/page_4.jpg';
import CardOne from '/public/examples/cards/card_1.png';
import CardTwo from '/public/examples/cards/card_2.png';
import CardThree from '/public/examples/cards/card_3.png';
import CardFour from '/public/examples/cards/card_4.png';
import Dashed from '/public/examples/dashed.svg';
import  Services1 from '/public/services/01.png';
import  Services2 from '/public/services/02.png';
import  Services3 from '/public/services/03.png';
import  Services4 from '/public/services/04.png';
import  AuthorTg from '/public/author/tg.png';
import  FinalImage from '/public/final.png';
import  PhoneImage from '/public/telephone.png';
import  Circle from '/public/circle.svg';
import  DocumentLight from '/public/examples/docs/light.png';
import {Typography} from "@/src/shared/ui/typography/typography";
import tw from "tailwind-styled-components";
import React, {useEffect, useMemo, useRef, useState} from "react";
import {IDocuments} from "@/src/shared/api/types/documents/documents";
import {AdvantageIcon, ArrowLeft, ArrowRight, Close} from "@/src/shared/assets/ui";
import Marquee from "react-fast-marquee";
import {PopupGallery} from "@/src/widgets/popup-gallery/popup-gallery";
import {Media} from "@/src/shared/api/types";
import {useElementOnScreen, useScreen} from "@/src/shared/hooks";
import {FeedbackFormWindow} from "@/src/widgets/feedback-form-window/feedback-form-window";
import Link from "next/link";

export default function Home() {
    const [isFeedbackPopupOpen, setIsFeedbackPopupOpen] = useState(false)
    const [isFinalPopupOpen, setIsFinalPopupOpen] = useState(false)

    const onCloseFinalPopup = () => setIsFinalPopupOpen(false)

    const onOpenFinalPopup = () => setIsFinalPopupOpen(true)

    const onOpenFeedbackPopup = () => setIsFeedbackPopupOpen(true)

    return <>
        <Banner
            setIsFeedbackPopupOpen={setIsFeedbackPopupOpen}
        />
        <Divider />
        <AboutMe />
        <Examples />
        <Advantages />
        <Installment onOpen={onOpenFeedbackPopup}/>
        <Services onOpen={onOpenFeedbackPopup}/>
        <Feedback onOpen={onOpenFeedbackPopup}/>
        <Author />

        <FeedbackPopup
            isOpen={isFeedbackPopupOpen}
            setIsOpen={setIsFeedbackPopupOpen}
            onOpenFinalPopup={onOpenFinalPopup}
        />

        <FinalPopup
            isOpen={isFinalPopupOpen}
            onClose={onCloseFinalPopup}
        />
    </>
}

type FinalPopup = {
    isOpen: boolean,
    onClose: () => void
}

const FinalPopup = (props: FinalPopup) => {
    return (
        <Modal
            isOpen={props.isOpen}
            onClose={() => props.onClose}
        >
            <div className={'relative w-[100vw] h-[100vh] bg-black'}>
                <div className={'absolute z-10 top-0 left-0 w-full flex justify-end p-2'}>
                    <IconButton
                        variant="outlined"
                        onClick={(e) => props.onClose()}>
                        <Close />
                    </IconButton>
                </div>
                <Image
                    className={'object-cover top-0 left-0 w-full'}
                    src={FinalImage}
                    alt={''}
                />

                <div className={'absolute z-10 top-1/2 left-0 -translate-y-1/2 flex items-center flex-col justify-center w-full'}>
                    <Typography variant={'light-2xl'} className={'text-[1.5rem] mt-[30vh]'}>
                        Большое спасибо за обращение!
                    </Typography>

                    <Typography variant={'light-2xl'} className={'text-[0.92rem] mt-5'}>
                        Я свяжусь с Вами в скором времени! =)
                    </Typography>

                    <Image
                        className={'mt-10'}
                        src={PhoneImage}
                        alt={''}
                    />
                </div>
            </div>
        </Modal>
    )
}

type FeedbackPopupProps = {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    onOpenFinalPopup: () => void;
}

const FeedbackPopup = (props: FeedbackPopupProps) => {
    return (
        <Modal
            isOpen={props.isOpen}
            onClose={() => props.setIsOpen(false)}
        >
            <FeedbackFormWindow
                setIsOpen={props.setIsOpen}
                onOpenFinalPopup={props.onOpenFinalPopup}
            />
        </Modal>
    )
}

type BannerProps = {
    setIsFeedbackPopupOpen: (isOpen: boolean) => void
}

const Banner = (props: BannerProps) => {
    return <div className={'md:h-[822px] relative pt-[90px]'}>
        <Image
            src={CityBackground}
            alt={'City background'}
            unoptimized
            priority
            className={'object-cover w-full h-full absolute top-0 left-0 -z-[1]'}
        />
        <Container>
            <BannerInfo />
            <BannerMediaBlocks />
            <ConsultButton
                setIsFeedbackPopupOpen={props.setIsFeedbackPopupOpen}
            />
        </Container>
    </div>
}

const bannerMediaBlockData = [
    {
        id: 1,
        image_url: ProfileLogo,
        description: 'Индивидуальная беседа с каждым клиентом',
        image_wrapper_classes: '',
        image_classes: 'w-[123px] h-[123px] left-1/2 -translate-x-1/2 bottom-0',
        description_wrapper_classes: 'px-2 pb-4',
    },
    {
        id: 2,
        image_url: GroupLogo,
        description: 'Работа со всеми регионами России',
        image_wrapper_classes: '',
        image_classes: 'w-[143px] h-[143px] left-1/2 -translate-x-1/2 bottom-0',
        description_wrapper_classes: 'pb-4',
    },
    {
        id: 3,
        image_url: HandsLogo,
        description: 'Большая степень доверия клиентуры своего города',
        image_wrapper_classes: '',
        image_classes: 'w-[153px] h-[153px] left-1/2 -translate-x-1/2 bottom-0',
        description_wrapper_classes: 'pb-4',
    },
    {
        id: 4,
        image_url: MoneyLogo,
        description: 'Цена ниже, чем у других',
        image_wrapper_classes: '',
        image_classes: 'w-[151px] h-[151px] left-1/2 -translate-x-1/2 bottom-0',
        description_wrapper_classes: 'md:px-12 pb-4',
    }
];

const Divider = tw.div`bg-white h-[1px] bg-opacity-20`

const BannerMediaBlocks = () => {
    return <div className={'flex md:flex-nowrap flex-wrap justify-between mt-20 md:mt-1'}>
        {bannerMediaBlockData.map(data => (
            <div
                key={data.id}
                className={'sm:w-[20%] w-[40%] text-center'}
            >
                <MediaBlock
                    image_url={data.image_url}
                    description={data.description}
                    image_classes={data.image_classes}
                    image_wrapper_classes={data.image_wrapper_classes}
                    description_wrapper_classes={data.description_wrapper_classes}
                />
            </div>
        ))}
    </div>
}

const BannerInfo = () => {
    return (
        <div>
            <div className={'md:mt-22 mt-8'}>
                <Typography variant={'xxxl'} className={'leading-[4.5rem] md:text-[3.5rem] text-[2rem]'}>
                    Списание долгов по закону
                </Typography>
                <Typography variant={'xxxl'} className={'md:text-[3.5rem] text-[2rem]'} $as={'span'}>
                    c{' '}
                </Typography>
                <Typography variant={'xxxl'} className={'font-medium md:text-[3.5rem] text-[2rem]'} $as={'span'}>
                    выгодой{' '}
                </Typography>
                <Typography variant={'xxxl'} className={'md:text-[3.5rem] text-[2rem]'} $as={'span'}>
                    до{' '}
                </Typography>
                <Typography variant={'xxxl'} $as={'span'} className={'font-medium md:text-[3.5rem] text-[2rem]'}>
                    20%
                </Typography>
            </div>
            <div className={'mt-5'}>
                <Typography variant={'light-2xl'} className={'font-montserrat-light md:text-2xl text-[1.25rem]'}>
                    Начну работу по списанию долгов в день обращения
                </Typography>
            </div>
        </div>

    );
}

type ConsultButtonProps = {
    setIsFeedbackPopupOpen: (isOpen: boolean) => void
}

const ConsultButton = (props: ConsultButtonProps) => {
    return <div className={'flex justify-center md:mt-8 lg:mt-12 md:static absolute z-[5] -bottom-[81px] left-0 w-full'}>
        <button
            className={"bg-[url('/banner/gold-texture.png')] bg-[#F6CF69] rounded-[9px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] overflow-hidden md:w-auto w-full"}
            onClick={() => props.setIsFeedbackPopupOpen(true)}
        >
            <Typography className={'hover:bg-[#B0B0B0] duration-sm font-montserrat-bold text-[1.25rem] md:text-base bg-opacity-50 text-black md:w-[320px] w-full h-[81px] flex justify-center items-center shadow-[0_8px_50px_0_rgba(208,169,169,0.25)]'} $as={'div'}>
                Бесплатная консультация
            </Typography>
        </button>
    </div>
}

const AboutMe = () => {
    return (
        <div
            id={'about-me'}
            className={'md:h-[900px] relative about-me-background md:pt-0 pt-[81px]'}
        >
            <Container>
                <div className={'flex justify-center pt-[2.5rem]'}>
                    <Typography variant={'section-header'}>
                        Обо мне
                    </Typography>
                </div>
                <div className={'md:mt-[5.5rem] mt-8 flex md:flex-nowrap flex-wrap justify-between gap-2'}>

                    <div className={'md:hidden'}>
                        <Typography className={'text-[1.75rem]'}>
                            Мой опыт
                        </Typography>
                    </div>

                    <div className={'md:w-[49%] w-full flex flex-col justify-center md:mt-0 mt-10'}>
                        <Typography variant={'comfortaa-2xxl'}>
                            Окончила Южно-Уральский государственный университет в 2003 году
                            по специальности юриспруденция.
                        </Typography>

                        <Typography variant={'comfortaa-2xxl'} className={'mt-8 md:block hidden'}>
                            Работала в органах судебной системы, а также крупных юридических компаниях.
                        </Typography>
                    </div>
                    <div className={'md:w-[36%] w-full flex justify-center md:mt-0 mt-10'}>
                        <div className={'md:pt-[110%] pt-[98%] relative w-4/5 md:w-full'}>
                            <Image
                                src={MePhoto}
                                className={'absolute w-full h-full top-0 left-0'}
                                alt={'me'}
                            />

                            <div className={'absolute w-full top-[100%] flex justify-center mt-[0.5rem]'}>
                                <Typography className={'font-extrabold md:text-base text-[1.25rem]'}>
                                    Гулевич Наталия Владленовна
                                </Typography>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={'mt-[8rem] flex justify-center'}>
                    <Typography variant={'semibold-3xl'}>
                        Опыт в процедуре банкротства с 2016 года.
                    </Typography>
                </div>
            </Container>
        </div>
    )
}

const DocsData: IDocuments[] = [
    {
        id: 1,
        title: "Дело №1",
        doc_url: DocumentOnePageOne,
        card_url: CardOne,
        pages: [
            {
                id: 1,
                doc_url: DocumentOnePageOne,
            },
            {
                id: 2,
                doc_url: DocumentOnePageTwo,
            },
            {
                id: 3,
                doc_url: DocumentOnePageThree,
            },

        ]
    },
    {
        id: 2,
        title: "Дело №2",
        doc_url: DocumentTwoPageOne,
        card_url: CardTwo,
        pages: [
            {
                id: 1,
                doc_url: DocumentTwoPageOne,
            },
            {
                id: 2,
                doc_url: DocumentTwoPageTwo,
            },
            {
                id: 3,
                doc_url: DocumentTwoPageThree,
            },
            {
                id: 4,
                doc_url: DocumentTwoPageFour,
            },
        ]
    },
    {
        id: 3,
        title: "Дело №3",
        doc_url: DocumentThreePageOne,
        card_url: CardThree,
        pages: [
            {
                id: 1,
                doc_url: DocumentThreePageOne,
            },
            {
                id: 2,
                doc_url: DocumentThreePageTwo,
            },
            {
                id: 3,
                doc_url: DocumentThreePageThree,
            },
        ]
    },
    {
        id: 4,
        title: "Дело №4",
        doc_url: DocumentFourPageOne,
        card_url: CardFour,
        pages: [
            {
                id: 1,
                doc_url: DocumentFourPageOne,
            },
            {
                id: 2,
                doc_url: DocumentFourPageTwo,
            },
            {
                id: 3,
                doc_url: DocumentFourPageThree,
            },
            {
                id: 4,
                doc_url: DocumentFourPageFour,
            },

        ]
    },
];

const Examples = () => {
    return (
        <div className={"md:h-[1236px] bg-[url('/examples/mountains.png')] bg-gray-500 bg-no-repeat bg-cover overflow-hidden"}>
            <Container>
                <Typography variant={'comfortaa-2xxl'} className={'font-normal pt-16 tracking-[0.48px] text-[2rem]'}>
                    Примеры выигранных дел по банкротству
                </Typography>

                <Docs docs={DocsData}/>

            </Container>
        </div>
    )
}

type DocsProps = {
    docs: IDocuments[]
}

const Docs = (props: DocsProps) => {
    const [activeDocument, setActiveDocument] = useState<null|IDocuments>(props.docs[0])

    const nextSlide = () => {
        if (activeDocument) {
            if (props.docs.indexOf(activeDocument) === (props.docs.length - 1)) {
                setActiveDocument(props.docs[0]);
            } else {
                setActiveDocument(props.docs[props.docs.indexOf(activeDocument) + 1]);
            }
        }
    }

    const prevSlide = () => {
        if (activeDocument) {
            if (props.docs.indexOf(activeDocument) === 0) {
                setActiveDocument(props.docs[props.docs.length - 1]);
            } else {
                setActiveDocument(props.docs[props.docs.indexOf(activeDocument) - 1]);
            }
        }
    }

    // POPUP
    const medias: Media[]  = useMemo(() => activeDocument
        ? activeDocument?.pages.map(doc => ({
            id: doc.id,
            image_url: doc.doc_url,
            video_url: null
        })) : [], [activeDocument])

    const [activeMedia, setActiveMedia] = useState<Media | null>(null)

    const [isGalleryOpen, setIsGalleryOpen] = useState<boolean>(false);
    const handleMediaClick = (docum: IDocuments) => {
        const media = medias.find(m => m.id === docum.id)
        if (media) {
            setIsGalleryOpen(true)
            setActiveMedia(media)
        }


    }
    const nextGalleryMediaClick = () => {
        if (activeMedia) {
            const index = medias.indexOf(activeMedia)
            if (index !== medias.length - 1 ) {
                setActiveMedia(medias[index + 1])
            }
        }

    }
    const previousGalleryMediaClick = () => {
        if (activeMedia) {
            const index = medias.indexOf(activeMedia)
            if (index !== 0) {
                setActiveMedia(medias[index - 1])
            }
        }

    }

    return (
        <>
            <PopupGallery
                activeMedia={activeMedia}
                isOpen={isGalleryOpen}
                onClose={() => setIsGalleryOpen(false)}
                medias={medias}
                onChangeActiveMedia={(media) => setActiveMedia(media)}
                next={nextGalleryMediaClick}
                prev={previousGalleryMediaClick}
            />
            {
                activeDocument ? (
                    <div className={'md:block hidden'}>
                        <div className={'flex justify-center relative'}>
                            <div className={'mt-20 relative w-[82%] pr-[7%]'}>
                                <div className={'w-[45%] absolute top-0'}>
                                    <div className={'pt-[146%] relative'}>
                                        <Image
                                            onClick={() => handleMediaClick(activeDocument)}
                                            className={'absolute top-0 left-0 w-full h-full z-10 cursor-pointer'}
                                            src={activeDocument.doc_url}
                                            alt={activeDocument.title}
                                        />
                                    </div>
                                </div>

                                <div className={'w-full'}>
                                    <div className={'pt-[74%] relative mb-[8%]'}>
                                        <Image
                                            className={'absolute top-[12%] left-[25%] h-full'}
                                            src={Dashed}
                                            alt={''}
                                        />
                                        <Typography className={'w-[265px] absolute -right-[17%] top-[23%] text-center'} variant={'semibold-3xl'}>
                                            Решения судов именем Российской Федерации
                                        </Typography>
                                    </div>
                                </div>

                                <div className={'relative pb-[31%]'}>
                                    <Image
                                        className={'absolute top-0 left-0'}
                                        src={activeDocument.card_url}
                                        alt={''}
                                    />
                                </div>
                            </div>

                            <Arrows
                                nextSlide={nextSlide}
                                prevSlide={prevSlide}
                            />
                        </div>
                        <div className={'flex justify-center mt-[5.5rem]'}>
                            <div className={'font-extrabold text-3xl text-[#FFD66A] text-opacity-40 bg-black  flex justify-center items-center w-[260px] h-[48px] border-2 border-[#565151]'}>
                                {activeDocument.title}
                            </div>
                        </div>
                    </div>
                ): null
            }

            <div className={'md:hidden flex flex-wrap'}>
                {props.docs.map(docum => (

                    <div
                        className={'w-1/2'}
                        key={docum.id}
                    >
                        <div className={'p-6 mb-[70px]'}>
                            <div
                                className={'pt-[146%] relative'}
                            >
                                <Image
                                    onClick={() => handleMediaClick(docum)}
                                    className={'absolute top-0 left-0 w-full h-full z-10 cursor-pointer rounded-[10px]'}
                                    src={docum.doc_url}
                                    alt={docum.title}
                                />

                                <Image
                                    src={DocumentLight}
                                    className={'absolute -top-[20%] -left-[20%] min-w-[140%] h-[140%] z-[5]'}
                                    alt={''}
                                />

                                <Image
                                    className={'absolute bottom-0 left-0 w-full z-20'}
                                    src={docum.card_url}
                                    alt={''}
                                />

                                <div className={'whitespace-nowrap absolute -bottom-[70px] left-1/2 -translate-x-1/2 font-extrabold text-lg sm:text-xl px-2 md:text-3xl text-[#FFD66A] text-opacity-40 bg-black  flex justify-center items-center h-[48px] border-2 border-[#565151]'}>
                                    {docum.title}
                                </div>
                            </div>
                        </div>

                    </div>
                ))}

            </div>
        </>
    )
}

type ExamplesArrowProps = {
    nextSlide: () => void,
    prevSlide: () => void,
}

const Arrows = (props: ExamplesArrowProps) => {
    return (
        <div className={'absolute w-full top-1/2 left-0 flex justify-between'}>
            <div
                className={'cursor-pointer select-none'}
                onClick={() => props.prevSlide()}
            >
                <ArrowLeft />
            </div>
            <div
                className={'cursor-pointer select-none'}
                onClick={() => props.nextSlide()}
            >
                <ArrowRight />
            </div>
        </div>
    )
}

const advantageCardsData = [
    {
        id: 1,
        number: '01',
        text: 'Я действую без посредников,  веду дело с первого звонка \n' +
            'до получения определения \n' +
            'об освобождении должника от обязательств.',
    },
    {
        id: 2,
        number: '02',
        text: 'Действую исключительно \n' +
            'в интересах сохранения имущества',
    },
    {
        id: 3,
        number: '03',
        text: 'Берусь за дело, только если уверена, что смогу достичь нужного результата',
    },
    {
        id: 4,
        number: '04',
        text: 'Честно предупреждаю о рисках, которые возможны в процедуре банкротства',
    },
    {
        id: 5,
        number: '05',
        text: 'Предлагаю выгодные варианты рассрочки без увеличения стоимости услуг',
    },
    {
        id: 6,
        number: '06',
        text: 'Стоимость услуг, условия оплаты прописаны в договоре',
    },
    {
        id: 7,
        number: '07',
        text: 'Имею большую клиентскую базу',
    },
]

const Advantages = () => {
    return (
        <div className={'bg-why-i'}>
            <div className={'bg-why-i-second'}>
                <Container>
                    <Typography variant={'comfortaa-2xxl'} className={'text-[2rem] pt-24'}>
                        Почему я
                    </Typography>
                    <div className={'flex flex-col items-center mt-14 pl-[40px] pr-[20px]'}>
                        {
                            advantageCardsData.map(cardData => (
                                <AdvantageCard
                                    key={cardData.id}
                                    number={cardData.number}
                                    text={cardData.text}
                                />
                            ))
                        }
                    </div>
                </Container>
            </div>
        </div>
    )
}

type AdvantageCardProps = {
    number: string
    text: string
}

const AdvantageCard = (props: AdvantageCardProps) => {
    return (
        <div className={'md:w-[71%] w-full md:min-h-[126px] min-h-[96px] py-4 relative pr-4 pl-16 bg-advantage mb-24'}>
            <div className={'absolute md:-top-[28px] -top-[50px] left-[30px] -translate-x-1/2'}>
                <AdvantageIcon className={'md:w-[158px] w-[120px]'}/>
                <Typography className={'font-druk-cyr md:text-[4.6rem] text-[4rem] absolute z-[2] md:top-[50px] top-[6rem] md:left-[15px] left-[1rem] advantage-number'}>
                    {props.number}
                </Typography>
            </div>
            <Typography className={'md:text-[2rem] text-[1.4rem]'}>
                {props.text}
            </Typography>
        </div>
    )
}

const installmentMediaBlocksData =[
    {
        id: 1,
        image_url: InstallmentMedia1,
        description: 'Рассказываете \n' +
            'о своей проблеме',
        image_wrapper_classes: 'pt-[62%]',
        image_classes: 'left-0  top-0',
        description_wrapper_classes: 'mt-4',
        description_classes: 'text-black text-center font-medium text-xl',
    },
    {
        id: 2,
        image_url: InstallmentMedia2,
        description: 'Полностью бесплатная консультация',
        image_wrapper_classes: 'pt-[62%]',
        image_classes: 'left-0  top-0',
        description_wrapper_classes: 'mt-4',
        description_classes: 'text-black text-center font-medium text-xl',
    },
    {
        id: 3,
        image_url: InstallmentMedia3,
        description: 'Обсуждаем все нюансы\n' +
            ' и оцениваем риски',
        image_wrapper_classes: 'pt-[62%]',
        image_classes: 'left-0  top-0',
        description_wrapper_classes: 'mt-4',
        description_classes: 'text-black text-center font-medium text-xl',
    },
    {
        id: 4,
        image_url: InstallmentMedia4,
        description: 'Сниженная цена после обсуждения всех деталей',
        image_wrapper_classes: 'pt-[62%]',
        image_classes: 'left-0  top-0',
        description_wrapper_classes: 'mt-4',
        description_classes: 'text-black text-center font-medium text-xl',
    },
];

type InstallmentPopup = {
    onOpen: () => void
}

const Installment = (props: InstallmentPopup) => {
    return (
        <div className={"relative py-[34px] bg-white bg-[url('/installment/texture.png')] overflow-hidden pb-[50px]"}>
            <InstallmentRedLine className={'absolute top-0 left-0 w-full'}>
                <Marquee
                    direction={'right'}
                    autoFill
                >
                    <Typography className={'md:min-w-[350px] min-w-[200px] font-semibold text-[1.25rem]'}>ПЛАТИ КАК УДОБНО!</Typography>
                </Marquee>
            </InstallmentRedLine>
            <Container>
                <div className={'mt-8 flex justify-center flex-col items-center'}>
                    <Typography className={'pl-12 md:font-montserrat-extralight uppercase lg:text-[5.2rem] md:text-[3rem] text-[2rem] md:tracking-[3.5rem] tracking-[2rem] text-black'}>
                        Рассрочка
                    </Typography>


                    <Typography className={'mt-6 font-montserrat-extralight uppercase lg:text-[3rem] text-[1.5rem] tracking-[1.75rem] text-black md:-mt-3 text-center'}>
                        БЕЗ ПРОЦЕНТОВ
                    </Typography>
                </div>

                <div className={'flex justify-center mt-8'}>
                    <button className={'md:w-[320px] w-[152px] md:h-[90px] h-[42px] rounded-[200px] relative'}>
                        <div className={'absolute top-0 left-0 w-full h-full bg-black filter blur-[4px] rounded-[200px]'}></div>
                        <div
                            className={'bg-red-600 w-full h-full absolute top-0 left-0 rounded-[200px] flex justify-center items-center'}
                            onClick={() => props.onOpen()}
                        >
                            <Typography>
                                Подробнее
                            </Typography>
                        </div>
                    </button>
                </div>

                <div className={'md:flex md:justify-center md:gap-5 mt-12 grid grid-cols-2 grid-rows-2'}>
                    {installmentMediaBlocksData.map(media => (

                        <div
                            className={'md:w-[23.5%]'}
                            key={media.id}
                        >
                            <div className={'p-5'}>
                                <MediaBlock
                                    image_url={media.image_url}
                                    description={media.description}
                                    image_classes={media.image_classes}
                                    image_wrapper_classes={media.image_wrapper_classes}
                                    description_wrapper_classes={media.description_wrapper_classes}
                                    description_classes={media.description_classes}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
            <InstallmentRedLine className={'absolute bottom-0 left-0 w-full'}>
                <Marquee
                    direction={'right'}
                    autoFill
                >
                    <Typography className={'md:min-w-[350px] min-w-[200px] font-semibold text-[1.25rem]'}>ПЛАТИ КАК УДОБНО!</Typography>
                </Marquee>
            </InstallmentRedLine>
        </div>
    );
}

const InstallmentRedLine = tw.div`h-[34px] bg-[#FF0000] flex items-center`;

const footerMediaButtonsData = [
    {
        id: 1,
        title: "1",
        text: '- Возврат не законно удержанных средств банками по Федеральному Закону №444.'
    },
    {
        id: 2,
        title: "2",
        text: '- Отмена судебного приказа.'
    },
    {
        id: 3,
        title: "3",
        text: '- Возврат страховки в «Период охлаждения».'
    },
    {
        id: 4,
        title: "4",
        text: '- Сохранение прожиточного минимума по Федеральному 3акону №234.'
    },
    {
        id: 5,
        title: "5",
        text: '- Прекращение звонков коллекторов и банков.'
    },
    {
        id: 6,
        title: "6",
        text: '- Работа по взаимодействию с приставами.'
    },
    {
        id: 7,
        title: "7",
        text: '- Урегулировании вопроса в досудебном порядке с кредитными организациями, представительство в суде.'
    },
]

type ServicesPopup = {
    onOpen: () => void
}

const Services = (props: ServicesPopup) => {
    return <div
        id={'services'}
        className={"md:bg-[#222020]"}
    >
        <div className={"w-full bg-[url('/services/services_texture.png')] bg-no-repeat bg-cover"}>
            <Container className={'md:px-[20px] px-0'}>
                <div className={'flex justify-center'}>
                    <Typography variant={'section-header'} className={'mt-5'}>
                        Услуги
                    </Typography>
                </div>

                <div className={'mt-12 md:grid md:grid-cols-[58.6%_41.4%] md:grid-rows-[min(10rem)_min(6.3rem)_min(3.6rem)__min(3.6rem)_min(3.6rem)_min(23rem)] md:gap-x-1'}>
                    <div className={'row-start-1 row-end-2 h-full flex items-center px-[20px]'}>
                        <Typography variant={'comfortaa-2xxl'} className={'text-2xl'}>
                            Хорошо. Раз мы уже познакомились, то пришло время рассказать
                            о том, что я могу для Вас сделать более подробно
                        </Typography>
                    </div>

                    <div className={'md:bg-[#000] md:bg-opacity-[29%] bg-[#1C1A1A] rounded-t-[20px] overflow-hidden row-start-1 row-end-6 relative md:mt-0 mt-4'}>
                        <div>
                            <Image
                                src={Services1}
                                className={'-ml-12 md:-mt-12 -mt-16'}
                                alt={'01'}
                            />
                        </div>


                        <div className={'md:mt-5 -mt-12 md:px-7 text-center md:text-[0.9375rem] text-[1.25rem] px-[20px]'}>
                            <Typography>
                                Банкротство физических лиц,
                                в соответствии с ФЗ 127
                                «О несостоятельности
                                (банкротстве)».
                                Списание задолженности
                                на сегодняшний день возможно лишь через процедуру банкротства.
                            </Typography>
                        </div>

                        <div className={'w-full md:absolute bottom-0 left-0 md:mt-0 mt-6'}>
                            <button
                                onClick={() => props.onOpen()}
                                className={"bg-[url('/banner/gold-texture.png')] bg-[#F6CF69] overflow-hidden rounded-t-[9px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] w-full"}
                            >
                                <Typography className={'hover:bg-[#B0B0B0] duration-sm font-comfortaa font-bold text-[0.9375rem] bg-opacity-50 text-black h-[81px] flex justify-center items-center shadow-[0_8px_50px_0_rgba(208,169,169,0.25)] w-full'} $as={'div'}>
                                    Подробнее
                                </Typography>
                            </button>
                        </div>
                    </div>

                    <div className={'md:mt-0 mt-4 bg-[#000] bg-opacity-[29%] rounded-[20px] overflow-hidden row-start-2 row-end-3 md:flex justify-start md:flex-nowrap mb-1'}>
                        <div className={'md:-ml-12 -ml-14 md:-mt-12 -mt-20'}>
                            <Image
                                src={Services2}
                                width={213}
                                height={192}
                                className={'min-w-[213px] min-h-[192px]'}
                                alt={'02'}
                            />
                        </div>
                        <div className={'h-full flex items-center pr-5 -ml-4 md:mt-0 -mt-16 px-[20px]'}>
                            <Typography className={'md:text-[0.9375rem] text-[1.25rem] md:text-right text-center md:pb-0 pb-4 md:tracking-[1.4px] md:leading-[1.1rem]'}>
                                Финансовая защита. Процедура финансовой защиты позволяет решить проблему, связанную с долговыми обязательствами,
                                решить в судебном или досудебном порядке.
                            </Typography>
                        </div>
                    </div>

                    <div className={'bg-[#000] bg-opacity-[29%] overflow-hidden row-start-3 row-end-4 md:border-2 border-[1px] border-[#CAAB60] border-opacity-40 mb-[0.3rem]'}>
                        <div className={"md:pb-0 md:pt-0 pt-3 pb-1 md:px-0 px-[20px] h-full bg-[url('/services/service_item_texture.png')] bg-cover bg-no-repeat flex items-center md:justify-center justify-between"}>
                            <Typography variant={'light-2xl'} className={'md:text-[0.9375rem] text-[1.25rem]'}>
                                Фиксация суммы долга
                            </Typography>
                            <Image
                                className={'md:hidden cursor-pointer'}
                                src={Circle}
                                alt={'o'}
                            />
                        </div>
                    </div>

                    <div className={'bg-[#000] bg-opacity-[29%] overflow-hidden row-start-4 row-end-5 md:border-2 border-[1px] border-[#CAAB60] border-opacity-40 my-[0.3rem]'}>
                        <div className={"md:pb-0 md:pt-0 pt-3 pb-1 md:px-0 px-[20px] h-full bg-[url('/services/service_item_texture.png')] bg-cover bg-no-repeat flex items-center md:justify-center justify-between"}>
                            <Typography variant={'light-2xl'} className={'md:text-[0.9375rem] text-[1.25rem]'}>
                                Частичное списание долга
                            </Typography>
                            <Image
                                className={'md:hidden cursor-pointer'}
                                src={Circle}
                                alt={'o'}
                            />
                        </div>
                    </div>

                    <div className={'bg-[#000] bg-opacity-[29%] overflow-hidden row-start-5 row-end-6 md:border-2 border-[1px] border-[#CAAB60] border-opacity-40 mt-[0.3rem]'}>
                        <div className={"md:pb-0 md:pt-0 pt-3 pb-1 md:px-0 px-[20px] h-full bg-[url('/services/service_item_texture.png')] bg-cover bg-no-repeat flex items-center md:justify-center justify-between"}>
                            <Typography variant={'light-2xl'} className={'md:text-[0.9375rem] text-[1.25rem]'}>
                                Посильные платежи
                            </Typography>
                            <Image
                                className={'md:hidden cursor-pointer'}
                                src={Circle}
                                alt={'o'}
                            />
                        </div>
                    </div>

                    <div className={'col-start-1 col-end-3 mt-6 md:bg-[#000] md:bg-opacity-[29%] bg-[#1C1A1A] md:rounded-[20px] overflow-hidden '}>
                            <Image
                                className={'max-w-none md:h-[10.25rem] w-[17.25rem] -mt-8 -ml-8'}
                                src={Services3}
                                alt={'03'}
                            />
                            <div className={'px-[20px] md:mb-[5.6rem] mb-8 md:mt-[-1.5rem] -mt-[2.5rem]'}>
                                <div className={'text-xl text-center tracking-[0.125rem] leading-[1.5rem]'}>
                                    <p>Юридическая защита.</p>
                                    Помощь опытного юриста — гарантия успешного банкротства.
                                    Я возьму на себя полное ведение дела:
                                    <p>от первичной консультации и детального разбора ситуации</p>
                                    до представления ваших интересов
                                    <p>в суде и взаимодействия с кредиторами.</p>
                                </div>
                            </div>
                    </div>
                </div>
            </Container>
            <ServicesMediaBlock
                onOpen={props.onOpen}
            />
        </div>
    </div>
}

type ServicesMediaBlockPopup = {
    onOpen: () => void
}

const ServicesMediaBlock = (props: ServicesMediaBlockPopup) => {
    const screen = useScreen()
    const [videoText, setVideoText] = useState(footerMediaButtonsData[0].text)
    const sourceRef = useRef<HTMLSourceElement>(null)
    const videoRef = useRef<HTMLVideoElement>(null)

    const {containerRef, isVisible} = useElementOnScreen({
        root: null,
        rootMargin: "0px",
        threshold: 0
    })

    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        if (sourceRef?.current && videoRef?.current) {
            sourceRef.current.src = "/services/services_video.mov"
        }
    }, [sourceRef?.current, videoRef?.current])

    useEffect(() => {
        if (!isLoaded && isVisible && videoRef.current) {
            setIsLoaded(true)
            videoRef.current.load()
        }
    }, [sourceRef?.current?.src, isVisible, isLoaded])

    return (
        <div className={'md:pb-[3.25rem]'} ref={containerRef}>
            <Container>
                <div className={'hidden md:block'}>
                    <div className={'grid grid-cols-7 grid-rows-2 mt-1.5 gap-x-[0.9rem]'}>
                        {footerMediaButtonsData.map(buttonData => (
                            <div
                                key={buttonData.id}
                                className={"bg-[url('/services/btn_texture.png')] overflow-hidden border-2 border-[#CAAB60] border-opacity-40 h-[3.33rem] cursor-pointer"}
                                onMouseEnter={() => setVideoText(buttonData.text)}
                            >
                                <div className={"h-full bg-[#000] bg-opacity-[29%] flex items-center justify-center"}>
                                    <Typography
                                        variant={'light-2xl'}
                                        className={'text-[0.9375rem]'}
                                    >
                                        {buttonData.title}
                                    </Typography>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
            <Container className={'md:px-[20px] px-0'}>
                <div className={'relative'}>
                    {
                        videoText && (screen !== 'xs' && screen !== 'sm') ? (
                            <div className={'absolute animate-opacity bg-opacity-40 z-10 top-0 left-0 h-full w-full bg-black flex justify-center items-center'}>
                                <Typography className={'lg:text-[2.25rem] md:text-[1.75rem] font-bold md:tracking-[0.225rem] tracking-[0.15rem] text-center px-40'}>
                                    {videoText}
                                </Typography>

                            </div>
                        ) : null
                    }

                    <div className={'md:hidden absolute z-10 top-0 left-0 h-full w-full p-5'}>
                        <div className={'grid grid-rows-7 grid-cols-[45%_1fr] mt-1.5 gap-y-[0.9rem] h-full'}>
                            {footerMediaButtonsData.map(buttonData => (
                                <div
                                    key={buttonData.id}
                                    className={"bg-[url('/services/btn_texture.png')] bg-cover bg-no-repeat overflow-hidden border-2 border-[#CAAB60] border-opacity-40 h-[3.33rem] cursor-pointer mr-4"}
                                    onMouseEnter={() => setVideoText(buttonData.text)}
                                >
                                    <div className={"h-full bg-[#000] bg-opacity-[29%] flex items-center justify-center"}>
                                        <Typography
                                            variant={'light-2xl'}
                                            className={'text-[0.9375rem]'}
                                        >
                                            {buttonData.title}
                                        </Typography>
                                    </div>
                                </div>
                            ))}

                            <div className={"col-start-2 col-end-3 row-start-1 row-end-[8] pl-1 pb-4"}>
                                <div className={"bg-[url('/services/btn_texture.png')] bg-cover bg-no-repeat w-full h-full flex items-center justify-center border-[1px] border-[#615234]"}>
                                    <Typography className={'lg:text-[2.25rem] md:text-[1.75rem] font-bold md:tracking-[0.225rem] tracking-[0.15rem] text-center px-1'}>
                                        {videoText}
                                    </Typography>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={'relative md:pt-[40.7%] md:h-auto h-[455px]'}>
                        <div className={'absolute bg-black h-full w-full top-0 left-0'}>
                            <video
                                ref={videoRef}
                                autoPlay
                                muted
                                loop
                                playsInline
                                className={'w-full h-[100%] object-cover pointer-events-none select-none'}
                            >
                                <source ref={sourceRef}/>
                            </video>
                        </div>
                    </div>
                </div>
            </Container>
            <Container className={'md:px-[20px] px-0'}>
                <div className={'md:pb-0 pb-4 md:mt-[4.25rem] md:pt-0 pt-4 md:bg-[#000] md:bg-opacity-[29%] md:rounded-[20px] bg-[#1C1A1A] overflow-hidden md:h-[14.1rem] relative'}>
                    <Image
                        className={'max-w-none h-[11.9rem] w-[12.44rem] -mt-12 -ml-8'}
                        src={Services4}
                        alt={'04'}
                    />
                    <div className={'md:text-[0.9375rem] text-[1.25rem] md:-mt-[4.5rem] -mt-[3.5rem] md:pl-[11rem] md:pr-[11.5rem] md:px-0 px-[20px] text-center font-medium tracking-[0.1rem]'}>
                        <p>Внесудебное банкротство.</p>
                        На текущий момент закон предусматривает эту возможность для граждан, чья задолженность находится в пределах от 50 тысяч до 500 тысяч рублей.
                    </div>

                    <div className={'absolute top-0 right-0 w-[3.25rem] h-full md:block hidden'}>
                        <button
                            onClick={() => props.onOpen()}
                            className={"bg-[url('/banner/gold-texture.png')] bg-[#F6CF69] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] w-full h-full hover:bg-[#B0B0B0] duration-sm"}
                        >
                            <Typography className={'font-comfortaa font-bold text-[0.9375rem] rotate-90 bg-opacity-50 text-black flex justify-center items-center shadow-[0_8px_50px_0_rgba(208,169,169,0.25)] w-full'} $as={'div'}>
                                Подробнее
                            </Typography>
                        </button>
                    </div>
                </div>
            </Container>
            <div className={'md:hidden bg-white h-[1px] bg-opacity-30'}></div>
        </div>
    )
}

type FeedbackPopup = {
    onOpen: () => void
}

const Feedback = (props: FeedbackPopup) => {
    return (
        <div
            className={'bg-[#171A1A]'}
            id={'feedback'}
        >
            <Container>
                <div className={'flex justify-center'}>
                    <Typography variant={'section-header'} className={'pt-6'}>
                        Обратная связь
                    </Typography>
                </div>
                <div className={'md:grid md:grid-cols-[1fr_39%_min(17rem)] md:mt-16 mt-4 gap-y-5 pb-16'}>
                    <div className={'md:block hidden col-start-1 col-end-3'}>
                        <div className={'max-w-[600px]'}>
                            <Typography className={'font-raleway-black text-[#8593A9]'} $as={'span'}>
                                ЕСЛИ НЕТ ВОЗМОЖНОСТИ ОСТАВИТЬ{' '}
                            </Typography>
                            <Typography className={'font-raleway-black text-[#B1B7C0]'} $as={'span'}>
                                ЗАЯВКУ
                            </Typography>
                            <Typography className={'font-raleway-black text-[#8593A9]'} $as={'span'}>
                                , МОЖЕТЕ ПОЗВОНИТЬ САМИ
                            </Typography>
                        </div>
                        <div className={'h-[2px] bg-[#374343] max-w-[650px] -mt-1'}></div>
                    </div>

                    <div className={'col-start-3 col-end-4 row-start-1 row-end-3'}>
                        <Typography className={'font-raleway-regular text-[#8593A9] text-[0.9375rem] md:text-right text-center tracking-wide mt-2'}>
                            Я принимаю звонки с 10:00 до 22:00.
                        </Typography>
                        <Typography className={'font-raleway-regular text-[#8593A9] text-[0.9375rem] md:text-right text-center tracking-wide'}>
                            Я работаю каждый день.
                        </Typography>
                        <Link
                            href={'tel:89085714448'}
                        >
                            <Typography className={'font-roboto-regular md:text-right text-center text-[1.75rem] mt-3'}>
                                +7 (908) 571-44-48
                            </Typography>
                        </Link>
                        <div className={'mt-7 flex md:justify-end justify-center'}>
                            <button
                                onClick={() => props.onOpen()}
                                className={"hover:bg-[#B0B0B0] hover:bg-none duration-sm application_btn bg-[url('/banner/gold-texture.png')] rounded-tr-[9px] rounded-bl-[9px] bg-[#F6CF69] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] w-full h-8 max-w-[186px]"}
                            >
                                <Typography className={'font-roboto font-light text-[0.9375rem] bg-opacity-50 text-black flex justify-center items-center shadow-[0_8px_50px_0_rgba(208,169,169,0.25)] h-full w-full'} $as={'div'}>
                                    Оставить заявку
                                </Typography>
                            </button>
                        </div>
                    </div>

                    <div className={'col-start-1 col-end-2 md:block hidden'}>
                        {/*<div className={'md:block flex items-center justify-center'}>*/}
                            <Typography className={'font-raleway-regular text-[#8593A9]'}>
                                Остались вопросы?
                            </Typography>
                            <Typography className={'font-raleway-regular text-[#8593A9]'}>
                                Можете сделать звонок и их задать
                            </Typography>
                        {/*</div>*/}
                    </div>

                    <div className={'col-start-2 col-end-3 md:block hidden'}>
                        <Typography className={'font-raleway-regular text-[#8593A9]'}>
                            Хотите узнать мнение эксперта?
                        </Typography>
                        <Typography className={'font-raleway-regular text-[#8593A9]'}>
                            Позвоните, и Вас бесплатно проконсультируют обо всех нюансах вашего дела
                        </Typography>
                    </div>
                </div>
            </Container>
        </div>
    )
}

const Author = () => {
    return (
        <div className={'bg-white'}>
            <Container>
                <div className={'flex justify-center items-center flex-col py-2.5'}>
                    <div className={'flex justify-start gap-x-2 cursor-pointer'}>
                        <Typography variant={'comfortaa-2xxl'} className={'text-black text-[0.9375rem] font-light uppercase'}>
                            Сайт сделан мной
                        </Typography>
                        <div className={'relative'}>
                            <Image
                                className={'absolute left-0 -top-1 w-[1.5rem] h-[1.5rem] max-w-none'}
                                src={AuthorTg}
                                alt={'telegram'}
                            />
                        </div>
                    </div>
                    <div>
                        <Typography variant={'comfortaa-2xxl'} className={'text-black text-[0.9375rem] font-light uppercase'}>
                            ПО ВСЕМ ВОПРОСАМ И ЗАЩИТЕ АВТОРСКИХ ПРАВ
                        </Typography>
                    </div>
                </div>

            </Container>
        </div>
    )
}