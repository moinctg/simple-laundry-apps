import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import store from './store'
import { Provider } from 'react-redux';
import StackNavigator from './StackNavigator';

export default function App() {
  
  return (
   
    <SafeAreaProvider >
      <Provider store={store}>
      <StackNavigator/>

      </Provider>
      
    </SafeAreaProvider>
   
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
