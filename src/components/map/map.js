export default function Map() {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src =
            'http://api.map.baidu.com/getscript?v=2.0&ak=PYII20buMkHOoAH5U2CdHkmKxo9cqBtr';
        document.body.append(script);
        script.onload = () => {
            resolve(BMap);
        };
    });
}
