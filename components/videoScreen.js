import { FlatList, View } from "react-native";
import { VideosUrl } from "../data/videos";
import { VideoPlayer } from "./videoplayer";


export default function VideoScreenComponent() {
  return (
    <View>
      <FlatList
        data={VideosUrl}
        renderItem={(item) => <VideoPlayer urlData={item.item} />}
        keyExtractor={(item) => item.id}
        key={(item) => item.id}
      />
    </View>
  );
}
