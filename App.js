import React from "react";
import Books from "./src/Books";
import bookReducer from "./src/reducers/bookReducer";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = {
	bookReducer,
};

const store = configureStore({
	reducer: rootReducer,
});
export default function App() {
	return (
		<Provider store={store}>
			<Books />
		</Provider>
	);
}
