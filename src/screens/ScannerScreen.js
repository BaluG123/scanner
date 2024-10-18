// import React, {useState, useEffect, useRef} from 'react';
// import {
//   View,
//   TouchableOpacity,
//   StyleSheet,
//   Text,
//   ActivityIndicator,
// } from 'react-native';
// import {Camera, useCameraDevices} from 'react-native-vision-camera';

// const ScannerScreen = ({navigation}) => {
//   const [hasPermission, setHasPermission] = useState(false);
//   const [isActive, setIsActive] = useState(true);
//   const devices = useCameraDevices();
//   const device = devices.back;
//   const camera = useRef(null);

//   useEffect(() => {
//     checkPermission();
//   }, []);

//   const checkPermission = async () => {
//     const status = await Camera.requestCameraPermission();
//     console.log('Camera permission status:', status);
//     setHasPermission(status === 'authorized');
//   };

//   const capturePhoto = async () => {
//     try {
//       if (camera.current) {
//         console.log('Taking photo...');
//         const photo = await camera.current.takePhoto({
//           qualityPrioritization: 'quality',
//           flash: 'off',
//           enableAutoRedEyeReduction: true,
//         });
//         console.log('Photo taken:', photo);
//         navigation.navigate('Preview', {
//           photo: {
//             path: photo.path,
//             width: photo.width,
//             height: photo.height,
//           },
//         });
//       }
//     } catch (error) {
//       console.error('Failed to take photo:', error);
//     }
//   };

//   // Show loading while checking device/permissions
//   if (device == null) {
//     return (
//       <View style={styles.center}>
//         <ActivityIndicator size="large" color="#007AFF" />
//         <Text style={styles.text}>Loading camera...</Text>
//       </View>
//     );
//   }

//   // Show error if no permission
//   if (!hasPermission) {
//     return (
//       <View style={styles.center}>
//         <Text style={styles.text}>No access to camera</Text>
//         <TouchableOpacity
//           style={styles.permissionButton}
//           onPress={checkPermission}>
//           <Text style={styles.buttonText}>Grant Permission</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <Camera
//         ref={camera}
//         style={[StyleSheet.absoluteFill]}
//         device={device}
//         isActive={isActive}
//         photo={true}
//         enableZoomGesture
//       />
//       <View style={styles.buttonContainer}>
//         <TouchableOpacity style={styles.captureButton} onPress={capturePhoto}>
//           <View style={styles.buttonInner} />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'black',
//   },
//   center: {
//     flex: 1,
//     backgroundColor: 'black',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     color: 'white',
//     fontSize: 16,
//     marginTop: 10,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 16,
//   },
//   permissionButton: {
//     backgroundColor: '#007AFF',
//     padding: 12,
//     borderRadius: 8,
//     marginTop: 20,
//   },
//   buttonContainer: {
//     position: 'absolute',
//     bottom: 40,
//     width: '100%',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   captureButton: {
//     width: 70,
//     height: 70,
//     borderRadius: 35,
//     backgroundColor: '#ffffff20',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   buttonInner: {
//     width: 54,
//     height: 54,
//     borderRadius: 27,
//     backgroundColor: 'white',
//   },
// });

// export default ScannerScreen;
//****************above code seems to be working fine  */

import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  ActivityIndicator,
} from 'react-native';
import {
  Camera,
  useCameraDevice,
  useCameraDevices,
} from 'react-native-vision-camera';

const ScannerScreen = ({navigation}) => {
  const [hasPermission, setHasPermission] = useState(false);
  const [isActive, setIsActive] = useState(true);
  //   const devices = useCameraDevices();
  //   const device = devices.back;
  const device = useCameraDevice('back');
  const camera = useRef(null);

  useEffect(() => {
    checkPermission();
  }, []);

  const checkPermission = async () => {
    const status = await Camera.requestCameraPermission();
    console.log('Camera permission status:', status);
    setHasPermission(status === 'granted');
  };

  //   const capturePhoto = async () => {
  //     try {
  //       if (camera.current) {
  //         console.log('Taking photo...');
  //         const photo = await camera.current.takePhoto({
  //           qualityPrioritization: 'quality',
  //           flash: 'off',
  //           enableAutoRedEyeReduction: true,
  //         });
  //         console.log('Photo taken:', photo);
  //         navigation.navigate('Preview', {
  //           photo: {
  //             path: photo.path,
  //             width: photo.width,
  //             height: photo.height,
  //           },
  //         });
  //       }
  //     } catch (error) {
  //       console.error('Failed to take photo:', error);
  //     }
  //   };

  // Show loading while checking device/permissions

  const capturePhoto = async () => {
    try {
      if (camera.current) {
        console.log('Taking photo...');
        const photo = await camera.current.takePhoto({
          qualityPrioritization: 'quality',
          flash: 'off',
          enableAutoRedEyeReduction: true,
        });
        console.log('Photo taken:', photo);
        navigation.navigate('Preview', {photo});
      }
    } catch (error) {
      console.error('Failed to take photo:', error);
    }
  };

  console.log('device', device);
  if (device == null) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#007AFF" />
        <Text style={styles.text}>Loading camera...</Text>
      </View>
    );
  }

  // Show error if no permission
  if (!hasPermission) {
    return (
      <View style={styles.center}>
        <Text style={styles.text}>No access to camera</Text>
        <TouchableOpacity
          style={styles.permissionButton}
          onPress={checkPermission}>
          <Text style={styles.buttonText}>Grant Permission</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Camera
        ref={camera}
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={isActive}
        photo={true}
        enableZoomGesture
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.captureButton} onPress={capturePhoto}>
          <View style={styles.buttonInner} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  center: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 16,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  permissionButton: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  captureButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#ffffff20',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'white',
  },
  buttonInner: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: 'white',
  },
});

export default ScannerScreen;
