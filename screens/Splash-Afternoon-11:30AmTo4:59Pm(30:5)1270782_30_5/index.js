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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc61/fc09/f0eb9e162be7dc666c037677c96f5d23"
        }}
        style={styles.ImageBackground_30_8}
      />
      <View style={styles.View_159_103}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/efac/c196/ae1d1cfc13bd756d6c6ac48ebaf96ae1"
          }}
          style={styles.ImageBackground_159_104}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d7cf/cafe/c228f2046a78288879cbbf054a5ae52a"
          }}
          style={styles.ImageBackground_159_105}
        />
      </View>
      <View style={styles.View_159_106}>
        <Text style={styles.Text_159_106}>Good Afternoon, Stephanie</Text>
      </View>
      <View style={styles.View_159_107}>
        <Text style={styles.Text_159_107}>
          Hang tight, we are finding accessible  menus nearby. This  screen will
          change in a few secs.    Traveling or planning a date.  Search by zip,
          city or cuisine.{" "}
        </Text>
      </View>
      <View style={styles.View_159_108} />
      <View style={styles.View_159_109}>
        <Text style={styles.Text_159_109}>Search </Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("111%") },
  ImageBackground_30_8: {
    width: wp("100%"),
    height: hp("111%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_159_103: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("18%")
  },
  ImageBackground_159_104: {
    width: wp("43%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_159_105: {
    width: wp("29%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("4%")
  },
  View_159_106: {
    width: wp("61%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("47%"),
    justifyContent: "flex-start"
  },
  Text_159_106: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3,
    textTransform: "none"
  },
  View_159_107: {
    width: wp("89%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("62%"),
    justifyContent: "flex-start"
  },
  Text_159_107: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_159_108: {
    width: wp("47%"),
    minWidth: wp("47%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("88%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_159_109: {
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
  Text_159_109: {
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
