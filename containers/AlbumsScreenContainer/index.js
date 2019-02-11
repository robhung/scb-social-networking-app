import { compose, lifecycle, withState, withHandlers } from "recompose";
import { connect } from "react-redux";

const initialState = {};

const handlers = {};

const AlbumsScreenContainer = compose(
  connect(({ user }) => ({ user })),
  withState("state", "updateState", initialState),
  withHandlers(handlers),
  lifecycle({
    componentDidMount() {
      this.props.navigation.setParams({ user: this.props.user });
    }
  })
);

export default AlbumsScreenContainer;
