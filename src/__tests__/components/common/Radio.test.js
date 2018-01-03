import React from 'react';
import { shallow } from 'enzyme';

import { Radio } from '../../../components/common/Radio';

describe('Radio component', () => {
  let component;
  let props;

  beforeEach(() => {
    props = {
      name: 'genero',
      value: 'masculino',
      checked: false,
      onChange: jest.fn(),
      label: 'Masculino',
    };
    component = shallow(<Radio {...props} />);
  });

  test('deve incluir um input de tipo radio', () => {
    expect(component.find('input[type="radio"]').length).toBe(1);
  });

  test('deve incluir um input com o name setado pelas props', () => {
    expect(component.find('input').prop('name')).toBe(props.name);
  });

  test('deve incluir um input com o value setado pelas props', () => {
    expect(component.find('input').prop('value')).toBe(props.value);

    component.setProps({ value: 'feminino'});
    expect(component.find('input').prop('value')).toBe('feminino');
  });

  test('deve incluir um input com o checked setado pelas props', () => {
    expect(component.find('input').prop('checked')).toBe(props.checked);

    const checked = !props.checked;
    component.setProps({ checked });
    expect(component.find('input').prop('checked')).toBe(checked)
  });

  test('deve incluir um input com o onChange setado pelas props', () => {
    expect(component.find('input').prop('onChange')).toBe(props.onChange);
  });

  test('deve incluir um label como pai (parent) do input', () => {
    expect(component.find('input').parent().name()).toBe('label');
  });

  test('deve incluir o text do label do lado direito do input', () => {
    expect(component.find('label').children().at(1).text()).toBe(props.label);
  });
});
