import * as bluebird from 'bluebird';
export declare var Libvirt: {
    VIR_CRED_USERNAME: 1;
    VIR_CRED_AUTHNAME: 2;
    VIR_CRED_LANGUAGE: 3;
    VIR_CRED_CNONCE: 4;
    VIR_CRED_PASSPHRASE: 5;
    VIR_CRED_ECHOPROMPT: 6;
    VIR_CRED_NOECHOPROMPT: 7;
    VIR_CRED_REALM: 8;
    VIR_CRED_EXTERNAL: 9;
    VIR_CPU_COMPARE_ERROR: -1;
    VIR_CPU_COMPARE_INCOMPATIBLE: 0;
    VIR_CPU_COMPARE_IDENTICAL: 1;
    VIR_CPU_COMPARE_SUPERSET: 2;
    VIR_CONNECT_BASELINE_CPU_EXPAND_FEATURES: 1;
    VIR_CONNECT_BASELINE_CPU_MIGRATABLE: 2;
    VIR_SECRET_USAGE_TYPE_NONE: 0;
    VIR_SECRET_USAGE_TYPE_VOLUME: 1;
    VIR_DOMAIN_EVENT_ID_LIFECYCLE: 0;
    VIR_DOMAIN_EVENT_ID_REBOOT: 1;
    VIR_DOMAIN_EVENT_ID_RTC_CHANGE: 2;
    VIR_DOMAIN_EVENT_ID_WATCHDOG: 3;
    VIR_DOMAIN_EVENT_ID_IO_ERROR: 4;
    VIR_DOMAIN_EVENT_ID_GRAPHICS: 5;
    VIR_DOMAIN_EVENT_ID_IO_ERROR_REASON: 6;
    VIR_NODE_MEMORY_STATS_ALL_CELLS: -1;
    VIR_ERR_OK: 0;
    VIR_ERR_INTERNAL_ERROR: 1;
    VIR_ERR_NO_MEMORY: 2;
    VIR_ERR_NO_SUPPORT: 3;
    VIR_ERR_UNKNOWN_HOST: 4;
    VIR_ERR_NO_CONNECT: 5;
    VIR_ERR_INVALID_CONN: 6;
    VIR_ERR_INVALID_DOMAIN: 7;
    VIR_ERR_INVALID_ARG: 8;
    VIR_ERR_OPERATION_FAILED: 9;
    VIR_ERR_GET_FAILED: 10;
    VIR_ERR_POST_FAILED: 11;
    VIR_ERR_HTTP_ERROR: 12;
    VIR_ERR_SEXPR_SERIAL: 13;
    VIR_ERR_NO_XEN: 14;
    VIR_ERR_XEN_CALL: 15;
    VIR_ERR_OS_TYPE: 16;
    VIR_ERR_NO_KERNEL: 17;
    VIR_ERR_NO_ROOT: 18;
    VIR_ERR_NO_SOURCE: 19;
    VIR_ERR_NO_TARGET: 20;
    VIR_ERR_NO_NAME: 21;
    VIR_ERR_NO_OS: 22;
    VIR_ERR_NO_DEVICE: 23;
    VIR_ERR_NO_XENSTORE: 24;
    VIR_ERR_DRIVER_FULL: 25;
    VIR_ERR_CALL_FAILED: 26;
    VIR_ERR_XML_ERROR: 27;
    VIR_ERR_DOM_EXIST: 28;
    VIR_ERR_OPERATION_DENIED: 29;
    VIR_ERR_OPEN_FAILED: 30;
    VIR_ERR_READ_FAILED: 31;
    VIR_ERR_PARSE_FAILED: 32;
    VIR_ERR_CONF_SYNTAX: 33;
    VIR_ERR_WRITE_FAILED: 34;
    VIR_ERR_XML_DETAIL: 35;
    VIR_ERR_INVALID_NETWORK: 36;
    VIR_ERR_NETWORK_EXIST: 37;
    VIR_ERR_SYSTEM_ERROR: 38;
    VIR_ERR_RPC: 39;
    VIR_ERR_GNUTLS_ERROR: 40;
    VIR_WAR_NO_NETWORK: 41;
    VIR_ERR_NO_DOMAIN: 42;
    VIR_ERR_NO_NETWORK: 43;
    VIR_ERR_INVALID_MAC: 44;
    VIR_ERR_AUTH_FAILED: 45;
    VIR_ERR_INVALID_STORAGE_POOL: 46;
    VIR_ERR_INVALID_STORAGE_VOL: 47;
    VIR_WAR_NO_STORAGE: 48;
    VIR_ERR_NO_STORAGE_POOL: 49;
    VIR_ERR_NO_STORAGE_VOL: 50;
    VIR_WAR_NO_NODE: 51;
    VIR_ERR_INVALID_NODE_DEVICE: 52;
    VIR_ERR_NO_NODE_DEVICE: 53;
    VIR_ERR_NO_SECURITY_MODEL: 54;
    VIR_ERR_OPERATION_INVALID: 55;
    VIR_WAR_NO_INTERFACE: 56;
    VIR_ERR_NO_INTERFACE: 57;
    VIR_ERR_INVALID_INTERFACE: 58;
    VIR_ERR_MULTIPLE_INTERFACES: 59;
    VIR_WAR_NO_NWFILTER: 60;
    VIR_ERR_INVALID_NWFILTER: 61;
    VIR_ERR_NO_NWFILTER: 62;
    VIR_ERR_BUILD_FIREWALL: 63;
    VIR_WAR_NO_SECRET: 64;
    VIR_ERR_INVALID_SECRET: 65;
    VIR_ERR_NO_SECRET: 66;
    VIR_ERR_CONFIG_UNSUPPORTED: 67;
    VIR_ERR_OPERATION_TIMEOUT: 68;
    VIR_ERR_MIGRATE_PERSIST_FAILED: 69;
    VIR_ERR_HOOK_SCRIPT_FAILED: 70;
    VIR_ERR_INVALID_DOMAIN_SNAPSHOT: 71;
    VIR_ERR_NO_DOMAIN_SNAPSHOT: 72;
    VIR_ERR_ARGUMENT_UNSUPPORTED: 74;
    VIR_FROM_NONE: 0;
    VIR_FROM_XEN: 1;
    VIR_FROM_XEND: 2;
    VIR_FROM_XENSTORE: 3;
    VIR_FROM_SEXPR: 4;
    VIR_FROM_XML: 5;
    VIR_FROM_DOM: 6;
    VIR_FROM_RPC: 7;
    VIR_FROM_PROXY: 8;
    VIR_FROM_CONF: 9;
    VIR_FROM_QEMU: 10;
    VIR_FROM_NET: 11;
    VIR_FROM_TEST: 12;
    VIR_FROM_REMOTE: 13;
    VIR_FROM_OPENVZ: 14;
    VIR_FROM_XENXM: 15;
    VIR_FROM_STATS_LINUX: 16;
    VIR_FROM_LXC: 17;
    VIR_FROM_STORAGE: 18;
    VIR_FROM_NETWORK: 19;
    VIR_FROM_DOMAIN: 20;
    VIR_FROM_UML: 21;
    VIR_FROM_NODEDEV: 22;
    VIR_FROM_XEN_INOTIFY: 23;
    VIR_FROM_SECURITY: 24;
    VIR_FROM_VBOX: 25;
    VIR_FROM_INTERFACE: 26;
    VIR_FROM_ONE: 27;
    VIR_FROM_ESX: 28;
    VIR_FROM_PHYP: 29;
    VIR_FROM_SECRET: 30;
    VIR_FROM_CPU: 31;
    VIR_FROM_XENAPI: 32;
    VIR_FROM_NWFILTER: 33;
    VIR_FROM_HOOK: 34;
    VIR_FROM_DOMAIN_SNAPSHOT: 35;
    VIR_ERR_NONE: 0;
    VIR_ERR_WARNING: 1;
    VIR_ERR_ERROR: 2;
    // VIR_DOMAIN_DEVICE_MODIFY_CURRENT: 0;
    // VIR_DOMAIN_DEVICE_MODIFY_LIVE: 1;
    // VIR_DOMAIN_DEVICE_MODIFY_CONFIG: 2;
    // VIR_DOMAIN_DEVICE_MODIFY_FORCE: 4;
    // VIR_DOMAIN_METADATA_DESCRIPTION: 0;
    // VIR_DOMAIN_METADATA_TITLE: 1;
    // VIR_DOMAIN_METADATA_ELEMENT: 2;
    // VIR_MIGRATE_LIVE: 1;
    // VIR_MIGRATE_PEER2PEER: 2;
    // VIR_MIGRATE_TUNNELLED: 4;
    // VIR_MIGRATE_PERSIST_DEST: 8;
    // VIR_MIGRATE_UNDEFINE_SOURCE: 16;
    // VIR_MIGRATE_PAUSED: 32;
    // VIR_MIGRATE_NON_SHARED_DISK: 64;
    // VIR_MIGRATE_NON_SHARED_INC: 128;
    // VIR_MIGRATE_CHANGE_PROTECTION: 256;
    // VIR_MIGRATE_UNSAFE: 512;
    // VIR_MIGRATE_OFFLINE: 1024;
    // VIR_MIGRATE_COMPRESSED: 2048;
    // VIR_MIGRATE_ABORT_ON_ERROR: 4096;
    // VIR_MIGRATE_AUTO_CONVERGE: 8192;
    // VIR_MIGRATE_RDMA_PIN_ALL: 16384;
    // VIR_MIGRATE_POSTCOPY: 32768;
    // VIR_MIGRATE_TLS: 65536;
    VIR_DOMAIN_SNAPSHOT_CREATE_REDEFINE: 1;
    VIR_DOMAIN_SNAPSHOT_CREATE_CURRENT: 2;
    VIR_DOMAIN_SNAPSHOT_CREATE_NO_METADATA: 4;
    VIR_DOMAIN_SNAPSHOT_CREATE_HALT: 8;
    VIR_DOMAIN_SNAPSHOT_CREATE_DISK_ONLY: 16;
    VIR_DOMAIN_SNAPSHOT_CREATE_REUSE_EXT: 32;
    VIR_DOMAIN_SNAPSHOT_CREATE_QUIESCE: 64;
    VIR_DOMAIN_SNAPSHOT_CREATE_ATOMIC: 128;
    VIR_DOMAIN_SNAPSHOT_CREATE_LIVE: 256;
    VIR_DOMAIN_SNAPSHOT_DELETE_CHILDREN: 1;
    VIR_DOMAIN_SNAPSHOT_DELETE_CHILDREN_ONLY: 4;
    VIR_DOMAIN_SNAPSHOT_DELETE_METADATA_ONLY: 2;
    // VIR_DOMAIN_AFFECT_CURRENT: 0;
    // VIR_DOMAIN_AFFECT_LIVE: 1;
    // VIR_DOMAIN_AFFECT_CONFIG: 2;
    VIR_DOMAIN_BLOCK_COMMIT_SHALLOW: 1;
    VIR_DOMAIN_BLOCK_COMMIT_DELETE: 2;
    VIR_DOMAIN_BLOCK_COMMIT_ACTIVE: 4;
    VIR_DOMAIN_BLOCK_COMMIT_RELATIVE: 8;
    VIR_DOMAIN_BLOCK_COMMIT_BANDWIDTH_BYTES: 16;
    VIR_DOMAIN_BLOCK_JOB_ABORT_PIVOT: 2;
    VIR_DOMAIN_BLOCK_JOB_COMPLETED: 0;
    VIR_DOMAIN_BLOCK_JOB_INFO_BANDWIDTH_BYTES: 1;
    VIR_DOMAIN_BLOCK_JOB_TYPE_UNKNOWN: 0;
    VIR_DOMAIN_BLOCK_JOB_TYPE_PULL: 1;
    VIR_DOMAIN_BLOCK_JOB_TYPE_COPY: 2;
    VIR_DOMAIN_BLOCK_JOB_TYPE_COMMIT: 3;
    VIR_DOMAIN_BLOCK_JOB_TYPE_ACTIVE_COMMIT: 4;
    // VIR_DOMAIN_XML_SECURE: 1;
    // VIR_DOMAIN_XML_INACTIVE: 2;
    // VIR_DOMAIN_XML_UPDATE_CPU: 4;
    // VIR_DOMAIN_XML_MIGRATABLE: 8;
    VIR_DOMAIN_JOB_NONE: 0;
    VIR_DOMAIN_JOB_BOUNDED: 1;
    VIR_DOMAIN_JOB_UNBOUNDED: 2;
    VIR_DOMAIN_JOB_COMPLETED: 3;
    VIR_DOMAIN_JOB_FAILED: 4;
    VIR_DOMAIN_JOB_CANCELLED: 5;
    VIR_MEMORY_VIRTUAL: 1;
    VIR_MEMORY_PHYSICAL: 2;
    VIR_DOMAIN_EVENT_DEFINED: 0;
    VIR_DOMAIN_EVENT_UNDEFINED: 1;
    VIR_DOMAIN_EVENT_STARTED: 2;
    VIR_DOMAIN_EVENT_SUSPENDED: 3;
    VIR_DOMAIN_EVENT_RESUMED: 4;
    VIR_DOMAIN_EVENT_STOPPED: 5;
    VIR_DOMAIN_EVENT_IO_ERROR_NONE: 0;
    VIR_DOMAIN_EVENT_IO_ERROR_PAUSE: 1;
    VIR_DOMAIN_EVENT_IO_ERROR_REPORT: 2;
    VIR_DOMAIN_EVENT_RESUMED_UNPAUSED: 0;
    VIR_DOMAIN_EVENT_RESUMED_MIGRATED: 1;
    VIR_DOMAIN_EVENT_STARTED_BOOTED: 0;
    VIR_DOMAIN_EVENT_STARTED_MIGRATED: 1;
    VIR_DOMAIN_EVENT_STARTED_RESTORED: 2;
    VIR_DOMAIN_EVENT_STARTED_FROM_SNAPSHOT: 3;
    VIR_DOMAIN_EVENT_STOPPED_SHUTDOWN: 0;
    VIR_DOMAIN_EVENT_STOPPED_DESTROYED: 1;
    VIR_DOMAIN_EVENT_STOPPED_CRASHED: 2;
    VIR_DOMAIN_EVENT_STOPPED_MIGRATED: 3;
    VIR_DOMAIN_EVENT_STOPPED_SAVED: 4;
    VIR_DOMAIN_EVENT_STOPPED_FAILED: 5;
    VIR_DOMAIN_EVENT_STOPPED_FROM_SNAPSHOT: 6;
    VIR_DOMAIN_EVENT_SUSPENDED_PAUSED: 0;
    VIR_DOMAIN_EVENT_SUSPENDED_MIGRATED: 1;
    VIR_DOMAIN_EVENT_SUSPENDED_IOERROR: 2;
    VIR_DOMAIN_EVENT_SUSPENDED_WATCHDOG: 3;
    VIR_DOMAIN_EVENT_UNDEFINED_REMOVED: 0;
    VIR_DOMAIN_EVENT_WATCHDOG_NONE: 0;
    VIR_DOMAIN_EVENT_WATCHDOG_PAUSE: 1;
    VIR_DOMAIN_EVENT_WATCHDOG_RESET: 2;
    VIR_DOMAIN_EVENT_WATCHDOG_POWEROFF: 3;
    VIR_DOMAIN_EVENT_WATCHDOG_SHUTDOWN: 4;
    VIR_DOMAIN_EVENT_WATCHDOG_DEBUG: 5;
    VIR_DOMAIN_SEND_KEY_MAX_KEYS: 16;
    VIR_DOMAIN_UNDEFINE_MANAGED_SAVE: 1;
    VIR_DOMAIN_UNDEFINE_SNAPSHOTS_METADATA: 2;
    VIR_DOMAIN_UNDEFINE_NVRAM: 4;
    VIR_DOMAIN_UNDEFINE_KEEP_NVRAM: 8;
    VIR_DOMAIN_EVENT_ID_AGENT_LIFECYCLE: 18;
    VIR_CONNECT_GET_ALL_DOMAINS_STATS_ACTIVE: 1;
    VIR_CONNECT_GET_ALL_DOMAINS_STATS_INACTIVE: 2;
    VIR_CONNECT_GET_ALL_DOMAINS_STATS_OTHER: 128;
    VIR_CONNECT_GET_ALL_DOMAINS_STATS_PAUSED: 32;
    VIR_CONNECT_GET_ALL_DOMAINS_STATS_PERSISTENT: 4;
    VIR_CONNECT_GET_ALL_DOMAINS_STATS_RUNNING: 16;
    VIR_CONNECT_GET_ALL_DOMAINS_STATS_SHUTOFF: 64;
    VIR_CONNECT_GET_ALL_DOMAINS_STATS_TRANSIENT: 8;
    VIR_CONNECT_GET_ALL_DOMAINS_STATS_BACKING: 1073741824;
    VIR_CONNECT_GET_ALL_DOMAINS_STATS_ENFORCE_STATS: 2147483648;
    VIR_DOMAIN_STATS_STATE: 1;
    VIR_DOMAIN_STATS_CPU_TOTAL: 2;
    VIR_DOMAIN_STATS_BALLOON: 4;
    VIR_DOMAIN_STATS_VCPU: 8;
    VIR_DOMAIN_STATS_INTERFACE: 16;
    VIR_DOMAIN_STATS_BLOCK: 32;
    VIR_DOMAIN_STATS_PERF: 64;
    VIR_CONNECT_DOMAIN_EVENT_AGENT_LIFECYCLE_REASON_UNKNOWN: 0;
    VIR_CONNECT_DOMAIN_EVENT_AGENT_LIFECYCLE_REASON_DOMAIN_STARTED: 1;
    VIR_CONNECT_DOMAIN_EVENT_AGENT_LIFECYCLE_REASON_CHANNEL: 2;
    VIR_CONNECT_DOMAIN_EVENT_AGENT_LIFECYCLE_STATE_CONNECTED: 1;
    VIR_CONNECT_DOMAIN_EVENT_AGENT_LIFECYCLE_STATE_DISCONNECTED: 2;
    VIR_INTERFACE_XML_INACTIVE: 1;
    VIR_STORAGE_POOL_DELETE_NORMAL: 0;
    VIR_STORAGE_POOL_DELETE_ZEROED: 1;
    VIR_STORAGE_POOL_INACTIVE: 0;
    VIR_STORAGE_POOL_BUILDING: 1;
    VIR_STORAGE_POOL_RUNNING: 2;
    VIR_STORAGE_POOL_DEGRADED: 3;
    VIR_STORAGE_POOL_INACCESSIBLE: 4;
    VIR_STORAGE_VOL_FILE: 0;
    VIR_STORAGE_VOL_BLOCK: 1;
    /**
     * 
     * @param {string} url usually with "qemu:///system"
     */
    createHypervisor(url: string): Hypervisor;
    readonly path: string;
    readonly libvirt_version: number;
}

