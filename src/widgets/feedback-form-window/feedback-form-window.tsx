import React, {useMemo, useState} from "react";
import {IconButton} from "@/src/shared/ui";
import {Close} from "@/src/shared/assets/ui";
import {Typography} from "@/src/shared/ui/typography/typography";
import ChevronLeft from '/public/images/chevron-left.svg'
import ChevronRight from '/public/images/chevron-right.svg'
import Image from "next/image";

const feedbackFormData = [
    {
        id: 1,
        title: 'Какая у вас сумма долга?',
        variants: [
            {
                id: 1,
                title: 'До 300.000 руб'
            },
            {
                id: 2,
                title: 'До 500.000 руб'
            },
            {
                id: 3,
                title: 'До 1.000.000 руб'
            },
            {
                id: 4,
                title: 'Более 1.000.000 руб'
            },
        ],
    },
    {
        id: 2,
        title: 'Какого типа у вас долги?',
        variants: [
            {
                id: 1,
                title: 'Кредитные'
            },
            {
                id: 2,
                title: 'Микрокредитные'
            },
            {
                id: 3,
                title: 'ЖКХ'
            },
        ],
    },
    {
        id: 3,
        title: 'У вас есть просрочки по кредитам?',
        variants: [
            {
                id: 1,
                title: 'Больше 1 месяца'
            },
            {
                id: 2,
                title: 'Больше 6 месяцев'
            },
            {
                id: 3,
                title: 'Больше 1 года'
            },
            {
                id: 4,
                title: 'Плачу вовремя'
            },
        ],
    },
    {
        id: 4,
        title: 'Имеется ли у вас действующая ипотека или автокредит?',
        variants: [
            {
                id: 1,
                title: 'Да'
            },
            {
                id: 2,
                title: 'Нет'
            },
        ],
    },
    {
        id: 5,
        title: 'Потребуется ли рассрочка на услуги банкротства?',
        variants: [
            {
                id: 1,
                title: 'Да'
            },
            {
                id: 2,
                title: 'Нет'
            },
            {
                id: 3,
                title: 'Ещё не определился'
            },
        ],
    },
]

type FeedbackFormWindowProps = {
    setIsOpen: (isOpen: boolean) => void,
    onOpenFinalPopup: () => void;
}

