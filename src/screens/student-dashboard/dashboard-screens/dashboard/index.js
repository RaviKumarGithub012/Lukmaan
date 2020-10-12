import Dashboard from './dashboard';
import { latestVideos } from '../../../../services/redux/dashboard/action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const mapStateToProps = state => ({
  videosData: state.dashboardReducer.latestVideos,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  latestVideos
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);