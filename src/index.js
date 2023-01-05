class API{
#secure;
construction (url,method='GET'){
this.url= url;
this.method= method;
this.#secure= url.startWith('https')
}
isSecure(){
return this.#secure;
}
updateUrl(newURL){
this.url = newURL
this.#secure = newURL('https')
}
}

module.exports = { API }
