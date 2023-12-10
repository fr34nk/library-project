const NodeCache = require("node-cache");

class Cacheable extends NodeCache {};

class Cache {
    constructor (provider = Cacheable, config = {
        persistenceTime: 60 * 60 * 24 * 7 /* 7 days */,
    }) {
        this.cache = provider
        this.ttl = config.persistenceTime;
    }

    async get (key) {
        const res = await this.cache.get(key);
        console.log('res');
        console.log(res)
        return  res
    }

    async set (key, value, time) {
        console.log('key');
        console.log(key)
        console.log('value');
        console.log(value)
        await this.cache.set(key, value, time || this.persistenceTime)
    }

    exists (key) {
        return this.cache.has(key)
    }
}

module.exports = new Cache(new NodeCache(), {
    persistenceTime: 60 * 60 /* 1 hour */
})
    