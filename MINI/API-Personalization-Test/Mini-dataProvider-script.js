var miniDataProvider = {
    name: "Mini USA Customer API Data",
    version: "1.0.0",
    provider: function(callback) {
        callback(null, {
            mini1: 1
        });
    }
};
window.targetGlobalSettings = {
    dataProviders: [
        simpleDataProvider
    ]
};