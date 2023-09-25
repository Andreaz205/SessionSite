import Image from "next/image";
import CityBackground from '/public/banner/city-background.png';
import MediaBlock from "@/src/shared/ui/media-block/media-block";
import {Container} from '../../shared/ui';
import ProfileLogo from '/public/banner/profile-logo.svg';
import GroupLogo from '/public/banner/group-logo.svg';
import HandsLogo from '/public/banner/hands-logo.svg';
import MoneyLogo from '/public/banner/money-logo.svg';
import MePhoto from '/public/me/me.png'
import {Typography} from "@/src/shared/ui/typography/typography";
import tw from "tailwind-styled-components";

export default function Home() {
    return <>
        <Banner />
        <Divider />
        <AboutMe />
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
        <Container className={'max-w-[1000px]'}>
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
            <Container className={'px-[200px]'}>
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
                    <div className={'relative pt-[37%] w-[34%]'}>
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

                <div className={'mt-[8rem] flex justify-center'}>
                    <Typography variant={'semibold-3xl'}>
                        Опыт в процедуре банкротства с 2016 года.
                    </Typography>
                </div>
            </Container>

        </div>
    )
}