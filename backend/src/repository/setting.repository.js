class SettingRepository {
    static createSetting({ user, currencyCode, countryCode }) {
        return this.create({ user, currencyCode, countryCode });
    }
}

module.exports = SettingRepository;