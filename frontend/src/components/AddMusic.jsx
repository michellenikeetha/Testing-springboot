import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import MusicService from '../services/MusicService';

export default class AddMusic extends Component {

    constructor(props){
        super(props)

        this.state = {
            title: '',
            category: '',
            description: '',
            link: ''
        }
        this.changeTitleHandler = this.changeTitleHandler.bind(this);
        this.changeCategoryHandler = this.changeCategoryHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.changeLinkHandler = this.changeLinkHandler.bind(this);
    }

    addMusic = (e) => {
        e.preventDefault();
        let music = {title: this.state.title, category: this.state.category, description: this.state.description, link: this.state.link};
        console.log('music => ' + JSON.stringify(music));

        MusicService.addMusic(music).then(res => {
            window.location.href = '/';
        });
    }

    changeTitleHandler = (event) => {
        this.setState({title: event.target.value});
    }

    changeCategoryHandler = (event) => {
        this.setState({category: event.target.value});
    }

    changeDescriptionHandler = (event) => {
        this.setState({description: event.target.value});
    }

    changeLinkHandler = (event) => {
        this.setState({link: event.target.value});
    }

  render() {
    return (
      <div>
        <div className='container'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                  <h3>Add Music</h3>
                  <div className = "card-body">
                    <form>
                        <div className = "form-group">
                            <label> Title: </label>
                            <input placeholder="Title" name="title" className="form-control" 
                                value={this.state.title} onChange={this.changeTitleHandler}/>
                        </div>
                        <div className = "form-group">
                            <label> Category: </label>
                            <input placeholder="Category" name="category" className="form-control" 
                                value={this.state.category} onChange={this.changeCategoryHandler}/>
                        </div>
                        <div className = "form-group">
                            <label> Description: </label>
                            <input placeholder="Description" name="description" className="form-control" 
                                value={this.state.description} onChange={this.changeDescriptionHandler}/>
                        </div>
                        <div className = "form-group">
                            <label> Link: </label>
                            <input placeholder="Link" name="link" className="form-control" 
                                value={this.state.link} onChange={this.changeLinkHandler}/>
                        </div>

                        <button className="btn btn-success" onClick={this.addMusic}>Save</button>
                        <Link to="/" className="btn btn-danger" style={{ marginLeft: "10px" }}>Cancel</Link>
                    </form>
                  </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

