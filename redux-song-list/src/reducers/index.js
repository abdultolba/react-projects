import { combineReducers } from 'redux';

// No paarams because song list is static
const songsReducer = () => {
    return [
        { title: 'No Scrubs', duration: '4:05'},
        { title: 'Macarena', duration: '2:30 '},
        { title: 'I Want It That Way', duration: '1:49'},
        { title: 'All Star', duration: '3:15'},
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED') return action.payload;
    else return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});

