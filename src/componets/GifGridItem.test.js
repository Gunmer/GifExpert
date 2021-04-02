import {GifGridItem} from "./GifGridItem";
import {shallow} from "enzyme";

describe('GifGridItem', () => {
  const title = 'My Title';
  const url = 'http://my-title.jpg';
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  it('should be render', () => {
    expect(wrapper).toMatchSnapshot();
  });
  
  it('should have p with title', () => {
    const p = wrapper.find('p');

    expect(p.text().trim()).toBe(title);
  });

  it('should have img and alt', () => {
    const img = wrapper.find('img');

    expect(img.prop('src')).toBe(url);
    expect(img.prop('alt')).toBe(title);
  });

  it('should have animate__flipInX', () => {
    const div = wrapper.find('div');

    expect(div.prop('className')).toContain('animate__flipInX');
  });
});
