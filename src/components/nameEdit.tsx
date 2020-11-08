import React, { useState } from 'react'

type Person = {
    name?: string,
    age?: number
}

export const NameEdit: React.FC<Person> = (props) => {

    const [person, setPerson] = useState<Person>({
        name: 'Sam Bell',
        age: 29
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPerson({name: e.target.value})
      }

    return (
        <div>
            <span>Name is {person.name}</span>
            <input onChange={handleChange}></input>
        </div>
    )
}