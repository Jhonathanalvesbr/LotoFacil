import './styles.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { Concurso } from '../models/concuros';
import { UltimoSorteio } from '../models/ultimoSorteio';
function Numeros() {

    const [concursoAtual, setConcurso] = useState<Concurso[]>([]);

    const [ultimoSorteio, setUltimoSorteio] = useState<UltimoSorteio>();
    const concurso = 2637;

    useEffect(() => {
        axios.get("https://634878ec0484786c6e9a6ae3.mockapi.io/numero/numero")
            .then(r => setConcurso(r.data));
        axios.get("https://servicebus2.caixa.gov.br/portaldeloterias/api/lotofacil/")
            .then(r => {

                if (r.data.numero === concurso) {
                    setUltimoSorteio(r.data)
                }

            }
            );

    }, []);

    return (

        <>
            <h3>Concurso: {concurso}</h3>
            <h2>Dezenas Sorteadas: {(concurso == ultimoSorteio?.numero) ? ultimoSorteio?.dezenasSorteadasOrdemSorteio.map(r => parseInt(r)).sort().toString().replaceAll(",", ", ") : "Aguardando"} </h2>

            {
                concursoAtual.map(concurso => {
                    return (
                        <>
                            <div key={concurso.id} className={`${concurso.jogo.sort().filter(r => ultimoSorteio?.dezenasSorteadasOrdemSorteio.map(r => parseInt(r)).includes(+r)).length >= 11 ? "acerto tabela" : "tabela"}`}>
                                <h3>Jogo: {concurso.id} </h3>
                                <ul className="escolhe-numero-lotofacil">
                                    <li >
                                        <a className={`${concurso.jogo.includes(1) ? "marcar" : ""}`}>01</a>
                                    </li>
                                    <li>
                                        <a className={`${concurso.jogo.includes(2) ? "marcar" : ""}`}>02</a>
                                    </li>
                                    <li>
                                        <a className={`${concurso.jogo.includes(3) ? "marcar" : ""}`}>03</a>
                                    </li>
                                    <li>
                                        <a className={`${concurso.jogo.includes(4) ? "marcar" : ""}`}>04</a>
                                    </li>
                                    <li>
                                        <a className={`${concurso.jogo.includes(5) ? "marcar" : ""}`}>05</a>
                                    </li>
                                    <li>
                                        <a className={`${concurso.jogo.includes(6) ? "marcar" : ""}`}>06</a>
                                    </li>
                                    <li>
                                        <a className={`${concurso.jogo.includes(7) ? "marcar" : ""}`}>07</a>
                                    </li>
                                    <li>
                                        <a className={`${concurso.jogo.includes(8) ? "marcar" : ""}`}>08</a>
                                    </li>
                                    <li>
                                        <a className={`${concurso.jogo.includes(9) ? "marcar" : ""}`}>09</a>
                                    </li>
                                    <li>
                                        <a className={`${concurso.jogo.includes(10) ? "marcar" : ""}`}>10</a>
                                    </li>
                                    <li>
                                        <a className={`${concurso.jogo.includes(11) ? "marcar" : ""}`}>11</a>
                                    </li>
                                    <li>
                                        <a className={`${concurso.jogo.includes(12) ? "marcar" : ""}`}>12</a>
                                    </li>
                                    <li>
                                        <a className={`${concurso.jogo.includes(13) ? "marcar" : ""}`}>13</a>
                                    </li>
                                    <li>
                                        <a className={`${concurso.jogo.includes(14) ? "marcar" : ""}`}>14</a>
                                    </li>
                                    <li>
                                        <a className={`${concurso.jogo.includes(15) ? "marcar" : ""}`}>15</a>
                                    </li>
                                    <li>
                                        <a className={`${concurso.jogo.includes(16) ? "marcar" : ""}`}>16</a>
                                    </li>
                                    <li>
                                        <a className={`${concurso.jogo.includes(17) ? "marcar" : ""}`}>17</a>
                                    </li>
                                    <li>
                                        <a className={`${concurso.jogo.includes(18) ? "marcar" : ""}`}>18</a>
                                    </li>
                                    <li>
                                        <a className={`${concurso.jogo.includes(19) ? "marcar" : ""}`}>19</a>
                                    </li>
                                    <li>
                                        <a className={`${concurso.jogo.includes(20) ? "marcar" : ""}`}>20</a>
                                    </li>
                                    <li>
                                        <a className={`${concurso.jogo.includes(21) ? "marcar" : ""}`}>21</a>
                                    </li>
                                    <li>
                                        <a className={`${concurso.jogo.includes(22) ? "marcar" : ""}`}>22</a>
                                    </li>
                                    <li>
                                        <a className={`${concurso.jogo.includes(23) ? "marcar" : ""}`}>23</a>
                                    </li>
                                    <li>
                                        <a className={`${concurso.jogo.includes(24) ? "marcar" : ""}`}>24</a>
                                    </li>
                                    <li>
                                        <a className={`${concurso.jogo.includes(25) ? "marcar" : ""}`}>25</a>
                                    </li>
                                </ul>
                                <label>Números acertados: {concurso.jogo.sort().filter(r => ultimoSorteio?.dezenasSorteadasOrdemSorteio.map(r => parseInt(r)).includes(+r)).length}</label>
                                <div className="input-group input-group-sm mb-3">
                                    <input type="text" placeholder={concurso.jogo.sort().filter(r => ultimoSorteio?.dezenasSorteadasOrdemSorteio.map(r => parseInt(r)).includes(+r)).toString().replaceAll(",", ", ")} className="form-control entrada" aria-label="Small"
                                        aria-describedby="inputGroup-sizing-sm" disabled />
                                </div>



                            </div></>
                    )
                })
            }

        </>
    )
}
export default Numeros