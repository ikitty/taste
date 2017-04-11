import wilddog from 'wilddog'

var STORAGE_KEY = 'vue-babes';

var config = { syncURL: "https://bkmk.wilddogio.com/"};
wilddog.initializeApp(config);
const Ref = wilddog.sync().ref();


export default {
    fetch: function () {
        Ref.child('todo').on("value", function (data, error) {
            var ret = []
            if (error == null) {
                var D = data.val()
                ret = Object.keys(D).map( v=>{
                    D[v]['id'] = v
                    return  D[v] ;
                })
            }
        });
        return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    },
    save: function (todos) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    }
}
