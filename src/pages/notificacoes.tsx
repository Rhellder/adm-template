import Layout from "../components/template/Layout";
import useAppdata from "../data/hook/useApp.Data";

export default function Notificacoes() {
  const {alternarTema} = useAppdata()
  return (
    <div>
     <Layout titulo="Notificações" subtitulo="Aqui você irá gerenciar suas notificações.">
                  <button onClick={alternarTema}>Click</button>
     </Layout>
    </div>
  )
}
