var cacheManager = Titanium.App.Properties.getObject("cachedXHRDocuments", {});

XHR = function() {};

XHR.prototype.get = function(url, onSuccess, onError, extraParams) {
    Titanium.API.info(url);
    var onSuccess = onSuccess || function() {};
    var onError = onError || function() {};
    var extraParams = extraParams || {};
    extraParams.async = extraParams.hasOwnProperty("async") ? extraParams.async : true;
    extraParams.ttl = extraParams.ttl || false;
    extraParams.shouldAuthenticate = extraParams.shouldAuthenticate || false;
    extraParams.contentType = extraParams.contentType || "application/json";
    var cache = readCache(url);
    if (extraParams.ttl && 0 != cache) {
        var result = {};
        result.status = "cache";
        result.data = cache;
        onSuccess(result);
    } else {
        var xhr = Titanium.Network.createHTTPClient({
            enableKeepAlive: false
        });
        var result = {};
        xhr.open("GET", url, extraParams.async);
        xhr.setRequestHeader("Content-Type", extraParams.contentType);
        if (extraParams.shouldAuthenticate) {
            var authstr = "Basic " + Titanium.Utils.base64encode(extraParams.username + ":" + extraParams.password);
            xhr.setRequestHeader("Authorization", authstr);
        }
        xhr.onload = function() {
            result.status = 200 == xhr.status ? "ok" : xhr.status;
            result.data = -1 != extraParams.contentType.indexOf("application/json") ? xhr.responseText : -1 != extraParams.contentType.indexOf("text/xml") ? xhr.responseXML : xhr.responseData;
            onSuccess(result);
            console.log(result.data);
            writeCache(result.data, url, extraParams.ttl);
        };
        xhr.onerror = function(e) {
            if (cache) {
                result.status = "cache";
                result.data = cache;
                console.log(result.data);
                onSuccess(result);
            } else {
                result.status = "error";
                result.data = e;
                result.code = xhr.status;
                onError(result);
            }
        };
        xhr.send();
    }
};

XHR.prototype.post = function(url, data, onSuccess, onError, extraParams) {
    Titanium.API.info(url + " " + JSON.stringify(data));
    var onSuccess = onSuccess || function() {};
    var onError = onError || function() {};
    var extraParams = extraParams || {};
    extraParams.async = extraParams.hasOwnProperty("async") ? extraParams.async : true;
    extraParams.shouldAuthenticate = extraParams.shouldAuthenticate || false;
    extraParams.contentType = extraParams.contentType || "application/json";
    var xhr = Titanium.Network.createHTTPClient({
        enableKeepAlive: false
    });
    var result = {};
    xhr.open("POST", url, extraParams.async);
    xhr.setRequestHeader("Content-Type", extraParams.contentType);
    if (extraParams.shouldAuthenticate) {
        var authstr = "Basic " + Titanium.Utils.base64encode(extraParams.username + ":" + extraParams.password);
        xhr.setRequestHeader("Authorization", authstr);
    }
    xhr.onload = function() {
        result.status = 200 == xhr.status ? "ok" : xhr.status;
        result.data = xhr.responseText;
        onSuccess(result);
    };
    xhr.onerror = function(e) {
        result.status = "error";
        result.data = e.error;
        result.code = xhr.status;
        onError(result);
    };
    xhr.send(data);
};

