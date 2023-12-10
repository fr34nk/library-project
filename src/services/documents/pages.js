const axios = require('axios');


class PagesService  {
    baseURL = undefined;
    pages = {}

    constructor (config={
        baseURL: '',
        links: {
            main: ''
        }
    }) {
        this.baseURL = config.baseURL;
        this.pages = Object.entries(config.links)
            .reduce((acc, [key, link]) => { acc[key] = `${this.baseURL}/${link}`; return acc; }, {})
    }

    async getMainPage ( ) {
        return axios({
            method: 'get',
            url: this.pages['main'],
        })
        .then(function (response) {
            const htmlPage = response.data;
            return htmlPage;
        })
        .catch(function (err) {
            throw new Error(`[PageService]: ${err}`)
        })
    }
}

const pageService = new PagesService({
    baseURL: 'http://127.0.0.1:3333',
    links: {
        main: 'mock/api/biblioteca/content_rendered/test_2.html'
    }
})

module.exports = {
    pageService: pageService
}