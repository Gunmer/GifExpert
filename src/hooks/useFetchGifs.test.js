import {renderHook} from "@testing-library/react-hooks";
import {useFetchGifs} from "./useFetchGifs";

describe('useFetchGifs', () => {
  it('should return initial state', async () => {
    const {result, waitForNextUpdate} = renderHook(() => useFetchGifs('Star Wars'));
    const {data, loading} = result.current;
    await waitForNextUpdate();

    expect(data).toHaveLength(0);
    expect(loading).toBeTruthy();
  });

  it('should return a arrays of img and loading false', async () => {
    const {result, waitForNextUpdate} = renderHook(() => useFetchGifs('Star Wars'));
    await waitForNextUpdate();
    const {data, loading} = result.current;

    expect(data).toHaveLength(5);
    expect(loading).toBeFalsy();
  });
});
