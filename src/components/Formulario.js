import React, { Component } from 'react';

import { InputText, CheckboxList, RadioList, Select } from './common';

import { frutaOptions, generoOptions, paisOptions } from '../constants';

class Formulario extends Component {
  // property initializers depois do ES6
  state = {
    nome: '',
    frutas: {
      banana: false,
      maçã: false,
      morango: false,
    },
    genero: 'masculino',
    pais: 'br'
  }

  onNomeChange = (event) => {
    this.setState({ nome: event.target.value });
  }

  onFrutasChange = (event) => {
    const { value } = event.target;
    const { frutas } = this.state;

    const newValue = !frutas[value];

    const newFrutas = { ...frutas, [value]: newValue };

    this.setState({ frutas: newFrutas }, () => console.log(this.state.frutas));
  }

  onGeneroChange = (event) => {
    this.setState({ genero: event.target.value }, () => {
      console.log(this.state.genero);
    });
  }

  onPaisChange = (event) => {
    this.setState({ pais: event.target.value }, () => {
      console.log(this.state);
    });
  }

  render() {
    return (
      <form>
        <h4>Formulário</h4>
        <InputText
          name="nome"
          label="Nome:"
          value={this.state.nome}
          onChange={this.onNomeChange}
        />
        <br />

        <CheckboxList
          name="frutas[]"
          label="Frutas Que Gosto:"
          options={frutaOptions}
          checkedOptions={this.state.frutas}
          onChange={this.onFrutasChange}
        />

        <label>Gênero</label>:<br />
        <RadioList
          name="genero"
          options={generoOptions}
          onChange={this.onGeneroChange}
          checkedOption={this.state.genero}
        />

        <br/>

        <Select
          name="pais"
          value={this.state.pais}
          onChange={this.onPaisChange}
          options={paisOptions}
        />

        <br />
        <button type="submit">Processar</button>
      </form>
    );
  }
}

export default Formulario;
