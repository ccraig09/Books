import React, { useState } from "react";
import {
	Text,
	View,
	ScrollView,
	StyleSheet,
	SafeAreaView,
	TextInput,
	TouchableOpacity,
} from "react-native";

import { addBook, removeBook } from "./actions";

import { useSelector, useDispatch } from "react-redux";

const Books = () => {
	const books = useSelector((state) => state.bookReducer.books);
	const dispatch = useDispatch();

	const [name, setName] = useState("");
	const [author, setAuthor] = useState("");

	const addBookHandler = () => {
		dispatch(addBook({ name, author }));
		setName("");
		setAuthor("");
	};

	const removeBookHandler = (book) => {
		dispatch(removeBook(book));
	};

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.title}>Books</Text>
			<ScrollView
				keyboardShouldPersistTaps="always"
				style={styles.booksContainer}
			>
				{books.map((book, index) => (
					<View style={styles.book} key={index}>
						<Text style={styles.name}>{book.name}</Text>
						<Text style={styles.author}>{book.author}</Text>
						<Text onPress={() => removeBookHandler(book)}>
							Remove
						</Text>
					</View>
				))}
			</ScrollView>
			<View style={styles.inputContainer}>
				<View style={styles.inputWrapper}>
					<TextInput
						value={name}
						onChangeText={setName}
						style={styles.input}
						placeholder="Book name"
					/>
					<TextInput
						value={author}
						onChangeText={setAuthor}
						style={styles.input}
						placeholder="Author name"
					/>
				</View>

				<TouchableOpacity onPress={addBookHandler}>
					<View style={styles.addButtonContainer}>
						<Text style={styles.addButton}>+</Text>
					</View>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	inputContainer: {
		padding: 10,
		backgroundColor: "ffffff",
		borderTopColor: "#ededed",
		borderTopWidth: 1,
		flexDirection: "row",
		height: 100,
	},
	inputWrapper: {
		flex: 1,
	},
	input: {
		height: 44,
		padding: 7,
		backgroundColor: "#ddd",
		borderWidth: 1,
		borderRadius: 10,
		flex: 1,
		marginBottom: 5,
	},
	addButton: {
		fontSize: 28,
		lineHeight: 28,
	},
	addButtonContainer: {
		width: 80,
		height: 80,
		backgroundColor: "#ededed",
		marginLeft: 10,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 20,
	},
	container: { flex: 1 },
	booksContainer: {
		borderTopWidth: 1,
		borderTopColor: "#ddd",
		flex: 1,
	},
	title: {
		paddingTop: 30,
		paddingBottom: 20,
		fontSize: 20,
		textAlign: "center",
	},
	book: {
		padding: 20,
	},
	name: {
		fontSize: 18,
	},
	author: {
		fontSize: 14,
		color: "#999",
	},
});

export default Books;
