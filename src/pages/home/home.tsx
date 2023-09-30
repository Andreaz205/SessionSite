import Image from "next/image";
import MediaBlock from "@/src/shared/ui/media-block/media-block";

import CityBackground from '/public/banner/city-background.png';
import {Container} from '../../shared/ui';
import ProfileLogo from '/public/banner/profile-logo.svg';
import GroupLogo from '/public/banner/group-logo.svg';
import HandsLogo from '/public/banner/hands-logo.svg';
import MoneyLogo from '/public/banner/money-logo.svg';
import InstallmentMedia1 from '/public/installment/media_1.png';
import InstallmentMedia2 from '/public/installment/media_2.png';
import InstallmentMedia3 from '/public/installment/media_3.png';
import InstallmentMedia4 from '/public/installment/media_4.png';
import MePhoto from '/public/me/me.png';
import DocumentOne from '/public/examples/docs/document_1.png';
import DocumentTwo from '/public/examples/docs/document_2.png';
import DocumentThree from '/public/examples/docs/document_3.png';
import DocumentFour from '/public/examples/docs/document_4.png';
import CardOne from '/public/examples/cards/card_1.png';
import CardTwo from '/public/examples/cards/card_2.png';
import CardThree from '/public/examples/cards/card_3.png';
import CardFour from '/public/examples/cards/card_4.png';
import Dashed from '/public/examples/dashed.svg';
import  Services1 from '/public/services/01.png';
import  Services2 from '/public/services/02.png';
import  Services3 from '/public/services/03.png';
// import AdvantageIcon from '/public/advantages/advantage-icon.png'

import {Typography} from "@/src/shared/ui/typography/typography";
import tw from "tailwind-styled-components";
import {useState} from "react";
import {IDocuments} from "@/src/shared/api/types/documents/documents";
import {AdvantageIcon, ArrowLeft, ArrowRight} from "@/src/shared/assets/ui";

export default function Home() {
    return <>
        <Banner />
        <Divider />
        <AboutMe />
        <Examples />
        <Advantages />
        <Installment />
        <Services />
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

    return (
        <>
            {
                activeDocument ? (
                    <>
                        <div className={'flex justify-center relative'}>
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
                    </>
                ): null
            }
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
            <div onClick={() => props.prevSlide()}>
                <ArrowLeft />
            </div>
            <div onClick={() => props.nextSlide()}>
                <ArrowRight />
            </div>
        </div>
    )
}

