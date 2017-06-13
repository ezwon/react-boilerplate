// import { take, call, put, select } from 'redux-saga/effects';
import { call, put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { requestLinksFailed, requestLinksSucceeded } from './actions';
import { REQUEST_LINKS } from './constants';

// Individual exports for testing
function fetchLinksFromServer(topicName) {
  return fetch(`http://localhost:3000/api/topics/${topicName}/links`)
    .then(response => response.json());
}

function* fetchLinks(action) {
  try {
    const links = yield call(fetchLinksFromServer, action.topicName);
    yield put(requestLinksSucceeded(links));
    console.log('Links from Server', links);
  } catch (e) {
    yield put(requestLinksFailed(e.message));
  }
}


export function* fetchLinksSaga() {
  yield* takeLatest(REQUEST_LINKS, fetchLinks);
}

// All sagas to be loaded
export default [
  fetchLinksSaga,
];
