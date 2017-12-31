import React from 'react';
import { shallow } from 'enzyme';

import { Checkbox } from '../../../components/common/Checkbox';

describe('Checkbox component', () => {
  let component;
  let props;

  beforeEach(() => {
    props = {
      name: 'frutas[]',
      value: 'banana',
      onChange: jest.fn(),
      checked: false,
      label: 'Banana',
    };
    component = shallow(<Checkbox {...props} />);
  });

  test('deve incluir um input', () => {
    expect(component.find('input').length).toBe(1);
  });

  test('deve incluir um input de tipo checkbox', () => {
    expect(component.find('input').prop('type')).toBe('checkbox');
  });

  test('deve incluir um input que recebe uma prop name do componente pai', () => {
    expect(component.find('input').prop('name')).toBe(props.name);
  });

  test('deve incluir um input cujo value vem como props do pai', () => {
    expect(component.find('input').prop('value')).toBe(props.value);

    component.setProps({ value: 'laranja' });
    expect(component.find('input').prop('value')).toBe('laranja');
  });

  test('deve incluir um input cujo onChange é determinado pela props onChange', () => {
    expect(component.find('input').prop('onChange')).toBe(props.onChange);
  });

  test('deve incluir um input cujo checked é determinado pela props checked', () => {
    expect(component.find('input').prop('checked')).toBe(props.checked);
  });

  test('deve incluir um label que encobre o input', () => {
    expect(component.find('input').parent().name()).toBe('label');
  });

  test('deve incluir o texto do label no lado direito do input', () => {
     expect(component.find('label').children().at(1).text()).toBe(props.label);
  });

  test('deve definir um estilo para o label em negrito e cor do texto azul', () => {
    const labelStyle = component.find('label').prop('style');

    expect(labelStyle.fontWeight).toBe('bold');
    expect(labelStyle.color).toBe('blue');
  });
});
