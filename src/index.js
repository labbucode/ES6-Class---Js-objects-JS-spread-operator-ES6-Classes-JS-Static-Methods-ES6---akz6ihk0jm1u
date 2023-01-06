class API {

  constructor(url, method = 'GET') {
    this.url = url;
    this.method = method;
  }

  isSecure() {
		return this.url.startsWith('https');
  }

  updateUrl(newURL) {
    this.url = newURL;
  }

}

module.exports = { API };
