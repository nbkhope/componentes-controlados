import React from 'react';
import { shallow } from 'enzyme';

import { RadioList } from '../../../components/common/RadioList';

describe('RadioList component', () => {
  let props;
  let component;

  beforeEach(() => {
    const options = [
      {
        id: 1,
        label: 'Masculino',
        value: 'masculino',
      },
      {
        id: 2,
        label: 'Feminino',
        value: 'feminino',
      },
    ];
    props = {
      name: 'genero',
      options,
      onChange: jest.fn(),
      checkedOption: 'feminino',
    };
    component = shallow(<RadioList {...props} />);
  });

  test('deve incluir o numero correto de componentes Radio, de acordo com o numero de opcoes', () => {
    expect(component.find('Radio').length).toBe(props.options.length);
  });

  test('deve incluir o nome de cada radio de acordo com a prop name', () => {
    props.options.forEach((option, index) => {
      expect(component.find('Radio').at(index).prop('name')).toBe(props.name);
    });
  });

  test('deve incluir o label de cada radio de acordo com o label definido pela opcao', () => {
    props.options.forEach((option, index) => {
      expect(component.find('Radio').at(index).prop('label')).toBe(option.label);
    });
  });

  test('deve incluir o value de cada radio de acordo com o value definido pela opcao', () => {
    props.options.forEach((option, index) => {
      expect(component.find('Radio').at(index).prop('value')).toBe(option.value);
    });
  });

  test('deve incluir a prop checked com o valor definido de acordo com a comparacao do checkedOption com o valor de cada opcao', () => {
    props.options.forEach((option, index) => {
      expect(component.find('Radio').at(index).prop('checked'))
        .toBe(props.checkedOption === option.value);
    });
  });

  test('deve incluir a prop onChange com o valor vindo da prop onChange recebida pelo RadioList', () => {
    props.options.forEach((option, index) => {
      expect(component.find('Radio').at(index).prop('onChange'))
        .toBe(props.onChange);
    });
  });
});
