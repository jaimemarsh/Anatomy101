import React from 'react';

function Choices(props) {

    return (
        <div className="container is-max-desktop has-text-centered mt-6">
            <div className="card">
                <div className="card-content">
                    <div className="content">
                        <h1>{props.name}</h1>
                        <p>{props.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Choices