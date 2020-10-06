const report = require(''); // TODO: Set a dynamic pull of the json report
const summary = {
    name: report.collection.info.name,
    stats: {
        requests: report.run.stats.requests,
        assertions: report.run.stats.assertions
    }
}

const failures = report.run.failures.map(failure => {
    return {
        id: failure.source.id,
        name: failure.source.name,
        test: failure.error.test,
        error: failure.error.message
    }
})

const items = report.collection.item.map(item => {
    return {
        id: item.id,
        name: item.name
    }
})

const failuresId = failures.map(failure => failure.id);

const status = items.map(item => {
    if(failuresId.includes(item.id)) {
        return {
            name: item.name,
            passed: false,
            failure: failures.filter(
                fail => fail.id === item.id
            )
        }
    } else {
        return {
            name: item.name,
            passed: true
        }
    }
})

module.exports = response = {
    summary,
    status,
}
