import Dashboard from './dashboard';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { latestVideos } from '../../../../services/redux/dashboard/action';

const mapStateToProps = state => ({
  videosData: state.dashboardReducer.latestVideos,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  latestVideos
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);