// import React from 'react';
// import {View, StyleSheet, TouchableOpacity} from 'react-native';
// import {Camera} from 'lucide-react';

// export function HomeScreen({navigation}) {
//   return (
//     <View style={styles.container}>
//       <TouchableOpacity
//         style={styles.scanButton}
//         onPress={() => navigation.navigate('Scanner')}>
//         <Camera size={32} color="white" />
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   homeContainer: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//   },
//   header: {
//     padding: 20,
//     backgroundColor: '#fff',
//     borderBottomWidth: 1,
//     borderBottomColor: '#e0e0e0',
//   },
//   headerText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   scanButtonContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   scanButton: {
//     backgroundColor: '#007AFF',
//     width: 80,
//     height: 80,
//     borderRadius: 40,
//     justifyContent: 'center',
//     alignItems: 'center',
//     elevation: 5,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//   },
//   scanButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     marginTop: 10,
//     textAlign: 'center',
//   },
//   recentScansContainer: {
//     padding: 20,
//   },
//   recentScansTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     color: '#333',
//   },
// });

import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Scanner App</Text>
      <Button
        title="Open Scanner"
        onPress={() => navigation.navigate('Scanner')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  title: {fontSize: 20, marginBottom: 20},
});

export default HomeScreen;
