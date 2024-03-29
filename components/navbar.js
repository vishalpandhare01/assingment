import { View,Text,StyleSheet } from "react-native";
import {useTheme} from 'react-native-router-screen'

export default function MainNavbar() {
    const { colors } = useTheme();
    const styles = StyleSheet.create({
        navbar: {
            display: 'flex',
            backgroundColor: colors.primary,
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            justifyContent: 'space-between',
            color: 'black',
            height: 64,
            paddingHorizontal: 10,
            alignContent: 'space-between',
    
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 1,
            },
            shadowOpacity: 0.15,
            shadowRadius: 1.00,
            elevation: 3,
        },
        navbar_button: {
            padding: 8,
        },
    });
    
    return (
        <View style={styles.navbar}>
            {/* <View>
                <Text style={{
                    fontSize: 24,
                    fontWeight: '600',
                    color: colors.primary_text
                }}>
                    {title}
                </Text>
            </View> */}

            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                {/* 
        <View>
          <Pressable onPress={() => setIsVisible(true)}>
            <View
              style={styles.navbar_button}
            >
              <Image
                source={assets_images.search_white}
                style={{ height: 28, width: 28 }}
              />
            </View>
          </Pressable>
        </View> */}
            </View>
        </View>
    );
};


