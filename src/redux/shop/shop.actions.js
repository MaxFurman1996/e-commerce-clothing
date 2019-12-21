import ShopActionTypes from './shop.types';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

export const fetchCollectionStart = () => {
    return {
        type: ShopActionTypes.FETCH_COLLECTIONS_START
    }
}

export const fetchCollectionSuccess = collectionsMap => {
    return {
        type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
        payload: collectionsMap
    }
}

export const fetchCollectionFailure = error => {
    return {
        type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
        payload: error
    }
}

export const fetchCollectionStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionStart());
        collectionRef.get()
            .then(snapshot => {
                const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
                dispatch(fetchCollectionSuccess(collectionsMap));
            })
            .catch(error => dispatch(fetchCollectionFailure(error.message)));
    }
}