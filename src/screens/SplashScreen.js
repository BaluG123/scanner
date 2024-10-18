// import React, {useEffect} from 'react';
// import {View, Image, StyleSheet, Animated} from 'react-native';

// export function SplashScreen({navigation}) {
//   const fadeAnim = new Animated.Value(0);

//   useEffect(() => {
//     Animated.sequence([
//       Animated.timing(fadeAnim, {
//         toValue: 1,
//         duration: 1000,
//         useNativeDriver: true,
//       }),
//       Animated.delay(1500),
//     ]).start(() => {
//       navigation.replace('Home');
//     });
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Animated.View style={[styles.logoContainer, {opacity: fadeAnim}]}>
//         <Image
//           source={require('../assets/image.jpg')}
//           style={styles.logo}
//           resizeMode="contain"
//         />
//       </Animated.View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   // Common styles
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },

//   // Splash Screen styles
//   splashContainer: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   logoContainer: {
//     width: 200,
//     height: 200,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#fff',
//     borderRadius: 20,
//     elevation: 5,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//   },
//   logo: {
//     width: '80%',
//     height: '80%',
//   },
//   appName: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#007AFF',
//     marginTop: 20,
//   },
// });

import React, {useEffect} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 2000); // Simulate a loading period (2 seconds)
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0000ff" />
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  text: {fontSize: 24, marginTop: 20},
});

export default SplashScreen;
