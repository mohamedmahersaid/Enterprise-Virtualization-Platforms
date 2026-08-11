# Virtualization catalog

Enterprise hypervisor platforms: VMware vSphere, Nutanix AHV, Microsoft Hyper-V, and the KVM/Proxmox open-source stack.

## VMware & Nutanix

vSphere compute/availability design and the Nutanix hyperconverged platform.

### VMware vSphere

- **Advanced:** [vSphere: vMotion and DRS Resource Management](docs/vz-tree-vmware-nutanix/vz-branch-vsphere/vz-vmotion-drs.md)
- **Expert:** [vSphere: High Availability and vSAN Storage Policies](docs/vz-tree-vmware-nutanix/vz-branch-vsphere/vz-ha-vsan.md)
- **Advanced:** [VMware vSAN Storage Policies, Fault Domains and Stretched Clusters](docs/vz-tree-vmware-nutanix/vz-branch-vsphere/vz-vsan-policies-fault-domains-stretched.md)
- **Expert:** [VMware NSX Overlay Networking, Distributed Firewall and Edge Services](docs/vz-tree-vmware-nutanix/vz-branch-vsphere/vz-nsx-overlay-dfw-edge.md)

### Nutanix AHV

- **Advanced:** [Nutanix: HCI Architecture, Prism and AHV VM Management](docs/vz-tree-vmware-nutanix/vz-branch-nutanix/vz-nutanix-prism.md)
- **Enterprise:** [Nutanix: Snapshots, Replication and DR with Protection Policies](docs/vz-tree-vmware-nutanix/vz-branch-nutanix/vz-nutanix-dr.md)
- **Advanced:** [Nutanix Prism Central: Multi-Cluster Operations and Lifecycle Management](docs/vz-tree-vmware-nutanix/vz-branch-nutanix/vz-nutanix-prism-central-lifecycle.md)
- **Advanced:** [Nutanix AHV Networking, Flow Microsegmentation and Disaster Recovery](docs/vz-tree-vmware-nutanix/vz-branch-nutanix/vz-nutanix-ahv-flow-dr.md)

## Hyper-V & KVM

Microsoft's enterprise hypervisor stack and the open-source KVM/libvirt/Proxmox ecosystem.

### Microsoft Hyper-V

- **Advanced:** [Hyper-V: Failover Clustering and Live Migration](docs/vz-tree-hyperv-kvm/vz-branch-hyperv/vz-hyperv-cluster.md)
- **Advanced:** [Hyper-V: Virtual Switches, VLANs and Converged Networking](docs/vz-tree-hyperv-kvm/vz-branch-hyperv/vz-hyperv-network.md)

### KVM & Proxmox

- **Advanced:** [KVM: libvirt, QEMU and virsh Administration](docs/vz-tree-hyperv-kvm/vz-branch-kvm/vz-kvm-libvirt.md)
- **Advanced:** [Proxmox VE: Clustering, Ceph Integration and Backups](docs/vz-tree-hyperv-kvm/vz-branch-kvm/vz-proxmox-cluster.md)

## Design, Migration & Operations

Consultant-grade virtualization design: capacity and sizing, storage/network fabric design, workload migration, and backup/HA/DR for virtual estates.

### Capacity, Storage & Network Design

- **Expert:** [VMware Virtual Estate Capacity Planning, Sizing and Management](docs/vz-tree-designops/vz-branch-design/vz-capacity-sizing.md)
- **Expert:** [Virtual Networking Design: Distributed Switches and Storage Fabrics](docs/vz-tree-designops/vz-branch-design/vz-network-design.md)

### Migration & Business Continuity

- **Advanced:** [Virtual Machine Workload Migration: V2V, P2V Rehost and Cross-Platform Conversion](docs/vz-tree-designops/vz-branch-migration/vz-v2v-migration.md)
- **Expert:** [Backup, HA and Disaster Recovery for Virtual Estates](docs/vz-tree-designops/vz-branch-migration/vz-backup-dr.md)

## Private Cloud Platforms

Building and operating private cloud on OpenStack, VMware Cloud Foundation and Kubernetes-native virtualization, and choosing between them on operating model rather than feature list.

### Designing and Building Private Cloud

- **Advanced:** [Building an OpenStack Private Cloud: Control-Plane HA and Ceph Backends](docs/vz-tree-private-cloud/vz-branch-private-cloud/vz-openstack-private-cloud.md)
- **Advanced:** [VMware Cloud Foundation Design: Workload Domain Sizing and NSX Overlay MTU](docs/vz-tree-private-cloud/vz-branch-private-cloud/vz-vcf-workload-domains.md)
- **Intermediate:** [Harvester and KubeVirt: Kubernetes-Native Virtualization with Longhorn Storage](docs/vz-tree-private-cloud/vz-branch-private-cloud/vz-harvester-kubevirt.md)
- **Advanced:** [Proxmox VE Cluster Networking, Ceph Storage and Backup Server](docs/vz-tree-private-cloud/vz-branch-private-cloud/vz-proxmox-cluster-ceph-backup.md)

### Operating and Selecting Private Cloud

- **Advanced:** [Private Cloud Platform Selection and Exit Cost Analysis](docs/vz-tree-private-cloud/vz-branch-private-cloud-ops/vz-private-cloud-selection.md)
- **Expert:** [VMware Cloud Foundation Lifecycle: SDDC Manager, the Bill of Materials and Upgrade Order](docs/vz-tree-private-cloud/vz-branch-private-cloud-ops/vz-vcf-workload-domains-sddc-manager.md)
- **Expert:** [Diagnosing OpenStack: the Message Bus, Placement and NoValidHost Failures](docs/vz-tree-private-cloud/vz-branch-private-cloud-ops/vz-openstack-core-services.md)
