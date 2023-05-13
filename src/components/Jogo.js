export default function Jogo() {

    function escolherPalavra() {
        console.log('é isso');
    }



    return (
        <>
            <div className="image">
                <img src="image/assets/forca0.png" /></div>
            <div className="choice" onClick={escolherPalavra}><p>Escolher palavra</p></div>
        </>
    )
}