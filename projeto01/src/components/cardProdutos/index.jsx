import "./cardProduto.css"

export default function CardProdutos({
    titulo,
    imagem,
    descricao, 
    preco
}) {
    return(
        <div className="card-wrapper">
            <h2>{titulo}</h2>
            <img src={"/img-produtos/" + imagem} alt=""></img>
            <p>{descricao}</p>
            <p>Preço: R$ <b>{preco}</b></p>
        </div>
    )
}