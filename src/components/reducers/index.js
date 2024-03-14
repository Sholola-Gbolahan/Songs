import { combineReducers } from "redux"

export const songsReducer = () => {
    return [ 
        {title:"No woman", duration: "2:40"},
        {title: "No Scrubs", duration: "3:00"},
        {title: "Well Being", duration: "1:40"},
        {title:"Lonly at the top", duration: "4:50"}
    ]
}

export const selectSongReducer = (selectSong = null, action) => {
    if (action.type === "SONG_SELECTED"){
        return action.payload
    }

    return selectSong
}


export default combineReducers({
    songs: songsReducer,
    selectedSong: selectSongReducer
});

