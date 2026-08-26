import "./cardNoticias.css"

export default function CardNoticia({
    titulo,
    imagem,
    descricao,
    data
}) {
    return(
        <div className="card-wrapper">
            <h2>{titulo}</h2>
            <img src={"./img-noticias/" + imagem} alt=""></img>
            <p>{descricao}</p>
            <p>{data}</p>
        </div>
    )
}