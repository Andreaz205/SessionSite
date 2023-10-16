import {IApplicationsProps} from "@/pages/applications";
import {useState} from "react"
import {Container} from '@/src/shared/ui'
import {random} from "nanoid";

const Applications = (props: IApplicationsProps) => {
    const [isAuth, setIsAuth] = useState(false)
    const [password, setPassword] = useState("")

    const handleAuth = () => {
        if (password === 'gulevich_password') setIsAuth(true)
        setPassword("")
    }

    return <Container className={'min-h-[100vh] bg-gray-500'}>
        <div className={'pt-[200px]'}>
            {isAuth ? (
                <div className={'flex justify-start items-center flex-col'}>
                    {Object.keys(props.applications).reverse().map(id => (
                        <div
                            key={id}
                            className={'flex justify-between w-full pb-2 pt-2 border-b border-white'}
                        >
                            <div>
                                { String(props.applications[id].date) }
                            </div>
                            <div
                                className={'flex flex-col justify-start items-left'}
                            >
                                <div>
                                    Имя: {props.applications[id]?.contacts?.name}
                                </div>

                                <div>
                                    Город: {props.applications[id]?.contacts?.city}
                                </div>

                                <div>
                                    Телефон: {props.applications[id]?.contacts?.phone}
                                </div>

                                <div>
                                    Вопросы:
                                </div>

                                <div className={'flex justify-start flex-col'}>
                                    {props.applications[id]?.questions?.map((item: any) => (
                                        <div key={item.question + random(2) + Date}>
                                            {item.question}: {item.answer}
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div>
                    <input
                        className={'text-black'}
                        type={'text'}
                        placeholder={'Введите пароль'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button
                        onClick={handleAuth}
                    >
                        Перейти
                    </button>
                </div>
            )}
        </div>
    </Container>
}

export default Applications