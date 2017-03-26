import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

import InputText from './InputText';
import CheckboxList from './CheckboxList';
import RadioList from './RadioList';
import Select from './Select';

class App extends Component {
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
    const frutaOptions = [
      {
        id: 1,
        label: 'Banana',
        value: 'banana'
      },
      {
        id: 2,
        label: 'Maçã',
        value: 'maçã'
      },
      {
        id: 3,
        label: 'Morango',
        value: 'morango'
      },
    ];

    const generoOptions = [
      {
        id: 1,
        label: 'Masculino',
        value: 'masculino'
      },
      {
        id: 2,
        label: 'Feminino',
        value: 'feminino'
      },
    ];

    const paisOptions = [
      {
        id: 1,
        label: 'Brasil',
        value: 'br'
      },
      {
        id: 2,
        label: 'United States',
        value: 'us'
      },
      {
        id: 3,
        label: '日本',
        value: 'jp'
      },
    ];

    return (
      <div style={{ paddingLeft: '12px' }}>
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
      </div>
    );
  }
}

export default App;
