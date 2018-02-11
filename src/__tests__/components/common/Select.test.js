import React from 'react';
import { shallow } from 'enzyme';

import { Select } from '../../../components/common/Select';

describe('Select component', () => {
  let component;
  let props;

  beforeEach(() => {
    props = {
      name: 'pais',
      value: 'br',
      onChange: jest.fn(),
      options: [
        {
          id: 1,
          label: 'Brasil',
          value: 'br',
        },
        {
          id: 8,
          label: 'Inglaterra',
          value: 'en',
        },
        {
          id: 14,
          label: 'China',
          value: 'zh',
        }
      ],
    };
    component = shallow(<Select {...props} />);
  });

  test('deve incluir um componente select', () => {
    expect(component.find('select').length).toBe(1);
  });

  test('deve incluir um componente select com props definidas corretamente', () => {
    const onChangeMock = () => null;
    component.setProps({
      name: 'fruta',
      value: 'en',
      onChange: onChangeMock,
    });

    expect(component.find('select').prop('name')).toBe('fruta');
    expect(component.find('select').prop('value')).toBe('en');
    expect(component.find('select').prop('onChange')).toBe(onChangeMock);
  });

  test('para cada opção na lista da prop options, inclui um componente option como filho do select', () => {
    component.setProps({
      options: [
        {
          id: 1,
          label: 'Brasil',
          value: 'br',
        },
        {
          id: 8,
          label: 'Inglaterra',
          value: 'en',
        },
        {
          id: 14,
          label: 'China',
          value: 'zh',
        }
      ],
    });

    expect(component.find('select option').length).toBe(3);
  });

  test('para cada opção na lista da prop options, define o value de cada option corretamente', () => {
    props.options.forEach((option, index) => {
      expect(component.find('option').at(index).prop('value'))
        .toBe(option.value);
    });
  });

  test('para cada opção na lista da prop options, inclui o label da opção corretamente', () => {
    props.options.forEach((option, index) => {
      expect(component.find('option').at(index).children().text())
        .toBe(option.label);
    });
  });
});
