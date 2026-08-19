import FigureNotFound from "@/components/FigureNotFound"

export default function NotFound(){

    return(
        <>
            <div className="container-notfound">
            <div className="flex-notfound">
                <h2> ERRO 404</h2>
                <p>pagina nao encontrada ou nao existe</p>
                <FigureNotFound/>
            </div>
            </div>
        </>

)
}