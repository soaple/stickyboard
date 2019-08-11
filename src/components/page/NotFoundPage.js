// src/components/page/NotFoundPage.js

import React from 'react'

export default class NotFoundPage extends React.Component {
    render () {
        return (
            <main>
                <div className="main-content">
                    <div className="not-found">
                        <h1>404</h1>
                        <h2>Page not found!</h2>
                    </div>
                </div>
            </main>
        )
    }
}
