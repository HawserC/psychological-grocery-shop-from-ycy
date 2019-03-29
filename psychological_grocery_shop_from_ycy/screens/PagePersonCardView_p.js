import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  AppRegistry,
  Button,
  StatusBar,
  Alert,
  TouchableOpacity
} from "react-native";

class PagePersonCardView_p extends Component {
  _onPressButton_back() {
    this.props.navigation.goBack();
  }

  _onPressButton_mail_box() {
    Alert.alert("点击邮箱");
  }

  _onPressButton_mail_to_ChaoYue() {
    this.props.navigation.push("MailToChaoYue_j");
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          backgroundColor="#ff0000"
          translucent={true}
          hidden={true}
          animated={true}
        />

        <ImageBackground
          resizeMode="stretch"
          style={styles.container}
          source={require("./../img/P1.png")}
        >

        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "ios" ? 60 : 0
  }
});

export default PagePersonCardView_p;
