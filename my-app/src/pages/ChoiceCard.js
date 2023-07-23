import React from 'react';

function Choices(props) {

    return (
        <div class="container is-max-desktop has-text-centered mt-6">
            <div class="card">
                <div class="card-content">
                    <div class="content">
                        <h1>{props.name}</h1>
                        <p>{props.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Choices