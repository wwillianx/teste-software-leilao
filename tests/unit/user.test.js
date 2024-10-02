const { addUser, getUserById } = require('../../src/user');


describe('User Management', () => {
    let users = []; // Variável local para armazenar usuários

    beforeEach(() => {
        users = []; // Limpa a lista de usuários antes de cada teste
    });

    test('deve adicionar um usuário corretamente', () => {
        const user = { id: 1, name: 'Alice' };
        addUser(user);
        expect(getUserById(1)).toEqual(user);
    });

    test('deve retornar undefined para um usuário inexistente', () => {
        expect(getUserById(99)).toBeUndefined();
    });
});