XHR.prototype.put = function(url, data, onSuccess, onError, extraParams) {
    var onSuccess = onSuccess || function() {};
    var onError = onError || function() {};
    var extraParams = extraParams || {};
    extraParams.async = extraParams.hasOwnProperty("async") ? extraParams.async : true;
    extraParams.shouldAuthenticate = extraParams.shouldAuthenticate || false;
    extraParams.contentType = extraParams.contentType || "application/json";
    var xhr = Titanium.Network.createHTTPClient({
        enableKeepAlive: false
    });
    var result = {};
    xhr.open("PUT", url, extraParams.async);
    xhr.setRequestHeader("Content-Type", extraParams.contentType);
    if (extraParams.shouldAuthenticate) {
        var authstr = "Basic " + Titanium.Utils.base64encode(extraParams.username + ":" + extraParams.password);
        xhr.setRequestHeader("Authorization", authstr);
    }
    xhr.onload = function() {
        result.status = 200 == xhr.status ? "ok" : xhr.status;
        result.data = xhr.responseText;
        onSuccess(result);
    };
    xhr.onerror = function(e) {
        result.status = "error";
        result.data = e.error;
        result.code = xhr.status;
        onError(result);
    };
    xhr.send(data);
};

XHR.prototype.destroy = function(url, onSuccess, onError, extraParams) {
    Titanium.API.info(url);
    var onSuccess = onSuccess || function() {};
    var onError = onError || function() {};
    var extraParams = extraParams || {};
    extraParams.async = extraParams.hasOwnProperty("async") ? extraParams.async : true;
    extraParams.shouldAuthenticate = extraParams.shouldAuthenticate || false;
    extraParams.contentType = extraParams.contentType || "application/json";
    var xhr = Titanium.Network.createHTTPClient({
        enableKeepAlive: false
    });
    var result = {};
    xhr.open("DELETE", url, extraParams.async);
    xhr.setRequestHeader("Content-Type", extraParams.contentType);
    if (extraParams.shouldAuthenticate) {
        var authstr = "Basic " + Titanium.Utils.base64encode(extraParams.username + ":" + extraParams.password);
        xhr.setRequestHeader("Authorization", authstr);
    }
    xhr.onload = function() {
        result.status = 200 == xhr.status ? "ok" : xhr.status;
        result.data = xhr.responseText;
        onSuccess(result);
    };
    xhr.onerror = function(e) {
        result.status = "error";
        result.data = e.error;
        result.code = xhr.status;
        onError(result);
    };
    xhr.send();
};

XHR.prototype.clear = function(url) {
    if (url) {
        var hashedURL = Titanium.Utils.md5HexDigest(url);
        var cache = cacheManager[hashedURL];
        if (cache) {
            var file = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory, hashedURL);
            delete cacheManager[hashedURL];
            file.deleteFile();
            updateCacheManager();
        }
    }
};

XHR.prototype.clean = function() {
    var nowInMilliseconds = new Date().getTime();
    var expiredDocuments = 0;
    for (var key in cacheManager) {
        var cache = cacheManager[key];
        if (cache.timestamp <= nowInMilliseconds) {
            var file = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory, key);
            delete cacheManager[key];
            file.deleteFile();
            updateCacheManager();
            expiredDocuments += 1;
        }
    }
    return expiredDocuments;
};

XHR.prototype.purge = function() {
    var purgedDocuments = 0;
    for (var key in cacheManager) {
        {
            cacheManager[key];
        }
        var file = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory, key);
        delete cacheManager[key];
        file.deleteFile();
        updateCacheManager();
        purgedDocuments += 1;
    }
    return purgedDocuments;
};

readCache = function(url) {
    var hashedURL = Titanium.Utils.md5HexDigest(url);
    var cache = cacheManager[hashedURL];
    var result = false;
    if (cache) {
        var file = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory, hashedURL);
        if (cache.timestamp >= new Date().getTime()) result = file.read(); else {
            delete cacheManager[hashedURL];
            file.deleteFile();
            updateCacheManager();
        }
    }
    return result;
};

updateCacheManager = function() {
    Titanium.App.Properties.setObject("cachedXHRDocuments", cacheManager);
};

writeCache = function(data, url, ttl) {
    var hashedURL = Titanium.Utils.md5HexDigest(url);
    var file = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory, hashedURL);
    file.write(data);
    cacheManager[hashedURL] = {
        timestamp: new Date().getTime() + 60 * ttl * 1e3
    };
    updateCacheManager();
};

module.exports = XHR;