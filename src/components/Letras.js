
export default function Letras() {

    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    function selecionarLetra () {
        
    }

    return (
        <ul className="caixa-letras">
           { alfabeto.map( letra => <li type="button" onClick={selecionarLetra} disabled className="letra">{letra}</li>)}
        </ul>
    )
}