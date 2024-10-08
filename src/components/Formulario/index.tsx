import React, { useState } from 'react';
import Botao from '../Botao';
import Style from './Formulario.module.scss';
import { ITarefa } from '../../types/tarefa';
import { v4 as uuidv4 } from 'uuid';

interface Props {
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}

const Formulario = ( {setTarefas}: Props ) => {

  const [tarefa, setTarefa] = useState("");
  const [tempo, setTempo] = useState("00:00");

  function adicionarTarefa(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setTarefas(tarefasAntigas =>
      [
        ...tarefasAntigas,
        {
          tarefa,
          tempo,
          selecionado: false,
          completado: false,
          id: uuidv4()
        }
      ]
    );
    setTarefa("");
    setTempo("00:00");
  }

  return (
    <form className={Style.novaTarefa} onSubmit={adicionarTarefa}>
      <div className={Style.inputContainer}>
        <label htmlFor='tarefa'>Adicioner um novo estudo</label>
        <input
          type="text"
          name='tarefa'
          id='tarefa'
          value={tarefa}
          onChange={(e) => setTarefa(e.target.value)}
          placeholder="O que você quer estudar?"
          required
        />
      </div>
      <div className={Style.inputContainer}>
        <label htmlFor='tempo'>Tempo</label>
        <input
          type='time'
          step='1'
          name='tempo'
          value={tempo}
          onChange={(e) => setTempo(e.target.value)}
          id='tempo'
          min="00:00:00"
          max="01:39:00"
          required
        />
      </div>
      <Botao type="submit">
        Adicionar
      </Botao>
    </form>
  )
};

export default Formulario;
