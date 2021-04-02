import {shallow} from 'enzyme';
import {AddCategory} from './AddCategory';

describe('AddCategory', () => {
  let wrapper;

  const setCategories = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories}/>);
  });

  it('should be render', () => {
    expect(wrapper).toMatchSnapshot()
  });

  it('shoul set value when change input', () => {
    const value = 'New text';

    wrapper.find('input').simulate('change', {target: {value}});

    expect(wrapper.find('input').prop('value')).toBe(value);
  });

  it('should not post info when submit', () => {
    const form = wrapper.find('form');

    form.simulate('submit', {preventDefault() {}});

    expect(setCategories).not.toHaveBeenCalled();
  });

  it('should call setCategories and clear input', () => {
    const value = 'New text'
    wrapper.find('input').simulate('change', {target: {value}});

    wrapper.find('form').simulate('submit', {preventDefault() {}});

    expect(setCategories).toHaveBeenCalled();
    expect(wrapper.find('input').prop('value')).toBe('');
  });
});
