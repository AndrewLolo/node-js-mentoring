import usersMock from 'mock/users-mock';

function getUserByKey(key, value) {
    return usersMock.find((user) => user[key] === value);
}

function addUser(user) {
    usersMock.push(user);
}

export default {getUserByKey, addUser};