import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './screens/HomeScreen';
import store from './store'
import { Provider } from 'react-redux';

export default function App() {
  
  return (
   
    <SafeAreaProvider >
      <Provider store={store}>
      <HomeScreen></HomeScreen>

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
