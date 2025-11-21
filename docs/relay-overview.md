# Relay Behavior in NoLimitConnect

NoLimitConnect prefers direct peer-to-peer connections whenever possible.  
However, not all users are able to open a port.
All relay forwarding is performed over encrypted TCP streams.

This page explains how relay behavior works.

---

# 🟢 Hosting Requires an Open Port

To host anything — groups, chat rooms, random connect, or other services — your device **must** have:

- A publicly reachable IP  
- An open port (via UPnP, VPN, or manual forwarding)

If your port is closed:

- You cannot host
- You can still **join** other hosts
- The app will operate in **relay mode** (orange status)

---

# 🧩 When Relay Mode Is Used

### ✔ When *you* connect to a host but **your port is not open**
Your traffic will be forwarded *through the host*.

Effects:

- You can still communicate with others connected to the same host  
- You **cannot** host for others  
- Traffic is slower because all packets pass through the host  
- Voice and video may have noticeable delay  
- Heavy relayed traffic can slow down the host device  

---

### ✔ When neither you nor your friend has an open port
You cannot connect to each other directly.  
Both of you must join the **same host** to communicate.

This is normal on networks where:

- UPnP is disabled
- The router blocks inbound traffic
- You are behind carrier-grade NAT (mobile data)

---

### ✔ When you or your friend has an open port
If **either** of you has an open port:

- NoLimitConnect will periodically attempt to establish a direct connection  
- This works only if the device with the open port is currently reachable  
- Even with an open port, a connection is **not guaranteed** if:
  - The user’s IP has changed  
  - Their router re-mapped the port  
  - Their device is temporarily unreachable  

In that case, you may still need to connect through a host.

---

# 📝 Summary

- Hosting absolutely requires an open port  
- Users without open ports can still join hosts  
- Hosts relay traffic for users who cannot reach each other  
- Direct connections are always preferred  
- IP changes or restrictive networks can prevent direct connections  
