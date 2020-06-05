import React, {Component} from 'react';

import './index.css';

export default class AddUserBar extends Component{
    render(){
        return(
            <div className='addUserBar-container'>
                <span>Cadastro de desenvolvedor</span>
                <button type='submit'>Cadastrar</button>
                
                <span>Informações</span>
                <p>
                    Este é um app desenvolido durante o curso de ReactJS com o objetivo de cadastrar desenvolvedores.
                </p>
            </div>
        )
    }
}