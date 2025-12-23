# Domain Name Usage

## Disclaimer
The services mentioned on this page are **NOT** recommendations. They are simply services that the author of NLC found to be adequate.

## What Is a Domain Name Service (DNS)?
DNS is a paid service that allows you to register a domain name (for example, `google.com`).

You can configure the domain to resolve to a specific IP address, such as `142.250.186.110`.

## Why the NLC Public Network Host Uses Domain Names Instead of IP Addresses
There are two main reasons:

- **VPS migration flexibility**  
  If the VPS host needs to be changed, the NLC Network Host IP address will also change.  
  Updating the DNS record to point to the new IP eliminates the need to send out new network invites.

- **Service consolidation**  
  If both the Network Host and Connection Test services are hosted on the same VPS, this can be achieved by pointing both  
  `nolimitconnect.net` and `nolimitconnect.xyz` to the same IP address.

## Which DNS Service NLC Uses
NLC registered its domain names with:

https://moniker.com

> **Warning:** Regardless of which DNS service you choose, purchasing a domain name typically results in a significant increase in spam and scam emails.







