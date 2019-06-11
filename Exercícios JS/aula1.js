const people_aproved = [];
const validateSignUpName = (name, callback) => name && name.length >= 3;
const validateSignUpAge = (age, callback) => age && age >= 18;
const validateSignUpPersonType = (type, callback) => type && type === "fisica";
const validateSingUpCPF = (cpf, callback) => !people_aproved.length || !people_aproved.find(aprovada => aprovada.cpf === cpf);


const validateSignUp = (person, callback) => {
    const { name, age, type, cpf } = person || {};
    validateSignUpName(name, (resultName) => {
        if (resultName) {
            validateSignUpAge(age, (resultAge) => {
                if (resultAge) {
                    validateSignUpPersonType(type, (resultType) => {
                        if (resultType) {
                            validateSingUpCPF(cpf, (resultCPF) => {
                                if (resultCPF) {
                                    callback(true)
                                } else {
                                    callback(false)
                                }
                            })
                        } else {
                            callback(false)
                        }
                    })
                } else {
                    callback(false)
                }
            })
        } else {
            callback(false)
        }
    })
}

const makePerson = (name, age, cpf, type = "fisica") => {
    return {
        name: name,
        age: age,
        type: type,
        cpf: cpf
    };
};
const people_to_validate = [
    makePerson("joao", 20, "12"),
    makePerson("ana", 17, "13"),
    makePerson("maeria", 19, "12"),
];
people_to_validate.forEach(person => {
    validateSignUp(person, (resultSign) => {
        people_aproved.push(person);
    })
})

console.log(people_aproved);