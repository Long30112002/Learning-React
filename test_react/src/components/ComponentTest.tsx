import React from 'react'
interface StudentType {
    name: string;
    age: number;
    email: string;
}
function test1({ student }: { student: StudentType }) {
    return (
        <div>
            <p>{student.name}</p>
            <p>{student.age}</p>
            <p>{student.email}</p>
        </div>
    )
}

function test2({ name, age, email }: StudentType) {
    return (
        <div>
            <p>{name}</p>
            <p>{age}</p>
            <p>{email}</p>
        </div>
    )
}

function test3({ student: { name, age, email } }: { student: StudentType }) {
    return (
        <div>
            <p>{name}</p>
            <p>{age}</p>
            <p>{email}</p>
        </div>
    )
}

export default test1;
