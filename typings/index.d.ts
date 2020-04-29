import * as bluebird from 'bluebird';
export declare const VIR_CRED_USERNAME = 1;
export declare const VIR_CRED_AUTHNAME = 2;
export declare const VIR_CRED_LANGUAGE = 3;
export declare const VIR_CRED_CNONCE = 4;
export declare const VIR_CRED_PASSPHRASE = 5;
export declare const VIR_CRED_ECHOPROMPT = 6;
export declare const VIR_CRED_NOECHOPROMPT = 7;
export declare const VIR_CRED_REALM = 8;
export declare const VIR_CRED_EXTERNAL = 9;
export declare const VIR_CPU_COMPARE_ERROR = -1;
export declare const VIR_CPU_COMPARE_INCOMPATIBLE = 0;
export declare const VIR_CPU_COMPARE_IDENTICAL = 1;
export declare const VIR_CPU_COMPARE_SUPERSET = 2;
export declare const VIR_CONNECT_BASELINE_CPU_EXPAND_FEATURES = 1;
export declare const VIR_CONNECT_BASELINE_CPU_MIGRATABLE = 2;
export declare const VIR_SECRET_USAGE_TYPE_NONE = 0;
export declare const VIR_SECRET_USAGE_TYPE_VOLUME = 1;
export declare const VIR_DOMAIN_EVENT_ID_LIFECYCLE = 0;
export declare const VIR_DOMAIN_EVENT_ID_REBOOT = 1;
export declare const VIR_DOMAIN_EVENT_ID_RTC_CHANGE = 2;
export declare const VIR_DOMAIN_EVENT_ID_WATCHDOG = 3;
export declare const VIR_DOMAIN_EVENT_ID_IO_ERROR = 4;
export declare const VIR_DOMAIN_EVENT_ID_GRAPHICS = 5;
export declare const VIR_DOMAIN_EVENT_ID_IO_ERROR_REASON = 6;
export declare const VIR_NODE_MEMORY_STATS_ALL_CELLS = -1;
export declare const VIR_ERR_OK = 0;
export declare const VIR_ERR_INTERNAL_ERROR = 1;
export declare const VIR_ERR_NO_MEMORY = 2;
export declare const VIR_ERR_NO_SUPPORT = 3;
export declare const VIR_ERR_UNKNOWN_HOST = 4;
export declare const VIR_ERR_NO_CONNECT = 5;
export declare const VIR_ERR_INVALID_CONN = 6;
export declare const VIR_ERR_INVALID_DOMAIN = 7;
export declare const VIR_ERR_INVALID_ARG = 8;
export declare const VIR_ERR_OPERATION_FAILED = 9;
export declare const VIR_ERR_GET_FAILED = 10;
export declare const VIR_ERR_POST_FAILED = 11;
export declare const VIR_ERR_HTTP_ERROR = 12;
export declare const VIR_ERR_SEXPR_SERIAL = 13;
export declare const VIR_ERR_NO_XEN = 14;
export declare const VIR_ERR_XEN_CALL = 15;
export declare const VIR_ERR_OS_TYPE = 16;
export declare const VIR_ERR_NO_KERNEL = 17;
export declare const VIR_ERR_NO_ROOT = 18;
export declare const VIR_ERR_NO_SOURCE = 19;
export declare const VIR_ERR_NO_TARGET = 20;
export declare const VIR_ERR_NO_NAME = 21;
export declare const VIR_ERR_NO_OS = 22;
export declare const VIR_ERR_NO_DEVICE = 23;
export declare const VIR_ERR_NO_XENSTORE = 24;
export declare const VIR_ERR_DRIVER_FULL = 25;
export declare const VIR_ERR_CALL_FAILED = 26;
export declare const VIR_ERR_XML_ERROR = 27;
export declare const VIR_ERR_DOM_EXIST = 28;
export declare const VIR_ERR_OPERATION_DENIED = 29;
export declare const VIR_ERR_OPEN_FAILED = 30;
export declare const VIR_ERR_READ_FAILED = 31;
export declare const VIR_ERR_PARSE_FAILED = 32;
export declare const VIR_ERR_CONF_SYNTAX = 33;
export declare const VIR_ERR_WRITE_FAILED = 34;
export declare const VIR_ERR_XML_DETAIL = 35;
export declare const VIR_ERR_INVALID_NETWORK = 36;
export declare const VIR_ERR_NETWORK_EXIST = 37;
export declare const VIR_ERR_SYSTEM_ERROR = 38;
export declare const VIR_ERR_RPC = 39;
export declare const VIR_ERR_GNUTLS_ERROR = 40;
export declare const VIR_WAR_NO_NETWORK = 41;
export declare const VIR_ERR_NO_DOMAIN = 42;
export declare const VIR_ERR_NO_NETWORK = 43;
export declare const VIR_ERR_INVALID_MAC = 44;
export declare const VIR_ERR_AUTH_FAILED = 45;
export declare const VIR_ERR_INVALID_STORAGE_POOL = 46;
export declare const VIR_ERR_INVALID_STORAGE_VOL = 47;
export declare const VIR_WAR_NO_STORAGE = 48;
export declare const VIR_ERR_NO_STORAGE_POOL = 49;
export declare const VIR_ERR_NO_STORAGE_VOL = 50;
export declare const VIR_WAR_NO_NODE = 51;
export declare const VIR_ERR_INVALID_NODE_DEVICE = 52;
export declare const VIR_ERR_NO_NODE_DEVICE = 53;
export declare const VIR_ERR_NO_SECURITY_MODEL = 54;
export declare const VIR_ERR_OPERATION_INVALID = 55;
export declare const VIR_WAR_NO_INTERFACE = 56;
export declare const VIR_ERR_NO_INTERFACE = 57;
export declare const VIR_ERR_INVALID_INTERFACE = 58;
export declare const VIR_ERR_MULTIPLE_INTERFACES = 59;
export declare const VIR_WAR_NO_NWFILTER = 60;
export declare const VIR_ERR_INVALID_NWFILTER = 61;
export declare const VIR_ERR_NO_NWFILTER = 62;
export declare const VIR_ERR_BUILD_FIREWALL = 63;
export declare const VIR_WAR_NO_SECRET = 64;
export declare const VIR_ERR_INVALID_SECRET = 65;
export declare const VIR_ERR_NO_SECRET = 66;
export declare const VIR_ERR_CONFIG_UNSUPPORTED = 67;
export declare const VIR_ERR_OPERATION_TIMEOUT = 68;
export declare const VIR_ERR_MIGRATE_PERSIST_FAILED = 69;
export declare const VIR_ERR_HOOK_SCRIPT_FAILED = 70;
export declare const VIR_ERR_INVALID_DOMAIN_SNAPSHOT = 71;
export declare const VIR_ERR_NO_DOMAIN_SNAPSHOT = 72;
export declare const VIR_ERR_ARGUMENT_UNSUPPORTED = 74;
export declare const VIR_FROM_NONE = 0;
export declare const VIR_FROM_XEN = 1;
export declare const VIR_FROM_XEND = 2;
export declare const VIR_FROM_XENSTORE = 3;
export declare const VIR_FROM_SEXPR = 4;
export declare const VIR_FROM_XML = 5;
export declare const VIR_FROM_DOM = 6;
export declare const VIR_FROM_RPC = 7;
export declare const VIR_FROM_PROXY = 8;
export declare const VIR_FROM_CONF = 9;
export declare const VIR_FROM_QEMU = 10;
export declare const VIR_FROM_NET = 11;
export declare const VIR_FROM_TEST = 12;
export declare const VIR_FROM_REMOTE = 13;
export declare const VIR_FROM_OPENVZ = 14;
export declare const VIR_FROM_XENXM = 15;
export declare const VIR_FROM_STATS_LINUX = 16;
export declare const VIR_FROM_LXC = 17;
export declare const VIR_FROM_STORAGE = 18;
export declare const VIR_FROM_NETWORK = 19;
export declare const VIR_FROM_DOMAIN = 20;
export declare const VIR_FROM_UML = 21;
export declare const VIR_FROM_NODEDEV = 22;
export declare const VIR_FROM_XEN_INOTIFY = 23;
export declare const VIR_FROM_SECURITY = 24;
export declare const VIR_FROM_VBOX = 25;
export declare const VIR_FROM_INTERFACE = 26;
export declare const VIR_FROM_ONE = 27;
export declare const VIR_FROM_ESX = 28;
export declare const VIR_FROM_PHYP = 29;
export declare const VIR_FROM_SECRET = 30;
export declare const VIR_FROM_CPU = 31;
export declare const VIR_FROM_XENAPI = 32;
export declare const VIR_FROM_NWFILTER = 33;
export declare const VIR_FROM_HOOK = 34;
export declare const VIR_FROM_DOMAIN_SNAPSHOT = 35;
export declare const VIR_ERR_NONE = 0;
export declare const VIR_ERR_WARNING = 1;
export declare const VIR_ERR_ERROR = 2;
export declare const VIR_DOMAIN_DEVICE_MODIFY_CURRENT = 0;
export declare const VIR_DOMAIN_DEVICE_MODIFY_LIVE = 1;
export declare const VIR_DOMAIN_DEVICE_MODIFY_CONFIG = 2;
export declare const VIR_DOMAIN_DEVICE_MODIFY_FORCE = 4;
export declare const VIR_DOMAIN_METADATA_DESCRIPTION = 0;
export declare const VIR_DOMAIN_METADATA_TITLE = 1;
export declare const VIR_DOMAIN_METADATA_ELEMENT = 2;
export declare const VIR_MIGRATE_LIVE = 1;
export declare const VIR_MIGRATE_PEER2PEER = 2;
export declare const VIR_MIGRATE_TUNNELLED = 4;
export declare const VIR_MIGRATE_PERSIST_DEST = 8;
export declare const VIR_MIGRATE_UNDEFINE_SOURCE = 16;
export declare const VIR_MIGRATE_PAUSED = 32;
export declare const VIR_MIGRATE_NON_SHARED_DISK = 64;
export declare const VIR_MIGRATE_NON_SHARED_INC = 128;
export declare const VIR_MIGRATE_CHANGE_PROTECTION = 256;
export declare const VIR_MIGRATE_UNSAFE = 512;
export declare const VIR_MIGRATE_OFFLINE = 1024;
export declare const VIR_MIGRATE_COMPRESSED = 2048;
export declare const VIR_MIGRATE_ABORT_ON_ERROR = 4096;
export declare const VIR_MIGRATE_AUTO_CONVERGE = 8192;
export declare const VIR_MIGRATE_RDMA_PIN_ALL = 16384;
export declare const VIR_MIGRATE_POSTCOPY = 32768;
export declare const VIR_MIGRATE_TLS = 65536;
export declare const VIR_DOMAIN_SNAPSHOT_CREATE_REDEFINE = 1;
export declare const VIR_DOMAIN_SNAPSHOT_CREATE_CURRENT = 2;
export declare const VIR_DOMAIN_SNAPSHOT_CREATE_NO_METADATA = 4;
export declare const VIR_DOMAIN_SNAPSHOT_CREATE_HALT = 8;
export declare const VIR_DOMAIN_SNAPSHOT_CREATE_DISK_ONLY = 16;
export declare const VIR_DOMAIN_SNAPSHOT_CREATE_REUSE_EXT = 32;
export declare const VIR_DOMAIN_SNAPSHOT_CREATE_QUIESCE = 64;
export declare const VIR_DOMAIN_SNAPSHOT_CREATE_ATOMIC = 128;
export declare const VIR_DOMAIN_SNAPSHOT_CREATE_LIVE = 256;
export declare const VIR_DOMAIN_SNAPSHOT_DELETE_CHILDREN = 1;
export declare const VIR_DOMAIN_SNAPSHOT_DELETE_CHILDREN_ONLY = 4;
export declare const VIR_DOMAIN_SNAPSHOT_DELETE_METADATA_ONLY = 2;
export declare const VIR_DOMAIN_AFFECT_CURRENT = 0;
export declare const VIR_DOMAIN_AFFECT_LIVE = 1;
export declare const VIR_DOMAIN_AFFECT_CONFIG = 2;
export declare const VIR_DOMAIN_BLOCK_COMMIT_SHALLOW = 1;
export declare const VIR_DOMAIN_BLOCK_COMMIT_DELETE = 2;
export declare const VIR_DOMAIN_BLOCK_COMMIT_ACTIVE = 4;
export declare const VIR_DOMAIN_BLOCK_COMMIT_RELATIVE = 8;
export declare const VIR_DOMAIN_BLOCK_COMMIT_BANDWIDTH_BYTES = 16;
export declare const VIR_DOMAIN_BLOCK_JOB_ABORT_PIVOT = 2;
export declare const VIR_DOMAIN_BLOCK_JOB_COMPLETED = 0;
export declare const VIR_DOMAIN_BLOCK_JOB_INFO_BANDWIDTH_BYTES = 1;
export declare const VIR_DOMAIN_BLOCK_JOB_TYPE_UNKNOWN = 0;
export declare const VIR_DOMAIN_BLOCK_JOB_TYPE_PULL = 1;
export declare const VIR_DOMAIN_BLOCK_JOB_TYPE_COPY = 2;
export declare const VIR_DOMAIN_BLOCK_JOB_TYPE_COMMIT = 3;
export declare const VIR_DOMAIN_BLOCK_JOB_TYPE_ACTIVE_COMMIT = 4;
export declare const VIR_DOMAIN_XML_SECURE = 1;
export declare const VIR_DOMAIN_XML_INACTIVE = 2;
export declare const VIR_DOMAIN_XML_UPDATE_CPU = 4;
export declare const VIR_DOMAIN_XML_MIGRATABLE = 8;
export declare const VIR_DOMAIN_JOB_NONE = 0;
export declare const VIR_DOMAIN_JOB_BOUNDED = 1;
export declare const VIR_DOMAIN_JOB_UNBOUNDED = 2;
export declare const VIR_DOMAIN_JOB_COMPLETED = 3;
export declare const VIR_DOMAIN_JOB_FAILED = 4;
export declare const VIR_DOMAIN_JOB_CANCELLED = 5;
export declare const VIR_MEMORY_VIRTUAL = 1;
export declare const VIR_MEMORY_PHYSICAL = 2;
export declare const VIR_DOMAIN_EVENT_DEFINED = 0;
export declare const VIR_DOMAIN_EVENT_UNDEFINED = 1;
export declare const VIR_DOMAIN_EVENT_STARTED = 2;
export declare const VIR_DOMAIN_EVENT_SUSPENDED = 3;
export declare const VIR_DOMAIN_EVENT_RESUMED = 4;
export declare const VIR_DOMAIN_EVENT_STOPPED = 5;
export declare const VIR_DOMAIN_EVENT_IO_ERROR_NONE = 0;
export declare const VIR_DOMAIN_EVENT_IO_ERROR_PAUSE = 1;
export declare const VIR_DOMAIN_EVENT_IO_ERROR_REPORT = 2;
export declare const VIR_DOMAIN_EVENT_RESUMED_UNPAUSED = 0;
export declare const VIR_DOMAIN_EVENT_RESUMED_MIGRATED = 1;
export declare const VIR_DOMAIN_EVENT_STARTED_BOOTED = 0;
export declare const VIR_DOMAIN_EVENT_STARTED_MIGRATED = 1;
export declare const VIR_DOMAIN_EVENT_STARTED_RESTORED = 2;
export declare const VIR_DOMAIN_EVENT_STARTED_FROM_SNAPSHOT = 3;
export declare const VIR_DOMAIN_EVENT_STOPPED_SHUTDOWN = 0;
export declare const VIR_DOMAIN_EVENT_STOPPED_DESTROYED = 1;
export declare const VIR_DOMAIN_EVENT_STOPPED_CRASHED = 2;
export declare const VIR_DOMAIN_EVENT_STOPPED_MIGRATED = 3;
export declare const VIR_DOMAIN_EVENT_STOPPED_SAVED = 4;
export declare const VIR_DOMAIN_EVENT_STOPPED_FAILED = 5;
export declare const VIR_DOMAIN_EVENT_STOPPED_FROM_SNAPSHOT = 6;
export declare const VIR_DOMAIN_EVENT_SUSPENDED_PAUSED = 0;
export declare const VIR_DOMAIN_EVENT_SUSPENDED_MIGRATED = 1;
export declare const VIR_DOMAIN_EVENT_SUSPENDED_IOERROR = 2;
export declare const VIR_DOMAIN_EVENT_SUSPENDED_WATCHDOG = 3;
export declare const VIR_DOMAIN_EVENT_UNDEFINED_REMOVED = 0;
export declare const VIR_DOMAIN_EVENT_WATCHDOG_NONE = 0;
export declare const VIR_DOMAIN_EVENT_WATCHDOG_PAUSE = 1;
export declare const VIR_DOMAIN_EVENT_WATCHDOG_RESET = 2;
export declare const VIR_DOMAIN_EVENT_WATCHDOG_POWEROFF = 3;
export declare const VIR_DOMAIN_EVENT_WATCHDOG_SHUTDOWN = 4;
export declare const VIR_DOMAIN_EVENT_WATCHDOG_DEBUG = 5;
export declare const VIR_DOMAIN_SEND_KEY_MAX_KEYS = 16;
export declare const VIR_DOMAIN_UNDEFINE_MANAGED_SAVE = 1;
export declare const VIR_DOMAIN_UNDEFINE_SNAPSHOTS_METADATA = 2;
export declare const VIR_DOMAIN_UNDEFINE_NVRAM = 4;
export declare const VIR_DOMAIN_UNDEFINE_KEEP_NVRAM = 8;
export declare const VIR_DOMAIN_EVENT_ID_AGENT_LIFECYCLE = 18;
export declare const VIR_CONNECT_GET_ALL_DOMAINS_STATS_ACTIVE = 1;
export declare const VIR_CONNECT_GET_ALL_DOMAINS_STATS_INACTIVE = 2;
export declare const VIR_CONNECT_GET_ALL_DOMAINS_STATS_OTHER = 128;
export declare const VIR_CONNECT_GET_ALL_DOMAINS_STATS_PAUSED = 32;
export declare const VIR_CONNECT_GET_ALL_DOMAINS_STATS_PERSISTENT = 4;
export declare const VIR_CONNECT_GET_ALL_DOMAINS_STATS_RUNNING = 16;
export declare const VIR_CONNECT_GET_ALL_DOMAINS_STATS_SHUTOFF = 64;
export declare const VIR_CONNECT_GET_ALL_DOMAINS_STATS_TRANSIENT = 8;
export declare const VIR_CONNECT_GET_ALL_DOMAINS_STATS_BACKING = 1073741824;
export declare const VIR_CONNECT_GET_ALL_DOMAINS_STATS_ENFORCE_STATS = 2147483648;
export declare const VIR_DOMAIN_STATS_STATE = 1;
export declare const VIR_DOMAIN_STATS_CPU_TOTAL = 2;
export declare const VIR_DOMAIN_STATS_BALLOON = 4;
export declare const VIR_DOMAIN_STATS_VCPU = 8;
export declare const VIR_DOMAIN_STATS_INTERFACE = 16;
export declare const VIR_DOMAIN_STATS_BLOCK = 32;
export declare const VIR_DOMAIN_STATS_PERF = 64;
export declare const VIR_CONNECT_DOMAIN_EVENT_AGENT_LIFECYCLE_REASON_UNKNOWN = 0;
export declare const VIR_CONNECT_DOMAIN_EVENT_AGENT_LIFECYCLE_REASON_DOMAIN_STARTED = 1;
export declare const VIR_CONNECT_DOMAIN_EVENT_AGENT_LIFECYCLE_REASON_CHANNEL = 2;
export declare const VIR_CONNECT_DOMAIN_EVENT_AGENT_LIFECYCLE_STATE_CONNECTED = 1;
export declare const VIR_CONNECT_DOMAIN_EVENT_AGENT_LIFECYCLE_STATE_DISCONNECTED = 2;
export declare const VIR_INTERFACE_XML_INACTIVE = 1;
export declare const VIR_STORAGE_POOL_DELETE_NORMAL = 0;
export declare const VIR_STORAGE_POOL_DELETE_ZEROED = 1;
export declare const VIR_STORAGE_POOL_INACTIVE = 0;
export declare const VIR_STORAGE_POOL_BUILDING = 1;
export declare const VIR_STORAGE_POOL_RUNNING = 2;
export declare const VIR_STORAGE_POOL_DEGRADED = 3;
export declare const VIR_STORAGE_POOL_INACCESSIBLE = 4;
export declare const VIR_STORAGE_VOL_FILE = 0;
export declare const VIR_STORAGE_VOL_BLOCK = 1;

