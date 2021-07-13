import React from 'react'
import  './shop-page.css'
// import CollectionPreview from '../../components/collection-preview/CollectionPreview';
// import {connect} from 'react-redux'
import { Route, Switch } from 'react-router-dom';
import CollectionOverview from '../../components/collection-overview/CollectionOverview';
import Collection from '../../pages/collection/Collection'
// import {connect} from 'react-redux'

const ShopPage = ({match}) =>{

        return(
            <div className='shop-page'>
                {/* {console.log('params:',m)} */}
                <Switch>
                <Route exact path={`${match.path}`} component={CollectionOverview} />
                <Route path={`${match.path}/:collectionId`} component={Collection} />
                {/* {console.log('match:',`${match.path}`)} */}
                </Switch>
             </div>
             )
        }

// const mapStateToProps = (state,ownProps) =>({
//     m : ownProps.match.params.shop
// })

export default ShopPage