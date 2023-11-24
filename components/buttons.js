import { Pressable, Share, StyleSheet, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

async function onclickShare({ id, link }) {
  console.log(id, link);
  try {
    const result = await Share.share({
      message: `Someone share for you ${link}`,
    });
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
      } else {
      }
    } else if (result.action === Share.dismissedAction) {
    }
  } catch (error) {
    alert(error.message);
  }
}

export function ButtonsComponent({ urlData }) {
  return (
    <View style={styles.controllers}>
      <View>
        <Pressable>
          <AntDesign
            style={{ margin: 5 }}
            name="like1"
            size={24}
            color="black"
          />
        </Pressable>
        <Pressable>
          <AntDesign
            style={{ margin: 5 }}
            name="dislike1"
            size={24}
            color="black"
          />
        </Pressable>
        <Pressable onPress={() => onclickShare(urlData)}>
          <Entypo style={{ margin: 5 }} name="share" size={24} color="black" />
        </Pressable>
        <Pressable>
          <FontAwesome
            style={{ margin: 5 }}
            name="comments"
            size={24}
            color="black"
          />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  controllers: {
    position: "absolute",
    top: 300,
    left: 300,
  },
  controllersInner: {},
});
