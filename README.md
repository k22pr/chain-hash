# hash-chain

## example

### Using

```js
import ChainHash from "chain-hash";

let firstInputPassword = "123456789";

//get encrypt key (※ do not save this Key)
console.log(chain.GetKey);
// output : cfff25b6e5fa64717f53d77b2986023c07a560c78247022389a6c984588263a61f306fc920f88617b6fd0bd82a6a4ec0667098eef7a969625775a94dcf8d67f3db connect

//save this Validate
console.log(chain.GetVaildate);
// output : c361424b4c43a3030205effedd4fe33150bdf501c8bbc43bf04a9b62dc238ebcb10a16d1206f1d3ec55a12b7f3266a051fedc908d1393d62d1d21ffc78a8d411

//save server
let vaildate = "c361424b4c43a3030205effedd4fe33150bdf501c8bbc43bf04a9b62dc238ebcb10a16d1206f1d3ec55a12b7f3266a051fedc908d1393d62d1d21ffc78a8d411";

//input user
let laterInputPassword = "123456789";

let chain = new ChainHash(inputPassword);
console.log(chain.isValidate(password));
// output : true

//using decrypt key
console.log(chain.GetKey);
// output : cfff25b6e5fa64717f53d77b2986023c07a560c78247022389a6c984588263a61f306fc920f88617b6fd0bd82a6a4ec0667098eef7a969625775a94dcf8d67f3db connect
```

### Chainge key Size

```js
let chain = new ChainHash(inputPassword, 224);
let chain = new ChainHash(inputPassword, 256);
let chain = new ChainHash(inputPassword, 384);
//default
let chain = new ChainHash(inputPassword, 512);
```
