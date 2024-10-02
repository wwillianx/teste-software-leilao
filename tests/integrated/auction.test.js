const { createAuction, getAuctionById, placeBid, getBidsForAuction } = require('../../src/auction');
const { addUser } = require('../../src/user'); 

describe('Auction Management - Integration', () => {
    let auctions = []; // Variável local para armazenar leilões
    let bids = []; // Variável local para armazenar lances

    beforeEach(() => {
        auctions = []; // Limpa a lista de leilões antes de cada teste
        bids = []; // Limpa a lista de lances antes de cada teste
    });

    test('deve permitir dar um lance válido', () => {
        const auction = { id: 1, name: 'Leilão de arte', startingPrice: 100 };
        createAuction(auction);
        addUser({ id: 2, name: 'Bob' }); // Adicionando usuário
        placeBid(1, 2, 120); // Lance válido
        expect(getBidsForAuction(1)).toEqual([{ auctionId: 1, userId: 2, amount: 120 }]);
    });

    test('deve lançar um erro se o leilão não existir ao dar um lance', () => {
        expect(() => placeBid(99, 2, 120)).toThrow('Leilão não encontrado.');
    });

    test('deve lançar um erro se o lance for menor ou igual ao preço inicial', () => {
        createAuction({ id: 1, name: 'Leilão de arte', startingPrice: 100 });
        addUser({ id: 2, name: 'Bob' }); // Adicionando usuário
        expect(() => placeBid(1, 2, 100)).toThrow('O valor do lance deve ser maior do que o preço inicial.');
    });
});
