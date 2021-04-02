import {getGifs} from "./getGifs";

describe('getGifs', () => {
  it('should get 5 gifs', async () => {
    const gifs = await getGifs('hello');

    expect(gifs).toHaveLength(5);
  });
  it('spec name', async () => {
    const gifs = await getGifs();

    expect(gifs).toHaveLength(0);
  });
});
