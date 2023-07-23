import React from 'react';
import { Link } from 'react-router-dom';
import Choices from './ChoiceCard';

const skullCard = {
    name: 'Bones of the Skull',
    description: 'X'
}

const backCard = {
    name: 'Bones of the Back and Neck',
    description: 'X'
}

const shoulderCard = {
    name: 'Bones of the Shoulder',
    description: 'X'
}

const armCard = {
    name: 'Bones of the Arm',
    description: 'X'
}


const handCard = {
    name: 'Bones of the Hand',
    description: 'X'
}

const pelvisCard = {
    name: 'Bones of the Pelvis',
    description: 'X'
}

const legCard = {
    name: 'Bones of the Leg',
    description: 'X'
}

const footCard = {
    name: 'Bones of the Foot',
    description: 'X'
}




function BonesPage() {
    return (
        <div>
            <Link to="/">
                <Choices name={skullCard.name} description={skullCard.description} />
            </Link>
            <Link to="/">
                <Choices name={backCard.name} description={backCard.description} />
            </Link>
            <Link to="/">
                <Choices name={shoulderCard.name} description={shoulderCard.description} />
            </Link>
            <Link to="/">
                <Choices name={armCard.name} description={armCard.description} />
            </Link>
            <Link to="/">
                <Choices name={handCard.name} description={handCard.description} />
            </Link>
            <Link to="/">
                <Choices name={pelvisCard.name} description={pelvisCard.description} />
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

export default BonesPage