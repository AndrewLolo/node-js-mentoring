import usersModel from 'models/users-model';

function deleteUser(req, res) {
  return usersModel.deleteOne({ _id: req.params.id })
    .then(() => res.sendStatus(200))
    .catch(() => res.sendStatus(404));
}

export default { deleteUser };
