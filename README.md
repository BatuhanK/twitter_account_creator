# twitter account creator

**BU AÇIK TWITTER TARAFINDAN FİXLENMİŞTİR**

**Twitter Official Windows App** oauth keylerini kullanarak account oluşturmaya yarayan, node.js aracı.

------------


![screencast](/twitter_account_generator.gif)


------------

```sh
$ npm install
$ npm start

```

###Örnek kullanım

Aşağıda örnek kullanım mevcut, zaten sadece tek kullanım senaryosu bulunuyor. ( evet bu kadar basitce account oluşturabilirsiniz. ) 
````javascript
var creator = require('./helpers/creator');
creator.newAccount({screen_name: "USERNAME", email : "EMAIL" , password:"PASSWORD", name: "NAME"}, function(err,response){
    if(err) console.log(err);
    else {
        console.log(response);
    }
});
````


