// import React from 'react';
// import {View, Text, Image, Button, StyleSheet, Platform} from 'react-native';
// import RNFS from 'react-native-fs';
// import CameraRoll from '@react-native-community/cameraroll';

// const PreviewScreen = ({route, navigation}) => {
//   const {photo} = route.params;

//   console.log('Photo received:', photo);

//   const savePhotoToFile = async () => {
//     try {
//       const newFilePath = `${
//         RNFS.PicturesDirectoryPath
//       }/photo_${Date.now()}.jpg`;
//       await RNFS.moveFile(photo.path, newFilePath);

//       if (Platform.OS === 'android') {
//         await CameraRoll.save(newFilePath, {type: 'photo'});
//       }

//       alert('Photo saved successfully!');
//       navigation.navigate('Home');
//     } catch (error) {
//       alert('Failed to save photo: ' + error.message);
//     }
//   };

//   if (!photo || !photo.path) {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.text}>No photo available</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <Image source={{uri: `file://${photo.path}`}} style={styles.image} />
//       <Button title="Save Photo" onPress={savePhotoToFile} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
//   image: {width: 300, height: 400, marginBottom: 20},
//   text: {color: 'black', fontSize: 16},
// });

// export default PreviewScreen;

//****************888 both working fine  */
// import React, {useEffect} from 'react';
// import {
//   View,
//   Text,
//   Image,
//   Button,
//   StyleSheet,
//   Platform,
//   PermissionsAndroid,
// } from 'react-native';
// import RNFS from 'react-native-fs';
// import CameraRoll from '@react-native-community/cameraroll';

// const PreviewScreen = ({route, navigation}) => {
//   const {photo} = route.params;

//   useEffect(() => {
//     if (Platform.OS === 'android') {
//       requestStoragePermission();
//     }
//   }, []);

//   const requestStoragePermission = async () => {
//     try {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
//         {
//           title: 'Storage Permission',
//           message: 'This app needs access to your storage to save photos.',
//           buttonNeutral: 'Ask Me Later',
//           buttonNegative: 'Cancel',
//           buttonPositive: 'OK',
//         },
//       );
//       console.log(PermissionsAndroid.RESULTS.GRANTED, '###');
//       if (granted != PermissionsAndroid.RESULTS.GRANTED) {
//         alert('Storage permission denied');
//       }
//     } catch (err) {
//       console.warn(err);
//     }
//   };

//   //   const savePhotoToFile = async () => {
//   //     try {
//   //       const newFilePath = `${
//   //         RNFS.PicturesDirectoryPath
//   //       }/photo_${Date.now()}.jpg`;
//   //       await RNFS.moveFile(photo.path, newFilePath);

//   //       if (Platform.OS === 'android') {
//   //         await CameraRoll.save(newFilePath, {type: 'photo'});
//   //       }

//   //       alert('Photo saved successfully!');
//   //       navigation.navigate('Home');
//   //     } catch (error) {
//   //       alert('Failed to save photo: ' + error.message);
//   //     }
//   //   };

//   const savePhotoToFile = async () => {
//     try {
//       const granted = await PermissionsAndroid.check(
//         PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
//       );

//       if (!granted) {
//         alert('Storage permission is required to save photos.');
//         return;
//       }

//       const newFilePath = `${
//         RNFS.ExternalDirectoryPath
//       }/Pictures/photo_${Date.now()}.jpg`;

//       // Use RNFS.copyFile instead of moveFile
//       await RNFS.copyFile(photo.path, newFilePath);

//       if (Platform.OS === 'android') {
//         await CameraRoll.save(newFilePath, {type: 'photo'});
//       }

//       alert('Photo saved successfully!');
//       navigation.navigate('Home');
//     } catch (error) {
//       alert('Failed to save photo: ' + error.message);
//     }
//   };

//   if (!photo || !photo.path) {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.text}>No photo available</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <Image source={{uri: `file://${photo.path}`}} style={styles.image} />
//       <Button title="Save Photo" onPress={savePhotoToFile} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
//   image: {width: 300, height: 400, marginBottom: 20},
//   text: {color: 'black', fontSize: 16},
// });

// export default PreviewScreen;

import React, {useEffect} from 'react';
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import RNFS from 'react-native-fs';
import CameraRoll from '@react-native-community/cameraroll';

const PreviewScreen = ({route, navigation}) => {
  const {photo} = route.params;

  useEffect(() => {
    if (Platform.OS === 'android') {
      requestStoragePermission();
    }
  }, []);

  const requestStoragePermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Storage Permission',
          message: 'This app needs access to your storage to save photos.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        // Storage permission granted, proceed with saving the photo
        savePhotoToFile();
      } else {
        alert('Storage permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  //   const savePhotoToFile = async () => {
  //     try {
  //       const newFilePath = `${
  //         RNFS.PicturesDirectoryPath
  //       }/photo_${Date.now()}.jpg`;
  //       await RNFS.moveFile(photo.path, newFilePath);

  //       if (Platform.OS === 'android') {
  //         await CameraRoll.save(newFilePath, {type: 'photo'});
  //       }

  //       alert('Photo saved successfully!');
  //       navigation.navigate('Home');
  //     } catch (error) {
  //       alert('Failed to save photo: ' + error.message);
  //     }
  //   };

  const savePhotoToFile = async () => {
    try {
      // Get the current date
      const currentDate = new Date();
      const formattedDate = `${currentDate.getFullYear()}-${(
        currentDate.getMonth() + 1
      )
        .toString()
        .padStart(2, '0')}-${currentDate
        .getDate()
        .toString()
        .padStart(2, '0')}`;

      // Construct the new file path
      const newFilePath = `${RNFS.PicturesDirectoryPath}/photo_${formattedDate}_scanner.jpg`;

      // Move the file to the new location
      await RNFS.moveFile(photo.path, newFilePath);

      // Save to gallery on Android
      if (Platform.OS === 'android') {
        await CameraRoll.save(newFilePath, {type: 'photo'});
      }

      alert('Photo saved successfully!');
      navigation.navigate('Home');
    } catch (error) {
      alert('Failed to save photo: ' + error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={{uri: `file://${photo.path}`}} style={styles.image} />
      <Button
        title="Save Photo"
        onPress={savePhotoToFile}
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  image: {
    width: 300,
    height: 400,
    borderRadius: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
  },
});

export default PreviewScreen;