export const FeedbackFormWindow = (props: FeedbackFormWindowProps) => {
    const [isFillingFeedbackForm, setIsFillingFeedbackForm] = useState(false)
    const [activeElement, setActiveElement] = useState(feedbackFormData[0])
    const [selectedData, setSelectedData] = useState([
        {
            id: 1,
            selected_variant: null as null|number,
        },
        {
            id: 2,
            selected_variant: null as null|number,
        },
        {
            id: 3,
            selected_variant: null as null|number,
        },
        {
            id: 4,
            selected_variant: null as null|number,
        },
        {
            id: 5,
            selected_variant: null as null|number,
        },
        {
            id: 6,
            selected_variant: null as null|number,
        },
    ])
    const handleChange = (changeData: {id: number, selected_variant: number}) => {
        // @ts-ignore
        setSelectedData((data) => {
            const currentItem = data.find(item => item.id === changeData.id)

            if (currentItem) {
                currentItem.selected_variant = changeData.selected_variant
            }
            const dataWithoutCurrent = data.filter(item => item.id !== changeData.id)

            return [...dataWithoutCurrent, {...currentItem}]
        })
    }

    const prev = (currentItemId: number) => {
        const currentItem = feedbackFormData.find(dataItem => dataItem.id === currentItemId)
        if (currentItem) {
            const index = feedbackFormData.indexOf(currentItem)

            if (index === 0) return

            setActiveElement(feedbackFormData[index - 1])
        }
    }

    const next = (currentItemId: number) => {
        const currentItem = feedbackFormData.find(dataItem => dataItem.id === currentItemId)
        if (currentItem) {
            const index = feedbackFormData.indexOf(currentItem)

            if (index === (feedbackFormData.length - 1)) {
                setIsFillingFeedbackForm(true)
            }

            setActiveElement(feedbackFormData[index + 1])
        }
    }

    const close = () => props.setIsOpen(false)

    return (
        <div className={'w-[100vw] h-[100vh] bg-black bg-opacity-60 flex justify-center items-center relative'}>
            <div className={'absolute top-0 left-0 w-full flex justify-end p-2'}>
                <IconButton
                    variant="outlined"
                    onClick={(e) => props.setIsOpen(false)}>
                    <Close />
                </IconButton>
            </div>

            {
                isFillingFeedbackForm ? (
                    <FeedbackWindow
                        close={close}
                        onOpenFinalPopup={props.onOpenFinalPopup}
                    />
                ) : (
                    <div className={'bg-white w-3/5 min-w-[360px]'}>
                        <div className={'py-12 bg-[#E8E8E8] text-black text-[1.5rem] font-semibold text-center'}>
                            {activeElement.title}
                        </div>
                        <div className={"bg-[url('/queez-bg.png')] pt-[2.75rem]"}>
                            {activeElement.variants.map(question => (
                                <div key={question.id} className={'flex justify-between items-center pb-[2rem] pl-[3rem] pr-[2rem]'}>
                                    <input
                                        className={'fixed w-0 h-0'}
                                        name={`question-${activeElement.id}`}
                                        type={'radio'}
                                        value={question.id}
                                        id={activeElement.id + "-" + question.id}
                                        onChange={(event) => handleChange({
                                            id: activeElement.id,
                                            selected_variant: Number(event.target.value)
                                        })}
                                    />
                                    <label
                                        className={'w-[20px] h-[20px] rounded-[10px] bg-black cursor-pointer relative'}
                                        htmlFor={activeElement.id + "-" + question.id}
                                    >
                                        {selectedData.find(el => el.id === activeElement.id)?.selected_variant === question.id ? (
                                            <div className={'bg-white absolute h-[16px] w-[16px] top-[2px] left-[2px] cursor-pointer rounded-[8px]'}></div>
                                        ): null}
                                    </label>
                                    <Typography
                                        className={'text-black text-[2rem] font-bold'}
                                    >{question.title}</Typography>
                                </div>
                            ))}
                        </div>

                        <div className={'flex justify-center items-center py-2 bg-[#E8E8E8]'}>
                            <div className={'flex justify-center items-center flex-nowrap gap-x-6'}>
                                {activeElement.id !== 1 ? (
                                    <Image
                                        onClick={() => prev(activeElement.id)}
                                        className={'cursor-pointer'}
                                        src={ChevronLeft}
                                        alt={'Назад'}
                                    />
                                ) : null}

                                {(activeElement.id !== feedbackFormData.length)
                                || (activeElement.id === feedbackFormData.length) && selectedData.some(field => !field.selected_variant)  ? (
                                    <Image
                                        onClick={() => next(activeElement.id)}
                                        className={'cursor-pointer'}
                                        src={ChevronRight}
                                        alt={'Далее'}
                                    />
                                ) : null}

                                {activeElement.id === feedbackFormData.length && !selectedData.some(field => !field.selected_variant) ? (
                                    <Typography className={'text-black text-[1rem] font-semibold'}>
                                        Необходимо заполнить все поля!
                                    </Typography>
                                ) : null}
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

type FeedbackWindowProps = {
    close: () => void;
    onOpenFinalPopup: () => void;
}
const FeedbackWindow = (props: FeedbackWindowProps) => {
    const [phone, setPhone] = useState('')
    const [name, setName] = useState('')
    const [city, setCity] = useState('')

    const handleSubmit = () => {
        props.close()
        props.onOpenFinalPopup()
    }
    return (
        <div className={'bg-white w-3/5 min-w-[360px]'}>
            <div className={'py-12 bg-[#E8E8E8] text-black text-[1.5rem] font-semibold text-center'}>
                Заполните, пожалуйста, мини-анкету
            </div>

            <div className={"bg-[url('/queez-bg.png')] pt-[2.75rem]"}>

                <div>
                    <Typography
                        variant={'light-2xl'}
                        className={'text-black text-[1.2rem] px-4'}
                    >
                        Ваш город?
                    </Typography>
                    <div className={'px-4 pb-4 pt-1'}>
                        <div className={'bg-black w-full h-[52px] border-2 border-red-700 flex items-center justify-center'}>
                            <input
                                type={'text'}
                                className={'py-1 px-2 bg-black outline-none w-full h-full font-montserrat-extralight text-[2rem]'}
                                value={city}
                                onChange={(event) => setCity(event.target.value)}
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <Typography
                        variant={'light-2xl'}
                        className={'text-black text-[1.2rem] px-4'}
                    >
                        Как вас зовут?
                    </Typography>
                    <div className={'px-4 pb-4 pt-1'}>
                        <div className={'bg-black w-full h-[52px] border-2 border-red-700 flex items-center justify-center'}>
                            <input
                                type={'text'}
                                className={'py-1 px-2 bg-black outline-none w-full h-full font-montserrat-extralight text-[2rem]'}
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <Typography
                        variant={'light-2xl'}
                        className={'text-black text-[1.2rem] px-4'}
                    >
                        Ваш номер телефона?
                    </Typography>
                    <div className={'px-4 pb-4 pt-1'}>
                        <div className={'bg-black w-full h-[52px] border-2 border-red-700 flex items-center justify-center'}>
                            <input
                                type={'text'}
                                placeholder={'+7'}
                                className={'py-1 px-2 bg-black outline-none w-full h-full font-montserrat-extralight text-[2rem]'}
                                value={phone}
                                onChange={(event) => setPhone(event.target.value)}
                            />
                        </div>
                    </div>
                </div>

                <div className={'bg-[#27262A]'}>
                    <button
                        onClick={() => handleSubmit()}
                        className={'w-full h-[6.5rem] text-center text-[1.5rem]'}
                    >
                        Отправить
                    </button>
                </div>
            </div>
        </div>
    )
}