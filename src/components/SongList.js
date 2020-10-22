import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {selectSong} from '../actions';
class SongList extends React.Component
{
	renderList()
		{
			return this.props.songs.map((s)=>{
				return(
					<div className="item" key={s.title}>
					<div className="right floated content">
					<button 
					onClick={()=>this.props.selectSong(s)}
					className="ui button primary">
					Select	
					</button>
					</div>
					<div className="content">
					{s.title}
					</div>
					</div>

					
				);
			});
		}
	render()
	{
		
		//this.props==={songs:state.songs}
		//console.log(this.props);
		return(
			<div>
				<h2>SONG LIST</h2>
				<div className="ui divided list">
					{this.renderList()}
				</div>
			</div>
		);
	};
};

const mapStateToProps=(state)=>
{
	console.log(state);
	return {songs:state.songs};
}

export default connect(mapStateToProps,{ selectSong })(SongList);
