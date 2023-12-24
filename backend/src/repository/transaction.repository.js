class TransactionRepository {
    static createNew(transaction) {
        return this.create(transaction);
    }
}

module.exports = TransactionRepository;