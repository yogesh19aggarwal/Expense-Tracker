const getPaginatedParameters = (req) => {

    const getFilter = () => {
        if (typeof req.query.filter === "string" && req.query.filter) {
            return { $text: { $search: req.query.filter }, user: req.user._id };
        }
        return { user: req.user._id };
    }
    const getDatePaginatedFilter = () => {
        const textFilter = getFilter();
        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
        const { startDate = oneWeekAgo.toISOString().split("T")[0], endDate = new Date().toISOString().split("T")[0] } = req.query;
        return { ...textFilter, date: { $gte: new Date(startDate), $lte: new Date(endDate) } };
    }
    const getLimit = () => {
        const limit = isNaN(parseInt(req.query.limit)) ? 10 : parseInt(req.query.limit);
        return limit > 0 ? limit : 10;
    }
    const getSkip = () => {
        const skip = isNaN(parseInt(req.query.skip)) ? 0 : parseInt(req.query.skip);
        return skip >= 0 ? skip : 0;
    }
    const getSelect = () => {
        const select = req.query.select || "";
        return select;
    }
    return { getLimit, getSelect, getSkip, getFilter, getDatePaginatedFilter }
}
exports.paginate = (req, __, next) => {
    const paginatedParams = getPaginatedParameters(req);
    const limit = paginatedParams.getLimit();
    const select = paginatedParams.getSelect();
    const skip = paginatedParams.getSkip();
    const filter = paginatedParams.getDatePaginatedFilter();
    const paginatedQuery = { limit, select, skip, filter };
    req.query = { ...req.query, ...paginatedQuery };
    next();
}