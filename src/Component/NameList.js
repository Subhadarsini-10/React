import React from 'react'

function NameList() {
    const names = ['Subha', 'Megha', 'Radha']
    {/*const persons = [
        {
            id :1,
            name : 'Subha',
            age : 21,
            skills : 'java'
        },
        {
            id: 2,
            name: 'Megha',
            age: 22,
            skills: 'Angular'
        },
        {
            id: 3,
            name: 'Radha',
            age: 23,
            skills: 'Ui'
        }
    ]*/}

    const nameList = names.map((name, index) => <h2 key ={index}>{index} {name}</h2>)

    return <div>{nameList}</div>
}

export default NameList
