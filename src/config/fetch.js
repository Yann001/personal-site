import { baseUrl } from './env'
export default async (url = '', data = {}, type = 'GET', method = 'fetch') => {
  type = type.toUpperCase()
  url = baseUrl + url

  if (type === 'GET') {
    let dataStr = ''
    Object.keys(data).forEach(key => {
      dataStr += key + '=' + data[key] + '&'
    })
    if (dataStr !== '') {
      dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'))
      url = url + '?' + dataStr
    }
  }

  if (window.fetch && method === 'fetch') {
    let reqConfig = {
      credentials: 'include',
      method: type,
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      mode: 'cors',
      cache: 'force-cache'
    }

    if (type === 'POST') {
      Object.defineProperty(reqConfig, 'body', {
        value: JSON.stringify(data)
      })
    }

    try {
      const res = await fetch(url, reqConfig)
      const resJson = await res.json()
      return resJson
    } catch (error) {
      throw new Error(error)
    }
  } else {
    return new Promise((resolve, reject) => {
      let reqObj
      if (window.XMLHttpRequest) {
        reqObj = new XMLHttpRequest()
      } else {
        // reqObj = new ActiveXObject('Mscrosoft.XMLHttp')
      }

      let sendData = ''
      if (type === 'POST') {
        sendData = JSON.stringify(data)
      }

      reqObj.open(type, url, true)
      reqObj.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
      reqObj.send(sendData)

      reqObj.onreadystatechange = () => {
        if (reqObj.readState === 4) {
          if (reqObj.status === 200) {
            let res = reqObj.response
            if (typeof res !== 'object') {
              res = JSON.parse(res)
            }
            resolve(res)
          } else {
            reject(reqObj)
          }
        }
      }
    })
  }
}
