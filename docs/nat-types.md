# NAT Types Explained

Most home networks use **NAT (Network Address Translation)** to share a single public IP address among multiple devices.  
NAT affects how easily devices can receive direct incoming connections, which impacts NoLimitConnect performance.

This guide explains each NAT type and how it affects connectivity.

---

# 🌐 What Is NAT?

NAT is a network technology that:

- Lets multiple devices share one public IP  
- Blocks unwanted inbound traffic  
- Requires special handling for peer-to-peer applications

To check your NAT type, NoLimitConnect performs a series of connection tests when the app starts.

---

# 🔍 NAT Types and What They Mean

## **1. Full Cone NAT (Best for P2P)**  
- All external hosts can send traffic back once a port is mapped  
- Easiest NAT type for direct connections  
- UPnP and manual port forwarding work reliably  

**Direct Mode:** Very likely

---

## **2. Restricted Cone NAT**  
- External hosts can send inbound traffic *only if* the user previously sent outbound packets  
- More restrictive, but still workable  

**Direct Mode:** Often possible using UPnP or manual port forwarding

---

## **3. Port-Restricted Cone NAT**  
- Similar to restricted, but enforces additional port-match rules  
- Slightly harder for direct connections  

**Direct Mode:** Possible, but depends on router behavior

---

## **4. Symmetric NAT (Most Difficult)**  
- Creates a unique random port mapping for each outbound destination  
- Inbound unsolicited traffic is always blocked  
- Common in hotels, apartment buildings, and mobile hotspots  

**Direct Mode:** Rarely possible  
**Relay Mode:** Almost always used

---

# 📶 How NoLimitConnect Detects NAT Type

During startup, the app:

1. Sends test packets to a test server  
2. Checks how the router rewrites ports  
3. Determines whether inbound traffic can return  
4. Selects direct mode or relay mode automatically  

This test is reflected in the **yellow → orange/green** connection bar sequence.

---

# 🧭 Summary Table

| NAT Type | Direct Mode | Relay Mode | Notes |
|----------|-------------|------------|-------|
| Full Cone | ✔ Full support | Optional | Best performance |
| Restricted Cone | ✔ Usually works | Backup | Stable with UPnP |
| Port-Restricted | ✔ Mixed | ✔ Often | May require manual forwarding |
| Symmetric NAT | ✘ Rare | ✔ Always | Common on mobile carriers |

---

Understanding your NAT type helps you set up your network for the best NoLimitConnect experience.
