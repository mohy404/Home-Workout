import React, { useContext } from "react";
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView } from "react-native";
import FitnessCards from "../components/FitnessCards";
import { FitnessItems } from "../Context";

const HomeScreen = () => {
  const { minutes, calories, workout } = useContext(FitnessItems);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.headerText}>HOME WORKOUT</Text>

          <View style={styles.statsContainer}>
            <StatItem value={workout} label="WORKOUTS" />
            <StatItem value={calories} label="KCAL" />
            <StatItem value={minutes} label="MINS" />
          </View>

          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{
                uri: "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_842,ar_1.2,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/sku-card-widget/gold2.png",
              }}
            />
          </View>
        </View>

        <FitnessCards />
      </ScrollView>
    </SafeAreaView>
  );
};

const StatItem = ({ value, label }) => (
  <View style={styles.statItem}>
    <Text style={styles.statValue}>{value}</Text>
    <Text style={styles.statLabel}>{label}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CD853F",
    padding: 10,
  },
  scrollView: {
    marginTop: 40,
  },
  header: {
    height: 200,
    width: "100%",
  },
  headerText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  statsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  statItem: {
    alignItems: "center",
  },
  statValue: {
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    fontSize: 18,
  },
  statLabel: {
    color: "#D0D0D0",
    fontSize: 17,
    marginTop: 6,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  image: {
    width: "90%",
    height: 120,
    borderRadius: 7,
  },
});

export default HomeScreen;
