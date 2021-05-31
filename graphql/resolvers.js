const person = {
    name: "JinHyun",
    age: 92,
    gender: "male"
}

const resolvers = {
    Query: {
        person:() => person
    }
}

export default resolvers;