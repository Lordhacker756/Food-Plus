import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import colors from '../assets/colors/colors';
import ingredients from '../assets/data/ingredientsData';

export default function DetailsScreen({navigation}) {
  return (
    <View style={styles.mainContainer}>
      {/* Header Component */}
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <View style={styles.backButton}>
            <Text> back </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.starBtn}>
            <Image source={require('../assets/images/star.png')} />
          </View>
        </TouchableOpacity>
      </View>

      {/* About Product */}
      <View style={styles.productContainer}>
        <View style={styles.productDetails}>
          <Text style={styles.productName}>Primavera Pizza</Text>
          <Text style={styles.productPrice}>$5.99</Text>

          <View style={styles.productAboutConatiner}>
            <View style={styles.left}>
              <View style={styles.productAbout}>
                <Text style={styles.title}>Size</Text>
                <Text style={styles.value}>Medium 14"</Text>
              </View>

              <View style={styles.productAbout}>
                <Text style={styles.title}>Crust</Text>
                <Text style={styles.value}>Thin Crust</Text>
              </View>
              <View style={styles.productAbout}>
                <Text style={styles.title}>Delivery In</Text>
                <Text style={styles.value}>30 min</Text>
              </View>
            </View>
            <View style={styles.productImageContainer}>
              <Image
                source={require('../assets/images/pizza1.png')}
                style={styles.productImage}
              />
            </View>
          </View>
        </View>
      </View>

      {/* Ingredients */}
      <View style={styles.ingredientsContainer}>
        <Text style={styles.ingredientsTitle}>Ingredients</Text>
        <FlatList
          data={ingredients}
          renderItem={({item}) => (
            <View style={styles.ingredientContainer}>
              <Image source={item.image} style={styles.ingredientImage} />
            </View>
          )}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      {/* Button */}
      <TouchableOpacity>
        <View style={styles.placeOrder}>
          <Text style={styles.placeOrderText}>Place Order</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 20,
    backgroundColor: colors.background,
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  backButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 50,
    backgroundColor: colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  starBtn: {
    width: 40,
    height: 40,
    borderRadius: 15,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productContainer: {
    flexDirection: 'row',
    backgroundColor: colors.background,
  },
  productDetails: {
    flex: 1,
    backgroundColor: colors.background,
  },
  productName: {
    fontFamily: 'Montserrat-Bold',
    fontWeight: 'bold',
    fontSize: 40,
    color: colors.text,
    width: '80%',
    marginVertical: 10,
  },
  productPrice: {
    fontFamily: 'Montserrat-Bold',
    fontWeight: 'bold',
    fontSize: 40,
    color: colors.secondary,
  },
  productAboutConatiner: {
    flexDirection: 'row',
    marginVertical: 40,
    backgroundColor: colors.background,
    alignItems: 'center',
  },
  left: {
    backgroundColor: colors.background,
    width: '50%',
  },
  productAbout: {
    marginVertical: 5,
  },
  title: {
    fontFamily: 'Montserrat-Regular',
    fontStyle: 'normal',
    fontSize: 16,
    color: colors.textGray,
  },
  value: {
    fontFamily: 'Montserrat-Bold',
    fontWeight: 'bold',
    fontSize: 20,
    color: colors.text,
  },
  ingredientsTitle: {
    fontFamily: 'Montserrat-Bold',
    fontWeight: 'bold',
    fontSize: 20,
    color: colors.text,
    marginVertical: 10,
  },
  ingredientContainer: {
    backgroundColor: 'white',
    marginRight: 10,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  placeOrder: {
    backgroundColor: colors.primary,
    paddingVertical: 20,
    borderRadius: 50,
    marginVertical: 25,
  },
  placeOrderText: {
    fontFamily: 'Montserrat-Bold',
    fontWeight: 'bold',
    fontSize: 16,
    color: colors.text,
    textAlign: 'center',
  },
});
