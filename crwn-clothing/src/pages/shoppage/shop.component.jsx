import React from 'react';
import CollectionPreview from '../../component/collection-preview/collection-preview.component';
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';
import { selectShopCollections } from '../../redux/shop/shop.selectors';

const ShopPage = ({collections}) => (
    <div className='shop-page'>
        {
            collections.map(({id, ...otherProperties}) => 
                <CollectionPreview key={id} {...otherProperties}/>)
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollections
})

export default connect(mapStateToProps)(ShopPage);