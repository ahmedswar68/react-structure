import endpoint from 'core/endpoint';

export function login(form) {
    return endpoint.post('/login', form);
}

export function logout() {
    return endpoint.get('/logout');
}