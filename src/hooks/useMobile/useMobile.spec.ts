import { renderHook } from "@testing-library/react-hooks";

import { useMobile } from "./useMobile";

jest.mock("@material-ui/core", () => ({
  useMediaQuery: () => true,
}));

describe("description here", () => {
  it("deve retornar se a tela for móvel be able to get check screen size is mobile", () => {
    const { result } = renderHook(() => useMobile());

    expect(result.current).toBeTruthy();
  });
});
