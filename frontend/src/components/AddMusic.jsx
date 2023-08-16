import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import MusicService from '../services/MusicService';

export default function AddMusic() {
    const { id } = useParams();

    const [music, setMusic] = useState ({
        title: '',
        category: '',
        description: '',
        link: ''
    });

    useEffect( () => {
        if(id === '-1'){
            return;
        } else {
            MusicService.getMusicById(id).then( (res) => {
                let musicData = res.data;
                setMusic({
                    title: musicData.title,
                    category: musicData.category,
                    description: musicData.description,
                    link: musicData.link
                });
            });
        }
    }, [id]);

    const saveMusic = (e) => {
        e.preventDefault();
        const updatedMusic = {
            title: music.title,
            category: music.category,
            description: music.description,
            link: music.link            
        };

        if (id === '-1') {
            MusicService.addMusic(updatedMusic).then( () => {
                window.location.href = '/';
            });
        }else{
            MusicService.updateMusic(updatedMusic, id ).then( ()=>{
                window.location.href = '/';
            });
        }
    };    

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setMusic((prevMusic) => ({
            ...prevMusic,
            [name]: value
        }));
    };

    const getTitle = () => {
        if (id === '-1') {
            return <h3>Add Music</h3>
        } else {
            return <h3>Update Music</h3>;
        }
    };

    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3'>
                        {getTitle()}
                        <div className='card-body'>
                            <form>
                                <div className='form-group'>
                                    <label> Title: </label>
                                    <input
                                        placeholder='Title'
                                        name='title'
                                        className='form-control'
                                        value={music.title}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className='form-group'>
                                    <label> Category: </label>
                                    <input
                                        placeholder='Category'
                                        name='category'
                                        className='form-control'
                                        value={music.category}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className='form-group'>
                                    <label> Description: </label>
                                    <input
                                        placeholder='Description'
                                        name='description'
                                        className='form-control'
                                        value={music.description}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className='form-group'>
                                    <label> Link: </label>
                                    <input
                                        placeholder='Link'
                                        name='link'
                                        className='form-control'
                                        value={music.link}
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <button className='btn btn-success' onClick={saveMusic}>
                                    Save
                                </button>
                                <Link to='/' className='btn btn-danger' style={{ marginLeft: '10px' }}>
                                    Cancel
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}