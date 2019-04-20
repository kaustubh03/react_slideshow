import createRestApiClient from "../../utility/createRestApiClient";

import {
  AVENGERS_LOADING,
  AVENGERS_SUCCESS,
  AVENGERS_FAILED
} from "../constants/Avengers";



const mockApiEndpoint = process.env.REACT_APP_API_URL;

const mockApiClient = createRestApiClient().withConfig({
    baseURL: mockApiEndpoint
}).client;

export function fetchSliderImages() {
    let token = "fc1be0ce7f79cfe74502163bbc76613e";
    const endpoint = `/api/image/`;
    return {
      types: [AVENGERS_LOADING, AVENGERS_SUCCESS, AVENGERS_FAILED],
      promise: () =>
        mockApiClient.get(`${endpoint}`, {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        })
    };
}