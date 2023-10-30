const { people } = require("../data");

function addPerson(req, res) {
  const { id, name } = req.body;
  const newPerson = { id, name };
  people.push(newPerson);
  res.status(201).json(newPerson);
}

function getPeople(req, res) {
  res.status(200).json(people);
}

function getPersonById(req, res) {
  const id = parseInt(req.params.id);
  const person = people.find((p) => p.id === id);

  if (person) {
    res.status(200).json(person);
  } else {
    res.status(404).json({ message: "Person not found" });
  }
}

function updatePerson(req, res) {
  const id = parseInt(req.params.id);
  const personIndex = people.findIndex((p) => p.id === id);

  if (personIndex !== -1) {
    // Update the person entry
    people[personIndex] = { ...people[personIndex], ...req.body };
    res.status(200).json(people[personIndex]);
  } else {
    res.status(404).json({ message: "Person not found" });
  }
}

function deletePerson(req, res) {
  const id = parseInt(req.params.id);
  const updatedPeople = people.filter((p) => p.id !== id);
  console.log("updatedPeople ====> ", updatedPeople);
  console.log("updatedPeople.length ====> ", updatedPeople.length);
  console.log("people.length ====> ", people.length);

  if (updatedPeople.length < people.length) {
    // Person was deleted
    // people = updatedPeople; // Update the main people array
    // res.status(204).send();
    res.status(204).json({ people: updatedPeople, message: `Person with id ${id} deleted` })
  } else {
    res.status(404).json({ message: "Person not found" });
  }
}

module.exports = {
  addPerson,
  getPeople,
  getPersonById,
  updatePerson,
  deletePerson,
};
