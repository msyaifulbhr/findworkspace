import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { colors } from '../../../assets/styles/Colors';
import { Gs } from '../../../assets/styles/GlobalStyle';
import InputText from '../../components/InputText';

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

  const renderSearch = () => {
    return (
      <View style={styles.sectionContainer}>
        <InputText 
          icon={require('../../../assets/icons/location.png')}
          placeholder="Find work spaces in Jakarta"
        />
      </View>
    );
  };

  const renderPopularSection = () => {
    return (
      <View style={styles.sectionContainer}>
        <Text style={[styles.sectionTitle, Gs.h1]}>Popular</Text>
        <View style={Gs.flexRow}>
          <Image
            source={require('../../../assets/images/item_1_a.png')}
            style={styles.popularMainImage}
          />
          <View>
            <Image 
              source={require('../../../assets/images/item_1_b.png')}
              style={styles.popularImage}
            />
            <Image 
              source={require('../../../assets/images/item_1_c.png')}
              style={styles.popularImage}
            />
          </View>
        </View>
        <View style={styles.popularContent}>
          <View>
            <Text style={[Gs.h2, Gs.textBlack]}>IndoorWork</Text>
            <Text style={Gs.textGrey}>Jalan Angga Bekerja No.10</Text>
          </View>
          <View style={styles.popularPriceContainer}>
            <Text style={styles.popularPriceLabel}>$599/days</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View>
        {renderHeader()}
        {renderSearch()}
        <ScrollView>
          {renderPopularSection()}
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
  },
  sectionContainer: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  popularMainImage: {
    ...Gs.cornerXL,
    flex: 1,
    height: 200,
    marginRight: 10,
  },
  popularImage: {
    ...Gs.cornerMD,
    width: 130,
    height: 95,
    marginBottom: 10,
  },
  sectionTitle: {
    ...Gs.textBlack,
    marginBottom: 12,
  },
  popularContent: {
    ...Gs.flexRow,
    ...Gs.justifyBetween,
  },
  popularPriceContainer: {
    ...Gs.justifyCenter,
    ...Gs.itemsCenter,
    ...Gs.cornerXS,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: colors.secondary,
  },
  popularPriceLabel: {
    ...Gs.font600,
    ...Gs.textPrimary,
  },
});

