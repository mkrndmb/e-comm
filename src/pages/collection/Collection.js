import React from "react";
import { connect } from "react-redux";
import CollectionItem from "../../components/collection-item/CollectionItem";
import "./collection.css";
import { selectCollection } from "../../redux/shop/shop-selector";
// import {Route} from 'react-router-dom'

const Collection = ({ collection }) => {
  // console.log('colle :',collection)
  const { title, items } = collection;
  return (
    <div className="collection-page">
      {/* {console.log('m:',m)} */}
      <h2 className="title">{title}</h2>
      {console.log("in temp")}
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
      {/* <CollectionTemp title={title} items={items}/>
      <Route path={`${match.path}/${m}`} render={()=><CollectionTemp title={title} items={items}/>}/> */}
    </div>
  );
};

// const CollectionTemp =({title,items})=>(
//   <>
// <h2 className='title'>{title}</h2>
// {console.log('in temp')}
// <div className='items'>
//   {items.map(item => (
//     <CollectionItem key={item.id} item={item} />
//   ))}

// </div>
//   </>
// )

const mapStateToProps = (state, ownProps) => ({
  // m : ownProps.match.params.id,
  // collection: state.shop.collections[ownProps.match.params.id]
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

//console.log('map',state.shop.collections,ownProps.match.params)
// const mapStateToProps = (state, ownProps) => ({
//     collections: ownProps.match.params.cat(state)
// });

export default connect(mapStateToProps)(Collection);
