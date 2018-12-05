import {APIKEY, BASE_URL} from "./constants";

export class NewsSource {
    create(channel, requestType = 'GET') {
        if (requestType === 'POST'){
            const request = new RequestToChannel(channel, {method: 'POST', body:JSON.stringify({name:'vlad', id: '1'})});
            return request.fetch();
            console.log('POST');
        }
        if (requestType === 'GET'){
            const request = new RequestToChannel(channel);
           return request.fetch();
            console.log('GET');
        }
        if (requestType === 'PUT'){
            const request = new RequestToChannel(channel, {method: 'PUT',body:JSON.stringify({name:'vlad', id: '1'})});
           return request.fetch();
            console.log('PUT');
        }
    }
}

class RequestToChannel {
    constructor(channel, requestType) {
        this.channel = channel;
        this.requestType = requestType;
    };
    fetch() {
      fetch(`${BASE_URL}${this.channel}&sortBy=top${APIKEY}`, this.requestType);
    }
}

 // const newsSource = new NewsSource();
// const business_insider = newsSource.create('business-insider', 'POST');
// // const bbc = newsSource.create('bbc-news', 'PUT');
// // const mtv_news = newsSource.create('mtv-news');
// // console.log('factory pattern');
