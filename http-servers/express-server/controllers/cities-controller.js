import citiesModel from 'models/cities-model';


function getCities(req, res) {
  return citiesModel.find()
    .then(cities => res.json(cities))
    .catch(() => res.sendStatus(404));
}

function getCity(req, res) {
  return citiesModel.findOne({ _id: req.params.id })
    .then(city => (city ? res.json(city) : Promise.reject()))
    .catch(() => res.sendStatus(404));
}

function addCity(req, res) {
  console.log('add');
  const newCity = new citiesModel(req.body);
  return newCity.save()
    .then(addedCity => res.json(addedCity))
    .catch(() => res.sendStatus(422));
}

function updateCity(req, res) {
  const newCity = req.body;
  return citiesModel.findById(req.params.id)
    .then(city => (city ? city.update(newCity) : Promise.reject()))
    .catch(() => addCity(req, res));
}

function deleteCity(req, res) {
  return citiesModel.deleteOne({ _id: req.params.id })
    .then(() => res.sendStatus(200))
    .catch(() => res.sendStatus(404));
}


export default {
  getCities, getCity, addCity, deleteCity, updateCity
};
