function on(event, callback) {
    let eventList = [];
    if (eventList == null)
        eventList = {};
    if (eventList[event] == null)
        eventList[event] = [];
    eventList[event].push(callback);
}

function trigger(name, data) {
    if (typeof eventList === 'undefined' ||
        typeof eventList[name] === 'undefined')
        return;

    eventList[name].forEach(function (callback) {
        callback(name, data);
    }, this);
}