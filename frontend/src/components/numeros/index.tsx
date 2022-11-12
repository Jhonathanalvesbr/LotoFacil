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
        axios.defaults.baseURL = 'https://xfxhnia2oc.execute-api.us-east-1.amazonaws.com/';
        axios.get("api")
            .then(r => {
                for (var i = 0; i < r.data.length; i++) {
                    for (var j = 0; j < r.data[i].jogos.length; j++) {
                        r.data[i].jogos[j]['score'] = r.data[i].jogos[j].numeros.sort((a: any, b: any) => a - b).filter((n: any) => r.data[i].resultado.includes(+n)).length;
                    }
                    r.data[i].jogos.sort(function (a: any, b: any) {
                        return b.score - a.score
                    });
                }
                r.data.sort(function (a: any, b: any) {
                    return b.concurso - a.concurso
                });

                setConcurso(r.data);
                setPosicao(0);
            });

    }, []);

    return (
        <><div className='menu'> <h3 className='centro'>Concurso: 
            <Botao concursos={concursoAtual} posicao={[posicao, setPosicao]} />
        </h3><>
                <h3 className='centro'>Acertos: {concursoAtual[posicao]?.resultado.length > 0 ? concursoAtual[posicao]?.jogos?.filter((j: any) => j['score'] > 10).length : "Aguardando"}</h3>
            </>
        </div>
            <h2>Dezenas Sorteadas: {(concursoAtual[posicao]?.resultado.length > 0) ? concursoAtual[posicao]?.resultado.sort((a, b) => +a - b).toString().replaceAll(",", ", ") : "Aguardando"} </h2>
            {

                concursoAtual[posicao]?.jogos.map(concurso => {
                    return (

                        <>

                            <div key={c} className={`${concurso?.numeros.sort((a, b) => a - b).filter(r => concursoAtual[posicao]?.resultado.includes(+r)).length >= 11 ? "acerto tabela" : "tabela"}`}>

                                <h3>Jogo: {c += 1} </h3>
                                <ul className="escolhe-numero-lotofacil">
                                    <li >
                                        <button className={`${concurso?.numeros.includes(1) ? "marcar" : ""} ${concursoAtual[posicao]?.resultado.includes(1) ? "acertou" : ""}`}>01</button>
                                    </li>
                                    <li>
                                        <button className={`${concurso?.numeros.includes(2) ? "marcar" : ""} ${concursoAtual[posicao]?.resultado.includes(2) ? "acertou" : ""}`}>02</button>
                                    </li>
                                    <li>
                                        <button className={`${concurso?.numeros.includes(3) ? "marcar" : ""} ${concursoAtual[posicao]?.resultado.includes(3) ? "acertou" : ""}`}>03</button>
                                    </li>
                                    <li>
                                        <button className={`${concurso?.numeros.includes(4) ? "marcar" : ""} ${concursoAtual[posicao]?.resultado.includes(4) ? "acertou" : ""}`}>04</button>
                                    </li>
                                    <li>
                                        <button className={`${concurso?.numeros.includes(5) ? "marcar" : ""} ${concursoAtual[posicao]?.resultado.includes(5) ? "acertou" : ""}`}>05</button>
                                    </li>
                                    <li>
                                        <button className={`${concurso?.numeros.includes(6) ? "marcar" : ""} ${concursoAtual[posicao]?.resultado.includes(6) ? "acertou" : ""}`}>06</button>
                                    </li>
                                    <li>
                                        <button className={`${concurso?.numeros.includes(7) ? "marcar" : ""} ${concursoAtual[posicao]?.resultado.includes(7) ? "acertou" : ""}`}>07</button>
                                    </li>
                                    <li>
                                        <button className={`${concurso?.numeros.includes(8) ? "marcar" : ""} ${concursoAtual[posicao]?.resultado.includes(8) ? "acertou" : ""}`}>08</button>
                                    </li>
                                    <li>
                                        <button className={`${concurso?.numeros.includes(9) ? "marcar" : ""} ${concursoAtual[posicao]?.resultado.includes(9) ? "acertou" : ""}`}>09</button>
                                    </li>
                                    <li>
                                        <button className={`${concurso?.numeros.includes(10) ? "marcar" : ""} ${concursoAtual[posicao]?.resultado.includes(10) ? "acertou" : ""}`}>10</button>
                                    </li>
                                    <li>
                                        <button className={`${concurso?.numeros.includes(11) ? "marcar" : ""} ${concursoAtual[posicao]?.resultado.includes(11) ? "acertou" : ""}`}>11</button>
                                    </li>
                                    <li>
                                        <button className={`${concurso?.numeros.includes(12) ? "marcar" : ""} ${concursoAtual[posicao]?.resultado.includes(12) ? "acertou" : ""}`}>12</button>
                                    </li>
                                    <li>
                                        <button className={`${concurso?.numeros.includes(13) ? "marcar" : ""} ${concursoAtual[posicao]?.resultado.includes(13) ? "acertou" : ""}`}>13</button>
                                    </li>
                                    <li>
                                        <button className={`${concurso?.numeros.includes(14) ? "marcar" : ""} ${concursoAtual[posicao]?.resultado.includes(14) ? "acertou" : ""}`}>14</button>
                                    </li>
                                    <li>
                                        <button className={`${concurso?.numeros.includes(15) ? "marcar" : ""} ${concursoAtual[posicao]?.resultado.includes(15) ? "acertou" : ""}`}>15</button>
                                    </li>
                                    <li>
                                        <button className={`${concurso?.numeros.includes(16) ? "marcar" : ""} ${concursoAtual[posicao]?.resultado.includes(16) ? "acertou" : ""}`}>16</button>
                                    </li>
                                    <li>
                                        <button className={`${concurso?.numeros.includes(17) ? "marcar" : ""} ${concursoAtual[posicao]?.resultado.includes(17) ? "acertou" : ""}`}>17</button>
                                    </li>
                                    <li>
                                        <button className={`${concurso?.numeros.includes(18) ? "marcar" : ""} ${concursoAtual[posicao]?.resultado.includes(18) ? "acertou" : ""}`}>18</button>
                                    </li>
                                    <li>
                                        <button className={`${concurso?.numeros.includes(19) ? "marcar" : ""} ${concursoAtual[posicao]?.resultado.includes(19) ? "acertou" : ""}`}>19</button>
                                    </li>
                                    <li>
                                        <button className={`${concurso?.numeros.includes(20) ? "marcar" : ""} ${concursoAtual[posicao]?.resultado.includes(20) ? "acertou" : ""}`}>20</button>
                                    </li>
                                    <li>
                                        <button className={`${concurso?.numeros.includes(21) ? "marcar" : ""} ${concursoAtual[posicao]?.resultado.includes(21) ? "acertou" : ""}`}>21</button>
                                    </li>
                                    <li>
                                        <button className={`${concurso?.numeros.includes(22) ? "marcar" : ""} ${concursoAtual[posicao]?.resultado.includes(22) ? "acertou" : ""}`}>22</button>
                                    </li>
                                    <li>
                                        <button className={`${concurso?.numeros.includes(23) ? "marcar" : ""} ${concursoAtual[posicao]?.resultado.includes(23) ? "acertou" : ""}`}>23</button>
                                    </li>
                                    <li>
                                        <button className={`${concurso?.numeros.includes(24) ? "marcar" : ""} ${concursoAtual[posicao]?.resultado.includes(24) ? "acertou" : ""}`}>24</button>
                                    </li>
                                    <li>
                                        <button className={`${concurso?.numeros.includes(25) ? "marcar" : ""} ${concursoAtual[posicao]?.resultado.includes(25) ? "acertou" : ""}`}>25</button>
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