export declare const VIR_DOMAIN_NONE = 0;
export declare const VIR_DOMAIN_START_PAUSED = 1;
export declare const VIR_DOMAIN_START_AUTODESTROY = 2;
export declare const VIR_DOMAIN_START_BYPASS_CACHE = 4;
export declare const VIR_DOMAIN_START_FORCE_BOOT = 8;
export declare const VIR_DOMAIN_START_VALIDATE = 16;

/**
 * hypervisor choice
 */
export declare const VIR_DOMAIN_SHUTDOWN_DEFAULT = 0;
/**
 * Send ACPI event
 */
export declare const VIR_DOMAIN_SHUTDOWN_ACPI_POWER_BTN = 1;
/**
 * Use guest agent
 */
export declare const VIR_DOMAIN_SHUTDOWN_GUEST_AGENT = 2;
/**
 * Use initctl
 */
export declare const VIR_DOMAIN_SHUTDOWN_INITCTL = 4;
/**
 * Send a signal
 */
export declare const VIR_DOMAIN_SHUTDOWN_SIGNAL = 8;
/**
 * Use paravirt guest control
 */
export declare const VIR_DOMAIN_SHUTDOWN_PARAVIRT = 16


export declare const VIR_DOMAIN_NOSTATE = "no state";
export declare const VIR_DOMAIN_RUNNING = "running";
export declare const VIR_DOMAIN_BLOCKED = "idle";
export declare const VIR_DOMAIN_PAUSED = "paused";
export declare const VIR_DOMAIN_SHUTDOWN = "in shutdown";
export declare const VIR_DOMAIN_SHUTOFF = "shut off";
export declare const VIR_DOMAIN_CRASHED = "crashed";
export declare const VIR_DOMAIN_PMSUSPENDED = "pmsuspended";

