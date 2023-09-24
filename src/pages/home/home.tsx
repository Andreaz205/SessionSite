import Image from "next/image";
import CityBackground from '/public/banner/city-background.png';
import MediaBlock from "@/src/shared/ui/media-block/media-block";
import {Container} from '../../shared/ui';
import ProfileLogo from '/public/banner/profile-logo.svg';
import GroupLogo from '/public/banner/group-logo.svg';
import HandsLogo from '/public/banner/hands-logo.svg';
import MoneyLogo from '/public/banner/money-logo.svg';
import {Typography} from "@/src/shared/ui/typography/typography";

export default function Home() {
    return <>
        <Banner />
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
        description: 'Индивидуальная беседа с каждым клиентом'
    },
    {
        id: 2,
        image_url: GroupLogo,
        description: 'Работа со всеми регионами России'
    },
    {
        id: 3,
        image_url: HandsLogo,
        description: 'Большая степень доверия клиентуры своего города'
    },
    {
        id: 4,
        image_url: MoneyLogo,
        description: 'Цена ниже, чем у других'
    }
];

const BannerMediaBlocks = () => {
    return <div className={'flex flex-nowrap justify-between mt-16'}>
        {bannerMediaBlockData.map(data => (
            <div
                key={data.id}
                className={'w-[14.7%] text-center'}
            >
                <MediaBlock
                    image_url={data.image_url}
                    description={data.description}
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
                    Списание долгов по закону с
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
                <Typography variant={'light-2xl'}>
                    Начну процедуру списания долгов в день обращения
                </Typography>
            </div>
        </div>

    );
}

const ConsultButton = () => {
    return <div className={'flex justify-center mt-12'}>
        <button className={"bg-[url('/banner/gold-texture.png')] bg-[#F6CF69] rounded-[9px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]"}>
            <Typography className={'font-bold text-base text-black w-[320px] h-[81px] flex justify-center items-center shadow-[0_8px_50px_0_rgba(208,169,169,0.25)]'} $as={'div'}>
                Бесплатная консультация
            </Typography>
        </button>
    </div>
}