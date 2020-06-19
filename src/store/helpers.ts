import { createAction } from "@reduxjs/toolkit";

function withPayloadType<T>() {
  return (t: T) => ({ payload: t });
}

export const createActionWithPayload = <T>(action: string) => createAction(action, withPayloadType<T>());
