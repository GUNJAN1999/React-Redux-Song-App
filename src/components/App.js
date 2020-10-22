import React from 'react';
import ReactDOM from 'react-dom';
import {selectSong} from '../actions';
import SongDetail from './SongDetail';
import SongList from './SongList';

const App=()=>
{
	return(
		<div style={{backgroundColor:"orange"}} 
		className="ui container grid">
		<div className="ui row">
			<div className="column eight wide">
			<SongList/>
			</div>
			<div className="column eight wide">

				<SongDetail/>
			</div>
		</div>
		</div>
	);
}

export default App;  