export declare enum CompareCPUFlags {
    /**
     * treat incompatible CPUs as failure
     */
    VIR_CONNECT_COMPARE_CPU_FAIL_INCOMPATIBLE =	1
}

export declare enum CPUCompareResult {
    VIR_CPU_COMPARE_ERROR = -1,
    VIR_CPU_COMPARE_INCOMPATIBLE = 0,
    VIR_CPU_COMPARE_IDENTICAL = 1,
    VIR_CPU_COMPARE_SUPERSET = 2
}

export declare enum DomainCreateFlags {
    /**
     * Default behavior
     */
    VIR_DOMAIN_NONE	= 0,
    /**
     * Launch guest in paused state
     */
    VIR_DOMAIN_START_PAUSED	= 1,
    /**
     * Automatically kill guest when @{Hypervisor} is closed
     */
    VIR_DOMAIN_START_AUTODESTROY = 2,
    /**
     * Avoid file system cache pollution
     */
    VIR_DOMAIN_START_BYPASS_CACHE =	4,
    /**
     * Boot, discarding any managed save
     */
    VIR_DOMAIN_START_FORCE_BOOT	= 8,
    /**
     * Validate the XML document against schema
     */
    VIR_DOMAIN_START_VALIDATE = 16,
}

export declare enum StoragePoolCreateFlags {
    /**
     * Create the pool and perform pool build without any flags
     */
    VIR_STORAGE_POOL_CREATE_NORMAL	=	0,
    /**
     * Create the pool and perform pool build using the VIR_STORAGE_POOL_BUILD_OVERWRITE flag. This is mutually exclusive to VIR_STORAGE_POOL_CREATE_WITH_BUILD_NO_OVERWRITE
     */
    VIR_STORAGE_POOL_CREATE_WITH_BUILD	=	1,
    /**
     * Create the pool and perform pool build using the VIR_STORAGE_POOL_BUILD_NO_OVERWRITE flag. This is mutually exclusive to VIR_STORAGE_POOL_CREATE_WITH_BUILD_OVERWRITE
     */
    VIR_STORAGE_POOL_CREATE_WITH_BUILD_OVERWRITE = 2,
    
