import GifExpertApp from "./GifExpertApp";
import {shallow} from "enzyme";

describe('GifExpertApp', () => {
  it('should be render', () => {
    const wrapper = shallow(<GifExpertApp />);

    expect(wrapper).toMatchSnapshot()
  });

  it('should show a category list', () => {
    const categories = ['Star Wars'];

    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

    expect(wrapper.find('GifGrid')).toHaveLength(categories.length);
    expect(wrapper).toMatchSnapshot();
  });
});
