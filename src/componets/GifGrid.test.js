import {GifGrid} from "./GifGrid";
import {shallow} from "enzyme";
import {useFetchGifs} from "../hooks/useFetchGifs";

jest.mock('../hooks/useFetchGifs')

describe('GifGrid', () => {
  it('should be render', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true
    });

    const wrapper = shallow(<GifGrid category="category" />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should show items when useFetchGifs given', () => {
    const gifs = [{
      id: 'id',
      title: 'Title',
      url: 'http://title.png'
    }];

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false
    });

    const wrapper = shallow(<GifGrid category="category" />);

    expect(wrapper.find('p').exists()).toBeFalsy();
    expect(wrapper.find('GifGridItem')).toHaveLength(gifs.length);
    expect(wrapper).toMatchSnapshot();
  });

});
