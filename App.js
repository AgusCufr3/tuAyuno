import {View, Text, StyleSheet, TextInput, Button} from 'react-native'

const App = () => {
	return (
		<View style={styles.container}>
			<View style={styles.inputContainer}>
				<TextInput style={styles.input} />
				<Button title='ADD' />
			</View>
			<View style={styles.listContainer}>
				<View style={styles.cardProduct}>
					<Text style={styles.cardTitle}>Coca-cola</Text>
					<Text>2200 $</Text>
					<Button title='DEL' />
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'start',
		alingItems: 'center',
		marginTop: 25,
	},

	inputContainer: {
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'space-around',
	},

	input: {
		borderWidth: 4,
		paddingHorizontal: 10,
		paddingVertical: 5,
		width: 200,
	},
	listContainer: {
		width: '100%',
	},
	cardProduct: {
		flexDirection: 'row',
		padding: 10,
		margin: 10,
		justifyContent: 'space-around',
		borderWidth: 4,
	},
})

export default App
