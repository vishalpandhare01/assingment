import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { VideoPlayer } from './components/videoplayer';
import VideoScreenComponent from './components/videoScreen';
import MainNavbar from './components/navbar';

export default function App() {
  return (
    <View >
      <StatusBar style="auto" />
      <MainNavbar/>
      <VideoScreenComponent/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
