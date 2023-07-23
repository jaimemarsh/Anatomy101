import React from 'react';
import { Link } from 'react-router-dom';
import Choices from './ChoiceCard';

const musclesCard = {
    name: 'Muscles',
    description: 'Creates Movement'
}

const BonesCard = {
    name: 'Bones',
    description: 'Creats Structure'
}

const Start = () => {
    return (
        <div class="has-text-centered mt-6">
            <h1 class="title">Welcome to Bare Bones!</h1>
            <p>A way to study the bones and muscles of the human body in one organzied place</p>
            <div>

            </div>
            <div>
                <Link to="/BonesStart">
                    <Choices name={BonesCard.name} description={BonesCard.description} />
                </Link>
                <p class="has-text-centered mt-6">Never studied anatomy before? Start with the Bones!</p>
            </div>
            <div>
                <Link to="/MusclesStart">
                    <Choices name={musclesCard.name} description={musclesCard.description} />
                </Link>
                <p class="has-text-centered my-6">Feeling confident? Start with the muscles!</p>
            </div>
        </div>
    );
};

export default Start;