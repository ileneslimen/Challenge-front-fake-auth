import { WATCHED } from "../types/MoviesTypes";

export const watched = (payload) => {
  return {
    type: WATCHED,
    payload,
  };
};