    VIR_STORAGE_POOL_CREATE_WITH_BUILD_NO_OVERWRITE	= 4
}

export declare enum DomainStatsTypes {
    /**
     * return domain state
     */
    VIR_DOMAIN_STATS_STATE = 1,
    /**
     * return domain CPU info
     */
    VIR_DOMAIN_STATS_CPU_TOTAL = 2,
    /**
     * return domain balloon info
     */	
    VIR_DOMAIN_STATS_BALLOON = 4,
    /**
     * return domain virtual CPU info
     */
    VIR_DOMAIN_STATS_VCPU = 8,	
    /**
     * return domain interfaces info
     */
    VIR_DOMAIN_STATS_INTERFACE = 16,
    /**
     * return domain block info
     */
    VIR_DOMAIN_STATS_BLOCK = 32,
    /**
     * return domain perf event info
     */
    VIR_DOMAIN_STATS_PERF = 64,
    /**
     * return iothread poll info
     */
    VIR_DOMAIN_STATS_IOTHREAD = 128
}

export declare enum GetAllDomainStatsFlags {
    VIR_CONNECT_GET_ALL_DOMAINS_STATS_ACTIVE = 1,
    VIR_CONNECT_GET_ALL_DOMAINS_STATS_INACTIVE = 2,
    VIR_CONNECT_GET_ALL_DOMAINS_STATS_OTHER	= 128,
    VIR_CONNECT_GET_ALL_DOMAINS_STATS_PAUSED = 32,
    VIR_CONNECT_GET_ALL_DOMAINS_STATS_PERSISTENT = 4,
    VIR_CONNECT_GET_ALL_DOMAINS_STATS_RUNNING = 16,
    VIR_CONNECT_GET_ALL_DOMAINS_STATS_SHUTOFF = 64,
    VIR_CONNECT_GET_ALL_DOMAINS_STATS_TRANSIENT	= 8,
    /**
     * report statistics that can be obtained immediately without any blocking
     */
    VIR_CONNECT_GET_ALL_DOMAINS_STATS_NOWAIT = 536870912,
    /**
     * include backing chain for block stats
     */
    VIR_CONNECT_GET_ALL_DOMAINS_STATS_BACKING = 1073741824,
    /**
     * enforce requested stats
     */
    VIR_CONNECT_GET_ALL_DOMAINS_STATS_ENFORCE_STATS = 2147483648
}

export declare enum BaselineCPUFlags {
    /**
     * show all features
     */
    VIR_CONNECT_BASELINE_CPU_EXPAND_FEATURES = 1,
    /**
     * filter out non-migratable features
     */
    VIR_CONNECT_BASELINE_CPU_MIGRATABLE	= 2	
}

export declare enum DomainDeviceModifyFlags {
    VIR_DOMAIN_DEVICE_MODIFY_CURRENT = 0,
    VIR_DOMAIN_DEVICE_MODIFY_LIVE = 1,
    VIR_DOMAIN_DEVICE_MODIFY_CONFIG = 2,
    VIR_DOMAIN_DEVICE_MODIFY_FORCE = 4
}

export declare enum DomainState {
    /**
     * no state
     */
    VIR_DOMAIN_NOSTATE = "no state",
    /**
     * the domain is running
     */
    VIR_DOMAIN_RUNNING = "running",
    /**
     * the domain is blocked on resource
     */
    VIR_DOMAIN_BLOCKED = "idle",
    /**
     * the domain is paused by user
     */
    VIR_DOMAIN_PAUSED = "paused",
    /**
     * the domain is being shut down
     */
    VIR_DOMAIN_SHUTDOWN = "in shutdown",
    /**
     * the domain is shut off
     */
    VIR_DOMAIN_SHUTOFF = "shut off",
    /**
     * the domain is crashed
     */
    VIR_DOMAIN_CRASHED = "crashed",
    /**
     * the domain is suspended by guest power management
     */
    VIR_DOMAIN_PMSUSPENDED = "pmsuspended"
}

export declare interface DomainInfo {
    /**
     * the current state of the domain
     */
    state: DomainState,
    /**
     * the maximum memory in KBytes allowed
     */
    maxMemory: number,
    /**
     * the memory in KBytes used by the domain
     */
    memory: number,
    /**
     * the number of virtual CPUs for the domain
     */
    vcpus: number,
    /**
     * the CPU time used in nanoseconds
     */
    cpuTime: number
}

export declare interface DomainBlockInfo {
    /**
     * logical size in bytes of the image (how much storage the guest will see)
     */
    capacity: number,
    /**
     * host storage in bytes occupied by the image (such as 
     * highest allocated extent if there are no holes, similar to 'du')
     */
    allocation: number,
    /**
     * host physical size in bytes of the image container (last offset, similar to 'ls'
     */
    physical: number
}

export declare enum DomainMetadataType {
    /**
     * Operate on <description>
     */
    VIR_DOMAIN_METADATA_DESCRIPTION = 0,
    /**
     * Operate on <title>
     */
    VIR_DOMAIN_METADATA_TITLE = 1,
    /**
     * Operate on <metadata>
     */
    VIR_DOMAIN_METADATA_ELEMENT = 2,
    VIR_DOMAIN_METADATA_LAST = 3
}

export declare enum DomainModificationImpactFlag {
    /**
     * Affect current domain state.
     */
    VIR_DOMAIN_AFFECT_CURRENT = 0,
    /**
     * Affect running domain state.
     */
    VIR_DOMAIN_AFFECT_LIVE = 1,
    /**
     * Affect persistent domain state.
     */
    VIR_DOMAIN_AFFECT_CONFIG =2
}

export declare interface MigrateInfo {
    /**
     * dest hostname/URI as seen from the source host
     */
    dest_uri?: string,
    /**
     * rename domain to this at destination
     */
    dest_name?: string,
    /**
     * Bandwidth to be used for migration
     */
    bandwidth?: number,
    /**
     * bitwise-OR of `DomainMigrateFlags` or Array of `DomainMigrateFlags` 
     */
    flags: Array<DomainMigrateFlags> | number
}

