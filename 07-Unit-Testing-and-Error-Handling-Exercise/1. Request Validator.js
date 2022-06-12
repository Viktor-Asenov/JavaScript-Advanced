function requestValidator(request) {
    const allowedMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const allowedUri = /^[A-z0-9\.\*]+$/;
    const allowedVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    const allowedMessage = /^[0-9\w]*$/;

    if (!allowedMethods.includes(request.method) || request.method == undefined) {
        throw new Error(`Invalid request header: Invalid Method`);
    }

    if (!allowedUri.test(request.uri) || request.uri == undefined) {
        throw new Error(`Invalid request header: Invalid URI`);
    }

    if (!allowedVersions.includes(request.version) || request.version == undefined) {
        throw new Error(`Invalid request header: Invalid Version`);
    }

    if (!allowedMessage.test(request.message) || request.message == undefined) {
        throw new Error(`Invalid request header: Invalid Message`);
    }

    return request;
}

console.log(requestValidator({
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
  }  
  ))