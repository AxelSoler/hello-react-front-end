import axios from 'axios';

const GET_GREETINGS = 'GET_GREETINGS';

const initialState = {
  greeting: [],
};

const getGreetingsSuccess = (greeting) => ({
  type: GET_GREETINGS,
  payload: greeting,
});

const getGreeting = () => async (dispatch) => {
  const response = await axios.get('http://localhost:3001/greetings');
  const { greeting } = response.data;

  dispatch({
    type: GET_GREETINGS,
    payload: greeting,
  });
};

const greetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_GREETINGS':
      return {
        ...state,
        greeting: action.payload,
      };
    default:
      return state;
  }
};

export default greetingReducer;
export {
  getGreetingsSuccess,
  getGreeting,
};
