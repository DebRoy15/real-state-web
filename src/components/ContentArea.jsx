import React, { Component } from 'react'
import Filter from './Filter'
import Listings from './Listings'

export default class ContentArea extends Component {
    render() {
        return (
            <div>
                <section id="content-area">
                    <Filter />
                    <Listings />
                </section>

            </div>
        )
    }
}
