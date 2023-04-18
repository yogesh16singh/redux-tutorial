import { connect } from "react-redux";

import { changeToROHAN, changeToRitik } from "./redux/actionCreator/actionCreators";

const mapStateToProps = (store) => {
  let newstate = { ...store };
  return newstate;
}
const mapDispatchToProps = (dispatch) => {
  return {
    chritik: () => { dispatch(changeToRitik()) },
    chrohan: () => { dispatch(changeToROHAN()) },
  }
}

function App(props) {
  let newp = props;


  return (
    <>
      <h1>REDUX TUTORIAL BY {newp.name}</h1>
      <button onClick={(e) => newp.chrohan(e)}>changeToROHAN</button>
      <button onClick={(e) => newp.chritik(e)}>changeToRitik</button>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
