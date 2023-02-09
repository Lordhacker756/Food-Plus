import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import colors from '../assets/colors/colors';
import categoryData from '../assets/data/categoryData';
import popularData from '../assets/data/popularData';

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.mainContainer}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Image
          style={styles.avatar}
          source={require('../assets/images/profile.png')}
        />
        <Image source={require('../assets/images/menu.png')} />
      </View>

      {/* Title */}
      <View style={styles.titleContainer}>
        <Text style={styles.subtitle}>Food</Text>
        <Text style={styles.title}>Delivery</Text>
      </View>

      {/* Search */}
      <View style={styles.searchContainer}>
        <Image
          style={styles.searchIcon}
          source={require('../assets/images/search.png')}
        />
        <TextInput
          style={styles.searchBox}
          placeholder="Search..."
          placeholderTextColor={colors.textGray}
        />
      </View>

      {/* Categories */}
      <View style={styles.categoryContainer}>
        <Text style={styles.categoryTitle}>Categories</Text>
        <FlatList
          data={categoryData}
          renderItem={({item}) => (
            <View
              style={
                item.selected
                  ? styles.categoryItemContainerSelected
                  : styles.categoryItemContainer
              }>
              <Image style={styles.categoryImage} source={item.image} />
              <Text style={styles.categoryText}>{item.name}</Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Details');
                }}>
                <View style={styles.button}>
                  <Text style={{fontWeight: 'bold'}}> &gt; </Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          alwaysBounceHorizontal={true}
        />
      </View>

      {/* Popular */}
      <View style={styles.popularContainer}>
        <Text style={styles.popularHeading}>Popular</Text>
        <FlatList
          data={popularData}
          renderItem={({item}) => (
            <View style={styles.popularCard}>
              <View style={styles.left}>
                <View style={styles.topHeading}>
                  <Image source={require('../assets/images/crown.png')} />
                  <Text style={styles.topHeadingTitle}>Top of the week</Text>
                </View>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.weight}>Weight {item.weight}</Text>
                <View style={styles.action}>
                  {/* <Text style={styles.plus}>+</Text> */}
                  <View style={styles.ratingContainer}>
                    <Image source={require('../assets/images/star.png')} />
                    <Text style={styles.rating}>{item.review}</Text>
                  </View>
                </View>
              </View>
              <View style={styles.right}>
                <Image style={styles.pizzaImg} source={item.image} />
              </View>
            </View>
          )}
          showsVerticalScrollIndicator={true}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    alignItems: 'center',
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },

  titleContainer: {
    paddingVertical: 10,
  },
  subtitle: {
    fontFamily: 'Montserrat-Regular',
    fontStyle: 'normal',
    fontSize: 22,
    color: colors.text,
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    fontWeight: 'bold',
    fontSize: 40,
    color: colors.text,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    marginTop: 10,
  },
  searchIcon: {
    width: 22,
    height: 22,
    marginHorizontal: 10,
  },
  searchBox: {
    borderBottomColor: colors.textGray,
    borderBottomWidth: 2,
    flex: 1,
    marginLeft: 10,
    color: colors.textGray,
  },
  categoryContainer: {
    paddingVertical: 20,
  },
  categoryTitle: {
    fontFamily: 'Montserrat-Bold',
    fontWeight: 'bold',
    fontSize: 20,
    color: colors.text,
  },
  categoryItemContainer: {
    backgroundColor: 'white',
    width: 150,
    height: 200,
    marginHorizontal: 10,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 25,
    borderRadius: 20,
  },
  categoryItemContainerSelected: {
    backgroundColor: colors.primary,
    width: 150,

    height: 200,
    marginRight: 10,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50,
    paddingHorizontal: 25,
    borderRadius: 20,
  },
  categoryImage: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  categoryText: {
    fontFamily: 'Montserrat-Bold',
    fontWeight: 'bold',
    fontSize: 16,
    color: colors.text,
  },
  popularContainer: {
    paddingVertical: 0,
    height: 240,
  },
  popularHeading: {
    fontFamily: 'Montserrat-Bold',
    fontWeight: 'bold',
    fontSize: 22,
    color: colors.text,
  },
  popularCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: 'white',
    marginVertical: 5,
    position: 'relative',
    marginBottom: 5,
  },
  left: {
    flex: 1,
    marginLeft: 20,
    maringBottom: 0,
    justifyContent: 'space-between',
  },
  topHeading: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  topHeadingTitle: {
    fontFamily: 'Montserrat-Bold',
    fontWeight: 'bold',
    fontSize: 16,
    color: colors.text,
    marginLeft: 10,
  },

  name: {
    fontFamily: 'Montserrat-Bold',
    fontWeight: 'bold',
    fontSize: 20,
    color: colors.text,
  },
  weight: {
    fontFamily: 'Montserrat-Regular',
    fontStyle: 'normal',
    fontSize: 16,
    color: colors.textGray,
  },
  action: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    width: '60%',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: colors.primary,
  },
  plus: {
    fontFamily: 'Montserrat-Bold',
    fontWeight: 'bold',
    fontSize: 20,
    color: colors.text,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  right: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: 20,
  },
  pizzaImg: {
    transform: [{translateX: 150}],
  },
  rating: {
    fontFamily: 'Montserrat-Bold',
    fontWeight: 'bold',
    fontSize: 16,
    color: colors.text,
    marginLeft: 10,
  },
  button: {
    backgroundColor: colors.secondary,
    height: 30,
    width: 30,
    borderRadius: 20,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
