import React, { Children } from 'react';
import Style from './Botao.module.scss';


interface Props {
  children?: React.ReactNode,
  type?: "button" | "submit" | "reset" | undefined,
  onClick?: () => void
}

function Botao({ children, onClick, type }: Props) {
  return (
    <button onClick={onClick} className={Style.botao} type={type}>
      {children}
    </button>
  )
}

export default Botao;
