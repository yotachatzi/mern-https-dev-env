# get-the-look-webshop

--------
INSTALL
--------
$ git clone git@github.com:yotachatzi/get-the-look-webshop.git
$ cd get-the-look-webshop/server
$ npm install
$ cd ../server
$ npm install
$ cd ..

------------
CERTIFICATES
------------
$ mkdir certificates
$ cd certificates

#### OpenSSL

Make sure you have [openssl](https://www.openssl.org/) installed on your computer. 
If not, install it using `homebrew`.

Generate a new 1024bit RSA key:
$ openssl genrsa -des3 -out server.key 1024

Generate a new self-signed certificate. Use 'localhost' as the 'Common Name':
$ openssl req -new -key server.key -out server.csr

Make a copy of the 'server.key' and rename it:
$ cp server.key ./server.key.org
 
Finally:
$ openssl rsa -in server.key.org -out server.key
$ openssl x509 -req -days 365 -in server.csr -signkey server.key -out server.crt
$ cd ..


