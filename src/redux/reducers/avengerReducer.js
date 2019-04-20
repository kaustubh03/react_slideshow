import {
  AVENGERS_LOADING,
  AVENGERS_SUCCESS,
  AVENGERS_FAILED,
  AVENGERS_CLEAR
} from "../constants/Avengers";

const initialState = {
    avengers: {
        loading: false,
        data: null,
        error: null
    }
};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
      case AVENGERS_LOADING:
        return {
          ...state,
            avengers: {
                ...state.avengers,
            loading: true
          }
        };

        case AVENGERS_SUCCESS:
        return {
          ...state,
            avengers: {
                ...state.avengers,
            loading: false,
            data: action.result.data
          }
        };

        case AVENGERS_FAILED:
        return {
          ...state,
            avengers: {
                ...state.avengers,
            loading: false,
            error: action.error
          }
        };

        case AVENGERS_CLEAR:
            return { ...state, avengers: initialState.avengers };

      default:
        return state;
    }
}
