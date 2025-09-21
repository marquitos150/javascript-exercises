const findTheOldest = function(people) {
    return people
            .map(person => {
                let currentDate = new Date();
                return "yearOfDeath" in person ? 
                {name: person.name, totalYears: (person.yearOfDeath - person.yearOfBirth)} :
                {name: person.name, totalYears: (currentDate.getFullYear() - person.yearOfBirth)};
            }).sort((personA, personB) => personB.totalYears - personA.totalYears)[0];
};

// Do not edit below this line
module.exports = findTheOldest;
