import "react-native";
import React from "react";
import { BlackText } from "../StyledText";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer.create(<BlackText>Snapshot test!</BlackText>).toJSON();

  expect(tree).toMatchSnapshot();
});
