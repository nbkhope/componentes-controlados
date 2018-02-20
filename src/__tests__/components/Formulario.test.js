import React from 'react';
import { shallow } from 'enzyme';

import Formulario from '../../components/Formulario';

describe('Formulario component', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Formulario />);
  });

  test('deve iniciar o estado do componente com o nome vazio', () => {
    expect(component.state('nome')).toBe('');
  });

  test('deve iniciar o estado do componente com o valor de cada escolha pra frutas sendo falso', () => {
    expect(component.state('frutas')['banana']).toBe(false);
    expect(component.state('frutas')['maçã']).toBe(false);
    expect(component.state('frutas')['morango']).toBe(false);
  });

  test('deve iniciar o estado do componente com o genero sendo masculino', () => {
    expect(component.state('genero')).toBe('masculino');
  });

  test('deve iniciar o estado do componente com o pais sendo br', () => {
    expect(component.state('pais')).toBe('br');
  });

  test('deve incluir um InputText pro campo de nome', () => {
    expect(component.find('InputText[name="nome"]').length).toBe(1);
    expect(component.find('InputText[name="nome"]').prop('label')).toBe('Nome:');
  });

  test('deve incluir um InputText cujo value é controlado pela variavel nome do estado do componente', () => {
    component.setState({ nome: 'abc' });
    expect(component.find('InputText[name="nome"]').prop('value')).toBe('abc');

    component.setState({ nome: 'xyz' });
    expect(component.find('InputText[name="nome"]').prop('value')).toBe('xyz');
  });

  test('deve incluir um InputText cuja mudança de valor atualiza a variavel nome no estado do componente', () => {
    const event = {
      target: {
        value: 'ola mundo'
      },
    };
    const onNomeChange = component.find('InputText[name="nome"]').prop('onChange');
    onNomeChange(event);

    expect(component.state('nome')).toBe('ola mundo');
  });
});
