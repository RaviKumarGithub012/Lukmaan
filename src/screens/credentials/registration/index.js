import { connect } from 'react-redux';
import Registration from './registration';
import { bindActionCreators } from 'redux';
import { setDefault, userRegistration } from '../../../services/redux/credentional/registration/action';

const mapStateToProps = state => ({
  isRegistered: state.registration.isRegistered,
  userdata: state.registration.userdata
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  userRegistration,
  setDefault
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Registration);