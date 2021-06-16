import React from 'react'
import  './shop-page.css'
import SHOP_DATA from '../../assets/shopdata.js'
import CollectionPreview from '../../components/collection-preview/CollectionPreview';



class ShopPage extends React.Component{
    constructor(props){
        super(props);

        this.state={
            collections : SHOP_DATA
        }
    }

    render(){
        const {collections} = this.state

        return(
            
            <div className='shop-page'>
                {collections.map(({ id, ...otherCollectionProps }) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))}
             </div>
            
        )
        
    }
}

export default ShopPage