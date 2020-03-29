import api from './api';

export const specialties = () =>
  api().request({
    url: 'specialties',
    method: 'GET',
  });

export const professionals = (id) =>
  api().request({
    url: 'professionals',
    method: 'GET',
    data: {
      especialidade_id: id,
    },
  });

export const source = () =>
  api().request({
    url: 'source',
    method: 'GET',
  });

export const scheduling = (data) =>
  api().request({
    url: 'schedules',
    method: 'POST',
    data,
  });
