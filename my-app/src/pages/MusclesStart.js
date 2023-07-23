import React from 'react';
import { Link } from 'react-router-dom';
import Choices from './ChoiceCard';

const neckCard = {
    name: 'Muscles of the Neck',
    description: 'X'
}

const backCard = {
    name: 'Muscles of the Back',
    description: 'X'
}

const shoulderCard = {
    name: 'Muscles of the Shoulder',
    description: 'X'
}

const chestCard = {
    name: 'Muscles of the Chest',
    description: 'X'
}

const armCard = {
    name: 'Muscles of the Arm',
    description: 'X'
}

const gluteCard = {
    name: 'Muscles of the Glutes',
    description: 'X'
}

const legCard = {
    name: 'Muscles of the Leg',
    description: 'X'
}

const footCard = {
    name: 'Muscles of the Foot',
    description: 'X'
}




function MusclePage() {
    return (
        <div>
            <Link to="/">
                <Choices name={neckCard.name} description={neckCard.description} />
            </Link>
            <Link to="/">
                <Choices name={shoulderCard.name} description={shoulderCard.description} />
            </Link>
            <Link to="/">
                <Choices name={backCard.name} description={backCard.description} />
            </Link>
            <Link to="/">
                <Choices name={chestCard.name} description={chestCard.description} />
            </Link>
            <Link to="/">
                <Choices name={armCard.name} description={armCard.description} />
            </Link>
            <Link to="/">
                <Choices name={gluteCard.name} description={gluteCard.description} />
            </Link>
            <Link to="/">
                <Choices name={legCard.name} description={legCard.description} />
            </Link>
            <Link to="/">
                <Choices name={footCard.name} description={footCard.description} />
            </Link>
        </div >
    );


}

export default MusclePage