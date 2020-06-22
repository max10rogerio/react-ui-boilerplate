import { useMediaQuery, Theme } from "@material-ui/core";
import { Breakpoint } from "@material-ui/core/styles/createBreakpoints";

/**
 * @param {Breakpoint} size - default value: sm
 */
export function useMobile(size: Breakpoint = "sm"): boolean {
  return useMediaQuery((theme: Theme) => theme.breakpoints.down(size));
}
