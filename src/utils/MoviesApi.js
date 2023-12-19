import { handleCheckResponse } from "./configFunctions";

import { BASE_URL_YANDEX_API } from "./UrlApi";

export function getMovies() {
  return fetch(BASE_URL_YANDEX_API, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => handleCheckResponse(res));
}
