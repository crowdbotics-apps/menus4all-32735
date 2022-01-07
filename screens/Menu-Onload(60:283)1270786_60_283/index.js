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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d581/b52f/1520ff84a1adf0c394709d14232acb50"
        }}
        style={styles.ImageBackground_60_286}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e18/98c3/49ea0fe0e5c18c05c93751fe800b4162"
        }}
        style={styles.ImageBackground_60_307}
      />
      <View style={styles.View_60_287} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd21/333b/48899206b4ec71b22bbcf74b78744934"
        }}
        style={styles.ImageBackground_60_301}
      />
      <View style={styles.View_60_303}>
        <Text style={styles.Text_60_303}>
          2134 Collins Ave, Miami, Florida 33170
        </Text>
      </View>
      <View style={styles.View_60_293}>
        <Text style={styles.Text_60_293}>Closed - Opens Monday 8:00 am </Text>
      </View>
      <View style={styles.View_60_302}>
        <Text style={styles.Text_60_302}>Costa Coffee</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/77a8/7142/dbfbee62490d4fbacfaa97886fa78c31"
        }}
        style={styles.ImageBackground_60_338}
      />
      <View style={styles.View_60_336}>
        <Text style={styles.Text_60_336}>Hours + Etc. </Text>
      </View>
      <View style={styles.View_60_337}>
        <Text style={styles.Text_60_337}>
          Monday thru Saturday 7:00 AM to 3:00 PM Sunday 9:00 AM to 3:00 PM  
        </Text>
      </View>
      <View style={styles.View_60_354}>
        <View style={styles.View_60_294} />
        <View style={styles.View_60_295}>
          <Text style={styles.Text_60_295}>+ Brunch </Text>
        </View>
      </View>
      <View style={styles.View_60_355}>
        <View style={styles.View_60_356} />
        <View style={styles.View_60_357}>
          <Text style={styles.Text_60_357}>+ Specials</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_60_361}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("60_419"))
        }
      >
        <View style={styles.View_60_362} />
        <View style={styles.View_60_363}>
          <Text style={styles.Text_60_363}>+ Coffees and Teas</Text>
        </View>
      </TouchableOpacity>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49ad/1e7e/1dee4f0eb5f6d30295b262edc8b3f7d0"
        }}
        style={styles.ImageBackground_60_290}
      />
      <View style={styles.View_60_364}>
        <View style={styles.View_60_305} />
        <View style={styles.View_60_308}>
          <Text style={styles.Text_60_308}>  Phone 901-725-1718</Text>
        </View>
      </View>
      <View style={styles.View_60_478}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ac98/23bf/74ded753cf3b80d52dcd53acbff6cfda"
          }}
          style={styles.ImageBackground_60_471}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5796/15b7/cda8b230c5e40f3f11a181b036612a2c"
          }}
          style={styles.ImageBackground_60_472}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6e1/97f8/afcf45f4e012b98a9b25c616cccd570d"
          }}
          style={styles.ImageBackground_60_473}
        />
        <View style={styles.View_60_474}>
          <Text style={styles.Text_60_474}>
            ©2022 Menus4ALL Inc. All Rights Reserved. By using this service you
            agree that Menus4ALL Inc. is not liable for any bodily injury or any
            other claim attributable to such use. Always check with the business
            for pricing and availability of menu items. Menus4ALL is not
            responsible for menu or pricing changes, but the information is
            believed to be accurate when posted. Listing of a menu does not mean
            that there is any affiliation, endorsement or sponsorship between
            Menus4ALL and the listed business.
          </Text>
        </View>
        <View style={styles.View_60_475}>
          <Text style={styles.Text_60_475}>Contact Us </Text>
        </View>
        <View style={styles.View_60_476}>
          <Text style={styles.Text_60_476}>Privacy Policy</Text>
        </View>
        <View style={styles.View_60_477}>
          <Text style={styles.Text_60_477}>Accessibility Policy</Text>
        </View>
      </View>
      <View style={styles.View_60_339}>
        <View style={styles.View_I60_339_38_72} />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/74de/f046/6ae6a812c91161908db1c9967808dc1e"
          }}
          style={styles.TouchableOpacity_I60_339_38_73}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("60_753"))
          }
        />
        <View style={styles.View_I60_339_38_74}>
          <Text style={styles.Text_I60_339_38_74}>Home</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2371/fbd6/0ea71f2f1149b78f2a4061156552fe13"
          }}
          style={styles.ImageBackground_I60_339_38_75}
        />
        <View style={styles.View_I60_339_38_78}>
          <Text style={styles.Text_I60_339_38_78}>Search</Text>
        </View>
        <View style={styles.View_I60_339_38_79}>
          <Text style={styles.Text_I60_339_38_79}>Waiter</Text>
        </View>
        <View style={styles.View_I60_339_38_80}>
          <Text style={styles.Text_I60_339_38_80}>Favs</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/33db/5b9f/ece2bad651294764c940fe13de3af07e"
          }}
          style={styles.ImageBackground_I60_339_38_81}
        />
        <View style={styles.View_I60_339_38_82}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e17a/49d3/37c54d34b0bfc5f2f81091cb7dd00d99"
            }}
            style={styles.ImageBackground_I60_339_38_83}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e8ef/155d/474937d0459811d09ee2bbf27a4bd7eb"
            }}
            style={styles.ImageBackground_I60_339_38_85}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("111%") },
  ImageBackground_60_286: {
    width: wp("100%"),
    height: hp("51%"),
    minHeight: hp("51%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_60_307: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("89%")
  },
  View_60_287: {
    width: wp("100%"),
    height: hp("66%"),
    minHeight: hp("66%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21%"),
    backgroundColor: "rgba(36, 35, 35, 1)",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40
  },
  ImageBackground_60_301: {
    width: wp("26%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("11%"),
    resizeMode: "cover"
  },
  View_60_303: {
    width: wp("91%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("29%"),
    justifyContent: "flex-start"
  },
  Text_60_303: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_60_293: {
    width: wp("91%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("32%"),
    justifyContent: "flex-start"
  },
  Text_60_293: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_60_302: {
    width: wp("91%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("25%"),
    justifyContent: "flex-start"
  },
  Text_60_302: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_60_338: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("80%")
  },
  View_60_336: {
    width: wp("91%"),
    minWidth: wp("91%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("64%"),
    justifyContent: "flex-start"
  },
  Text_60_336: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_60_337: {
    width: wp("82%"),
    minWidth: wp("82%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("67%"),
    justifyContent: "flex-start"
  },
  Text_60_337: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_60_354: {
    width: wp("96%"),
    minWidth: wp("96%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("55%")
  },
  View_60_294: {
    width: wp("91%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(182, 92, 34, 1)"
  },
  View_60_295: {
    width: wp("91%"),
    minWidth: wp("91%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_60_295: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_60_355: {
    width: wp("96%"),
    minWidth: wp("96%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("36%")
  },
  View_60_356: {
    width: wp("91%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(182, 92, 34, 1)"
  },
  View_60_357: {
    width: wp("91%"),
    minWidth: wp("91%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_60_357: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_60_361: {
    width: wp("96%"),
    minWidth: wp("96%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("46%")
  },
  View_60_362: {
    width: wp("91%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(182, 92, 34, 1)"
  },
  View_60_363: {
    width: wp("91%"),
    minWidth: wp("91%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_60_363: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_60_290: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("81%")
  },
  View_60_364: {
    width: wp("49%"),
    minWidth: wp("49%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("71%")
  },
  View_60_305: {
    width: wp("47%"),
    minWidth: wp("47%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    backgroundColor: "rgba(182, 92, 34, 1)"
  },
  View_60_308: {
    width: wp("45%"),
    minWidth: wp("45%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_60_308: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_60_478: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("42%"),
    minHeight: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("99%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_60_471: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_60_472: {
    flexGrow: 1,
    width: wp("10%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_60_473: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_60_474: {
    flexGrow: 1,
    width: wp("87%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19%"),
    justifyContent: "flex-start"
  },
  Text_60_474: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_60_475: {
    flexGrow: 1,
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("16%"),
    justifyContent: "flex-start"
  },
  Text_60_475: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_60_476: {
    flexGrow: 1,
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("16%"),
    justifyContent: "flex-start"
  },
  Text_60_476: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_60_477: {
    flexGrow: 1,
    width: wp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("16%"),
    justifyContent: "flex-start"
  },
  Text_60_477: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_60_339: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("99%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I60_339_38_72: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(182, 92, 34, 1)",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  TouchableOpacity_I60_339_38_73: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("3%")
  },
  View_I60_339_38_74: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_I60_339_38_74: {
    color: "rgba(250, 250, 253, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I60_339_38_75: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("3%")
  },
  View_I60_339_38_78: {
    flexGrow: 1,
    width: wp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_I60_339_38_78: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10.404254913330078,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I60_339_38_79: {
    flexGrow: 1,
    width: wp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_I60_339_38_79: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I60_339_38_80: {
    flexGrow: 1,
    width: wp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_I60_339_38_80: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I60_339_38_81: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("3%")
  },
  View_I60_339_38_82: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("3%")
  },
  ImageBackground_I60_339_38_83: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_I60_339_38_85: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
