import CitiesModel from 'models/cities-model';


function getCities(req, res) {
  return CitiesModel.find()
    .then(cities => res.json(cities))
    .catch(() => res.sendStatus(404));
}

function getCity(req, res) {
  return CitiesModel.findById(req.params.id)
    .then(city => (city ? res.json(city) : Promise.reject()))
    .catch(() => res.sendStatus(404));
}

function addCity(req, res) {
  const city = new CitiesModel(req.body);
  return city.save()
    .then(addedCity => res.json(addedCity))
    .catch(() => res.sendStatus(422));
}

function updateCity(req, res) {
  const newCity = req.body;
  return CitiesModel.findById(req.params.id)
    .then(city => (city ? city.update(newCity) : Promise.reject()))
    .then(city => res.json(city))
    .catch(() => addCity(req, res));
}

function deleteCity(req, res) {
  return CitiesModel.deleteOne({ _id: req.params.id })
    .then(() => res.sendStatus(200))
    .catch(() => res.sendStatus(404));
}


export default {
  getCities, getCity, addCity, deleteCity, updateCity
};
