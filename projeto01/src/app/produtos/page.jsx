export default function Produtos(){
    
    const listaProdutos = [
        {
            titulo: "Detergente YPE",
            descricao: "É legal mas nao pode beber",
            imagem: "detergente.png",
            preco: 4.50,
        },

        {
            titulo: "Sabão em pó",
            descricao: "mais área de contato, mais poder!",
            imagem: "sabaoempo.png",
            preco: 4.50,
        },

        {
            titulo: "Desifetante MINUA",
            descricao: "hmm é cremoso é saboroso perai errei",
            imagem: "desinfetante.png",
            preco: 4.00,
        },
        
        {
            titulo: "Sabonete DOVE",
            descricao: "gostoso e lava a boca",
            imagem: "sabonete.png",
            preco: 1.50,
        }
    ];

    
    
    return(
        <>
            <h1>pagina de listagem de protudos</h1>

            {/* aqui é onde ficarão os cards de produto  */}
        </>
    )
}