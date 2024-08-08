export function ajaxRequest(action, data = {}, method = 'POST') {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    const formData = new FormData();

    formData.append('action', action);
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        formData.append(key, data[key]);
      }
    }

    xhr.open(method, '/wp-admin/admin-ajax.php', true);
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        try {
          const response = JSON.parse(xhr.responseText);
          if (response.success) {
            resolve(response.data);
          } else {
            reject({ status: xhr.status, error: response.data });
          }
        } catch (error) {
          reject({ status: xhr.status, error: 'Invalid JSON response' });
        }
      } else {
        reject({ status: xhr.status, statusText: xhr.statusText });
      }
    };
    xhr.onerror = () => {
      reject({ status: xhr.status, statusText: xhr.statusText });
    };
    xhr.send(formData);
  });
}
