const initialStateCustomer = {
  fullName: "",
  nationalId: "",
  createdAt: "",
};

const customerReducer = (state = initialStateCustomer, action) => {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalId: action.payload.nationalId,
        createdAt: action.payload.createdAt,
      };
    case "customer/updateName":
      return {
        ...state,
        fullName: action.payload,
      };
    default:
      return state;
  }
};

// Action creators are generated for each case reducer function
export const createCustomer = (fullName, nationalId) => {
  return {
    type: "customer/createCustomer",
    payload: { fullName, nationalId, createdAt: new Date().toString() },
  };
};

export const updateName = (fullname) => {
  return {
    type: "customer/updateName",
    payload: fullname,
  };
};

export default customerReducer;
