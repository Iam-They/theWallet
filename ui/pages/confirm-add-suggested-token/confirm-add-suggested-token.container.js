import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { addToken, rejectWatchAsset, acceptWatchAsset } from '../../store/actions';
import { getMostRecentOverviewPage } from '../../ducks/history/history';
import ConfirmAddSuggestedToken from './confirm-add-suggested-token.component';

const mapStateToProps = (state) => {
  const {
    metamask: { suggestedAssets, tokens },
  } = state;

  return {
    mostRecentOverviewPage: getMostRecentOverviewPage(state),
    suggestedAssets,
    tokens,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToken: ({ address, symbol, decimals, image }) =>
      dispatch(addToken(address, symbol, Number(decimals), image)),
    rejectWatchAsset: (suggestedAssetID) => dispatch(rejectWatchAsset(suggestedAssetID)),
    acceptWatchAsset: (suggestedAssetID) => dispatch(acceptWatchAsset(suggestedAssetID))
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
)(ConfirmAddSuggestedToken);
