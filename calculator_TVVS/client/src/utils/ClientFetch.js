// A singleton class used for fetching data from server
class ClientFetch {

    // Initializing important variables
    constructor(domain) {
        if(ClientFetch.instance !== null)
        {
            return ClientFetch.instance;
        }   

        this.domain = domain || 'http://localhost:3000' // API server domain
        this.fetch = this.fetch.bind(this) // React binding stuff
        
        ClientFetch.instance = this;
    }


    fetch(url, options, isMultipart = false) {
        // performs api calls sending the required authentication headers
        const headers = {
            'Accept': 'application/json'
        }
        if(!isMultipart)
        {
            headers['Content-Type'] = 'application/json';
        }

        return fetch(url, {
            headers,
            ...options
        })
        .then(this._checkStatus)
        .then(response => response.json());
    }


    // This function is necessary since fetch() by default considers error code like 404, 500 as success.  
    _checkStatus(response) {
        // raises an error in case response status is not a success
        if (response.status >= 200 && response.status < 300) { // Success status lies between 200 to 300
            return response
        } else {
            var error = new Error(response.statusText)
            error.response = response
            throw error
        }
    }
}

// Define an instance static object of the class
Object.defineProperty(ClientFetch, 'instance', {
    value: null,
    writable : true,
    enumerable : true,
    configurable : false
});

ClientFetch.getInstance = function(domain)
{
    if(ClientFetch.instance !== null)
    {
        return ClientFetch.instance;
    }
    else
    {
        return new ClientFetch(domain);
    }
}

export default ClientFetch;