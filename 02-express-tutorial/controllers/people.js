const { people } = require("../data");
console.log("people ====> ", people);

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

  if (updatedPeople.length < people.length) {
    // Person was deleted
    people = updatedPeople; // Update the main people array
    res.status(204).send();
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
