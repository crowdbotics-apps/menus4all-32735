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
      <View style={styles.View_38_234} />
      <View style={styles.View_60_277}>
        <View style={styles.View_I60_277_38_176}>
          <View style={styles.View_I60_277_38_177} />
          <View style={styles.View_I60_277_38_178}>
            <Text style={styles.Text_I60_277_38_178}>Menu</Text>
          </View>
        </View>
        <View style={styles.View_I60_277_38_227}>
          <Text style={styles.Text_I60_277_38_227}>
            Helen’s Diner - All American  123 Main Street, Miami, Florida .5
            Miles away  
          </Text>
        </View>
      </View>
      <View style={styles.View_60_262}>
        <View style={styles.View_I60_262_38_176}>
          <View style={styles.View_I60_262_38_177} />
          <View style={styles.View_I60_262_38_178}>
            <Text style={styles.Text_I60_262_38_178}>Menu</Text>
          </View>
        </View>
        <View style={styles.View_I60_262_38_227}>
          <Text style={styles.Text_I60_262_38_227}>
            Helen’s Diner - All American  123 Main Street, Miami, Florida .5
            Miles away  
          </Text>
        </View>
      </View>
      <View style={styles.View_60_267}>
        <View style={styles.View_I60_267_38_176}>
          <View style={styles.View_I60_267_38_177} />
          <View style={styles.View_I60_267_38_178}>
            <Text style={styles.Text_I60_267_38_178}>Menu</Text>
          </View>
        </View>
        <View style={styles.View_I60_267_38_227}>
          <Text style={styles.Text_I60_267_38_227}>
            Helen’s Diner - All American  123 Main Street, Miami, Florida .5
            Miles away  
          </Text>
        </View>
      </View>
      <View style={styles.View_60_272}>
        <View style={styles.View_I60_272_38_176}>
          <View style={styles.View_I60_272_38_177} />
          <View style={styles.View_I60_272_38_178}>
            <Text style={styles.Text_I60_272_38_178}>Menu</Text>
          </View>
        </View>
        <View style={styles.View_I60_272_38_227}>
          <Text style={styles.Text_I60_272_38_227}>
            Helen’s Diner - All American  123 Main Street, Miami, Florida .5
            Miles away  
          </Text>
        </View>
      </View>
      <View style={styles.View_38_235} />
      <TouchableOpacity
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b3c/bd34/e4f62147fc65e4ece95c9f466dec9235"
        }}
        style={styles.TouchableOpacity_38_236}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("30_5"))
        }
      />
      <View style={styles.View_38_237}>
        <Text style={styles.Text_38_237}>
          Making eating out fun for everyone
        </Text>
      </View>
      <View style={styles.View_38_171}>
        <Text style={styles.Text_38_171}>
          Search by cuisine nearby ... swipe left for more
        </Text>
      </View>
      <View style={styles.View_60_642}>
        <View style={styles.View_60_616}>
          <View style={styles.View_I60_616_38_165}>
            <Text style={styles.Text_I60_616_38_165}>Vegan</Text>
          </View>
          <View style={styles.View_I60_616_38_205} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af8d/1882/77ed295cda64ead5a436c6a1be5cc83d"
          }}
          style={styles.ImageBackground_60_619}
        />
      </View>
      <View style={styles.View_38_169}>
        <Text style={styles.Text_38_169}>Favoriates nearby</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6c22/00e2/2d07e46f88109f2d8f01224b7388f6f6"
        }}
        style={styles.ImageBackground_38_257}
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_60_261}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("60_283"))
        }
      >
        <View style={styles.View_38_211} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c51f/a13a/e155fb810feb1940f494f70d5e9d6e08"
          }}
          style={styles.ImageBackground_38_218}
        />
        <View style={styles.View_38_220}>
          <Text style={styles.Text_38_220}>
            Costa Coffee Current Location Open unitl 9:00 today Menu
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/547a/356b/b9363ac563ba2dba401bf692279aac83"
          }}
          style={styles.ImageBackground_38_233}
        />
      </TouchableOpacity>
      <View style={styles.View_38_212} />
      <TouchableOpacity
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c51f/a13a/e155fb810feb1940f494f70d5e9d6e08"
        }}
        style={styles.TouchableOpacity_38_219}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("60_753"))
        }
      />
      <View style={styles.View_38_221}>
        <Text style={styles.Text_38_221}>
          Mr. Bolat 2.1 Miles Away Open unitl 7:00 today Menu
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ebb/59a5/57ea9bc8d3a2a287b7240db3049202e7"
        }}
        style={styles.ImageBackground_38_222}
      />
      <View style={styles.View_38_258}>
        <View style={styles.View_38_224} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c51f/a13a/e155fb810feb1940f494f70d5e9d6e08"
          }}
          style={styles.ImageBackground_38_225}
        />
        <View style={styles.View_38_226}>
          <Text style={styles.Text_38_226}>
            Indian Flames 2.1 Miles away Closing in 30 minutes Menu
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/34c5/4319/73efc2c43d645747eb9fff4248e9e9b3"
          }}
          style={styles.ImageBackground_38_228}
        />
      </View>
      <View style={styles.View_38_173}>
        <View style={styles.View_38_174} />
        <View style={styles.View_38_175}>
          <Text style={styles.Text_38_175}>See Full List</Text>
        </View>
      </View>
      <View style={styles.View_38_170}>
        <Text style={styles.Text_38_170}>23 Open restaurants nearby</Text>
      </View>
      <View style={styles.View_60_639}>
        <View style={styles.View_60_620}>
          <View style={styles.View_I60_620_38_165}>
            <Text style={styles.Text_I60_620_38_165}>Burgers</Text>
          </View>
          <View style={styles.View_I60_620_38_205} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f39/ca1d/1a69ae7ce2727f895ec3faba668dc33a"
          }}
          style={styles.ImageBackground_60_632}
        />
      </View>
      <View style={styles.View_60_641}>
        <View style={styles.View_60_626}>
          <View style={styles.View_I60_626_38_165}>
            <Text style={styles.Text_I60_626_38_165}>Tex</Text>
          </View>
          <View style={styles.View_I60_626_38_205} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/19e0/fd93/094fe2335add9604b01311c0110bbc81"
          }}
          style={styles.ImageBackground_60_635}
        />
      </View>
      <View style={styles.View_60_640}>
        <View style={styles.View_60_623}>
          <View style={styles.View_I60_623_38_165}>
            <Text style={styles.Text_I60_623_38_165}>Pasta</Text>
          </View>
          <View style={styles.View_I60_623_38_205} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2599/a4e7/ba0de658a0242d3adb597084e9258ca9"
          }}
          style={styles.ImageBackground_60_634}
        />
      </View>
      <View style={styles.View_60_664} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4d57/39c1/222ecec5d21b7b3cc3d2de478c6b7661"
        }}
        style={styles.ImageBackground_60_665}
      />
      <View style={styles.View_60_666}>
        <Text style={styles.Text_60_666}>Breakfate</Text>
      </View>
      <View style={styles.View_38_86}>
        <View style={styles.View_38_72} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/74de/f046/6ae6a812c91161908db1c9967808dc1e"
          }}
          style={styles.ImageBackground_38_73}
        />
        <View style={styles.View_38_74}>
          <Text style={styles.Text_38_74}>Home</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2371/fbd6/0ea71f2f1149b78f2a4061156552fe13"
          }}
          style={styles.ImageBackground_38_75}
        />
        <View style={styles.View_38_78}>
          <Text style={styles.Text_38_78}>Search</Text>
        </View>
        <View style={styles.View_38_79}>
          <Text style={styles.Text_38_79}>Waiter</Text>
        </View>
        <View style={styles.View_38_80}>
          <Text style={styles.Text_38_80}>Favs</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/33db/5b9f/ece2bad651294764c940fe13de3af07e"
          }}
          style={styles.ImageBackground_38_81}
        />
        <View style={styles.View_38_82}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e17a/49d3/37c54d34b0bfc5f2f81091cb7dd00d99"
            }}
            style={styles.ImageBackground_38_83}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e8ef/155d/474937d0459811d09ee2bbf27a4bd7eb"
            }}
            style={styles.ImageBackground_38_85}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("111%") },
  View_38_234: {
    width: wp("100%"),
    height: hp("86%"),
    minHeight: hp("86%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(36, 35, 35, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  View_60_277: {
    width: wp("87%"),
    height: hp("6%"),
    top: hp("115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I60_277_38_176: {
    flexGrow: 1,
    width: wp("21%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("0%")
  },
  View_I60_277_38_177: {
    width: wp("21%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(17, 17, 17, 1)"
  },
  View_I60_277_38_178: {
    width: wp("17%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    justifyContent: "flex-start"
  },
  Text_I60_277_38_178: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I60_277_38_227: {
    flexGrow: 1,
    width: wp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I60_277_38_227: {
    color: "rgba(18, 18, 18, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_60_262: {
    width: wp("87%"),
    height: hp("6%"),
    top: hp("99%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I60_262_38_176: {
    flexGrow: 1,
    width: wp("21%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("0%")
  },
  View_I60_262_38_177: {
    width: wp("21%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(17, 17, 17, 1)"
  },
  View_I60_262_38_178: {
    width: wp("17%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    justifyContent: "flex-start"
  },
  Text_I60_262_38_178: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I60_262_38_227: {
    flexGrow: 1,
    width: wp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I60_262_38_227: {
    color: "rgba(18, 18, 18, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_60_267: {
    width: wp("87%"),
    height: hp("6%"),
    top: hp("107%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I60_267_38_176: {
    flexGrow: 1,
    width: wp("21%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("0%")
  },
  View_I60_267_38_177: {
    width: wp("21%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(17, 17, 17, 1)"
  },
  View_I60_267_38_178: {
    width: wp("17%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    justifyContent: "flex-start"
  },
  Text_I60_267_38_178: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I60_267_38_227: {
    flexGrow: 1,
    width: wp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I60_267_38_227: {
    color: "rgba(18, 18, 18, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_60_272: {
    width: wp("87%"),
    height: hp("6%"),
    top: hp("90%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I60_272_38_176: {
    flexGrow: 1,
    width: wp("21%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("0%")
  },
  View_I60_272_38_177: {
    width: wp("21%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(17, 17, 17, 1)"
  },
  View_I60_272_38_178: {
    width: wp("17%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    justifyContent: "flex-start"
  },
  Text_I60_272_38_178: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I60_272_38_227: {
    flexGrow: 1,
    width: wp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I60_272_38_227: {
    color: "rgba(18, 18, 18, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_38_235: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  TouchableOpacity_38_236: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("2%"),
    resizeMode: "cover"
  },
  View_38_237: {
    width: wp("91%"),
    minWidth: wp("91%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_38_237: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_38_171: {
    width: wp("91%"),
    minWidth: wp("91%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("20%"),
    justifyContent: "flex-start"
  },
  Text_38_171: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_60_642: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("24%")
  },
  View_60_616: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I60_616_38_165: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_I60_616_38_165: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I60_616_38_205: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_60_619: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    resizeMode: "cover"
  },
  View_38_169: {
    width: wp("79%"),
    minWidth: wp("79%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("40%"),
    justifyContent: "flex-start"
  },
  Text_38_169: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_38_257: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  TouchableOpacity_60_261: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("45%")
  },
  View_38_211: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(182, 92, 34, 1)",
    borderWidth: 5
  },
  ImageBackground_38_218: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("2%")
  },
  View_38_220: {
    width: wp("35%"),
    minWidth: wp("35%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_38_220: {
    color: "rgba(182, 92, 34, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_38_233: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    resizeMode: "cover"
  },
  View_38_212: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%"),
    top: hp("44%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  TouchableOpacity_38_219: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    top: hp("46%")
  },
  View_38_221: {
    width: wp("35%"),
    minWidth: wp("35%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("54%"),
    justifyContent: "flex-start"
  },
  Text_38_221: {
    color: "rgba(26, 24, 24, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_38_222: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("46%"),
    resizeMode: "cover"
  },
  View_38_258: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("65%")
  },
  View_38_224: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_38_225: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("2%")
  },
  View_38_226: {
    width: wp("35%"),
    minWidth: wp("35%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_38_226: {
    color: "rgba(26, 24, 24, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_38_228: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    resizeMode: "cover"
  },
  View_38_173: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%"),
    top: hp("70%")
  },
  View_38_174: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(182, 92, 34, 1)"
  },
  View_38_175: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_38_175: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_38_170: {
    width: wp("82%"),
    minWidth: wp("82%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("87%"),
    justifyContent: "flex-start"
  },
  Text_38_170: {
    color: "rgba(182, 92, 34, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_60_639: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("24%")
  },
  View_60_620: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I60_620_38_165: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_I60_620_38_165: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I60_620_38_205: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_60_632: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%")
  },
  View_60_641: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("24%")
  },
  View_60_626: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I60_626_38_165: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_I60_626_38_165: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I60_626_38_205: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_60_635: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%")
  },
  View_60_640: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("24%")
  },
  View_60_623: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I60_623_38_165: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_I60_623_38_165: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I60_623_38_205: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_60_634: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%")
  },
  View_60_664: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91%"),
    top: hp("24%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 25
  },
  ImageBackground_60_665: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93%"),
    top: hp("26%"),
    resizeMode: "cover"
  },
  View_60_666: {
    width: wp("32%"),
    minWidth: wp("32%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("95%"),
    top: hp("35%"),
    justifyContent: "flex-start"
  },
  Text_60_666: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_38_86: {
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
  View_38_72: {
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
  ImageBackground_38_73: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("3%")
  },
  View_38_74: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_38_74: {
    color: "rgba(250, 250, 253, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_38_75: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("3%")
  },
  View_38_78: {
    flexGrow: 1,
    width: wp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_38_78: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10.404254913330078,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_38_79: {
    flexGrow: 1,
    width: wp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_38_79: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_38_80: {
    flexGrow: 1,
    width: wp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_38_80: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_38_81: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("3%")
  },
  View_38_82: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("3%")
  },
  ImageBackground_38_83: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_38_85: {
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