/**
 * 
 * @param {string} url usually with "qemu:///system"
 */
export declare function createHypervisor(url: string): Hypervisor;
export declare const path: string;
export declare const libvirt_version: number;

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
    compareCPU(domainCpuXml: string, callback: (error: Error, result: number) => void): void
    compareCPU(domainCpuXml: string, flags: number, callback: (error: Error, result: number) => void): void
    /**
     * Compares the given CPU description with the host CPU.
     * @param {string} domainCpuXml XML describing the CPU to compare with host CPU
     * @param {number} [flags] bitwise-OR of `CompareCPUFlags`
     * @returns {bluebird<CPUCompareResult>} comparison result according to enum `CPUCompareResult`. 
     * If VIR_CONNECT_COMPARE_CPU_FAIL_INCOMPATIBLE is used and domainCpuXml CPU is incompatible with host CPU, 
     * this function will return VIR_CPU_COMPARE_ERROR (instead of VIR_CPU_COMPARE_INCOMPATIBLE) 
     * and the error will use the VIR_ERR_CPU_INCOMPATIBLE code with a message providing more details about the incompatibility.
     */
    compareCPUAsync(domainCpuXml: string): bluebird<number>;
    connect(callback: (err: Error) => void): void;
    connectAsync(): bluebird<void>;
    /**
     * Launch a new guest domain, based on an XML description. The domain is not persistent, so its definition will disappear when it is destroyed,
     * or if the host is restarted (use `defineDomain` to define persistent domains).
     * @param {string} domainXml string containing an XML description of the domain
     * @param {number | Array<DomainCreateFlags>} [flags] bitwise-OR of supported `DomainCreateFlags` or Array of `DomainCreateFlags`
     * @param {function(Error, Domain)} callback a new `Domain` object or NULL in case of failure 
     */
    createDomain(domainXml: string, callback: (error: Error, result: Domain) => void): void
    createDomain(domainXml: string, flags: number | Array<number>, callback: (error: Error, result: Domain) => void): void
    /**
     * Launch a new guest domain, based on an XML description. The domain is not persistent, so its definition will disappear when it is destroyed,
     * or if the host is restarted (use `defineDomainAsync`} to define persistent domains).
     * @param {string} domainXml string containing an XML description of the domain
     * @param {number} [flags] bitwise-OR of supported `DomainCreateFlags` or Array of `DomainCreateFlags`
     * @returns {bluebird<Domain>} a new `Domain` object or NULL in case of failure 
     */
    createDomainAsync(domainXml: string, flags?: number | Array<number>): bluebird<Domain>;
    /**
     * Create and start a new virtual network, based on an XML description
     * @param {string} networkXml an XML description of the network
     * @param {function(Error, Network)} callback a new `Network` object or NULL in case of failure
     */
    createNetwork(networkXml: string, callback: (error: Error, result: Network) => void): void
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
    defineInterface(interfaceXml: string, callback: (error: Error, result: Interface) => void): void
    /**
     * Define an inactive persistent physical host interface or modify an existing persistent one from the XML description.
     * @param {string} interfaceXml the XML description for the interface, preferably in UTF-8
     * @returns {bluebird<Interface>} `Interface` object if successful, NULL in case of failure
     */
    defineInterfaceAsync(interfaceXml: string): bluebird<Interface>;
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
     * locates the specified secret and replaces all attributes of the secret specified by UUID by attributes specified in xml 
     * @param {string} secretXml an xml describing the secret
     * @param {function(Error, Secret)} callback `Secret` object if successful, NULL in case of failure
     */
    defineSecret(secretXml: string, callback: (error: Error, result: Secret) => void): void;
    /**
     * locates the specified secret and replaces all attributes of the secret specified by UUID by attributes specified in xml 
     * @param {string} secretXml an xml describing the secret
     * @returns {bluebird<Secret>} `Secret` object if successful, NULL in case of failure 
     */
    defineSecretAsync(secretXml: string): bluebird<Secret>;
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
    getAllDomainStats(stats: number, callback: (error: Error, result: ({ [domainName: string]: { [x: string]: number } })) => void): void;
    getAllDomainStats(stats: number, flags: number, callback: (error: Error, result: ({ [domainName: string]: { [x: string]: number } })) => void): void;
    /**
     * Query statistics for all domains on a given connection. Report statistics of various parameters for a running 
     * VM according to `stats` field. The statistics are returned as an array of structures for each queried domain. 
     * The structure contains an array of typed parameters containing the individual statistics. The typed parameter 
     * name for each statistic field consists of a dot-separated string containing name of the requested group followed by a group
     * specific description of the statistic value.
     * @param {number} stats stats to return, binary-OR of `DomainStatsTypes`
     * @param {number} [flags] extra flags; binary-OR of `GetAllDomainStatsFlags`
     */
    getAllDomainStatsAsync(stats: number, flags?: number): bluebird<{ [domainName: string]: { [x: string]: number } }>
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
     * Computes the most feature-rich CPU which is compatible with all given host CPUs. 
     * If `flags` includes `VIR_CONNECT_BASELINE_CPU_EXPAND_FEATURES` then libvirt will explicitly list
     * all CPU features that are part of the host CPU, without this flag features that are part of 
     * the CPU model will not be listed. If `flags` includes `VIR_CONNECT_BASELINE_CPU_MIGRATABLE`, the resulting 
     * CPU will not include features that block migration.
     * @param {string} emulator path to emulator binary (domain/devices/emulator)
     * @param {string} arch CPU architecture (domain/os/type/arch)
     * @param {string} machine machine type (domain/os/type/machine)
     * @param {string} virttype virtualization type (domain/type)
     * @param {Array<string>} cpuXmls array of XML descriptions of host CPUs
     * @param {Array<number>} [flags] flags from BaselineCPUFlags. The bitwise-OR will be done internally
     * @param {function(Error, string)} callback XML description of the computed CPU or NULL on error.
     */
    getBaselineHypervisorCPU(emulator: string, arch: string, machine: string, virttype: string, cpuXmls: Array<string>, callback: (error: Error, result: string) => void): void;
    getBaselineHypervisorCPU(emulator: string, arch: string, machine: string, virttype: string, cpuXmls: Array<string>, flags: Array<number>, callback: (error: Error, result: string) => void): void;
    /**
     * Computes the most feature-rich CPU which is compatible with all given host CPUs. 
     * If `flags` includes `VIR_CONNECT_BASELINE_CPU_EXPAND_FEATURES` then libvirt will explicitly list
     * all CPU features that are part of the host CPU, without this flag features that are part of 
     * the CPU model will not be listed. If `flags` includes `VIR_CONNECT_BASELINE_CPU_MIGRATABLE`, the resulting 
     * CPU will not include features that block migration.
     * @param {string} emulator path to emulator binary (domain/devices/emulator)
     * @param {string} arch CPU architecture (domain/os/type/arch)
     * @param {string} machine machine type (domain/os/type/machine)
     * @param {string} virttype virtualization type (domain/type)
     * @param {Array<string>} cpuXmls array of XML descriptions of host CPUs
     * @param {Array<number>} [flags] flags from BaselineCPUFlags. The bitwise-OR will be done internally
     * @returns {bluebird<string>} XML description of the computed CPU (caller frees) or NULL on error.
     */
    getBaselineHypervisorCPUAsync(emulator: string, arch: string, machine: string, virttype: string, cpuXmls: Array<string>, flags?: Array<number>): bluebird<string>;
    /**
     * Provides capabilities of the hypervisor / driver.
     * @param {function(Error, string)} callback NULL in case of error, or an XML string defining the capabilities.
     */
    getCapabilities(callback: (error: Error, result: string) => void): void;
    /**
     * Provides capabilities of the hypervisor / driver.
     * @returns {bluebird<string>} NULL in case of error, or an XML string defining the capabilities.
     */
    getCapabilitiesAsync(): bluebird<string>;
    /**
     * Provides capabilities of domain on a particular hypervisor. 
     * If `flags` should always be 0
     * @param {string} emulator path to emulator binary (domain/devices/emulator)
     * @param {string} arch CPU architecture (domain/os/type/arch)
     * @param {string} machine machine type (domain/os/type/machine)
     * @param {string} virttype virtualization type (domain/type)
     * @param {Array<number>} [flags] flags from BaselineCPUFlags. The bitwise-OR will be done internally
     * @returns {string} XML description of the computed CPU (caller frees) or NULL on error.
     */
    getDomainCapabilities(emulator: string, arch: string, machine: string, virttype: string, callback: (error: Error, result: string) => void): void;
    getDomainCapabilities(emulator: string, arch: string, machine: string, virttype: string, flags: Array<number>, callback: (error: Error, result: string) => void): void;
    /**
     * Provides capabilities of domain on a particular hypervisor. 
     * If `flags` should always be 0
     * @param {string} emulator path to emulator binary (domain/devices/emulator)
     * @param {string} arch CPU architecture (domain/os/type/arch)
     * @param {string} machine machine type (domain/os/type/machine)
     * @param {string} virttype virtualization type (domain/type)
     * @param {Array<number>} [flags] flags from BaselineCPUFlags. The bitwise-OR will be done internally
     * @returns {bluebird<string>} XML description of the computed CPU (caller frees) or NULL on error.
     */
    getDomainCapabilitiesAsync(emulator: string, arch: string, machine: string, virttype: string): bluebird<string>;
    getDomainCapabilitiesAsync(emulator: string, arch: string, machine: string, virttype: string, flags: Array<number>): bluebird<string>;
    /**
     * Provides the version of libvirt used by the daemon running on the host
     * @param {function(Error, number)} callback libvirt library version used on the connection
     */
    getLibVirtVersion(callback: (error: Error, result: number) => void): void;
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
     * Try to lookup a domain based on its UUID.
     * @param {string} uuid the raw UUID for the domain
     * @returns {bluebird<Domain>} a new domain object or NULL in case of failure. 
     * If the domain cannot be found, then `Libvirt.VIR_ERR_NO_DOMAIN` error is raised.
     */
    lookupDomainByUUIDAsync(uuid: string): bluebird<Domain>;
    /**
     * Try to lookup a secret based on its usage The usageID is unique within the set of secrets sharing the same usageType value.
     * @param {number} usageType the type of secret usage
     * @param {string} usageId identifier of the object using the secret
     * @param {function(Error, Secret)} callback `Secret` object if successful, NULL in case of failure
     */
    lookupSecretByUsage(usageType: number, usageId: string, callback: (error: Error, result: Secret) => void): void;
    /**
     * Try to lookup a secret based on its usage The usageID is unique within the set of secrets sharing the same usageType value.
     * @param usageType the type of secret usage
     * @param usageId identifier of the object using the secret
     * @returns {bluebird<Secret>} `Secret` object if successful, NULL in case of failure
     */
    lookupSecretByUsageAsync(usageType: number, usageId: string): bluebird<Secret>;
    /**
     * Try to lookup a secret based on its UUID
     * @param {string} uuidString the string UUID for the secret
     * @param {function(Error, Secret)} callback callback `Secret` object if successful, NULL in case of failure
     */
    lookupSecretByUUID(uuidString: string, callback: (error: Error, result: Secret) => void): void;
    /**
     * Try to lookup a secret based on its UUID
     * @param {string} uuidString the string UUID for the secret
     * @returns {bluebird<Secret>} `Secret` object if successful, NULL in case of failure
     */
    lookupSecretByUUIDAsync(uuidString: string): bluebird<Secret>;
    /**
     * Fetch a storage pool based on its unique name
     * @param {string} name name of pool to fetch
     * @param {function(Error, StoragePool)} callback A storagepool object
     */
    lookupStoragePoolByName(name: string, callback: (error: Error, result: StoragePool) => void): void;
    /**
     * Fetch a storage pool based on its unique name
     * @param {string} name name of pool to fetch
     * @returns {bluebird<StoragePool>} A storagepool object
     */
    lookupStoragePoolByNameAsync(name: string): bluebird<StoragePool>;
}

