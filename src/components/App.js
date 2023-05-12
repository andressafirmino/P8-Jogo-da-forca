import Letras from "./Letras";
import palavras from "../palavras"


export default function App() {
  return (
    <>
      <div className="top">
        <div class="image">
          <img src="image/assets/forca0.png" /></div>

        <div className="choice"><p>Escolher palavra</p></div>
      </div>
      <Letras />


    </>
  );
}
