import { createSlice } from "@reduxjs/toolkit";

const initialFormState = {
  fullName: "",
  size: "",
  toppings: {
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  },
};

const pizzaFormSlice = createSlice({
  name: "pizzaForm",
  initialState: initialFormState,
  reducers: {
    updateField: (state, action) => {
      const { name, value } = action.payload;
      if (name in state.toppings) {
        state.toppings[name] = value;
      } else {
        state[name] = value;
      }
    },
    resetForm: () => initialFormState,
  },
});

export const { updateField, resetForm } = pizzaFormSlice.actions;

export default pizzaFormSlice.reducer;