const advantageCardsData = [
    {
        id: 1,
        number: '01',
        text: 'Я действую без посредников ,  веду дело с первого звонка \n' +
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
        text: 'Берусь за дело, только если уверена , что смогу достичь нужного результата',
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
                    <div className={'flex flex-col items-center mt-14'}>
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
        <div className={'w-[71%] min-h-[126px] py-4 relative pr-4 pl-16 bg-advantage mb-24'}>
            <div className={'absolute -top-[28px] left-[30px] -translate-x-1/2'}>
                <AdvantageIcon />
                <Typography className={'font-druk-cyr text-[4.6rem] absolute z-[2] top-[50px] left-[15px] advantage-number'}>
                    {props.number}
                </Typography>
            </div>
            <Typography className={'text-[2rem]'}>
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

const Installment = () => {
    return (
        <div className={"h-[729px] relative py-[34px] bg-white bg-[url('/installment/texture.png')]"}>
            <InstallmentRedLine className={'absolute top-0 left-0 w-full'}>
                <div className={'relative w-full h-full overflow-hidden'}>
                    <div className={'absolute top-0 h-full left-[60%] -translate-x-1/2 flex justify-center items-center'}>
                        {
                            Array(20).fill(1).map((item, idx) => (
                                <Typography key={idx} className={'min-w-[350px] font-semibold text-[1.25rem]'}>ПЛАТИ КАК УДОБНО!</Typography>
                            ))
                        }
                    </div>
                </div>
            </InstallmentRedLine>
            <Container>
                <div className={'mt-8 flex justify-center flex-col items-center'}>
                    <Typography className={'pl-12 font-montserrat-extralight uppercase text-[5.2rem] tracking-[3.5rem] text-black'}>
                        Рассрочка
                    </Typography>


                    <Typography className={'font-montserrat-extralight uppercase text-[3rem] tracking-[2rem] text-black -mt-3'}>
                        БЕЗ ПРОЦЕНТОВ
                    </Typography>
                </div>

                <div className={'flex justify-center mt-8'}>
                    <button className={'w-[320px] h-[90px] rounded-[200px] relative'}>
                        <div className={'absolute top-0 left-0 w-full h-full bg-black filter blur-[9px] rounded-[200px]'}></div>
                        <div className={'bg-red-600 w-full h-full absolute top-0 left-0 rounded-[200px] flex justify-center items-center'}>
                            <Typography>
                                Подробнее
                            </Typography>
                        </div>
                    </button>
                </div>

                <div className={'flex justify-center gap-5 mt-12'}>
                    {installmentMediaBlocksData.map(media => (
                        <div
                            key={media.id}
                            className={'w-[23.5%]'}
                        >
                            <MediaBlock
                                image_url={media.image_url}
                                description={media.description}
                                image_classes={media.image_classes}
                                image_wrapper_classes={media.image_wrapper_classes}
                                description_wrapper_classes={media.description_wrapper_classes}
                                description_classes={media.description_classes}
                            />
                        </div>
                    ))}
                </div>
            </Container>
            <InstallmentRedLine className={'absolute bottom-0 left-0 w-full'}>
                <div className={'relative w-full h-full overflow-hidden'}>
                    <div className={'absolute top-0 h-full left-[40%] -translate-x-1/2 flex justify-center items-center'}>
                        {
                            Array(20).fill(1).map((item, idx) => (
                                <Typography key={idx} className={'min-w-[350px] font-semibold text-[1.25rem]'}>ПЛАТИ КАК УДОБНО!</Typography>
                            ))
                        }
                    </div>
                </div>
            </InstallmentRedLine>
        </div>
    );
}

const InstallmentRedLine = tw.div`h-[34px] bg-[#FF0000]`;

const Services = () => {
    return <div className={"bg-[#222020]"}>
        <div className={"w-full bg-[url('/services/services_texture.png')] pb-[1000px]"}>
            <Container>
                <div className={'flex justify-center'}>
                    <Typography variant={'section-header'} className={'mt-5'}>
                        Услуги
                    </Typography>
                </div>

                <div className={'mt-12 md:grid md:grid-cols-[58.6%_41.4%] md:grid-rows-[min(10rem)_min(6.3rem)_min(3.6rem)__min(3.6rem)_min(3.6rem)] md:gap-x-1'}>
                    <div className={'row-start-1 row-end-2 h-full flex items-center'}>
                        <Typography variant={'comfortaa-2xxl'} className={'text-2xl'}>
                            Хорошо. Раз мы уже познакомились , то пришло время рассказать
                            о том , что я могу для Вас сделать более подробно
                        </Typography>
                    </div>

                    <div className={'bg-[#000] bg-opacity-[29%] rounded-[20px] overflow-hidden row-start-2 row-end-3 flex justify-start md:flex-nowrap mb-1'}>
                        <div className={'-ml-12 -mt-12'}>
                            <Image
                                src={Services2}
                                width={213}
                                height={192}
                                className={'min-w-[213px] min-h-[192px]'}
                                alt={'02'}
                            />
                        </div>
                        <div className={'h-full flex items-center pr-5 -ml-4'}>
                            <Typography className={'text-[0.9250rem] text-right tracking-[1.4px] leading-[1.1rem]'}>
                                Финансовая защита. Процедура финансовой защиты позволяет решить проблему, связанную с долговыми обязательствами,
                                решить в судебном или досудебном порядке.
                            </Typography>
                        </div>
                    </div>

                    <div className={'bg-[#000] bg-opacity-[29%] overflow-hidden row-start-3 row-end-4 border-2 border-[#CAAB60] border-opacity-40 mb-[0.3rem]'}>
                        <div className={"h-full bg-[url('/services/service_item_texture.png')] flex items-center justify-center"}>
                            <Typography variant={'light-2xl'} className={'text-[0.9375rem]'}>
                                Фиксация суммы долга
                            </Typography>
                        </div>
                    </div>

                    <div className={'bg-[#000] bg-opacity-[29%] overflow-hidden row-start-4 row-end-5 border-2 border-[#CAAB60] border-opacity-40 my-[0.3rem]'}>
                        <div className={"h-full bg-[url('/services/service_item_texture.png')] flex items-center justify-center"}>
                            <Typography variant={'light-2xl'} className={'text-[0.9375rem]'}>
                                Частичное списание долга
                            </Typography>
                        </div>
                    </div>

                    <div className={'bg-[#000] bg-opacity-[29%] overflow-hidden row-start-5 row-end-6 border-2 border-[#CAAB60] border-opacity-40 mt-[0.3rem]'}>
                        <div className={"h-full bg-[url('/services/service_item_texture.png')] flex items-center justify-center"}>
                            <Typography variant={'light-2xl'} className={'text-[0.9375rem]'}>
                                Посильные платежи
                            </Typography>
                        </div>
                    </div>

                    <div className={'bg-[#000] bg-opacity-[29%] rounded-t-[20px] overflow-hidden row-start-1 row-end-6 relative'}>
                        <Image
                            src={Services1}
                            className={'-ml-12 -mt-12'}
                            alt={'01'}
                        />

                        <div className={'mt-5 px-7 text-center text-[0.9375rem]'}>
                            <Typography>
                                Банкротство физических лиц,
                                в соответствии с ФЗ 127
                                «О несостоятельности
                                (банкротстве)».
                                Списание задолженности
                                на сегодняшний день возможно лишь через процедуру банкротства.
                            </Typography>
                        </div>

                        <div className={'w-full absolute bottom-0 left-0'}>
                            <button className={"bg-[url('/banner/gold-texture.png')] bg-[#F6CF69] rounded-t-[9px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] w-full"}>
                                <Typography className={'font-montserrat-bold text-base  bg-opacity-50 text-black h-[81px] flex justify-center items-center shadow-[0_8px_50px_0_rgba(208,169,169,0.25)] w-full'} $as={'div'}>
                                    Бесплатная консультация
                                </Typography>
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    </div>
}