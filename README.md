# twitter account creator

**Twitter Official Windows App** oauth keylerini kullanarak account oluşturmaya yarayan, node.js aracı.

```sh
$ npm install
$ npm start

```

###Örnek kullanım

Aşağıda örnek kullanım mevcut, zaten sadece tek kullanım senaryosu bulunuyor. ( evet bu kadar basitce account oluşturabilirsiniz. ) 
````
var creator = require('./helpers/creator');
creator.newAccount({screen_name: "USERNAME", email : "EMAIL" , password:"PASSWORD", name: "NAME"}, function(err,response){
    if(err) console.log(err);
    else {
        console.log(response);
    }
});
````


