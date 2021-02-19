import React from 'react';
import {Route} from 'react-router-dom';
import {createStructuredSelector} from 'reselect'
import {connect} from 'react-redux'

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component'

import {fetchCollectionsStartAsync} from '../../redux/shop/shop.actions' 
import WithSpinner from '../../components/with-spinner/with-spinner.component'

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {

    componentDidMount(){
        
       
    }
    render(){
        const {match} = this.props
       
        return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} render={(props)=> <CollectionsOverviewWithSpinner isLoading={loading} {...props}/>}/>
            <Route path={`${match.path}/:collectionId`} render={(props)=> <CollectionPageWithSpinner isLoading={loading} {...props}/>}/>
        </div>   
        )
    }
}
const mdtp = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})
export default connect(null, mdtp)(ShopPage)