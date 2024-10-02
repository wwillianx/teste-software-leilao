const { createAuction, getAuctionById } = require('../../src/auction');


describe('Auction Management', () => {
    let auctions = []; // Variável local para armazenar leilões

    beforeEach(() => {
        auctions = []; // Limpa a lista de leilões antes de cada teste
    });

    test('deve criar um leilão corretamente', () => {
        const auction = { id: 1, name: 'Leilão de arte', startingPrice: 100 };
        createAuction(auction);
        expect(getAuctionById(1)).toEqual(auction);
    });

    test('deve retornar undefined para um leilão inexistente', () => {
        expect(getAuctionById(99)).toBeUndefined();
    });
});
