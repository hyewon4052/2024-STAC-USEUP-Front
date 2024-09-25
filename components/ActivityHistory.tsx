import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import CollectTabView from '../components/collect-tab-view';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

// 화면 높이 가져오기
const { height } = Dimensions.get('window');

const ActivityHistoryComponent = () => {

    const navigation = useNavigation();

        const handleActivity = () => {
            navigation.navigate('AllActivity');
        }
        const handlePurchase = () => {
            navigation.navigation('Purchase');
        }
        const handlePress = () => {
            navigation.navigate('CollectApplying');
        }

  return (
    <View style={styles.container}>
      <View style={styles.label}>
          <TouchableOpacity>
              <View style={{ alignItems: 'center' }}>
                  <Image source={require('../assets/calendar2.png')} style={styles.imageIcon}></Image>
                  <Text style={styles.imageText}>수거신청</Text>
              </View>
          </TouchableOpacity>

          <View style={styles.separator} />

          <TouchableOpacity>
              <View style={{ alignItems: 'center' }}>
                  <Image source={require('../assets/check3.png')} style={styles.imageIcon}></Image>
                  <Text style={styles.imageText}>수거완료</Text>
              </View>
          </TouchableOpacity>

          <View style={styles.separator} />

          <TouchableOpacity onPress={handlePurchase}>
              <View style={{ alignItems: 'center' }}>
                  <Image source={require('../assets/shopping2.png')} style={styles.imageIcon}></Image>
                  <Text style={styles.imageText}>구매완료</Text>
              </View>
          </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 25,
        paddingHorizontal: 25,
    },
    titleText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
    },
    button: {
        alignSelf: 'flex-end',
        marginBottom: 17,
    },
    buttonText: {
        color: '#898A8D',
        fontSize: 10,
        fontWeight: '300',
    },
    label: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: 'auto',
        height: 90,
        borderRadius: 8,
        borderColor: 'lightgrey',
        borderWidth: 1.6,
        backgroundColor: 'white',
        marginBottom: -100,
    },
    imageIcon: {
        margin: 15,
        width: 42,
        height: 42,
    },
    imageText: {
//         position: 'absolute',
        bottom: 10,
        color: '#898A8D',
        fontSize: 10,
    },
    separator: {
        width: 1,
        height: '60%',
        marginTop: 20,
        backgroundColor: '#E0E0E0',
//         marginHorizontal: 20,
    },
});

export default ActivityHistoryComponent;