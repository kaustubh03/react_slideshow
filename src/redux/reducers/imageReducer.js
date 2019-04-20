import {
  IMAGES_LOADING,
  IMAGES_SUCCESS,
  IMAGES_FAILED,
  IMAGES_CLEAR
} from "../constants/Avengers";

const initialState = {
    images: {
        loading: false,
        data: null,
        error: null
    }
};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
      case IMAGES_LOADING:
        return {
          ...state,
          images: {
            ...state.images,
            loading: true,
            data:null
          }
        };

      case IMAGES_SUCCESS:
        return {
          ...state,
          images: {
            ...state.images,
            loading: false,
            data: action.result.data
          }
        };

      case IMAGES_FAILED:
        return {
          ...state,
          images: {
            ...state.images,
            loading: false,
            error: action.error
          }
        };

      case IMAGES_CLEAR:
        return { ...state, images: initialState.images };

      default:
        return state;
    }
}
