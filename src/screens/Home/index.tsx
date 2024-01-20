import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { colors } from '../../../assets/styles/Colors';
import { Gs } from '../../../assets/styles/GlobalStyle';

export default function Home() {
  const navigation = useNavigation();

  const renderHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <View style={Gs.flexRow}>
          <Image 
          source={require('../../../assets/images/profile_1.png')}
          style={styles.profileContainer}
          />
          <View>
            <Text style={Gs.textBlack}>Hi, Shayna</Text>
            <Text style={[Gs.font700, Gs.textBlack]}>@shaynawork</Text>
          </View>
        </View>
        <View style={Gs.flexRow}>
          <Image 
          source={require('../../../assets/icons/gift.png')}
          style={styles.iconContainer}
          />
          <Image 
          source={require('../../../assets/icons/notification.png')}
          style={styles.iconContainer}
          />

        </View>
      </View>
    )
      
    
  };
  return (
    <View style={styles.container}>
      <View>
        {renderHeader()}
        {/* {renderSearch()} */}
        <ScrollView>
          {/* {renderPopularSection()} */}
          {/* {renderNewsworthy()} */}
        </ScrollView>
      </View>
      {/* <ButtomNav /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.greyLight,
    paddingTop: 24,
  },
  headerContainer: {
    ...Gs.flexRow,
    ...Gs.itemsCenter,
    ...Gs.justifyBetween,
    padding: 24,
  },
  profileContainer: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  iconContainer: {
    width: 24,
    height: 24,
    marginLeft: 10,
  }
});

