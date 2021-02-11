# financefy-app
Finances Organizer made For You

### Generating the Dev Certificate

To create a certificate in order to run Webpack on HTTPS, you can follow these steps and get it all working:

- Generating the Key and Crt files based on the `ssl.conf` file:

```bash
openssl req -config ssl.conf -new -sha256 -newkey rsa:2048 -nodes -keyout financefy.key -x509 -days 3650 -out financefy.crt
```

- Adding the certificate to the Trusted Root:

```bash
sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain financefy.crt
```

- Generating the PEM file from the certificace:

```bash
openssl x509 -in financefy.crt -out financefy.pem -outform PEM
```
