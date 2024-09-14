function getAge(person) {
    if (!(person.yearOfDeath)) {
        person.yearOfDeath = new Date().getFullYear();
    }
    return person.yearOfDeath - person.yearOfBirth;
}

const findTheOldest = function(arr) {
    const sorted = arr.toSorted(
        (person, next) => getAge(next) - getAge(person)
    );
    return sorted[0];
}

// Do not edit below this line
module.exports = findTheOldest;
