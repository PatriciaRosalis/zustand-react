import React from 'react';
import { usePeopleStore } from '../store';

export default function People() {
    const people = usePeopleStore((state) => state.people);

    return (
        <div>
            <h2>We have {people.length} people in our DB</h2>
            {people.map((person) => (
                <p key={person}>{person}</p>
            ))}
        </div>
    );
}
