import React, { Component } from "react"
import axios from 'axios'


import PortfolioItem from "./portfolio-item"

export default class PortfolioContainer extends Component {
    constructor() {
        super();

        this.state = {
            pageTitle: "Welcome to Nathans's Portfolio",
            isLoading: false,
            data: []
        }
        this.handleFilter = this.handleFilter.bind(this);
    }

    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter
            })
        })
    }

    getPortfolioItems () {
        axios.get('https://daboss.devcamp.space/portfolio/portfolio_items')
      .then(response => {
        // handle success
        console.log(response);
        this.setState({
            data: response.data.portfolio_items
        })
      })
    
      .catch(error => {
        // handle success
        console.log(error);
      })
      }

    PortfolioItems() {

        return this.state.data.map(item => {
            console.log("Portfolio Item", item.banner_image_url);
            return (
                <PortfolioItem key={item.id} item={item}/>
            ) ;
        });
    }

    componentDidMount() {
    this.getPortfolioItems();
    }

    render () {
        if (this.state.isLoading) {
            return <div>Loading...</div>
        }


        return (
            <div>
                <h2>{this.state.pageTitle}</h2>

                <button onClick={() => this.handleFilter('title1')}>title1</button>
                <button onClick={() => this.handleFilter('title2')}>title2</button>
                <button onClick={() => this.handleFilter('title3')}>title3</button>

                <div className="portfolio-items-wrapper">
                    {this.PortfolioItems()}
                </div>
            </div>
        )
    }
}