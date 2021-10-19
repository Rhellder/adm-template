import useAppdata from "../../data/hook/useApp.Data";
import Conteudo from "./Conteudo";
import MenuLateral from "./MenuLateral";
import Titulo from "./Titulo";

interface LayoutProps{
    titulo: string
    subtitulo: string
    children?: any
}

export default function Layout(props: LayoutProps)
{
    const {tema} = useAppdata()
    return(
        <div className={`${tema} flex h-screen w-screen`}>
            <MenuLateral />
            <div className={`
                flex flex-col w-full p-7 
                bg-gray-300 dark:bg-gray-900
            `}>
            <Titulo titulo={props.titulo} subtitulo={props.subtitulo}/>
            <Conteudo>{props.children}</Conteudo>
            </div>
        </div>
    )
}