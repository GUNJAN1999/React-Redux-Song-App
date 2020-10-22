import React from 'react';
import {connect} from 'react-redux';

const SongDetail=(props)=>{
	console.log(props);
	if(props.song==null)
	{
		return(
			<div>SELECT A SONG</div>
		);
	}
	return (
		<div>
			<h3>DETAILS  FOR : </h3>
			<p>
			TITLE : {props.song.title}
			</p>
			<p>
			DURATION : {props.song.duration}
			</p>
		</div>
	);
}

const mapStateToProps=state=>
{
	return {
		song:state.selectedSong
	}
}
export default connect(mapStateToProps)(SongDetail);





