export declare interface Domain {
    /**
     * Requests that the current background job be aborted at the soonest opportunity
     * @param callback Requests that the current background job be aborted at the soonest opportunity
     */
    abortCurrentJob(callback: (error: Error, result: void) => void);
    /**
     * Requests that the current background job be aborted at the soonest opportunity
     */
    abortCurrentJobAsync(): bluebird<void>;
    /**
     * Create a virtual device attachment to backend. 
     * @param {string} deviceXml pointer to XML description of one device
     * @param {Array<DomainDeviceModifyFlags>} [flags] Array of `DomainDeviceModifyFlags`. 
     * The bitwise-OR will be done internally 
     * @param {function(Error, void)} callback After attaching a device
     */
    attachDevice(deviceXml: string, callback: (error: Error, result: void) => void): void;
    attachDevice(deviceXml: string, flags: Array<number>, callback: (error: Error, result: void) => void): void;
    /**
     * Create a virtual device attachment to backend. 
     * @param {string} deviceXml pointer to XML description of one device
     * @param {Array<DomainDeviceModifyFlags>} [flags] Array of `DomainDeviceModifyFlags`. 
     * The bitwise-OR will be done internally 
     */
    attachDeviceAsync(deviceXml: string, flags?: Array<number>): bluebird<void>;
    /**
     * Delete the snapshot.
     * @param {string} name name of the snapshot
     * @param {number | Array<number>} flags bitwise OR or array of DomainSnapshotDeleteFlags 
     * @param {function(Error, void)} callback returns error incase of failure, nothing otherwise
     */
    deleteSnapshot(name: string, callback: (error: Error, result: void) => void): void;
    deleteSnapshot(name: string, flags: number | Array<number>, callback: (error: Error, result: void) => void): void;
    /**
     * Delete the snapshot.
     * @param {string} name name of the snapshot
     * @param {number | Array<number>} flags bitwise OR or array of DomainSnapshotDeleteFlags
     */
    deleteSnapshotAsync(name: string, flags?: number | Array<number>): bluebird<void>;
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
     * @param {function(error, {capacity: number, allocation: number, physical: number})} callback Object containing information about disk 
     */
    getBlockInfo(disk: string, callback: (error: Error, result: { capacity: number, allocation: number, physical: number }) => void): void;
    /**
     * Extract information about a domain's block device.
     * @param {string} disk path to the block device(the <source file='...'/> sub-element, such as "/path/to/image"),
     * or device shorthand(the <target dev='...'/> sub-element, such as "vda")
     * @returns {bluebird<{capacity: number, allocation: number, physical: number}>} Object containing information about disk
     */
    getBlockInfoAsync(disk: string): bluebird<{ capacity: number, allocation: number, physical: number }>
    /**
     * Extract information about a domain.
     * @param {function(Error, DomainInfo)} callback Object containing domain information
     */
    getInfo(callback: (error: Error, result: {
        state: string,
        maxMemory: number,
        memory: number,
        vcpus: number,
        cpuTime: number
    }) => void): void;
    /**
     * Extract information about a domain.
     * @returns {bluebird<{DomainInfo}>} Object containing domain information
     */
    getInfoAsync(): bluebird<{
        state: string,
        maxMemory: number,
        memory: number,
        vcpus: number,
        cpuTime: number
    }>;
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
    getMetadata(type: number, uri: string, callback: (error: Error, result: string) => void): void;
    getMetadata(type: number, uri: string, flags: number, callback: (error: Error, result: string) => void): void;
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
    getMetadataAsync(type: number, uri: string, flags?: number): bluebird<string>;
    /**
     * Get the public name for that domain
     * @param {function(Error, string)} callback Name of the domain
     */
    getName(callback: (error: Error, result: string) => void): void;
    /**
     * Get the public name for that domain
     * @returns {bluebird<string>} Name of the domain
     */
    getNameAsync(): bluebird<string>;
    /**
     * Provide an XML description of the domain snapshot
     * @param {function(Error, string)} callback Xml description of the snapshot, NULL other wise.
     */
    getCurrentSnapshot(callback: (error: Error, xml: string) => void): void;
    /**
     * Provide an XML description of the domain snapshot
     * @returns {bluebird<string>} Xml description of the snapshot.
     */
    getCurrentSnapshotAsync(): bluebird<string>;
    /**
     * Provides array of string with snapshot description
     * @param {function(Error, Array<string>)} callback returns array of string
     */
    getSnapshots(callback: (error: Error, result: Array<string>) => void): void;
    /**
     * Provides array of string with snapshot description
     * @returns {Array<string>} array of string
     */
    getSnapshotsAsync(): bluebird<Array<string>>;
    /**
     * Determine if the domain has a current snapshot.
     * @param {function(Error, boolean)} callback Boolean value indicating snapshot is present or not
     */
    hasCurrentSnapshot(callback: (error: Error, result: boolean) => void): void;
    /**
     * Determine if the domain has a current snapshot.
     * @return {bluebird<boolean>} callback Boolean value indicating snapshot is present or not
     */
    hasCurrentSnapshotAsync(): bluebird<boolean>;
    /**
     * Determine if the domain is currently running
     * @param {function(Error, boolean)} callback Boolean value indicating domain is running or not
     */
    isActive(callback: (error: Error, result: boolean) => void): void;
    /**
     * Determine if the domain is currently running
     * @returns {<bluebird<boolean>} Boolean value indicating domain is running or not
     */
    isActiveAsync(): bluebird<boolean>;
    /**
     * Determine if the domain has a persistent configuration which means it will still exist after shutting down
     * @param {function(boolean)} callback Boolean value indicating domain is persistent or not
     */
    isPersistent(callback: (error: Error, result: boolean) => void): void;
    /**
     * Determine if the domain has a persistent configuration which means it will still exist after shutting down
     * @returns {bluebird<boolean>} Boolean value indicating domain is persistent or not
     */
    isPersistentAsync(): bluebird<boolean>;
    /**
     * Provide an XML description of the domain snapshot
     * @param {string} snapshotName name of the snapshot
     * @param {function(Error, string)} callback Xml description of the snapshot, NULL other wise.
     */
    lookupSnapshotByName(snapshotName: string, callback: (error: Error, xml: string) => void): void;
    /**
     * Provide an XML description of the domain snapshot
     * @param {string} snapshotName name of the snapshot
     * @returns {bluebird<string>} Xml description of the snapshot.
     */
    lookupSnapshotByNameAsync(snapshotName: string): bluebird<string>;
    /**
     * Migrate the domain object from its current host to the destination host given by dconn (a connection to the destination host)
     * @param {MigrateInfo} migrateInfo 
     * @param {function(Error, Domain)} callback Migrated domain or null in case of error
     */
    migrate(migrateInfo: { dest_uri?: string, dest_name?: string, bandwidth?: number, flags: Array<number> | number, migrate_uri?: string }, callback: (error: Error, result: Domain) => void): void;
    /**
     * Migrate the domain object from its current host to the destination host given by dconn (a connection to the destination host)
     * @param {MigrateInfo} migrateInfo 
     * @returns {Domain} Migrated domain or null in case of error
     */
    migrateAsync(migrateInfo: { dest_uri?: string, dest_name?: string, bandwidth?: number, flags: Array<number> | number, migrate_uri?: string }): bluebird<Domain>;
    /**
     * Reboot a domain, the domain object is still usable thereafter, but the domain OS is being stopped
     * for a restart. `Note` that the guest OS may ignore the request. Additionally, the hypervisor may check
     * and support the domain 'on_reboot' XML setting resulting in a domain that shuts down instead of rebooting.
     * @param {number | Array<DomainRebootFlags>} [flags] a bitwise-OR of `DomainRebootFlags` or Array of `DomainRebootFlags`
     * @param {function(Error, result)} callback Returns true in case of success, false otherwise 
     */
    reboot(callback: (error: Error, result: boolean) => void): void;
    reboot(callback: (error: Error, flags: number | Array<number>, result: boolean) => void): void;
    /**
     * Reboot a domain, the domain object is still usable thereafter, but the domain OS is being stopped
     * for a restart. `Note` that the guest OS may ignore the request. Additionally, the hypervisor may check
     * and support the domain 'on_reboot' XML setting resulting in a domain that shuts down instead of rebooting.
     * @param {number | Array<DomainRebootFlags>} [flags] a bitwise-OR of `DomainRebootFlags` or Array of `DomainRebootFlags`
     * @returns {bluebird<boolean>} Returns true in case of success, false otherwise 
     */
    rebootAsync(flags?: number | Array<number>): bluebird<boolean>;
    /**
     * Reset a domain immediately without any guest OS shutdown. Reset emulates the power reset button on a machine,
     * where all hardware sees the RST line set and reinitializes internal state.
     * @param {function(Error, boolean)} callback true in case of success, false otherwise
     */
    reset(callback: (error: Error, result: boolean) => void): void;
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
    resume(callback: (error: Error, result: boolean) => void): void;
    /**
     * Resume a suspended domain, the process is restarted from the state where it was frozen by calling `suspendAsync`.
     * Moreover, resume may not be supported if domain is in some special state like `VIR_DOMAIN_PMSUSPENDED`.
     * @returns {bluebird<boolean>} true in case of success, false otherwise 
     */
    resumeAsync(): bluebird<boolean>;
    /**
     * Revert the domain to a given snapshot.
     * @param {string} snapshotName name of the snapshot to revert to;
     * @param {function(error, void)} callback error incase of failure, nothing otherwise
     */
    revertToSnapshot(snapshotName: string, callback: (error: Error, result: void) => void): void;
    /**
     * Revert the domain to a given snapshot.
     * @param {string} snapshotName name of the snapshot to revert to;
     * @returns {bluebird<void>} nothing
     */
    revertToSnapshotAsync(snapshotName: string): bluebird<void>;
    /**
     * Sets the appropriate domain element given by `type` to the value of `metadata`. no newlines are permitted, and should be short
     * @param {number} type type of metadata, from `DomainMetadataType`
     * @param {string} metadata new metadata text 
     * @param {string} key XML namespace key, or NULL
     * @param {string} uri XML namespace URI, or NULL
     * @param {number} [flags] bitwise-OR of `DomainModificationImpact`
     * @param {function(Error, boolean)} callback True in case of success, false otherwise
     */
    setMetadata(type: number, metadata: string, key: string, uri: string, callback: (error: Error, result: boolean) => void): void;
    setMetadata(type: number, metadata: string, key: string, uri: string, flags: number, callback: (error: Error, result: boolean) => void): void;
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
    shutdown(callback: (error: Error, result: boolean) => void): void;
    shutdown(flags: Array<number> | number, callback: (error: Error, result: boolean) => void): void;
    /**
     * Shutdown a domain, the domain object is still usable thereafter but the domain OS is being stopped.
     * @param {Array<DomainShutdownFlags> | number} [flags] a bitwise-OR of `DomainShutdownFlags` or Array of `DomainShutdownFlags`
     * @returns {bluebird<boolean>)} True in case of success, false otherwise
     */
    shutdownAsync(flags?: Array<number> | number): bluebird<boolean>;
    /**
     * Launch a defined domain. If the call succeeds the domain moves from the defined to the running domains pools.
     * @param {Array<DomainCreateFlags> | number} [flags] a bitwise-OR of `DomainCreateFlags` or Array of `DomainCreateFlags`
     * @param {function(Error, boolean)} callback  True in case of success, false otherwise
     */
    start(callback: (error: Error, result: boolean) => void): void;
    start(flags: number | Array<number>, callback: (error: Error, result: boolean) => void): void;
    /**
     * Launch a defined domain. If the call succeeds the domain moves from the defined to the running domains pools.
     * @param {Array<DomainCreateFlags> | number} [flags] a bitwise-OR of `DomainCreateFlags` or Array of `DomainCreateFlags`
     * @returns {bluebird<boolean>)} True in case of success, false otherwise
     */
    startAsync(flags?: number | Array<number>): bluebird<boolean>;
    /**
    * Suspends an active domain, the process is frozen without further access to CPU resources and I/O but the memory used by
    * the domain at the hypervisor level will stay allocated. Use `resume` to reactivate the domain
    * Moreover, suspend may not be supported if domain is in some special state like `VIR_DOMAIN_PMSUSPENDED`.
    * @param {function(Error, boolean)} callback true in case of success, false otherwise 
    */
    resume(callback: (error: Error, result: boolean) => void): void;
    /**
     * Suspends an active domain, the process is frozen without further access to CPU resources and I/O but the memory used by
     * the domain at the hypervisor level will stay allocated. Use `resumeAsync` to reactivate the domain
     * Moreover, suspend may not be supported if domain is in some special state like `VIR_DOMAIN_PMSUSPENDED`.
     * @returns {bluebird<boolean>} true in case of success, false otherwise 
     */
    resumeAsync(): bluebird<boolean>;
    /**
     * Creates a new snapshot of a domain based on the snapshot xml contained in xmlDesc.
     * @param {string} xml string containing an XML description of the domain
     * @param {Array<number>} flags bitwise-OR of virDomainSnapshotCreateFlags
     * @param {function(Error, void)} callback null incase of Error, nothing otherwise
     */
    takeSnapshot(xml: string, callback: (error: Error, result: void) => void): void;
    takeSnapshot(xml: string, flags: Array<number>, callback: (error: Error, result: void) => void): void;
    /**
     * Creates a new snapshot of a domain based on the snapshot xml contained in xmlDesc.
     * @param xml string containing an XML description of the domain
     * @param flags bitwise-OR of virDomainSnapshotCreateFlags
     * @returns {bluebird<boolean>} true in case of success, false otherwise 
     */
    takeSnapshotAsync(xml: string, flags?: Array<number>): bluebird<void>;
    /**
     * Provide an XML description of the domain
     * @param {number} [flags] bitwise-OR of `DomainXMLFlags`
     * @param {function(Error, string)} callback XML reprentation of the domain
     */
    toXml(callback: (error: Error, result: string) => void): void;
    toXml(flags: number, callback: (error: Error, result: string) => void): void;
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
    undefine(callback: (error: Error, result: boolean) => void): void;
    undefine(flags: number | Array<null>, callback: (error: Error, result: boolean) => void): void;
    /**
     * Undefine a domain. If the domain is running, it's converted to transient domain, without stopping it. If the domain is inactive, the domain configuration is removed.
     * @param {Array<DomainUndefineFlags> | number} [flags] a bitwise-OR of `DomainUndefineFlags` or Array of `DomainUndefineFlags`
     * @returns {bluebird<boolean>)} True in case of success, false otherwise
     */
    undefineAsync(flags?: number | Array<number>): bluebird<boolean>;
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
    erase(flags: Array<number>, callback: (error: Error, result: boolean) => void): void;
    /**
     * Delete the underlying pool resources. This is a non-recoverable operation.
     * @param {Array<StoragePoolDeleteFlags>} flags Array of `StoragePoolDeleteFlags`
     * @returns {bluebird<boolean>} retuns True in case of success, false otherwise.
     */
    eraseAsync(flags: Array<number>): bluebird<boolean>;
    /**
     * Get volatile information about the storage pool such as free space / usage summary
     * @param {function(Error, StoragePoolInfo)} callback Object of instance `StoragePoolInfo`
     */
    getInfo(callback: (error: Error, result: { state: string, capacity: number, allocation: number, available: number }) => void): void;
    /**
     * Get volatile information about the storage pool such as free space / usage summary
     * @returns {bluebird<StoragePoolInfo>} Object of instance `StoragePoolInfo`
     */
    getInfoAsync(): bluebird<{ state: string, capacity: number, allocation: number, available: number }>
    /**
     * Fetch the globally unique ID of the storage pool as a string
     * @param {function(Error, string)} callback UUID of the storage pool
     */
    getUUID(callback: (error: Error, uuid: string) => void): void;
    /**
     * Fetch the globally unique ID of the storage pool as a string
     * @returns {bluebird<string>} UUID of the storage pool
     */
    getUUIDAsync(): bluebird<string>;
    /**
     * Fetch the names of storage volumes within a pool
     * @param {callback:(Error, Array<string>)} callback Names of the storage volumes in a pool
     */
    getVolumes(callback: (error: Error, result: Array<string>) => void): void;
    /**
     * Fetch the names of storage volumes within a pool
     * @returns {bluebird<Array<string>>} Names of the storage volumes in a pool
     */
    getVolumesAsync(): bluebird<Array<string>>;
    /**
     * Determine if the storage pool is currently running
     * @param {callback:(Error, boolean)} callback Value indicating if storage pool is active
     */
    isActive(callback: (error: Error, result: boolean) => void): void;
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
    refresh(callback: (error: Error, result: boolean) => void): void;
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
    getInfo(callback: (error: Error, result: { type: number, capacity: number, allocation: number }) => void): void;
    /**
     * Fetches volatile information about the storage volume such as its current allocation.
     * @returns {bluebird<StorageVolInfo>)} returns Info about a storage volume
     */
    getInfoAsync(): bluebird<{ type: number, capacity: number, allocation: number }>;
    /**
     * Fetch the storage volume key. This is globally unique, so the same volume will have the same key no matter what host it is accessed from
     * @param {function(Error, string)} callback returns the volume key, or NULL on error
     */
    getKey(callback: (error: Error, result: string) => void): void;
    /**
     * Fetch the storage volume key. This is globally unique, so the same volume will have the same key no matter what host it is accessed from
     * @returns {bluebird<string>} returns the volume key, or NULL on error
     */
    getKeyAsync(): bluebird<string>;
    /**
     * Fetch the storage volume name. This is unique within the scope of a pool
     * @param {function(Error, string)} callback the volume name, or NULL on error
     */
    getName(callback: (error: Error, result: string) => void): void;
    /**
     * Fetch the storage volume name. This is unique within the scope of a pool
     * @returns {bluebird<string>} returns the volume name, or NULL on error
     */
    getNameAsync(): bluebird<string>;
    /**
     * Fetch the storage volume path. Depending on the pool configuration this is either persistent across hosts, or dynamically assigned at pool startup.
     * @param {function(Error, string)} callback the storage volume path, or NULL on error.
     */
    getPath(callback: (error: Error, result: string) => void): void;
    /**
     * Fetch the storage volume name. This is unique within the scope of a pool
     * @returns {bluebird<string>} returns the storage volume path, or NULL on error.
     */
    getPathAsync(): bluebird<string>;
    /**
     * Delete the storage volume from the pool
     * @param {function(Error, boolean)} callback True in case of success, false otherwise
     */
    remove(callback: (error: Error, result: boolean) => void): void;
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
    wipe(callback: (error: Error, result: boolean) => void): void;
    /**
     * Ensure data previously on a volume is not accessible to future reads.
     * @returns {bluebird<boolean>} True in case of success, false otherwise
     */
    wipeAsync(): bluebird<boolean>;
}

