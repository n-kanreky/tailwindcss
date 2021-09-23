import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import tailwind from 'tailwind-rn';

const App = () => (
	<SafeAreaView style={tailwind('h-full')}>
		<View style={tailwind('pt-1 items-center')}>
			<View style={tailwind('bg-blue-200 px-3 py-1 rounded-full')}>
				<Text style={tailwind('text-blue-800 font-semibold text-3xl')}>
					Hello Tailwind
				</Text>      
			</View>
      
			<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
  				Button
			</button>
			<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  				Button
			</button>
			<button class="btn btn-blue">
  Button
</button>

<style>
  .btn {
    @apply font-bold py-2 px-4 rounded;
  }
  .btn-blue {
    @apply bg-blue-500 text-white;
  }
  .btn-blue:hover {
    @apply bg-blue-700;
  }
</style>



      <View style={tailwind('bg-green-100 px-4 py-2 rounded-full')}>
        <Text style={tailwind('text-green-800 font-bold')}>
					Text style: bg colour sample 1
				</Text>
			</View>

      <View style={tailwind('bg-green-200 px-4 py-2 rounded-full')}>
        <Text style={tailwind('text-green-800 font-bold')}>
					Text style: bg colour sample 2
				</Text>
			</View>

      <View style={tailwind('bg-green-300 px-4 py-2 rounded-full')}>
        <Text style={tailwind('text-green-800 font-bold')}>
					Text style: bg colour sample 3
				</Text>
			</View>

      <View style={tailwind('bg-green-400 px-4 py-2 rounded-full')}>
        <Text style={tailwind('text-green-800 font-bold')}>
					Text style: bg colour sample 4
				</Text>
			</View>
		</View>

<View style={tailwind('pt-8 items-center')}>
			<View style={tailwind('bg-blue-200 px-3 py-1 rounded-full')}>
				<Text style={tailwind('text-blue-800 font-semibold text-3xl')}>
					文字サイズの変化
				</Text>        
			</View>

    <View style={tailwind('bg-green-100 px-4 py-2 rounded-full')}>
        <Text style={tailwind('text-green-800 text-xl font-bold')}>
					Font size text-xl
				</Text>
			</View>

      <View style={tailwind('bg-green-200 px-4 py-2 rounded-full')}>
        <Text style={tailwind('text-green-800 text-2xl font-bold')}>
					Font size text-2xl
				</Text>
			</View>

      <View style={tailwind('bg-green-300 px-4 py-2 rounded-full')}>
        <Text style={tailwind('text-green-800 text-3xl font-bold')}>
					Font size text-3xl
				</Text>
			</View>

      <View style={tailwind('bg-green-400 px-4 py-2 rounded-full')}>
        <Text style={tailwind('text-green-800 text-4xl font-bold')}>
					Font size text-4xl
				</Text>
			</View>
		</View>


    
	</SafeAreaView>
);

  


export default App;
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
