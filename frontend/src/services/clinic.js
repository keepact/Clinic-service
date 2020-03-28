import api from './api';

export const specialties = () =>
  api().request({
    url: 'specialties',
    method: 'GET',
  });

export const professionals = () =>
  api().request({
    url: 'professionals',
    method: 'GET',
  });

export const source = () =>
  api().request({
    url: 'source',
    method: 'GET',
  });
