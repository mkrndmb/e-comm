import React from 'react'
import  './shop-page.css'
// import CollectionPreview from '../../components/collection-preview/CollectionPreview';
// import {connect} from 'react-redux'
import { Route, Switch } from 'react-router-dom';
import CollectionOverview from '../../components/collection-overview/CollectionOverview';

// import Collection from '../../pages/collection/Collection'
import {connect} from 'react-redux'
import {firestore,convertCollectionsSnapToMap} from '../../firebase/firebase.utils'
import {updateCollection} from '../../redux/shop/shop-action'


class ShopPage extends React.Component {
    
    unsubscribeFromSnapshot=null;
    
    componentDidMount(){
        const {updateCollections} = this.props  
        const collectionRef = firestore.collection('collections')
        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snap=>{
            // console.log('hii')
            const collectionsMap = convertCollectionsSnapToMap(snap)
            updateCollections(collectionsMap)
            })
        }


    render(){
              
        return(
            <div className='shop-page'>
                {/* {console.log('params:',m)} */}
                <Switch>
                <Route exact path='/shop' component={CollectionOverview} />
                {/* <Route exact path='/shop/:collectionId' component={Collection} /> */}
                {/* {console.log('match:',`${match.path}`)} */}
                </Switch>
             </div>
             )

        }   
     }

// const mapStateToProps = (state,ownProps) =>({
//     m : ownProps.match.params.shop
// })

const mapdispatchToProps = (dispatch) =>({
    updateCollections : (collectionsMap) => dispatch(updateCollection(collectionsMap))
})

export default connect(null,mapdispatchToProps)(ShopPage)