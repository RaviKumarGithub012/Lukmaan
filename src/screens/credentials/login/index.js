import { connect } from 'react-redux';
import Login from './login';
import { bindActionCreators } from 'redux';
import { userLoginFun, setDefault } from '../../../services/redux/credentional/login/action';

const mapStateToProps = state => ({
  userData: state.userLogin.userData,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  userLoginFun,
  setDefault
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);