export declare enum DomainMigrateFlags {
    /**
     * Do not pause the domain during migration. The domain's memory will be transferred
     * to the destination host while the domain is running. The migration may never converge
     * if the domain is changing its memory faster then it can be transferred. The domain can be
     * manually paused anytime during migration using `Domain.Suspend(Async)`.
     */
    VIR_MIGRATE_LIVE = 1,
    /**
     * Tell the source libvirtd to connect directly to the destination host. Without this flag the client
     * (e.g., virsh) connects to both hosts and controls the migration process. In peer-to-peer mode,
     * the source libvirtd controls the migration by calling the destination daemon directly.
     */
    VIR_MIGRATE_PEER2PEER = 2,
    /**
     * Tunnel migration data over libvirtd connection. Without this flag the source hypervisor sends migration
     * data directly to the destination hypervisor. This flag can only be used when `VIR_MIGRATE_PEER2PEER` is set
     * as well.
     */
    VIR_MIGRATE_TUNNELLED = 4,
    /**
     * Define the domain as persistent on the destination host after successful migration. If the domain was
     * persistent on the source host and `VIR_MIGRATE_UNDEFINE_SOURCE` is not used, it will end up persistent
     * on both hosts.
     */
    VIR_MIGRATE_PERSIST_DEST = 8,
    /**
     * Undefine the domain on the source host once migration successfully finishes.
     */
    VIR_MIGRATE_UNDEFINE_SOURCE = 16,
    /**
     * Leave the domain suspended on the destination host. `Domain.Resume(Async)` (on the Domain returned by
     * the migration API) has to be called explicitly to resume domain's virtual CPUs.
     */
    VIR_MIGRATE_PAUSED = 32,
    /**
     * Migrate full disk images in addition to domain's memory. By default only non-shared non-readonly disk images
     * are transferred. The `VIR_MIGRATE_PARAM_MIGRATE_DISKS` parameter can be used to specify which disks should be migrated.
     * This flag and `VIR_MIGRATE_NON_SHARED_INC` are mutually exclusive.
     */
    VIR_MIGRATE_NON_SHARED_DISK = 64,
    /**
     * Migrate disk images in addition to domain's memory. This is similar to `VIR_MIGRATE_NON_SHARED_DISK`, but only the top level of
     * each disk's backing chain is copied. That is, the rest of the backing chain is expected to be present on the destination and to be
     * exactly the same as on the source host. This flag and `VIR_MIGRATE_NON_SHARED_DISK` are mutually exclusive.
     */
    VIR_MIGRATE_NON_SHARED_INC = 128,
    /**
     * Protect against domain configuration changes during the migration process. This flag is used automatically when both sides support it.
     * Explicitly setting this flag will cause migration to fail if either the source or the destination does not support it.
     */
    VIR_MIGRATE_CHANGE_PROTECTION = 256,
    /**
     * Force migration even if it is considered unsafe. In some cases libvirt may refuse to migrate the domain because doing so may lead to potential problems
     * such as data corruption, and thus the migration is considered unsafe. For a QEMU domain this may happen if the domain uses disks without explicitly setting
     * cache mode to "none". Migrating such domains is unsafe unless the disk images are stored on coherent clustered filesystem, such as GFS2 or GPFS.
     */
    VIR_MIGRATE_UNSAFE = 512,
    /**
     * Migrate a domain definition without starting the domain on the destination and without stopping it on the source host. Offline migration requires
     * `VIR_MIGRATE_PERSIST_DEST` to be set. Offline migration may not copy disk storage or any other file based storage (such as UEFI variables).
     */
    VIR_MIGRATE_OFFLINE = 1024,
    /**
     * Compress migration data. The compression methods can be specified using `VIR_MIGRATE_PARAM_COMPRESSION`. A hypervisor default method will be used if this parameter
     * is omitted. Individual compression methods can be tuned via their specific `VIR_MIGRATE_PARAM_COMPRESSION_*` parameters.
     */
    VIR_MIGRATE_COMPRESSED = 2048,
    /**
     * Cancel migration if a soft error (such as I/O error) happens during migration.
     */
    VIR_MIGRATE_ABORT_ON_ERROR = 4096,
    /**
     * Enable algorithms that ensure a live migration will eventually converge. This usually means the domain will be slowed down to make sure it does not change its memory
     * faster than a hypervisor can transfer the changed memory to the destination host. `VIR_MIGRATE_PARAM_AUTO_CONVERGE_*` parameters can be used to tune the algorithm.
     */
    VIR_MIGRATE_AUTO_CONVERGE = 8192,
    /**
     * This flag can be used with RDMA migration (i.e., when `VIR_MIGRATE_PARAM_URI` starts with "rdma://") to tell the hypervisor to pin all domain's memory at once before
     * migration starts rather then letting it pin memory pages as needed. This means that all memory pages belonging to the domain will be locked in host's memory and the host
     * will not be allowed to swap them out. For QEMU/KVM this requires hard_limit memory tuning element (in the domain XML) to be used and set to the maximum memory configured
     * for the domain plus any memory consumed by the QEMU process itself. Beware of setting the memory limit too high (and thus allowing the domain to lock most of
     * the host's memory). Doing so may be dangerous to both the domain and the host itself since the host's kernel may run out of memory.
     */
    VIR_MIGRATE_RDMA_PIN_ALL = 16384,
    /**
     * Setting the `VIR_MIGRATE_POSTCOPY` flag tells libvirt to enable post-copy migration. However, the migration will start normally and `DomainMigrateStartPostCopy` needs to be
     * called to switch it into the post-copy mode.
     */
    VIR_MIGRATE_POSTCOPY = 32768,
    /**
     * Setting the `VIR_MIGRATE_TLS` flag will cause the migration to attempt to use the TLS environment configured by the hypervisor in order to perform the migration.
     * If incorrectly configured on either source or destination, the migration will fail.
     */
    VIR_MIGRATE_TLS = 65536
}

export declare enum DomainRebootFlags {
    /**
     * hypervisor choice
     */
    VIR_DOMAIN_REBOOT_DEFAULT = 0,
    /**
     * Send ACPI event
     */
    VIR_DOMAIN_REBOOT_ACPI_POWER_BTN = 1,
    /**
     * Use guest agent
     */
    VIR_DOMAIN_REBOOT_GUEST_AGENT = 2,
    /**
     * Use initctl
     */
    VIR_DOMAIN_REBOOT_INITCTL = 4,
    /**
     * Send a signal
     */
    VIR_DOMAIN_REBOOT_SIGNAL = 8,
    /**
     * Use paravirt guest control
     */
    VIR_DOMAIN_REBOOT_PARAVIRT = 16,
}

export declare enum DomainShutdownFlags {
    /**
     * hypervisor choice
     */
    VIR_DOMAIN_SHUTDOWN_DEFAULT = 0,
    /**
     * Send ACPI event
     */
    VIR_DOMAIN_SHUTDOWN_ACPI_POWER_BTN = 1,
    /**
     * Use guest agent
     */
    VIR_DOMAIN_SHUTDOWN_GUEST_AGENT = 2,
    /**
     * Use initctl
     */
    VIR_DOMAIN_SHUTDOWN_INITCTL = 4,
    /**
     * Send a signal
     */
    VIR_DOMAIN_SHUTDOWN_SIGNAL = 8,
    /**
     * Use paravirt guest control
     */
    VIR_DOMAIN_SHUTDOWN_PARAVIRT = 16
}

export declare enum DomainXMLFlags {
    /**
     * dump security sensitive information too
     */
    VIR_DOMAIN_XML_SECURE = 1,
    /**
     * dump inactive domain information
     */
    VIR_DOMAIN_XML_INACTIVE = 2,
    /**
     * update guest CPU requirements according to host CPU
     */
    VIR_DOMAIN_XML_UPDATE_CPU = 4,
    /**
     * dump XML suitable for migration
     */
    VIR_DOMAIN_XML_MIGRATABLE = 8
}

export declare enum DomainUndefineFlags {
    /**
     * Also remove any managed save
     */
    VIR_DOMAIN_UNDEFINE_MANAGED_SAVE = 1,
    /**
     * If last use of domain, then also remove any snapshot metadata
     */
    VIR_DOMAIN_UNDEFINE_SNAPSHOTS_METADATA = 2,
    /**
     * Also remove any nvram file
     */
    VIR_DOMAIN_UNDEFINE_NVRAM = 4,
    /**
     * Keep nvram file Future undefine control flags should come here.
     */
    VIR_DOMAIN_UNDEFINE_KEEP_NVRAM =8
}

export declare enum StoragePoolDeleteFlags {
    /**
     * Delete metadata only (fast)
     */
    VIR_STORAGE_POOL_DELETE_NORMAL = 0,
    /**
     * Clear all data to zeros (slow)
     */
    VIR_STORAGE_POOL_DELETE_ZEROED = 1,
}

export declare enum StoragePoolState {
    /**
     * Not running
     */
    VIR_STORAGE_POOL_INACTIVE = 0,
    /**
     * Initializing pool, not available
     */
    VIR_STORAGE_POOL_BUILDING = 1,
    /**
     * Running normally
     */
    VIR_STORAGE_POOL_RUNNING = 2,
    /**
     * Running degraded
     */
    VIR_STORAGE_POOL_DEGRADED = 3,
    /**
     * Running, but not accessible
     */
    VIR_STORAGE_POOL_INACCESSIBLE = 4,
    VIR_STORAGE_POOL_STATE_LAST	=	5
}

export declare interface StoragePoolInfo {
    state: StoragePoolState,
    capacity: number,
    allocation: number,
    available: number
}

export declare enum StorageVolType {
    /**
     * Regular file based volumes
     */
    VIR_STORAGE_VOL_FILE = 0,
    /**
     * Block based volumes
     */
    VIR_STORAGE_VOL_BLOCK = 1,
    /**
     * Directory-passthrough based volume
     */
    VIR_STORAGE_VOL_DIR = 2,
    /**
     * Network volumes like RBD (RADOS Block Device)
     */
    VIR_STORAGE_VOL_NETWORK = 3,
    /**
     * Network accessible directory that can contain other network volumes
     */
    VIR_STORAGE_VOL_NETDIR = 4,
    /**
     * Ploop based volumes
     */
    VIR_STORAGE_VOL_PLOOP = 5,
    VIR_STORAGE_VOL_LAST = 6
}    

export declare interface StorageVolInfo {
    /**
     * virStorageVolType flags
     */
    type: StorageVolType,
    /**
     * Logical size bytes
     */
    capacity: number,
    /**
     * Current allocation bytes
     */
    allocation: number    
}

export declare enum StorageVolInfoFlags {
    /**
     * Return the physical size in allocation
     */
    VIR_STORAGE_VOL_USE_ALLOCATION = 0,
    VIR_STORAGE_VOL_GET_PHYSICAL = 1
}

export declare enum StorageVolDeleteFlags {
    /**
     * Delete metadata only (fast)
     */
    VIR_STORAGE_VOL_DELETE_NORMAL = 0,
    /**
     * Clear all data to zeros (slow)
     */
    VIR_STORAGE_VOL_DELETE_ZEROED = 1,
    /**
     * Force removal of volume, even if in use
     */
    VIR_STORAGE_VOL_DELETE_WITH_SNAPSHOTS = 2
}

