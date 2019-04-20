import createRestApiClient from "../../utility/createRestApiClient";

import {
  IMAGES_LOADING,
  IMAGES_SUCCESS,
  IMAGES_FAILED
} from "../constants/Avengers";



const mockApiEndpoint = process.env.REACT_APP_API_URL;

const mockApiClient = createRestApiClient().withConfig({
    baseURL: mockApiEndpoint
}).client;

export function fetchImageUrl(image_id) {
    let token = "fc1be0ce7f79cfe74502163bbc76613e";
    const endpoint = `/api/image/${image_id}`;
    return {
      types: [IMAGES_LOADING, IMAGES_SUCCESS, IMAGES_FAILED],
      promise: () =>
        mockApiClient.post(`${endpoint}`,{}, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
    };
}