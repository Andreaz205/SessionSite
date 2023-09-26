import Image from "next/image";
import MediaBlock from "@/src/shared/ui/media-block/media-block";

import CityBackground from '/public/banner/city-background.png';
import {Container} from '../../shared/ui';
import ProfileLogo from '/public/banner/profile-logo.svg';
import GroupLogo from '/public/banner/group-logo.svg';
import HandsLogo from '/public/banner/hands-logo.svg';
import MoneyLogo from '/public/banner/money-logo.svg';
import MePhoto from '/public/me/me.png'
import DocumentOne from '/public/examples/docs/document_1.png'
import DocumentTwo from '/public/examples/docs/document_2.png'
import DocumentThree from '/public/examples/docs/document_3.png'
import DocumentFour from '/public/examples/docs/document_4.png'
import CardOne from '/public/examples/cards/card_1.png'
import CardTwo from '/public/examples/cards/card_2.png'
import CardThree from '/public/examples/cards/card_3.png'
import CardFour from '/public/examples/cards/card_4.png'
import Dashed from '/public/examples/dashed.svg'

import {Typography} from "@/src/shared/ui/typography/typography";
import tw from "tailwind-styled-components";
import {useState} from "react";
import {IDocuments} from "@/src/shared/api/types/documents/documents";

export default function Home() {
    return <>
        <Banner />
        <Divider />
        <AboutMe />
        <Examples />
    </>
}

const Banner = () => {
    return <div className={'h-[800px] md:h-[822px] relative pt-[90px]'}>
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
            <ConsultButton />
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
        description_wrapper_classes: 'px-2',
    },
    {
        id: 2,
        image_url: GroupLogo,
        description: 'Работа со всеми регионами России',
        image_wrapper_classes: '',
        image_classes: 'w-[143px] h-[143px] left-1/2 -translate-x-1/2 bottom-0',
        description_wrapper_classes: '',
    },
    {
        id: 3,
        image_url: HandsLogo,
        description: 'Большая степень доверия клиентуры своего города',
        image_wrapper_classes: '',
        image_classes: 'w-[153px] h-[153px] left-1/2 -translate-x-1/2 bottom-0',
        description_wrapper_classes: '',
    },
    {
        id: 4,
        image_url: MoneyLogo,
        description: 'Цена ниже, чем у других',
        image_wrapper_classes: '',
        image_classes: 'w-[151px] h-[151px] left-1/2 -translate-x-1/2 bottom-0',
        description_wrapper_classes: 'px-12',
    }
];

const Divider = tw.div`bg-white h-[1px] bg-opacity-20`

const BannerMediaBlocks = () => {
    return <div className={'flex flex-nowrap justify-between mt-2'}>
        {bannerMediaBlockData.map(data => (
            <div
                key={data.id}
                className={'w-[20%] text-center'}
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
            <div className={'mt-24'}>
                <Typography variant={'xxxl'} className={'leading-[2.5rem]'}>
                    Списание долгов по закону
                </Typography>
                <Typography variant={'xxxl'} $as={'span'}>
                    c{' '}
                </Typography>
                <Typography variant={'xxxl'} className={'font-medium'} $as={'span'}>
                    выгодой{' '}
                </Typography>
                <Typography variant={'xxxl'} $as={'span'}>
                    до{' '}
                </Typography>
                <Typography variant={'xxxl'} $as={'span'} className={'font-medium'}>
                    20%
                </Typography>
            </div>
            <div className={'mt-5'}>
                <Typography variant={'light-2xl'} className={'font-montserrat-light'}>
                    Начну процедуру списания долгов в день обращения
                </Typography>
            </div>
        </div>

    );
}

const ConsultButton = () => {
    return <div className={'flex justify-center mt-12'}>
        <button className={"bg-[url('/banner/gold-texture.png')] bg-[#F6CF69] rounded-[9px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]"}>
            <Typography className={'font-montserrat-bold text-base  bg-opacity-50 text-black w-[320px] h-[81px] flex justify-center items-center shadow-[0_8px_50px_0_rgba(208,169,169,0.25)]'} $as={'div'}>
                Бесплатная консультация
            </Typography>
        </button>
    </div>
}

const AboutMe = () => {
    return (
        <div className={'h-[900px] relative about-me-background'}>
            <Container>
                <div className={'flex justify-center pt-[2.5rem]'}>
                    <Typography variant={'section-header'}>
                        Обо мне
                    </Typography>
                </div>
                <div className={'mt-[5.5rem] flex justify-between gap-2'}>
                    <div className={'w-[49%] flex flex-col justify-center'}>
                        <Typography variant={'comfortaa-2xxl'}>
                            Окончила Южно-Уральский государственный университет в 2003 году
                            по специальности юриспруденция.
                        </Typography>

                        <Typography variant={'comfortaa-2xxl'} className={'mt-8'}>
                            Работала в органах судебной системы, а также крупных юридических компаниях.
                        </Typography>
                    </div>
                    <div className={'w-[34%] '}>
                        <div className={'pt-[110%] relative'}>
                            <Image
                                src={MePhoto}
                                className={'absolute w-full h-full top-0 left-0'}
                                alt={'me'}
                            />

                            <div className={'absolute w-full top-[100%] flex justify-center mt-[0.5rem]'}>
                                <Typography className={'font-extrabold'}>
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
        doc_url: DocumentOne,
        card_url: CardOne
    },
    {
        id: 2,
        title: "Дело №2",
        doc_url: DocumentTwo,
        card_url: CardTwo
    },
    {
        id: 3,
        title: "Дело №3",
        doc_url: DocumentThree,
        card_url: CardThree
    },
    {
        id: 4,
        title: "Дело №4",
        doc_url: DocumentFour,
        card_url: CardFour
    },
];

const Examples = () => {
    return (
        <div className={"h-[1236px] bg-[url('/examples/mountains.png')] bg-gray-500 bg-no-repeat bg-cover"}>
            <Container>
                <Typography variant={'comfortaa-2xxl'} className={'font-normal pt-16 tracking-[0.48px] text-[32px]'}>
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
    return (
        <>
            {
                activeDocument ? (
                    <>
                        <div className={'flex justify-center'}>
                            <div className={'mt-20 relative w-[82%] pr-[7%]'}>
                                <div className={'w-[45%] absolute top-0'}>
                                    <div className={'pt-[146%] relative'}>
                                        <Image
                                            className={'absolute top-0 left-0 w-full h-full'}
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
                        </div>
                        <div className={'flex justify-center mt-[5.5rem]'}>
                            <div className={'font-extrabold text-3xl text-[#FFD66A] text-opacity-40 bg-black  flex justify-center items-center w-[260px] h-[48px] border-2 border-[#565151]'}>
                                {activeDocument.title}
                            </div>
                        </div>
                    </>
                ): null
            }
        </>
    )
}