export declare interface Hypervisor {
    /**
     * Compares the given CPU description with the host CPU.
     * @param {string} domainCpuXml XML describing the CPU to compare with host CPU
     * @param {number} [flags] bitwise-OR of `CompareCPUFlags`
     * @param {function(Error, CPUCompareResult)} callback comparison result according to enum `CPUCompareResult`. 
     * If VIR_CONNECT_COMPARE_CPU_FAIL_INCOMPATIBLE is used and domainCpuXml CPU is incompatible with host CPU, 
     * this function will return VIR_CPU_COMPARE_ERROR (instead of VIR_CPU_COMPARE_INCOMPATIBLE) 
     * and the error will use the VIR_ERR_CPU_INCOMPATIBLE code with a message providing more details about the incompatibility. 
     */
    compareCPU(domainCpuXml: string, callback:(error: Error, result: CPUCompareResult) => void): void
    compareCPU(domainCpuXml: string, flags: number, callback:(error: Error, result: CPUCompareResult) => void): void
    /**
     * Compares the given CPU description with the host CPU.
     * @param {string} domainCpuXml XML describing the CPU to compare with host CPU
     * @param {number} [flags] bitwise-OR of `CompareCPUFlags`
     * @returns {bluebird<CPUCompareResult>} comparison result according to enum `CPUCompareResult`. 
     * If VIR_CONNECT_COMPARE_CPU_FAIL_INCOMPATIBLE is used and domainCpuXml CPU is incompatible with host CPU, 
     * this function will return VIR_CPU_COMPARE_ERROR (instead of VIR_CPU_COMPARE_INCOMPATIBLE) 
     * and the error will use the VIR_ERR_CPU_INCOMPATIBLE code with a message providing more details about the incompatibility.
     */
    compareCPUAsync(domainCpuXml: string): bluebird<CPUCompareResult>;
    connect(callback:(err: Error) => void): void;
    connectAsync(): bluebird<void>;
    /**
     * Launch a new guest domain, based on an XML description. The domain is not persistent, so its definition will disappear when it is destroyed,
     * or if the host is restarted (use `defineDomain` to define persistent domains).
     * @param {string} domainXml string containing an XML description of the domain
     * @param {number | Array<DomainCreateFlags>} [flags] bitwise-OR of supported `DomainCreateFlags` or Array of `DomainCreateFlags`
     * @param {function(Error, Domain)} callback a new `Domain` object or NULL in case of failure 
     */
    createDomain(domainXml: string, callback:(error: Error, result: Domain) => void): void
    createDomain(domainXml: string, flags: number | Array<DomainCreateFlags>, callback:(error: Error, result: Domain) => void): void
    /**
     * Launch a new guest domain, based on an XML description. The domain is not persistent, so its definition will disappear when it is destroyed,
     * or if the host is restarted (use `defineDomainAsync`} to define persistent domains).
     * @param {string} domainXml string containing an XML description of the domain
     * @param {number} [flags] bitwise-OR of supported `DomainCreateFlags` or Array of `DomainCreateFlags`
     * @returns {bluebird<Domain>} a new `Domain` object or NULL in case of failure 
     */
    createDomainAsync(domainXml: string, flags?: number | Array<DomainCreateFlags>): bluebird<Domain>;
    /**
     * Create and start a new virtual network, based on an XML description
     * @param {string} networkXml an XML description of the network
     * @param {function(Error, Network)} callback a new `Network` object or NULL in case of failure
     */
    createNetwork(networkXml: string,callback: (error: Error, result: Network) => void): void
    /**
     * Create and start a new virtual network, based on an XML description
     * @param {string} networkXml an XML description of the network
     * @returns {bluebird<Network>} a new `Network` object or NULL in case of failure
     */
    createNetworkAsync(networkXml: string): bluebird<Network>;
    /**
     * Create a new device on the VM host machine, for example, virtual HBAs created using vport_create.
     * @param {string} deviceXml string containing an XML description of the device to be created
     * @param {function(Error, NodeDevive)} callback A `NodeDevice` object if successful, NULL in case of failure
     */
    createNodeDevice(deviceXml: string, callback: (error: Error, result: NodeDevive) => void): void
    /**
     * Create a new device on the VM host machine, for example, virtual HBAs created using vport_create.
     * @param {string} deviceXml string containing an XML description of the device to be created
     * @returns {bluebird<NodeDevive>} A `NodeDevice` object if successful, NULL in case of failure
     */
    createNodeDeviceAsync(deviceXml: string): bluebird<NodeDevive>;
    /**
     * Create a new storage based on its XML description. The pool is not persistent, so its definition will disappear when it is destroyed, or if the host is restarted
     * @param {string} storagePoolXml XML description for new pool
     * @param {function(Error, StoragePool)} callback `StoragePool` object if successful, NULL in case of failure
     */
    createStoragePool(storagePoolXml: string, callback: (error: Error, result: StoragePool) => void): void
    /**
     * Create a new storage based on its XML description. The pool is not persistent, so its definition will disappear when it is destroyed, or if the host is restarted
     * @param {string} storagePoolXml XML description for new pool
     * @returns {bluebird<StoragePool>} `StoragePool` object if successful, NULL in case of failure
     */
    createStoragePoolAsync(storagePoolXml: string): bluebird<StoragePool>;
    /**
     * Define a domain, but does not start it. This definition is persistent, until explicitly undefined with `Domain.undefineDomain`. 
     * A previous definition for this domain would be overridden if it already exists.
     * @param {string} domainXml the XML description for the domain, preferably in UTF-8
     * @param {function(Error, Domain)} callback `Domain` object if successful, NULL in case of failure
     */
    defineDomain(domainXml: string, callback: (error: Error, result: Domain) => void): void
    /**
     * Define a domain, but does not start it. This definition is persistent, until explicitly undefined with `Domain.undefineDomainAsync`. 
     * A previous definition for this domain would be overridden if it already exists.
     * @param {string} domainXml the XML description for the domain, preferably in UTF-8
     * @returns {bluebird<Domain>} `Domain` object if successful, NULL in case of failure
     */
    defineDomainAsync(domainXml: string): bluebird<Domain>;
    /**
     * Define an inactive persistent physical host interface or modify an existing persistent one from the XML description.
     * @param {string} interfaceXml the XML description for the interface, preferably in UTF-8
     * @param {function(Error, Interface)} callback `Interface` object if successful, NULL in case of failure
     */
    defineInterface(interfaceXml: string, callback: (error:Error, result: Interface) => void): void
    /**
     * Define an inactive persistent physical host interface or modify an existing persistent one from the XML description.
     * @param {string} interfaceXml the XML description for the interface, preferably in UTF-8
     * @returns {bluebird<Interface>} `Interface` object if successful, NULL in case of failure
     */
    defineInterfaceAsync(interfaceXml: string): bluebird<Interface> ;
    /**
     * Define an inactive persistent virtual network or modify an existing persistent one from the XML description.
     * @param {string} networkXml the XML description for the network, preferably in UTF-8
     * @param {function(Error, Network)} callback `Network` object if successful, NULL in case of failure
     */
    defineNetwork(networkXml: string, callback: (error: Error, result: Network) => void): void
    /**
     * Define an inactive persistent virtual network or modify an existing persistent one from the XML description.
     * @param {string} networkXml the XML description for the network, preferably in UTF-8
     * @returns {bluebird<Network>} `Network` object if successful, NULL in case of failure
     */
    defineNetworkAsync(networkXml: string): bluebird<Network>;
    /**
     * Define a new network filter, based on an XML description
     * @param {string} networkFilterXml an XML description of the nwfilter
     * @param {function(Error, NetworkFilter)} callback `NetworkFilter` object if successful, NULL in case of failure
     */
    defineNetworkFilter(networkFilterXml: string, callback: (error: Error, result: NetworkFilter) => void): void
    /**
     * Define a new network filter, based on an XML description
     * @param {string} networkFilterXml an XML description of the nwfilter
     * @returns {bluebird<NetworkFilter>} `NetworkFilter` object if successful, NULL in case of failure
     */
    defineNetworkFilterAsync(networkFilterXml: string): bluebird<NetworkFilter>;
    /**
     * Define an inactive persistent storage pool or modify an existing persistent one from the XML description.
     * @param {string} storagePoolXml XML description for new pool
     * @param {function(Error, StoragePool)} callback `StoragePool` object if successful, NULL in case of failure
     */
    defineStoragePool(storagePoolXml: string, callback: (error: Error, result: StoragePool) => void): void;
    /**
     * Define an inactive persistent storage pool or modify an existing persistent one from the XML description.
     * @param {string} storagePoolXml XML description for new pool
     * @returns {bluebird<StoragePool>} `StoragePool` object if successful, NULL in case of failure
     */
    defineStoragePoolAsync(storagePoolXml: string): bluebird<StoragePool>;
    disconnect(callback: (error: Error) => void): void;
    disconnectAsync(): bluebird<void>;
    /**
     * Query statistics for all domains on a given connection. Report statistics of various parameters for a running 
     * VM according to `stats` field. The statistics are returned as an array of structures for each queried domain. 
     * The structure contains an array of typed parameters containing the individual statistics. The typed parameter 
     * name for each statistic field consists of a dot-separated string containing name of the requested group followed by a group
     * specific description of the statistic value.
     * @param {number} stats stats to return, binary-OR of `DomainStatsTypes`
     * @param {number} [flags] extra flags; binary-OR of `GetAllDomainStatsFlags`
     * @param {function(Error, {string: {string: number}})} callback Object with domain name followed by its param and value as sub key-value pair 
     */
    getAllDomainStats(stats: number, callback: (error: Error, result: ({[domainName: string] : {[x:string]: number}})) => void): void;
    getAllDomainStats(stats: number, flags: number, callback: (error: Error, result: ({[domainName: string] : {[x:string]: number}})) => void): void;
    /**
     * Query statistics for all domains on a given connection. Report statistics of various parameters for a running 
     * VM according to `stats` field. The statistics are returned as an array of structures for each queried domain. 
     * The structure contains an array of typed parameters containing the individual statistics. The typed parameter 
     * name for each statistic field consists of a dot-separated string containing name of the requested group followed by a group
     * specific description of the statistic value.
     * @param {number} stats stats to return, binary-OR of `DomainStatsTypes`
     * @param {number} [flags] extra flags; binary-OR of `GetAllDomainStatsFlags`
     */
    getAllDomainStatsAsync(stats: number, flags?: number): bluebird<{[domainName: string] : {[x:string]: number}}>
    /**
     * Computes the most feature-rich CPU which is compatible with all given host CPUs. 
     * If `flags` includes `VIR_CONNECT_BASELINE_CPU_EXPAND_FEATURES` then libvirt will explicitly list
     * all CPU features that are part of the host CPU, without this flag features that are part of 
     * the CPU model will not be listed. If `flags` includes `VIR_CONNECT_BASELINE_CPU_MIGRATABLE`, the resulting 
     * CPU will not include features that block migration.
     * @param {Array<string>} cpuXmls array of XML descriptions of host CPUs
     * @param {Array<number>} [flags] flags from BaselineCPUFlags. The bitwise-OR will be done internally
     * @param {function(Error, string)} callback XML description of the computed CPU or NULL on error.
     */
    getBaselineCPU(cpuXmls: Array<string>, callback: (error: Error, result: string) => void): void;
    getBaselineCPU(cpuXmls: Array<string>, flags: Array<number>, callback: (error: Error, result: string) => void): void;
    /**
     * Computes the most feature-rich CPU which is compatible with all given host CPUs. 
     * If `flags` includes `VIR_CONNECT_BASELINE_CPU_EXPAND_FEATURES` then libvirt will explicitly list
     * all CPU features that are part of the host CPU, without this flag features that are part of 
     * the CPU model will not be listed. If `flags` includes `VIR_CONNECT_BASELINE_CPU_MIGRATABLE`, the resulting 
     * CPU will not include features that block migration.
     * @param {Array<string>} cpuXmls array of XML descriptions of host CPUs
     * @param {Array<number>} [flags] flags from BaselineCPUFlags. The bitwise-OR will be done internally
     * @returns {bluebird<string>} XML description of the computed CPU (caller frees) or NULL on error.
     */
    getBaselineCPUAsync(cpuXmls: Array<string>, flags?: Array<number>): bluebird<string>;
    /**
     * Provides capabilities of the hypervisor / driver.
     * @param {function(Error, string)} callback NULL in case of error, or an XML string defining the capabilities.
     */
    getCapabilities(callback:(error: Error, result: string) => void): void;
    /**
     * Provides capabilities of the hypervisor / driver.
     * @returns {bluebird<string>} NULL in case of error, or an XML string defining the capabilities.
     */
    getCapabilitiesAsync(): bluebird<string>;
    /**
     * Provides the version of libvirt used by the daemon running on the host
     * @param {function(Error, number)} callback libvirt library version used on the connection
     */
    getLibVirtVersion(callback:(error: Error, result: number) => void): void;
    /**
     * Provides the version of libvirt used by the daemon running on the host
     * @returns {bluebird<number>}libvirt library version used on the connection
     */
    getLibVirtVersionAsync(): bluebird<number>;
    /**
     * Provides the number of active domains.
     * @param {function(Error, number)} callback the number of domain found or -1 in case of error
     */
    getNumberOfActiveDomains(callback: (error: Error, result: number) => void): void;
    /**
     * Provides the number of active domains.
     * @returns {bluebird<number>} the number of domain found or -1 in case of error
     */
    getNumberOfActiveDomainsAsync(): bluebird<number>;
    /**
     * Provides the number of defined but inactive domains.
     * @param {function(Error, number)} callback the number of domain found or -1 in case of error
     */
    getNumberOfDefinedDomains(callback: (error: Error, result: number) => void): void;
    /**
     * Provides the number of defined but inactive domains.
     * @returns {bluebird<number>} the number of domain found or -1 in case of error
     */
    getNumberOfDefinedDomainsAsync(): bluebird<number>;
    /**
     * Determine if the connection to the hypervisor is still alive
     * @param {function(Error, boolean)} callback Status of the connection
     */
    isConnectionAlive(callback: (error: Error, result: boolean) => void): void;
    /**
     * Determine if the connection to the hypervisor is still alive
     * @returns {bluebird<boolean>} Status of the connection
     */
    isConnectionAliveAsync(): bluebird<boolean>;
    /**
     * Collect the list of active domains, and store their IDs in array
     * @param {function(Error, Array<number>)} callback Array containing domain ids
     */
    listActiveDomains(callback: (error: Error, result: Array<number>) => void): void;
    /**
     * Collect the list of active domains, and store their IDs in array
     * @returns {bluebird<Array<number>>} Array containing domain ids
     */
    listActiveDomainsAsync(): bluebird<Array<number>>;
    /**
     * Provides the list of names of active storage pools
     * @param {function(Error, Array<string>)} callback Array containing storage pool names
     */
    listActiveStoragePools(callback: (error: Error, result: Array<string>) => void): void;
    /**
     * Provides the list of names of active storage pools
     * @returns {bluebird<Array<string>>} Array containing storage pool names
     */
    listActiveStoragePoolsAsync(): bluebird<Array<string>>;
    /**
     * list the defined but inactive domains
     * @param {function(Error, Array<string>)} callback Array containing domain names
     */
    listDefinedDomains(callback: (error: Error, result: Array<string>) => void): void;
    /**
     * list the defined but inactive domains
     * @returns {bluebird<Array<string>>} Array containing domain names
     */
    listDefinedDomainsAsync(): bluebird<Array<string>>;
    /**
     * Try to find a domain based on the hypervisor ID number.
     * `Note:-` that this won't work for inactive domains which have an ID of -1, 
     * in that case a use `lookupDomainByName` or `lookupDomainByUUID` instead.
     * @param {number} id the domain ID number
     * @param {function(Error, Domain)} callback a new domain object or NULL in case of failure. 
     * If the domain cannot be found, then `Libvirt.VIR_ERR_NO_DOMAIN` error is raised
     */
    lookupDomainById(id: number, callback: (error: Error, result: Domain) => void): void;
    /**
     * Try to find a domain based on the hypervisor ID number.
     * `Note:-` that this won't work for inactive domains which have an ID of -1, 
     * in that case a use `lookupDomainByName` or `lookupDomainByUUID` instead.
     * @param {number} id the domain ID number
     * @returns {bluebird<Domain>} a new domain object or NULL in case of failure. 
     * If the domain cannot be found, then `Libvirt.VIR_ERR_NO_DOMAIN` error is raised
     */
    lookupDomainByIdAsync(id: number): bluebird<Domain>;
    /**
     * Try to lookup a domain on the given hypervisor based on its name
     * @param {string} name name for the domain
     * @param {function(Error, Domain)} callback a new domain object or NULL in case of failure. 
     * If the domain cannot be found, then `Libvirt.VIR_ERR_NO_DOMAIN` error is raised.
     */
    lookupDomainByName(name: string, callback: (error: Error, result: Domain) => void): void;
    /**
     * Try to lookup a domain on the given hypervisor based on its name
     * @param {string} name name for the domain
     * @returns {bluebird<Domain>} a new domain object or NULL in case of failure. 
     * If the domain cannot be found, then `Libvirt.VIR_ERR_NO_DOMAIN` error is raised.
     */
    lookupDomainByNameAsync(name: string): bluebird<Domain>;
    /**
     * Try to lookup a domain on the given hypervisor based on its UUID.
     * @param {string} uuid the raw UUID for the domain
     * @param {function(Error, Domain)} callback a new domain object or NULL in case of failure. 
     * If the domain cannot be found, then `Libvirt.VIR_ERR_NO_DOMAIN` error is raised.
     */
    lookupDomainByUUID(uuid: string, callback: (error: Error, result: Domain) => void): void;
    /**
     * Try to lookup a domain on the given hypervisor based on its UUID.
     * @param {string} uuid the raw UUID for the domain
     * @returns {bluebird<Domain>} a new domain object or NULL in case of failure. 
     * If the domain cannot be found, then `Libvirt.VIR_ERR_NO_DOMAIN` error is raised.
     */
    lookupDomainByUUIDAsync(uuid: string): bluebird<Domain>;
    /**
     * Fetch a storage pool based on its unique name
     * @param {string} name name of pool to fetch
     * @param {function(Error, StoragePool)} callback A storagepool object
     */
    lookupStoragePoolByName(name: string, callback:(error: Error, result: StoragePool) => void): void;
    /**
     * Fetch a storage pool based on its unique name
     * @param {string} name name of pool to fetch
     * @returns {bluebird<StoragePool>} A storagepool object
     */
    lookupStoragePoolByNameAsync(name: string): bluebird<StoragePool>;

}

