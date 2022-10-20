import './styles.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { Concurso } from '../models/concuros';
import Botao from '../botao';

function Numeros() {

    const [concursoAtual, setConcurso] = useState<Concurso[]>([]);
    const [posicao, setPosicao] = useState<number>(0);
    let c = 0;

    
    useEffect(() => {
        axios.defaults.baseURL = 'https://0skmbfr6p9.execute-api.us-east-1.amazonaws.com/lotofacil';
        axios.get("")
            .then(r => { setConcurso(r.data); setPosicao(r.data.length-1)});
    }, []);

    return (
        <><h3>Concurso: <>
            <Botao concursos={concursoAtual} posicao={[posicao, setPosicao]} />
        </>
        </h3>
            <h2>Dezenas Sorteadas: {(concursoAtual[posicao]?.resultado.length > 0) ? concursoAtual[posicao]?.resultado.sort((a, b) => +a - b).toString().replaceAll(",", ", ") : "Aguardando"} </h2>
            {

                concursoAtual[posicao]?.jogos.map(concurso => {
                    return (

                        <>

                            <div key={c} className={`${concurso?.numeros.sort((a, b) => a - b).filter(r => concursoAtual[posicao]?.resultado.includes(+r)).length >= 11 ? "acerto tabela" : "tabela"}`}>
                                
                                <h3>Jogo: {c +=1} </h3>
                                <ul className="escolhe-numero-lotofacil">
                                    <li >
                                        <a className={`${concurso?.numeros.includes(1) ? "marcar" : ""}`}>01</a>
                                    </li>
                                    <li>
                                        <a className={`${concurso?.numeros.includes(2) ? "marcar" : ""}`}>02</a>
                                    </li>
                                    <li>
                                        <a className={`${concurso?.numeros.includes(3) ? "marcar" : ""}`}>03</a>
                                    </li>
                                    <li>
                                        <a className={`${concurso?.numeros.includes(4) ? "marcar" : ""}`}>04</a>
                                    </li>
                                    <li>
                                        <a className={`${concurso?.numeros.includes(5) ? "marcar" : ""}`}>05</a>
                                    </li>
                                    <li>
                                        <a className={`${concurso?.numeros.includes(6) ? "marcar" : ""}`}>06</a>
                                    </li>
                                    <li>
                                        <a className={`${concurso?.numeros.includes(7) ? "marcar" : ""}`}>07</a>
                                    </li>
                                    <li>
                                        <a className={`${concurso?.numeros.includes(8) ? "marcar" : ""}`}>08</a>
                                    </li>
                                    <li>
                                        <a className={`${concurso?.numeros.includes(9) ? "marcar" : ""}`}>09</a>
                                    </li>
                                    <li>
                                        <a className={`${concurso?.numeros.includes(10) ? "marcar" : ""}`}>10</a>
                                    </li>
                                    <li>
                                        <a className={`${concurso?.numeros.includes(11) ? "marcar" : ""}`}>11</a>
                                    </li>
                                    <li>
                                        <a className={`${concurso?.numeros.includes(12) ? "marcar" : ""}`}>12</a>
                                    </li>
                                    <li>
                                        <a className={`${concurso?.numeros.includes(13) ? "marcar" : ""}`}>13</a>
                                    </li>
                                    <li>
                                        <a className={`${concurso?.numeros.includes(14) ? "marcar" : ""}`}>14</a>
                                    </li>
                                    <li>
                                        <a className={`${concurso?.numeros.includes(15) ? "marcar" : ""}`}>15</a>
                                    </li>
                                    <li>
                                        <a className={`${concurso?.numeros.includes(16) ? "marcar" : ""}`}>16</a>
                                    </li>
                                    <li>
                                        <a className={`${concurso?.numeros.includes(17) ? "marcar" : ""}`}>17</a>
                                    </li>
                                    <li>
                                        <a className={`${concurso?.numeros.includes(18) ? "marcar" : ""}`}>18</a>
                                    </li>
                                    <li>
                                        <a className={`${concurso?.numeros.includes(19) ? "marcar" : ""}`}>19</a>
                                    </li>
                                    <li>
                                        <a className={`${concurso?.numeros.includes(20) ? "marcar" : ""}`}>20</a>
                                    </li>
                                    <li>
                                        <a className={`${concurso?.numeros.includes(21) ? "marcar" : ""}`}>21</a>
                                    </li>
                                    <li>
                                        <a className={`${concurso?.numeros.includes(22) ? "marcar" : ""}`}>22</a>
                                    </li>
                                    <li>
                                        <a className={`${concurso?.numeros.includes(23) ? "marcar" : ""}`}>23</a>
                                    </li>
                                    <li>
                                        <a className={`${concurso?.numeros.includes(24) ? "marcar" : ""}`}>24</a>
                                    </li>
                                    <li>
                                        <a className={`${concurso?.numeros.includes(25) ? "marcar" : ""}`}>25</a>
                                    </li>
                                </ul>
                                <label>Números acertados: {concurso?.numeros.sort((a, b) => a - b).filter(r => concursoAtual[posicao]?.resultado.includes(+r)).length}</label>
                                <div className="input-group input-group-sm mb-3">
                                    <input type="text" placeholder={concurso?.numeros.sort((a, b) => a - b).filter(r => concursoAtual[posicao]?.resultado.includes(+r)).toString().replaceAll(",", ", ")} className="form-control entrada" aria-label="Small"
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