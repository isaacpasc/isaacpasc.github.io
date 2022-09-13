function redirect() {
    document.write(getIOSVersion);
    document.write("HELLOOO");
}
function getIOSVersion() {
    const ua = navigator.platform;
    if (/(iPhone|iPod|iPad)/i.test(ua)) {
        return ua.match(/OS [\d_]+/i)[0].substr(3).split('_').map(n => parseInt(n));
    }
    return [0];
}