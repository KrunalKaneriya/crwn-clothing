import React from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import CollectionsOverView from "../../components/collections-overview/collections-overview.component";


const ShopPage = ({collections}) => (
	<div className="shop-page">
		<CollectionsOverView/>
	</div>
);

export default ShopPage;
