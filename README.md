# mern-https-dev-env

--------
INSTALL
--------
$ git clone git@github.com:yotachatzi/mern-https-dev-env.git  
$ cd yotachatzi-mern-https-dev-env/client  
$ npm install  
$ cd ../server  
$ npm install  

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
$ openssl x509 -req -days 365 -in server.csr -signkey server.key   -out server.crt  
$ cd ..  
  
Congrats! You can now start both servers from the server directory:  
$ npm run dev  
  
Happy Coding! 

*****
Make sure to configure your browser to allow invalid certificates for resources loaded from localhost
*****

* Chrome && Mac:  
-> Navigate to chrome://flags/  
-> Enable the option "Allow invalid certificates for resources loaded from localhost"  
-> Restart chrome and navigate to https://localhost:3000  
-> Open developer tools and click the 'Security' tab  
-> Click the option 'View Certificate'  
-> Drag the certificate picture from the modal and drop it into your desktop or an easy-to-find-place  
-> Open 'Keychain access' and click the 'System' option from the sidebar  
-> Drag the certificate into the folder  
-> Insert your password if prompted and click 'Modify Keychain' to proceed  
-> Double click on the certificate and open the tab 'Trust'  
-> Click on the dropdown element next to the 'When using this certificate:' setting and select the option 'Always Trust'  
-> Close the pop up window  
-> Insert your password if prompted and click 'Update Settings'  
-> Restart chrome and navigate to 'https://localhost:5000'  
