import { Obj } from 'src/tools/type';

type JsonpType = {
  url: string;
  params: Obj;
  cbName: string;
};

function getSrc(option: JsonpType) {
  const { url, params, cbName } = option;
  let list = [];
  // eslint-disable-next-line guard-for-in
  for (let key in params) {
    list.push(`${key}=${params[key]}`);
  }
  return `${url}?${list.join('&')}&cb=${cbName}`;
}

export function jsonp(option: JsonpType) {
  const { cbName } = option;
  return new Promise((resolve) => {
    let src = getSrc(option)
    let script = document.createElement('script');
    script.src = src;
    document.body.appendChild(script);
    // @ts-ignore
    window[cbName] = function (data: any) {
      resolve(data);
      document.body.removeChild(script);
    };
  });
}