import React, { useState, useEffect } from "react";
import MusicService from '../services/MusicService'
import { Link } from "react-router-dom";

export default function ListMusic() {
    const [music, setMusic] = useState([]);

    const deleteMusic = (id) => {
        MusicService.deleteMusic(id).then(res => {
            setMusic(prevMusic => prevMusic.filter(item => item.id !== id));
        });
    };

    useEffect(() => {
        MusicService.getMusic().then(res => {
            setMusic(res.data);
        });
    }, []);

    return (
        <div>
            <h1 className="text-center">List of musics</h1><br />

            <div className="row">
                <Link to="/add-music/-1" className="">
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
                        {music.map(music =>
                            <tr key={music.id}>
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
                                    <Link
                                        to={`/add-music/${music.id}`}
                                        className="btn btn-info"
                                    >
                                        Update
                                    </Link>
                                    <button
                                        onClick={() => deleteMusic(music.id)}
                                        className='btn btn-danger'
                                        style={{ marginLeft: "10px" }}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
