import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';
import WithSpinner from '../with-spinner/with-spinner.component'
import CollectionOverView from './collections-overview.component';


const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
})

const CollectionsOverViewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionOverView);

export default CollectionsOverViewContainer;