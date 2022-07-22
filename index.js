function gooseHelper(req, res, modelAction, optionalErrorMessage, optionalSuccessMessage, optionalUpdate) {
    if (optionalUpdate) {
        modelAction
            .then((req) => {
                return originalData;
            })
            .then((originalData) => {
                return optionalUpdate;
            })
            .then((data) =>
                !data
                    ? res.status(404).json({ message: optionalErrorMessage || 'Could not find data with that information' })
                    : res.json({ message: optionalSuccessMessage, data })
            )
            .catch((err) => res.status(500).json(err));
    } else {
        modelAction
            .then((data) =>
                !data
                    ? res.status(404).json({ message: optionalErrorMessage || 'Could not find data with that information' })
                    : res.json(!optionalSuccessMessage ? data : { message: optionalSuccessMessage, data })
            )
            .catch((err) => res.status(500).json(err));

    };
};

module.exports = gooseHelper;