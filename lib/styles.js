import { StyleSheet, Dimensions } from "react-native";
const { width: viewportWidth } = Dimensions.get("window");
function wp(percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
  },
  flagButtonView: {
    width: 72,
    height: "100%",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  flagButtonExtraWidth: {
    width: wp(23),
  },
  shadow: {
    shadowColor: "rgba(0,0,0,0.4)",
    shadowOffset: {
      width: 1,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  dropDownImage: {
    height: 14,
    width: 12,
  },
  textContainer: {
    flex: 1,
    backgroundColor: "#F8F9F9",
    paddingHorizontal: 18,
    paddingVertical: 18,
    textAlign: "left",
    flexDirection: "row",
    alignItems: "center",
  },
  codeText: {
    fontSize: 16,
    marginRight: 10,
    fontWeight: "500",
    color: "#000000",
  },
  numberText: {
    fontSize: 16,
    color: "#000000",
    flex: 1,
  },
});

export default styles;
