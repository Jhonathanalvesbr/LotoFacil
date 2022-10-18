import Dropdown from 'react-bootstrap/Dropdown';
import { Concurso } from './models/concuros';
import { useState } from 'react'

function Botao(c: any) {
    let concurso: Concurso[];
    const [selecao, setConcurso] = useState<Concurso>();
    const [posicao, setPosicao] = c?.posicao;
    concurso = c?.concursos;

    return (
        <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">
                {selecao?.concurso ? selecao.concurso : concurso[posicao]?.concurso}
                
            </Dropdown.Toggle>
            <Dropdown.Menu>

                {concurso?.map((item, s) => (
                    <Dropdown.Item onClick={() => { setConcurso(item); setPosicao(s) }}>
                        {item.concurso}
                    </Dropdown.Item>
                ))}

            </Dropdown.Menu>
        </Dropdown>
    );
}

export default Botao;