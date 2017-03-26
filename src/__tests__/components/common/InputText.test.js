import React from 'react';
import { shallow } from 'enzyme';

import { InputText } from '../../../components/common';

describe('InputText component', () => {
  let component
  let props

  beforeEach(() => {
    // Criar mock function
    const onChange = jest.fn();

    // Fake props
    props = {
      name: 'nome',
      label: 'Nome:',
      value: 'Joao',
      onChange
    };

    component = shallow(
      <InputText {...props} />
    );
  });

  test('deve ter um input', () => {
    expect(component.find('input').length).toBe(1);
  });

  test('deve ter dado prop type text para o input', () => {
    expect(component.find('input').prop('type')).toBe('text');
  });

  test('deve ter dado prop name ao input', () => {
    expect(component.find('input').prop('name')).toBeDefined();
    expect(component.find('input').prop('name')).toBe(props.name);
  });

  test('deve ter dado prop value ao input', () => {
    expect(component.find('input').prop('value')).toBeDefined();
    expect(component.find('input').prop('value')).toBe(props.value);
  });

  test('deve ter dado prop onChange para o input', () => {
    expect(component.find('input').prop('onChange')).toBeDefined();
    expect(component.find('input').prop('onChange')).toBe(props.onChange);
  });

  test('deve ter um label', () => {
    expect(component.find('label').length).toBe(1);
    expect(component.find('div').children().first().name()).toBe('label')
  });

  test('deve ter um input depois do label e um espaço', () => {
    expect(component.find('div').children().at(2).name()).toBe('input');
  });
});