export declare interface Domain {
    /**
     * Create a virtual device attachment to backend. 
     * @param {string} deviceXml pointer to XML description of one device
     * @param {Array<DomainDeviceModifyFlags>} [flags] Array of `DomainDeviceModifyFlags`. 
     * The bitwise-OR will be done internally 
     * @param {function(Error, void)} callback After attaching a device
     */
    attachDevice(deviceXml: string, callback:(error: Error, result: void)=> void): void;
    attachDevice(deviceXml: string, flags: Array<DomainDeviceModifyFlags>, callback:(error: Error, result: void)=> void): void;
    /**
     * Create a virtual device attachment to backend. 
     * @param {string} deviceXml pointer to XML description of one device
     * @param {Array<DomainDeviceModifyFlags>} [flags] Array of `DomainDeviceModifyFlags`. 
     * The bitwise-OR will be done internally 
     */
    attachDeviceAsync(deviceXml: string, flags?: Array<DomainDeviceModifyFlags>): bluebird<void>;
    /**
     * Destroy the domain object. The running instance is shutdown if not down already and 
     * all resources used by it are given back to the hypervisor. If the domain is transient 
     * and has any snapshot metadata, then that metadata will automatically be deleted when the domain quits.
     * @param {function(Error, result)} callback After destroying the domain
     */
    destroy(callback: (error: Error, result: void) => void): void;
    /**
     * Destroy the domain object. The running instance is shutdown if not down already and 
     * all resources used by it are given back to the hypervisor. If the domain is transient 
     * and has any snapshot metadata, then that metadata will automatically be deleted when the domain quits.
     */
    destroyAsync(): bluebird<void>;
    /**
     * Extract information about a domain's block device.
     * @param {string} disk path to the block device(the <source file='...'/> sub-element, such as "/path/to/image"),
     * or device shorthand(the <target dev='...'/> sub-element, such as "vda")
     * @param {function(error, DomainBlockInfo)} callback Object containing information about disk 
     */
    getBlockInfo(disk: string, callback:(error: Error, result: DomainBlockInfo) => void): void;
    /**
     * Extract information about a domain's block device.
     * @param {string} disk path to the block device(the <source file='...'/> sub-element, such as "/path/to/image"),
     * or device shorthand(the <target dev='...'/> sub-element, such as "vda")
     * @returns {bluebird<DomainBlockInfo>} Object containing information about disk
     */
    getBlockInfoAsync(disk: string): bluebird<DomainBlockInfo>
    /**
     * Extract information about a domain.
     * @param {function(Error, DomainInfo)} callback Object containing domain information
     */
    getInfo(callback:(error: Error, result: DomainInfo) => void): void;
    /**
     * Extract information about a domain.
     * @returns {bluebird<DomainInfo>} Object containing domain information
     */
    getInfoAsync(): bluebird<DomainInfo>;
    /**
     * Retrieves the appropriate domain element given by `DomainMetadataType`. 
     * If VIR_DOMAIN_METADATA_ELEMENT is requested parameter `uri` must be set to the name of the namespace
     * the requested elements belong to, otherwise must be `NULL`. If an element of the domain XML is not present,
     * the resulting error will be `VIR_ERR_NO_DOMAIN_METADATA`. 
     * @param {DomainMetadataType} type type of metadata, from `DomainMetadataType`
     * @param {string} uri XML namespace identifier
     * @param {number} [flags] bitwise-OR of `DomainModificationImpact`
     * @param {function(Error, string)} callback the metadata string on success
     */
    getMetadata(type: DomainMetadataType, uri: string, callback:(error: Error, result: DomainBlockInfo) => void): void;
    getMetadata(type: DomainMetadataType, uri: string, flags: number, callback:(error: Error, result: DomainBlockInfo) => void): void;
    /**
     * Retrieves the appropriate domain element given by `DomainMetadataType`. 
     * If VIR_DOMAIN_METADATA_ELEMENT is requested parameter `uri` must be set to the name of the namespace
     * the requested elements belong to, otherwise must be `NULL`. If an element of the domain XML is not present,
     * the resulting error will be `VIR_ERR_NO_DOMAIN_METADATA`. 
     * @param {DomainMetadataType} type type of metadata, from `DomainMetadataType`
     * @param {string} uri XML namespace identifier
     * @param {number} [flags] bitwise-OR of `DomainModificationImpact`
     * @returns {bluebird<string>} the metadata string on success
     */
    getMetadataAsync(type: DomainMetadataType, uri: string, flags?: number): bluebird<string>;
    /**
     * Get the public name for that domain
     * @param {function(Error, string)} callback Name of the domain
     */
    getName(callback:(error: Error, result: string) => void): void;
    /**
     * Get the public name for that domain
     * @returns {bluebird<string>} Name of the domain
     */
    getNameAsync(): bluebird<string>;
    /**
     * Determine if the domain is currently running
     * @param {function(Error, boolean)} callback Boolean value indicating domain is running or not
     */
    isActive(callback:(error: Error, result: boolean) => void): void;
    /**
     * Determine if the domain is currently running
     * @returns {<bluebird<boolean>} Boolean value indicating domain is running or not
     */
    isActiveAsync(): bluebird<boolean>;
    /**
     * Determine if the domain has a persistent configuration which means it will still exist after shutting down
     * @param {function(boolean)} callback Boolean value indicating domain is persistent or not
     */
    isPersistent(callback:(error: Error, result: boolean) => void): void;
    /**
     * Determine if the domain has a persistent configuration which means it will still exist after shutting down
     * @returns {bluebird<boolean>} Boolean value indicating domain is persistent or not
     */
    isPersistentAsync(): bluebird<boolean>;
    /**
     * Migrate the domain object from its current host to the destination host given by dconn (a connection to the destination host)
     * @param {MigrateInfo} migrateInfo 
     * @param {function(Error, Domain)} callback Migrated domain or null in case of error
     */
    migrate(migrateInfo: MigrateInfo, callback: (error:Error, result: Domain) => void): void;
    /**
     * Migrate the domain object from its current host to the destination host given by dconn (a connection to the destination host)
     * @param {MigrateInfo} migrateInfo 
     * @returns {Domain} Migrated domain or null in case of error
     */
    migrateAsync(migrateInfo: MigrateInfo): bluebird<Domain>;
    /**
     * Reboot a domain, the domain object is still usable thereafter, but the domain OS is being stopped
     * for a restart. `Note` that the guest OS may ignore the request. Additionally, the hypervisor may check
     * and support the domain 'on_reboot' XML setting resulting in a domain that shuts down instead of rebooting.
     * @param {number | Array<DomainRebootFlags>} [flags] a bitwise-OR of `DomainRebootFlags` or Array of `DomainRebootFlags`
     * @param {function(Error, result)} callback Returns true in case of success, false otherwise 
     */
    reboot(callback:(error: Error, result: boolean) => void): void;
    reboot(callback:(error: Error, flags: number | Array<DomainRebootFlags>, result: boolean) => void): void;
    /**
     * Reboot a domain, the domain object is still usable thereafter, but the domain OS is being stopped
     * for a restart. `Note` that the guest OS may ignore the request. Additionally, the hypervisor may check
     * and support the domain 'on_reboot' XML setting resulting in a domain that shuts down instead of rebooting.
     * @param {number | Array<DomainRebootFlags>} [flags] a bitwise-OR of `DomainRebootFlags` or Array of `DomainRebootFlags`
     * @returns {bluebird<boolean>} Returns true in case of success, false otherwise 
     */
    rebootAsync(flags?: number | Array<DomainRebootFlags>): bluebird<boolean>;
    /**
     * Reset a domain immediately without any guest OS shutdown. Reset emulates the power reset button on a machine,
     * where all hardware sees the RST line set and reinitializes internal state.
     * @param {function(Error, boolean)} callback true in case of success, false otherwise
     */
    reset(callback:(error:Error, result: boolean) => void): void;
    /**
     * Reset a domain immediately without any guest OS shutdown. Reset emulates the power reset button on a machine,
     * where all hardware sees the RST line set and reinitializes internal state.
     * @returns {bluebird<boolean>} true in case of success, false otherwise
     */
    resetAsync(): bluebird<boolean>;
    /**
     * Resume a suspended domain, the process is restarted from the state where it was frozen by calling `suspend`.
     * Moreover, resume may not be supported if domain is in some special state like `VIR_DOMAIN_PMSUSPENDED`.
     * @param {function(Error, boolean)} callback true in case of success, false otherwise 
     */
    resume(callback:(error: Error, result: boolean) => void):void;
    /**
     * Resume a suspended domain, the process is restarted from the state where it was frozen by calling `suspendAsync`.
     * Moreover, resume may not be supported if domain is in some special state like `VIR_DOMAIN_PMSUSPENDED`.
     * @returns {bluebird<boolean>} true in case of success, false otherwise 
     */
    resumeAsync():bluebird<boolean>;
    /**
     * Sets the appropriate domain element given by `type` to the value of `metadata`. no newlines are permitted, and should be short
     * @param {number} type type of metadata, from `DomainMetadataType`
     * @param {string} metadata new metadata text 
     * @param {string} key XML namespace key, or NULL
     * @param {string} uri XML namespace URI, or NULL
     * @param {number} [flags] bitwise-OR of `DomainModificationImpact`
     * @param {function(Error, boolean)} callback True in case of success, false otherwise
     */
    setMetadata(type: number, metadata: string, key: string, uri: string, callback:(error: Error, result: boolean) => void): void;
    setMetadata(type: number, metadata: string, key: string, uri: string, flags: number, callback:(error: Error, result: boolean) => void): void;
    /**
     * Sets the appropriate domain element given by `type` to the value of `metadata`. no newlines are permitted, and should be short
     * @param {number} type type of metadata, from `DomainMetadataType`
     * @param {string} metadata new metadata text 
     * @param {string} key XML namespace key, or NULL
     * @param {string} uri XML namespace URI, or NULL
     * @param {number} [flags] bitwise-OR of `DomainModificationImpact`
     * @returns {bluebird<boolean>} True in case of success, false otherwise
     */
    setMetadataAsync(type: number, metadata: string, key: string, uri: string, flags?: number): bluebird<boolean>;
    /**
     * Shutdown a domain, the domain object is still usable thereafter but the domain OS is being stopped.
     * @param {Array<DomainShutdownFlags> | number} [flags] a bitwise-OR of `DomainShutdownFlags` or Array of `DomainShutdownFlags`
     * @param {function(Error, boolean)} callback True in case of success, false otherwise
     */
    shutdown(callback:(error: Error, result: boolean) => void): void;
    shutdown(flags:Array<DomainShutdownFlags> | number, callback:(error: Error, result: boolean) => void): void;
    /**
     * Shutdown a domain, the domain object is still usable thereafter but the domain OS is being stopped.
     * @param {Array<DomainShutdownFlags> | number} [flags] a bitwise-OR of `DomainShutdownFlags` or Array of `DomainShutdownFlags`
     * @returns {bluebird<boolean>)} True in case of success, false otherwise
     */
    shutdownAsync(flags?:Array<DomainShutdownFlags> | number): bluebird<boolean>;
    /**
     * Launch a defined domain. If the call succeeds the domain moves from the defined to the running domains pools.
     * @param {Array<DomainCreateFlags> | number} [flags] a bitwise-OR of `DomainCreateFlags` or Array of `DomainCreateFlags`
     * @param {function(Error, boolean)} callback  True in case of success, false otherwise
     */
    start(callback:(error: Error, result: boolean) => void): void;
    start(flags: number | Array<DomainCreateFlags>, callback:(error: Error, result: boolean) => void): void;
    /**
     * Launch a defined domain. If the call succeeds the domain moves from the defined to the running domains pools.
     * @param {Array<DomainCreateFlags> | number} [flags] a bitwise-OR of `DomainCreateFlags` or Array of `DomainCreateFlags`
     * @returns {bluebird<boolean>)} True in case of success, false otherwise
     */
    startAsync(flags?: number | Array<DomainCreateFlags>): bluebird<boolean>;
     /**
     * Suspends an active domain, the process is frozen without further access to CPU resources and I/O but the memory used by
     * the domain at the hypervisor level will stay allocated. Use `resume` to reactivate the domain
     * Moreover, suspend may not be supported if domain is in some special state like `VIR_DOMAIN_PMSUSPENDED`.
     * @param {function(Error, boolean)} callback true in case of success, false otherwise 
     */
    resume(callback:(error: Error, result: boolean) => void):void;
    /**
     * Suspends an active domain, the process is frozen without further access to CPU resources and I/O but the memory used by
     * the domain at the hypervisor level will stay allocated. Use `resumeAsync` to reactivate the domain
     * Moreover, suspend may not be supported if domain is in some special state like `VIR_DOMAIN_PMSUSPENDED`.
     * @returns {bluebird<boolean>} true in case of success, false otherwise 
     */
    resumeAsync():bluebird<boolean>;
    /**
     * Provide an XML description of the domain
     * @param {number} [flags] bitwise-OR of `DomainXMLFlags`
     * @param {function(Error, string)} callback XML reprentation of the domain
     */
    toXml(callback:(error: Error, result: string) => void): void;
    toXml(flags: number, callback:(error: Error, result: string) => void): void;
    /**
     * Provide an XML description of the domain
     * @param {number} [flags] bitwise-OR of `DomainXMLFlags`
     * @returns {bluebird<string>} XML reprentation of the domain
     */
    toXmlAsync(flags?: number): bluebird<string>;
    /**
     * Undefine a domain. If the domain is running, it's converted to transient domain, without stopping it. If the domain is inactive, the domain configuration is removed.
     * @param {Array<DomainUndefineFlags> | number} [flags] a bitwise-OR of `DomainUndefineFlags` or Array of `DomainUndefineFlags`
     * @param {function(Error, boolean)} callback  True in case of success, false otherwise
     */
    undefine(callback:(error: Error, result: boolean) => void): void;
    undefine(flags: number | Array<DomainUndefineFlags>, callback:(error: Error, result: boolean) => void): void;
    /**
     * Undefine a domain. If the domain is running, it's converted to transient domain, without stopping it. If the domain is inactive, the domain configuration is removed.
     * @param {Array<DomainUndefineFlags> | number} [flags] a bitwise-OR of `DomainUndefineFlags` or Array of `DomainUndefineFlags`
     * @returns {bluebird<boolean>)} True in case of success, false otherwise
     */
    undefineAsync(flags?: number | Array<DomainUndefineFlags>): bluebird<boolean>;
}

