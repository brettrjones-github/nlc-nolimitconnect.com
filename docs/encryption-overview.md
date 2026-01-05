# Encryption Overview
All user communication is encrypted.

NLC does **not** encrypt files on the local file system.

NLC uses Domain Name Service (DNS) **only if** the Network Host or Connection Test setting specifies a domain name rather than an IP address.

NLC does **not** use any other third-party services such as IMDb, DigiCert, or similar providers.

## Security Disclaimer

NLC encrypts communication to prevent casual eavesdropping on trusted networks.

It is not designed to protect against advanced attackers or compromised systems. Security depends on using trusted devices and keeping private Network Keys confidential.

NLC protects data in transit only, not your operating system or hardware. For higher security needs, use a hardened, security-focused operating system.

## Encryption Algorithms 

- MD5 for hashing
- Blowfish for encryption

## Encryption Key Composition

Encryption keys are derived from a combination of the following values, which are hashed together:

- IP Address
- Port
- Device-assigned GUID
- Network Key configured in Network Settings

## Public Network Key

- The Public Network Key is the default network key used when NLC is first installed.
- While the Public Network Key is used for encryption, it is publicly known and therefore does not meaningfully contribute to security.

## Private Network Key

- When setting up an NLC Network Host, you may configure a unique Network Key.
- Using a unique Network Key significantly improves communication security.
- Any Network Key other than the **Public Network Key** is considered a **Private Network Key**.

- ⚠ Important — Network Key Behavior

- Changing the Network Key improves security but has important side effects.

- Any connection attempt from a user or host using a different Network Key will result in the connecting user being flagged and banned as a hacker.

- The only way to remove such a ban is to restart NoLimitConnect on the system(s) that issued it.

- Changing the Network Key is recommended only for private networks.


## Summary
For maximum security, consider using an operating system designed with security as its primary focus, such as:
https://www.qubes-os.org