// import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {SplashScreen} from './src/screens/SplashScreen';
// import {HomeScreen} from './src/screens/HomeScreen';
// import {ScannerScreen} from './src/screens/ScannerScreen';
// import {PreviewScreen} from './src/screens/PreviewScreen';

// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Splash">
//         <Stack.Screen
//           name="Splash"
//           component={SplashScreen}
//           options={{headerShown: false}}
//         />
//         <Stack.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{title: 'Scanner App'}}
//         />
//         <Stack.Screen
//           name="Scanner"
//           component={ScannerScreen}
//           options={{title: 'Scan Document'}}
//         />
//         <Stack.Screen
//           name="Preview"
//           component={PreviewScreen}
//           options={{title: 'Preview & Save'}}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './src/screens/SplashScreen';
import HomeScreen from './src/screens/HomeScreen';
import ScannerScreen from './src/screens/ScannerScreen';
import PreviewScreen from './src/screens/PreviewScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Scanner" component={ScannerScreen} />
        <Stack.Screen name="Preview" component={PreviewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