export declare interface Interface {

}

export declare interface Network {

}

export declare interface NetworkFilter {

}

export declare interface NodeDevive {

}

export declare interface StoragePool {
    /**
     * Delete the underlying pool resources. This is a non-recoverable operation.
     * @param {Array<StoragePoolDeleteFlags>} flags Array of `StoragePoolDeleteFlags`
     * @param {function(Error, boolean)} callback retuns True in case of success, false otherwise.
     */    
    erase(flags: Array<StoragePoolDeleteFlags>, callback: (error: Error, result: boolean) => void): void;
    /**
     * Delete the underlying pool resources. This is a non-recoverable operation.
     * @param {Array<StoragePoolDeleteFlags>} flags Array of `StoragePoolDeleteFlags`
     * @returns {bluebird<boolean>} retuns True in case of success, false otherwise.
     */    
    eraseAsync(flags: Array<StoragePoolDeleteFlags>): bluebird<boolean>;
    /**
     * Get volatile information about the storage pool such as free space / usage summary
     * @param {function(Error, StoragePoolInfo)} callback Object of instance `StoragePoolInfo`
     */
    getInfo(callback:(error: Error, result: StoragePoolInfo) => void): void;
    /**
     * Get volatile information about the storage pool such as free space / usage summary
     * @returns {bluebird<StoragePoolInfo>} Object of instance `StoragePoolInfo`
     */
    getInfoAsync(): bluebird<StoragePoolInfo>
    /**
     * Fetch the globally unique ID of the storage pool as a string
     * @param {function(Error, string)} callback UUID of the storage pool
     */
    getUUID(callback:(error: Error, uuid: string) => void):void;
    /**
     * Fetch the globally unique ID of the storage pool as a string
     * @returns {bluebird<string>} UUID of the storage pool
     */
    getUUIDAsync(): bluebird<string>;
    /**
     * Fetch the names of storage volumes within a pool
     * @param {callback:(Error, Array<string>)} callback Names of the storage volumes in a pool
     */
    getVolumes(callback:(error: Error, result: Array<string>) => void): void;
    /**
     * Fetch the names of storage volumes within a pool
     * @returns {bluebird<Array<string>>} Names of the storage volumes in a pool
     */
    getVolumesAsync(): bluebird<Array<string>>;
    /**
     * Determine if the storage pool is currently running
     * @param {callback:(Error, boolean)} callback Value indicating if storage pool is active
     */
    isActive(callback:(error: Error, result: boolean) => void): void;
    /**
     * Determine if the storage pool is currently running
     * @returns {bluebird<boolean>} Value indicating if storage pool is active
     */
    isActiveAsync(): bluebird<boolean>;
    /**
     * Fetch a storage volume based on its name within a pool
     * @param {string} name Name of storage volume
     * @param {callback:(Error, StorageVolume)} callback Instance of storage volume from storage pool
     */
    lookupStorageVolumeByName(name: string, callback: (error: Error, result: StorageVolume) => void): void;
    /**
     * Fetch a storage volume based on its name within a pool
     * @param {string} name Name of storage volume
     * @returns {bluebird<StorageVolume>} Instance of storage volume from storage pool
     */
    lookupStorageVolumeByNameAsync(name: string): bluebird<StorageVolume>;
    /**
     * Request that the pool refresh its list of volumes. This may involve communicating with a remote server,
     * and/or initializing new devices at the OS layer
     * @param {callback:(Error, boolean)} callback True in case of success, false otherwise
     */
    refresh(callback:(error:Error, result: boolean) => void): void;
    /**
     * Request that the pool refresh its list of volumes. This may involve communicating with a remote server,
     * and/or initializing new devices at the OS layer
     * @returns {bluebird<boolean>} True in case of success, false otherwise
     */
    refreshAsync(): bluebird<boolean>;
    /**
     * Starts an inactive storage pool
     * @param {function(Error, boolean)} callback True in case of success, false otherwise
     */
    start(callback: (error: Error, result: boolean) => void): void;
    /**
     * Starts an inactive storage pool
     * @returns {bluebird<boolean>} True in case of success, false otherwise
     */
    startAsync(): bluebird<boolean>;
    /**
     * Destroy an active storage pool. This will deactivate the pool on the host, but keep any persistent config associated with it.
     * @param {function(Error, boolean)} callback True in case of success, false otherwise
     */
    stop(callback: (error: Error, result: boolean) => void): void;
    /**
     * Destroy an active storage pool. This will deactivate the pool on the host, but keep any persistent config associated with it.
     * @returns {bluebird<boolean>} True in case of success, false otherwise
     */
    stopAsync(): bluebird<boolean>;
    /**
     * Fetch an XML document describing all aspects of the storage pool. 
     * @param {function(Error, string)} callback a XML document describing storage pool
     */
    toXml(callback: (error: Error, result: string) => void): void;
    /**
     * Fetch an XML document describing all aspects of the storage pool. 
     * @returns {blubird<string>} a XML document describing storage pool
     */
    toXmlAsync(): bluebird<string>;
    /**
     * Undefine an inactive storage pool
     * @param {function(Error, boolean)} callback True in case of success, false otherwise
     */
    undefine(callback: (error: Error, result: boolean) => void): void;
    undefineAsync(): bluebird<boolean>;
}

