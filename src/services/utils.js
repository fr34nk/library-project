const delay = (delay) => new Promise((res, rej) => {

    setTimeout(function () {
        res(true)
    }, delay)
})

module.exports = {
    delay,
}
