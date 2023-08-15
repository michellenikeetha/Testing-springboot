import React, { Component } from "react";
import MusicService from '../services/MusicService'
import { Link } from "react-router-dom";

export default class ListMusic extends Component {

    constructor(props){
        super(props)

        this.state = {
            music: []
        }
        this.deleteMusic = this.deleteMusic.bind(this);
    }

    deleteMusic(id){
        MusicService.deleteMusic(id).then ( res => {
            this.setState({music: this.state.music.filter(music => music.id !== id)})
        });
    }

    componentDidMount(){
        MusicService.getMusic().then((res) => {
            this.setState({music: res.data})
        });
    }

    render() {
        return (
            <div>
                <h1 className="text-center">List of musics</h1><br/>

                <div className="row">
                    <Link to="/add-music" className="">
                        Add Music
                    </Link>
                </div>

                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Category</th>
                                <th>Description</th>
                                <th>Link</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.music.map(
                                music => 
                                <tr key = {music.id}>
                                    <td>{music.title}</td>
                                    <td>{music.category}</td>
                                    <td>{music.description}</td>
                                    <td>
                                        {music.link && (
                                        <iframe
                                            title={music.title}
                                            width="300"
                                            height="200"
                                            src={music.link}
                                            allowFullScreen
                                        ></iframe>
                                        )}
                                    </td>
                                    <td>
                                        <button onClick={ () => this.deleteMusic(music.id)} className='btn btn-danger' style={{marginLeft: "10px"}}>Delete</button>
                                    </td>
                                </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}