export declare interface Secret {
    /**
     * Deletes the specified secret
     * @param {function(Error, number)} callback 0 in case of success, -1 otherwise
     */
    undefine(callback: (error: Error, result: number) => void): void;
    /**
     * Deletes the specified secret 
     * @returns {bluebird<number>} 0 in case of success, -1 otherwise
     */
    undefineAsync(): bluebird<number>;
    /**
     * Get the UUID for a secret as string
     * @param {function(Error, number)} callback uuid in case of success, NULL otherwise
     */
    getUUID(callback: (error: Error, uuid: string) => void): void;
    /**
     * Get the UUID for a secret as string
     * @returns {bluebird<string>} uuid in case of success, NULL otherwise
     */
    getUUIDAsync(): bluebird<string>;
    /**
     * Fetches the value of a secret.
     * @param {function(Error, string)} callback the secret value on success, NULL on failure
     */
    getValue(callback: (error: Error, result: string) => void): void;
    /**
     * Fetches the value of a secret.
     * @returns {bluebird<string>} the secret value on success, NULL on failure
     */
    getValueAsync(): bluebird<string>;
    /**
     * Sets the value of a secret
     * @param {string} value Value of the secret
     * @param {function(Error, number)} callback 0 in case of success, -1 otherwise
     */
    setValue(value: string, callback: (error: Error, result: number) => void): void;
    /**
     * Sets the value of a secret
     * @param value Value of the secret
     * @returns {bluebird<number>} 0 in case of success, -1 otherwise
     */
    setValueAsync(value: string): bluebird<number>;
    /**
     * Get the unique identifier of the object with which this secret is to be used
     * @param {function(Error, string)} callback a string identifying the object using the secret in case of success, NULL otherwise 
     */
    getUsageId(callback: (error: Error, result: string) => void): void;
    /**
     * Get the unique identifier of the object with which this secret is to be used
     * @returns {bluebird<string>} a string identifying the object using the secret in case of success, NULL otherwise 
     */
    getUsageIdAsync(): bluebird<string>;
    /**
     * Get the type of object which uses this secret
     * @param {function(Error, number)} callback a positive integer identifying the type of object, or -1 upon error
     */
    getUsageType(callback: (error: Error, result: number) => void): void;
    /**
     * Get the type of object which uses this secret
     * @returns {bluebird<number>} a positive integer identifying the type of object, or -1 upon error
     */
    getUsageTypeAsync(): bluebird<number>;
    /**
     * Fetches an XML document describing attributes of the secret.
     * @param {function(Error, string)} callback the XML document on success, NULL on failure
     */
    toXml(callback: (error: Error, result: string) => void): void;
    /**
     * Fetches an XML document describing attributes of the secret.
     * @returns {bluebird<string>} the XML document on success, NULL on failure
     */
    toXmlAsync(): bluebird<string>;
}