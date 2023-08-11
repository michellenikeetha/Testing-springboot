import React, { Component } from "react";
import MusicService from '../services/MusicService'

export default class ListMusic extends Component {

    constructor(props){
        super(props)

        this.state = {
            music: []
        }
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
                                            frameBorder="0"
                                            allowFullScreen
                                        ></iframe>
                                        )}
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