export declare interface StorageVolume {
    /**
     * Fetches volatile information about the storage volume such as its current allocation.
     * @param {function(Error, StorageVolInfo)} callback returns Info about a storage volume
     */
    getInfo(callback:(error: Error, result: StorageVolInfo) => void): void;
    /**
     * Fetches volatile information about the storage volume such as its current allocation.
     * @returns {bluebird<StorageVolInfo>)} returns Info about a storage volume
     */
    getInfoAsync(): bluebird<StorageVolInfo>;
    /**
     * Fetch the storage volume key. This is globally unique, so the same volume will have the same key no matter what host it is accessed from
     * @param {function(Error, string)} callback returns the volume key, or NULL on error
     */
    getKey(callback:(error: Error, result: string) => void): void;
    /**
     * Fetch the storage volume key. This is globally unique, so the same volume will have the same key no matter what host it is accessed from
     * @returns {bluebird<string>} returns the volume key, or NULL on error
     */
    getKeyAsync(): bluebird<string>;
    /**
     * Fetch the storage volume name. This is unique within the scope of a pool
     * @param {function(Error, string)} callback the volume name, or NULL on error
     */
    getName(callback:(error: Error, result: string) => void): void;
    /**
     * Fetch the storage volume name. This is unique within the scope of a pool
     * @returns {bluebird<string>} returns the volume name, or NULL on error
     */
    getNameAsync(): bluebird<string>;
    /**
     * Fetch the storage volume path. Depending on the pool configuration this is either persistent across hosts, or dynamically assigned at pool startup.
     * @param {function(Error, string)} callback the storage volume path, or NULL on error.
     */
    getPath(callback:(error: Error, result: string) => void): void;
    /**
     * Fetch the storage volume name. This is unique within the scope of a pool
     * @returns {bluebird<string>} returns the storage volume path, or NULL on error.
     */
    getPathAsync(): bluebird<string>;
    /**
     * Delete the storage volume from the pool
     * @param {function(Error, boolean)} callback True in case of success, false otherwise
     */
    remove(callback:(error: Error, result: boolean) => void): void;
    /**
     * Delete the storage volume from the pool
     * @returns {bluebird<boolean>} True in case of success, false otherwise
     */
    removeAsync(): bluebird<boolean>;
    /**
     * Fetch an XML document describing all aspects of the storage volume
     * @param {function(Error, string)} callback a XML document describing storage volume
     */
    toXml(callback: (error: Error, result: string) => void): void;
    /**
     * Fetch an XML document describing all aspects of the storage volume
     * @returns {blubird<string>} a XML document describing storage volume
     */
    toXmlAsync(): bluebird<string>;
    /**
     * Ensure data previously on a volume is not accessible to future reads.
     * @param {function(Error, boolean)} callback True in case of success, false otherwise
     */
    wipe(callback:(error: Error, result: boolean) => void): void;
    /**
     * Ensure data previously on a volume is not accessible to future reads.
     * @returns {bluebird<boolean>} True in case of success, false otherwise
     */
    wipeAsync(): bluebird<boolean>;
}