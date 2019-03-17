let util = {

};
util.title = function (title) {
    title = title ? title + ' - Home' : 'nyaxs project';
    window.document.title = title;
};

export default util;