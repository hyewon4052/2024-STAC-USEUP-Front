import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import CollectTabView from '../components/collect-tab-view';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

// 화면 높이 가져오기
const { height } = Dimensions.get('window');

const GradientFloatingButton = ({ onPress }) => {
    return (
      <View style={styles.floatingButtonContainer}>
        <TouchableOpacity onPress={onPress}>
          <LinearGradient
            colors={['#8CD6FF', '#74BCFF']}
            style={styles.floatingButton}
          >
            <Text style={styles.floatingButtonText}>수거{'\n'}신청</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    );
};

const CollectScreen = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('CollectApplying');
  }

  const handlePurchase = () => {
    navigation.navigate('Purchase');
  }

  const handleActivity = () => {
    navigation.navigate('AllActivity');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>내 활동내역</Text>
      <TouchableOpacity style={styles.button} onPress={handleActivity}>
        <Text style={styles.buttonText}>모든 활동 보기</Text>
      </TouchableOpacity>
      <View style={styles.label}>
          <TouchableOpacity onPress={handleActivity}>
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
      <View style={styles.tabViewContainer}>
         <CollectTabView />
      </View>
      <GradientFloatingButton onPress={handlePress}/>
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
        marginBottom: 0,
    },
    imageIcon: {
        margin: 15,
        width: 42,
        height: 42,
    },
    imageText: {
        bottom: 10,
        color: '#898A8D',
        fontSize: 10,
    },
    tabViewContainer: {
        flex: 1,
    },
    floatingButtonContainer: {
        position: 'absolute',
        right: 27,
        bottom: height * 0.02,
    },
    floatingButton: {
        width: 70,
        height: 70,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    floatingButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    separator: {
        width: 1,
        height: '60%',
        marginTop: 20,
        backgroundColor: '#E0E0E0',
    },
});

export default CollectScreen;
