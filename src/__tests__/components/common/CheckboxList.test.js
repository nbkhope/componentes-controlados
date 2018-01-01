import React from 'react';
import { shallow } from 'enzyme';

import { CheckboxList } from '../../../components/common/CheckboxList';

describe('CheckboxList component', () => {
  let component;
  let props;

  beforeEach(() => {
    const options = [
      {
        id: 3,
        label: 'Mamao',
        value: 'mamao',
      },
      {
        id: 4,
        label: 'Banana',
        value: 'banana',
      },
      {
        id: 5,
        label: 'Morango',
        value: 'morango',
      },
    ];
    const checkedOptions = {
      mamao: false,
      banana: true,
      morango: false,
    };
    props = {
      name: 'frutas[]',
      label: "Frutas:",
      options,
      checkedOptions,
      onChange: jest.fn(),
    };
    component = shallow(<CheckboxList {...props} />);
  });

  test('deve incluir um checkbox para cada opção', () => {
    expect(component.find('Checkbox').length).toBe(props.options.length);
  });

  test('deve incluir as props corretamente para cada checkbox', () => {
    const checkboxes = component.find('Checkbox');
    props.options.forEach((option, index) => {
      const checkbox = checkboxes.at(index);
      expect(checkbox.prop('name')).toBe(props.name);
      expect(checkbox.prop('label')).toBe(option.label);
      expect(checkbox.prop('value')).toBe(option.value);
      expect(checkbox.prop('onChange')).toBe(props.onChange);
      expect(checkbox.prop('checked')).toBe(props.checkedOptions[option.value]);
    });
  });

  test('deve incluir o titulo da lista', () => {
    expect(component.find('span').text()).toBe(props.label);

    component.setProps({
      label: 'Novo Label'
    });
    expect(component.find('span').text()).toBe('Novo Label');
  });
});
