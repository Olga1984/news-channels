import {APIKEY, BASE_URL} from "./constants";
export class NewsSource {
    create(channel, requestType = 'GET') {
        if (requestType === 'POST'){
            const request = new RequestToChannel();
            console.log('POST');
            return request.fetch(channel, {method: 'POST', body:JSON.stringify({name:'vlad', id: '1'})});
        }
        if (requestType === 'GET'){
            const request = new RequestToChannel();
            console.log('GET');
            return request.fetch(channel);
        }
        if (requestType === 'PUT'){
           const request = new RequestToChannel();
            console.log('PUT');
           return request.fetch(channel, {method: 'PUT',body:JSON.stringify({name:'vlad', id: '1'})});
        }
    }
}

class RequestToChannel {

    fetch(channel, requestMethod) {
        const SOURCE_API = {
            fetch() {
                const url = `${BASE_URL}${channel}&sortBy=top${APIKEY}`;

                return fetch(url, requestMethod)
                    .then((response) => response.json())
            }
        };
        return SOURCE_API;
    }
}
