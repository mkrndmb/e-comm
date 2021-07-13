import React from 'react'
import './collection-overview.css'
import CollectionPreview from '../collection-preview/CollectionPreview'
import {connect} from 'react-redux'
import {selectCollectionsForPreview} from '../../redux/shop/shop-selector'

const CollectionOverview =({collections})=>(
    <div className='collection-overview'>
        {collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))}
    </div>
)

const mapStateToProps = state => ({
    collections: selectCollectionsForPreview(state)
  });
  

export default connect(mapStateToProps)(CollectionOverview)