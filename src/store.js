import { legacy_createStore as createStore } from "redux";

const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_SERVICE": {
      return [
        ...state,
        {
          id: Date.now(),
          title: action.service.title,
          price: action.service.price,
        }
      ];
    }
    case "REMOVE_SERVICE": {
      return state.filter((service) => service.id !== action.id);
    }
    case "UPDATE_SERVICE": {
      return state.map((service) => 
      service.id === action.service.id ? { ...service, title: action.service.title, price:  action.service.price} : service
      );
    }
    default: {
      return state;
    }
  }
};

export const store = createStore(todos);

export const addService = (service) => ({
  type: "ADD_SERVICE",
  service,
});
export const removeService = (id) => ({
  type: "REMOVE_SERVICE",
  id
});
export const updateService = (service) => ({
  type: "UPDATE_SERVICE",
  service
});
