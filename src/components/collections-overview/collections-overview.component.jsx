//This Component is Used From Shop Component And is used to Render the Items Which are fetched from the Collections
import {React} from "react";
import "./collections-overview.styles.scss";
import {connect} from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../collection-preview/collection-preview.component";
import { selectCollections } from "../../redux/shop/shop.selector";

const CollectionsOverview = ({collections}) => (
    <div className="collections-overview">
        {collections.map(({ id, ...otherCollectionProps }) => (
			<CollectionPreview key={id} {...otherCollectionProps} />
		))}
    </div>
);

const mapStateToProps = createStructuredSelector({
	collections:selectCollections
})

export default connect(mapStateToProps)(CollectionsOverview);