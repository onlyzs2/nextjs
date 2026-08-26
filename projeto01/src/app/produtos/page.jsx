import CardProduto from "@/components/cardProdutos";
import "./produtos.css"

export default function Produtos(){
    
    const listaProdutos = [
        {
            id: 1,
            titulo: "Detergente YPE",
            descricao: "É legal mas nao pode beber",
            imagem: "detergente.png",
            preco: 4.50
        },

        {
            id: 2,
            titulo: "Sabão em pó",
            descricao: "mais área de contato, mais poder!",
            imagem: "sabaoempo.png",
            preco: 4.50
        },

        {
            id: 3,
            titulo: "Desifetante MINUA",
            descricao: "hmm é cremoso é saboroso perai errei",
            imagem: "desinfetante.png",
            preco: 4.00
        },
        
        {
            id: 4,
            titulo: "Sabonete DOVE",
            descricao: "gostoso e lava a boca",
            imagem: "sabonete.png",
            preco: 1.50
        }
    ];

    
    
    return(
        <>
            <h1>pagina de listagem de produtos</h1>

            {/* aqui é onde ficarão os cards de produto  */}

            <div className="card-container">

            {listaProdutos.map((produto, idx) => {
                return <CardProduto
                    // key={produto.id}
                    key={idx}
                    titulo={produto.titulo}
                    descricao={produto.descricao}
                    imagem={produto.imagem}
                    preco={produto.preco}
                />
            })}
            </div>
        </>
    )
}