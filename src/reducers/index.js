import {combineReducers} from 'redux';

const songsReducer=()=>
{
	return [
		{title:'pretty savage',duration:'1:05'},
		{title:'savage love',duration:'2:05'},
		{title:'HYLT',duration:'1:56'},
		{title:'Lovesick girls',duration:'4:05'}
	];
};


const selectedSongReducer=(selectedSong=null,action)=>{
	if(action.type==='SONG_SELECTED')
	{
		return action.payload;
	}
	return selectedSong;

};

export default combineReducers({
	songs:songsReducer,
	selectedSong:selectedSongReducer
})