/**
 * $.ajax.js
 * @author shaqihe
 * Created 2015-01-08
 */

function ajax(url, cb) {
    let xhr = new XMLHttpRequest;
    xhr.open("GET", url, true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(null);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);
            if (typeof cb === 'function') {
                cb.call(this, data);
            }
        }
    }
}

export { ajax }