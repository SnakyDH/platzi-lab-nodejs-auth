import express from 'express';
const signUp = (req, res) => {};

const logIn = (req, res) => {};

const viewUser = (req, res) => {
  res.status(200).json({ msj: 'View user' });
};

const updateUser = (req, res) => {
  res.status(200).json({ msj: 'Update user' });
};

const deleteUser = (req, res) => {
  res.status(200).json({ msj: 'Delete user' });
};

export { viewUser, updateUser, deleteUser, signUp, logIn };
