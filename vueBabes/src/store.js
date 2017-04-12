import wilddog from 'wilddog'

var STORAGE_KEY = 'vue-babes';

var config = { syncURL: "https://bkmk.wilddogio.com/"};
wilddog.initializeApp(config);
const Ref = wilddog.sync().ref();

let cate = 'todo'

export default {
    fetch: function (cb) {
        Ref.child(cate).on("value", function (data, error) {
            var ret = []
            if (error == null) {
                var D = data.val()
                ret = Object.keys(D).map( v=>{
                    D[v]['id'] = v
                    return  D[v] ;
                })
            }
            cb(ret)
        });
        // return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    },
    push: function (data) {
        Ref.child(cate).push({
            "name": data,
            "completed": false
        });
    },
    remove: function (id) {
        Ref.child(cate).child(id).remove()
    },
    update: function (id, key, value) {
        let obj = {}
        obj[key] = value
        // console.log('store update',id, obj);
        Ref.child(cate).child(id).update(obj)
    },
    save: function (todos) {
        // localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    }
}
