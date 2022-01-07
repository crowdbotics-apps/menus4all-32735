import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0cb2/263a/86aa0e03f189089556f7b6d4e0254166"
        }}
        style={styles.ImageBackground_30_7}
      />
      <View style={styles.View_30_15}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/efac/c196/ae1d1cfc13bd756d6c6ac48ebaf96ae1"
          }}
          style={styles.ImageBackground_30_16}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d7cf/cafe/c228f2046a78288879cbbf054a5ae52a"
          }}
          style={styles.ImageBackground_30_17}
        />
      </View>
      <View style={styles.View_30_18}>
        <Text style={styles.Text_30_18}>Good Morning, Stephanie</Text>
      </View>
      <View style={styles.View_30_19}>
        <Text style={styles.Text_30_19}>
          Hang tight, we are finding accessible  menus nearby. This  screen will
          change in a few secs.    Traveling or planning a date.  Search by zip,
          city or cuisine.{" "}
        </Text>
      </View>
      <View style={styles.View_159_101} />
      <View style={styles.View_159_102}>
        <Text style={styles.Text_159_102}>Search </Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("111%") },
  ImageBackground_30_7: {
    width: wp("100%"),
    height: hp("111%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_30_15: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("18%")
  },
  ImageBackground_30_16: {
    width: wp("43%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_30_17: {
    width: wp("29%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("4%")
  },
  View_30_18: {
    width: wp("54%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("46%"),
    justifyContent: "flex-start"
  },
  Text_30_18: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3,
    textTransform: "none"
  },
  View_30_19: {
    width: wp("89%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("62%"),
    justifyContent: "flex-start"
  },
  Text_30_19: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_159_101: {
    width: wp("47%"),
    minWidth: wp("47%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("87%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_159_102: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("89%"),
    justifyContent: "flex-start"
  },
  Text_159_102: {
    color: "rgba(18, 18, 18, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
