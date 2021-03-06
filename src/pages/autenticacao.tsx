import { useState } from "react"
import AuthInput from "../components/auth/AuthInput"
import { IconeAtencao } from "../components/icons"

export default function Autenticacao(){

    const[erro, setErro] = useState(null)
    const[modo, setModo] = useState<'login' | 'cadastro'>('login')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    function exibirErro(msg, tempoEmSegundos = 5)
    {
        setErro(msg)
        setTimeout(() => setErro(null), tempoEmSegundos * 1000)
    }

    function submeter(){
        if (modo === 'login') {
            console.log('login')
         
        }else{
            console.log('cadastrar')
          
        }
    }

    return(
        <div className="flex h-screen items-center justify-center">
            <div className="w-1/2 hidden md:block md:w-1/2 lg:w-2/3">
                <img src="https://source.unsplash.com/random" alt="Autenticação" className="h-screen w-full object-cover" />
            </div>
            <div className="m-10 md:w-1/2 w-full lg:w-1/3">
                <h1 className="text-3xl font-bold mb-5">{modo === 'login' ? 'Entre com a sua conta' : 'Cadastre-se na plataforma'}</h1>
               {erro  ? (
                    <div className="flex items-center bg-red-500 text-white py-3 px-5 my-2 border-2 border-red-800 rounded-lg">{IconeAtencao()} <span className="ml-3">{erro}</span></div>
               ) : false}
                <AuthInput
                    label="Email"
                    valor={email}
                    tipo="email"
                    valorMudou={setEmail}
                    obrigatorio
                />
                <AuthInput
                    label="senha"
                    valor={senha}
                    tipo="password"
                    valorMudou={setSenha}
                    obrigatorio
                />
                <button onClick={submeter}
                    className="w-full bg-indigo-500 hover:bg-indigo-400 text-white rounded-lg px-4 py-3 mt-6" 
                >{modo === 'login' ? 'Entrar' : 'Cadastrar'}</button>

                <hr className="my-6 border-gray-400 w-full"/>

                <button onClick={submeter}
                    className="w-full bg-red-500 hover:bg-red-400 text-white rounded-lg px-4 py-3" 
                >Entrar com Google</button>

                {modo === 'login' ? (
                    <p className="mt-10">Novo por aqui? <a onClick={() => setModo('cadastro')} className="text-blue-500 hover:text-blue-700 font-semibold cursor-pointer"> Criar conta</a></p>
                ) : (
                    <p className="mt-10">Possui cadastro? <a onClick={() => setModo('login')} className="text-blue-500 hover:text-blue-700 font-semibold cursor-pointer"> Fazer login</a></p>

                )}
            </div>
        </div>
    )
}