// Copyright 2010, Camilo Aguilar. Cloudescape, LLC.

#include "error.h"
#include "hypervisor.h"
#include "domain.h"
#include "worker.h"

namespace NLV {

Nan::Persistent<FunctionTemplate> Domain::constructor_template;
Nan::Persistent<Function> Domain::constructor;
void Domain::Initialize(Handle<Object> exports)
{
  Local<FunctionTemplate> t = Nan::New<FunctionTemplate>();
  t->SetClassName(Nan::New("Domain").ToLocalChecked());
  t->InstanceTemplate()->SetInternalFieldCount(1);

  // ACTIONS
  Nan::SetPrototypeMethod(t, "destroy",                 Destroy);
  Nan::SetPrototypeMethod(t, "start",                   Start);
  Nan::SetPrototypeMethod(t, "reboot",                  Reboot);
  Nan::SetPrototypeMethod(t, "shutdown",                Shutdown);
  Nan::SetPrototypeMethod(t, "reset",                   Reset);
  Nan::SetPrototypeMethod(t, "resume",                  Resume);
  Nan::SetPrototypeMethod(t, "suspend",                 Suspend);
  Nan::SetPrototypeMethod(t, "save",                    Save);
  Nan::SetPrototypeMethod(t, "managedSave",             ManagedSave);
  Nan::SetPrototypeMethod(t, "managedSaveRemove",       ManagedSaveRemove);
  Nan::SetPrototypeMethod(t, "abortCurrentJob",         AbortCurrentJob);
  Nan::SetPrototypeMethod(t, "coreDump",                CoreDump);
  Nan::SetPrototypeMethod(t, "undefine",                Undefine);

  Nan::SetPrototypeMethod(t, "attachDevice",            AttachDevice);
  Nan::SetPrototypeMethod(t, "detachDevice",            DetachDevice);
  Nan::SetPrototypeMethod(t, "updateDevice",            UpdateDevice);
  Nan::SetPrototypeMethod(t, "sendKeys",                SendKeys);

  // UNFINISHED SYNC ACTIONS
  Nan::SetPrototypeMethod(t, "memoryPeek",              MemoryPeek);
  Nan::SetPrototypeMethod(t, "blockPeek",               BlockPeek);
  Nan::SetPrototypeMethod(t, "migrate",                 Migrate);
  Nan::SetPrototypeMethod(t, "pinVcpu",                 PinVcpu);

  // ACCESSORS/MUTATORS
  Nan::SetPrototypeMethod(t, "getName",                 GetName);
  Nan::SetPrototypeMethod(t, "getInfo",                 GetInfo);
  Nan::SetPrototypeMethod(t, "getId",                   GetId);
  Nan::SetPrototypeMethod(t, "getOSType",               GetOSType);
  Nan::SetPrototypeMethod(t, "getUUID",                 GetUUID);
  Nan::SetPrototypeMethod(t, "getAutostart",            GetAutostart);
  Nan::SetPrototypeMethod(t, "setAutostart",            SetAutostart);
  Nan::SetPrototypeMethod(t, "getMaxMemory",            GetMaxMemory);
  Nan::SetPrototypeMethod(t, "setMaxMemory",            SetMaxMemory);
  Nan::SetPrototypeMethod(t, "setMemory",               SetMemory);
  Nan::SetPrototypeMethod(t, "getMaxVcpus",             GetMaxVcpus);
  Nan::SetPrototypeMethod(t, "isActive",                IsActive);
  Nan::SetPrototypeMethod(t, "isPersistent",            IsPersistent);
  Nan::SetPrototypeMethod(t, "isUpdated",               IsUpdated);
  Nan::SetPrototypeMethod(t, "toXml",                   ToXml);
  Nan::SetPrototypeMethod(t, "getMetadata",             GetMetadata);
  Nan::SetPrototypeMethod(t, "setMetadata",             SetMetadata);
  Nan::SetPrototypeMethod(t, "getBlockInfo",            GetBlockInfo);
  Nan::SetPrototypeMethod(t, "getBlockStats",           GetBlockStats);
  Nan::SetPrototypeMethod(t, "getSchedulerType",        GetSchedulerType);
  Nan::SetPrototypeMethod(t, "getSchedulerParameters",  GetSchedulerParameters);
  Nan::SetPrototypeMethod(t, "getSecurityLabel",        GetSecurityLabel);
  Nan::SetPrototypeMethod(t, "hasManagedSaveImage",     HasManagedSaveImage);
  Nan::SetPrototypeMethod(t, "getInterfaceStats",       GetInterfaceStats);
  Nan::SetPrototypeMethod(t, "getJobInfo",              GetJobInfo);
  Nan::SetPrototypeMethod(t, "getMemoryStats",          GetMemoryStats);
  Nan::SetPrototypeMethod(t, "getVcpus",                GetVcpus);
  Nan::SetPrototypeMethod(t, "setVcpus",                SetVcpus);
  Nan::SetPrototypeMethod(t, "blockCommit",             BlockCommit);
  Nan::SetPrototypeMethod(t, "blockJobInfo",            BlockJobInfo);
  Nan::SetPrototypeMethod(t, "blockJobAbort",           BlockJobAbort);

  // UNFINISHED SYNC ACCESSORS/MUTATORS
  Nan::SetPrototypeMethod(t, "setSchedulerParameters",  SetSchedulerParameters);
  Nan::SetPrototypeMethod(t, "setMigrationMaxDowntime", SetMigrationMaxDowntime);
  Nan::SetPrototypeMethod(t, "hasCurrentSnapshot",      HasCurrentSnapshot);
  Nan::SetPrototypeMethod(t, "revertToSnapshot",        RevertToSnapshot);
  Nan::SetPrototypeMethod(t, "takeSnapshot",            TakeSnapshot);
  Nan::SetPrototypeMethod(t, "getCurrentSnapshot",      GetCurrentSnapshot);
  Nan::SetPrototypeMethod(t, "deleteSnapshot",          DeleteSnapshot);
  Nan::SetPrototypeMethod(t, "lookupSnapshotByName",    LookupSnapshotByName);
  Nan::SetPrototypeMethod(t, "getSnapshots",            GetSnapshots);

  // Events
  Nan::SetPrototypeMethod(t, "registerEvent",           RegisterEvent);
  Nan::SetPrototypeMethod(t, "unregisterEvent",         UnregisterEvent);

  constructor_template.Reset(t);
  constructor.Reset(t->GetFunction());
  exports->Set(Nan::New("Domain").ToLocalChecked(), t->GetFunction());

  // Constants
  //virDomainDeviceModifyFlags
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_DEVICE_MODIFY_CURRENT);
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_DEVICE_MODIFY_LIVE);
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_DEVICE_MODIFY_CONFIG);
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_DEVICE_MODIFY_FORCE);

#ifdef _HAVE_DOMAIN_METADATA_API
  //virDomainMetadataType
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_METADATA_DESCRIPTION);
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_METADATA_TITLE);
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_METADATA_ELEMENT);
#endif

  //virDomainMigrateFlags
  NODE_DEFINE_CONSTANT(exports, VIR_MIGRATE_LIVE);
  NODE_DEFINE_CONSTANT(exports, VIR_MIGRATE_PEER2PEER);
  NODE_DEFINE_CONSTANT(exports, VIR_MIGRATE_TUNNELLED);
  NODE_DEFINE_CONSTANT(exports, VIR_MIGRATE_PERSIST_DEST);
  NODE_DEFINE_CONSTANT(exports, VIR_MIGRATE_UNDEFINE_SOURCE);
  NODE_DEFINE_CONSTANT(exports, VIR_MIGRATE_PAUSED);
  NODE_DEFINE_CONSTANT(exports, VIR_MIGRATE_NON_SHARED_DISK);
  NODE_DEFINE_CONSTANT(exports, VIR_MIGRATE_NON_SHARED_INC);
  NODE_DEFINE_CONSTANT(exports, VIR_MIGRATE_CHANGE_PROTECTION);
  NODE_DEFINE_CONSTANT(exports, VIR_MIGRATE_UNSAFE);
  NODE_DEFINE_CONSTANT(exports, VIR_MIGRATE_OFFLINE);
  NODE_DEFINE_CONSTANT(exports, VIR_MIGRATE_COMPRESSED);
  NODE_DEFINE_CONSTANT(exports, VIR_MIGRATE_ABORT_ON_ERROR);
  NODE_DEFINE_CONSTANT(exports, VIR_MIGRATE_AUTO_CONVERGE);
  NODE_DEFINE_CONSTANT(exports, VIR_MIGRATE_RDMA_PIN_ALL);
#if LIBVIR_CHECK_VERSION(4,0,0)
  NODE_DEFINE_CONSTANT(exports, VIR_MIGRATE_POSTCOPY);
  NODE_DEFINE_CONSTANT(exports, VIR_MIGRATE_TLS);
#endif

  //virDomainSnapshotCreateXML
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_SNAPSHOT_CREATE_REDEFINE);
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_SNAPSHOT_CREATE_CURRENT);
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_SNAPSHOT_CREATE_NO_METADATA);
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_SNAPSHOT_CREATE_HALT);
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_SNAPSHOT_CREATE_DISK_ONLY);
#if LIBVIR_CHECK_VERSION(0,9,10)
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_SNAPSHOT_CREATE_REUSE_EXT);
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_SNAPSHOT_CREATE_QUIESCE);
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_SNAPSHOT_CREATE_ATOMIC);
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_SNAPSHOT_CREATE_LIVE);
#endif

  //virDomainSnapshotDelete
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_SNAPSHOT_DELETE_CHILDREN);
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_SNAPSHOT_DELETE_CHILDREN_ONLY);
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_SNAPSHOT_DELETE_METADATA_ONLY);

  //virDomainModificationImpact
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_AFFECT_CURRENT);
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_AFFECT_LIVE);
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_AFFECT_CONFIG);

#ifdef _HAVE_DOMAIN_BLOCKCOMMIT_API
  //virDomainBlockCommit
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_BLOCK_COMMIT_SHALLOW);
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_BLOCK_COMMIT_DELETE);
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_BLOCK_COMMIT_ACTIVE);
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_BLOCK_COMMIT_RELATIVE);
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_BLOCK_COMMIT_BANDWIDTH_BYTES);

  //virDomainBlockJobAbort
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_BLOCK_JOB_ABORT_PIVOT);
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_BLOCK_JOB_COMPLETED);

  //virDomainBlockJobInfo
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_BLOCK_JOB_INFO_BANDWIDTH_BYTES);
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_BLOCK_JOB_TYPE_UNKNOWN);
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_BLOCK_JOB_TYPE_PULL);
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_BLOCK_JOB_TYPE_COPY);
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_BLOCK_JOB_TYPE_COMMIT);
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_BLOCK_JOB_TYPE_ACTIVE_COMMIT);
#endif

  //virDomainXMLFlags
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_XML_SECURE);
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_XML_INACTIVE);
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_XML_UPDATE_CPU);
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_XML_MIGRATABLE);

  //virDomainJobType
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_JOB_NONE);
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_JOB_BOUNDED);
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_JOB_UNBOUNDED);
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_JOB_COMPLETED);
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_JOB_FAILED);
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_JOB_CANCELLED);

  // virDomainMemoryFlags
  NODE_DEFINE_CONSTANT(exports, VIR_MEMORY_VIRTUAL);
  NODE_DEFINE_CONSTANT(exports, VIR_MEMORY_PHYSICAL);

  // virDomainEventType
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_EVENT_DEFINED);
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_EVENT_UNDEFINED);
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_EVENT_STARTED);
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_EVENT_SUSPENDED);
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_EVENT_RESUMED);
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_EVENT_STOPPED);

  // virDomainEventIOErrorAction
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_EVENT_IO_ERROR_NONE);
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_EVENT_IO_ERROR_PAUSE);
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_EVENT_IO_ERROR_REPORT);

  // virDomainEventResumedDetailType
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_EVENT_RESUMED_UNPAUSED);
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_EVENT_RESUMED_MIGRATED);

  // virDomainEventStartedDetailType
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_EVENT_STARTED_BOOTED);
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_EVENT_STARTED_MIGRATED);
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_EVENT_STARTED_RESTORED);
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_EVENT_STARTED_FROM_SNAPSHOT);

  // virDomainEventStoppedDetailType
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_EVENT_STOPPED_SHUTDOWN);
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_EVENT_STOPPED_DESTROYED);
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_EVENT_STOPPED_CRASHED);
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_EVENT_STOPPED_MIGRATED);
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_EVENT_STOPPED_SAVED);
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_EVENT_STOPPED_FAILED);
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_EVENT_STOPPED_FROM_SNAPSHOT);

  // virDomainEventSuspendedDetailType
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_EVENT_SUSPENDED_PAUSED);
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_EVENT_SUSPENDED_MIGRATED);
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_EVENT_SUSPENDED_IOERROR);
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_EVENT_SUSPENDED_WATCHDOG);

  // virDomainEventUndefinedDetailType
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_EVENT_UNDEFINED_REMOVED);

  // virDomainEventWatchdogAction
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_EVENT_WATCHDOG_NONE);
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_EVENT_WATCHDOG_PAUSE);
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_EVENT_WATCHDOG_RESET);
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_EVENT_WATCHDOG_POWEROFF);
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_EVENT_WATCHDOG_SHUTDOWN);
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_EVENT_WATCHDOG_DEBUG);

  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_SEND_KEY_MAX_KEYS);

  // virDomainUndefineFlags
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_UNDEFINE_MANAGED_SAVE);
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_UNDEFINE_SNAPSHOTS_METADATA);
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_UNDEFINE_NVRAM);
#if LIBVIR_CHECK_VERSION(4,0,0)
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_UNDEFINE_KEEP_NVRAM);
#endif

  // virDomainEventID
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_EVENT_ID_LIFECYCLE);
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_EVENT_ID_REBOOT);
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_EVENT_ID_RTC_CHANGE);
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_EVENT_ID_WATCHDOG);
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_EVENT_ID_IO_ERROR);
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_EVENT_ID_GRAPHICS);
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_EVENT_ID_IO_ERROR_REASON);
  // NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_EVENT_ID_CONTROL_ERROR);
  // NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_EVENT_ID_BLOCK_JOB);
  // NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_EVENT_ID_DISK_CHANGE);
  // NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_EVENT_ID_TRAY_CHANGE);
  // NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_EVENT_ID_PMWAKEUP);
  // NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_EVENT_ID_PMSUSPEND);
  // NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_EVENT_ID_BALLOON_CHANGE);
  // NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_EVENT_ID_PMSUSPEND_DISK);
  // NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_EVENT_ID_DEVICE_REMOVED);
  // NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_EVENT_ID_BLOCK_JOB_2);
  // NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_EVENT_ID_TUNABLE);
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_EVENT_ID_AGENT_LIFECYCLE);
  // NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_EVENT_ID_DEVICE_ADDED);
  // NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_EVENT_ID_MIGRATION_ITERATION);
  // NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_EVENT_ID_JOB_COMPLETED);
  // NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_EVENT_ID_DEVICE_REMOVAL_FAILED);

#if LIBVIR_CHECK_VERSION(1,2,8)
  // virConnectGetAllDomainStatsFlags
  NODE_DEFINE_CONSTANT(exports, VIR_CONNECT_GET_ALL_DOMAINS_STATS_ACTIVE);
  NODE_DEFINE_CONSTANT(exports, VIR_CONNECT_GET_ALL_DOMAINS_STATS_INACTIVE);
  NODE_DEFINE_CONSTANT(exports, VIR_CONNECT_GET_ALL_DOMAINS_STATS_OTHER);
  NODE_DEFINE_CONSTANT(exports, VIR_CONNECT_GET_ALL_DOMAINS_STATS_PAUSED);
  NODE_DEFINE_CONSTANT(exports, VIR_CONNECT_GET_ALL_DOMAINS_STATS_PERSISTENT);
  NODE_DEFINE_CONSTANT(exports, VIR_CONNECT_GET_ALL_DOMAINS_STATS_RUNNING);
  NODE_DEFINE_CONSTANT(exports, VIR_CONNECT_GET_ALL_DOMAINS_STATS_SHUTOFF);
  NODE_DEFINE_CONSTANT(exports, VIR_CONNECT_GET_ALL_DOMAINS_STATS_TRANSIENT);
  NODE_DEFINE_CONSTANT(exports, VIR_CONNECT_GET_ALL_DOMAINS_STATS_BACKING);
  NODE_DEFINE_CONSTANT(exports, VIR_CONNECT_GET_ALL_DOMAINS_STATS_ENFORCE_STATS);

  // virDomainStatsTypes
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_STATS_STATE);
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_STATS_CPU_TOTAL);
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_STATS_BALLOON);
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_STATS_VCPU);
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_STATS_INTERFACE);
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_STATS_BLOCK);
#endif

#if LIBVIR_CHECK_VERSION(4,0,0)
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_STATS_PERF);
#endif

#if LIBVIR_CHECK_VERSION(1,2,11)
  // virConnectDomainEventAgentLifecycleReason
  NODE_DEFINE_CONSTANT(exports, VIR_CONNECT_DOMAIN_EVENT_AGENT_LIFECYCLE_REASON_UNKNOWN);
  NODE_DEFINE_CONSTANT(exports, VIR_CONNECT_DOMAIN_EVENT_AGENT_LIFECYCLE_REASON_DOMAIN_STARTED);
  NODE_DEFINE_CONSTANT(exports, VIR_CONNECT_DOMAIN_EVENT_AGENT_LIFECYCLE_REASON_CHANNEL);

  // virConnectDomainEventAgentLifecycleState
  NODE_DEFINE_CONSTANT(exports, VIR_CONNECT_DOMAIN_EVENT_AGENT_LIFECYCLE_STATE_CONNECTED);
  NODE_DEFINE_CONSTANT(exports, VIR_CONNECT_DOMAIN_EVENT_AGENT_LIFECYCLE_STATE_DISCONNECTED);
#endif
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_NONE);
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_START_PAUSED);
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_START_AUTODESTROY);
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_START_BYPASS_CACHE);
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_START_FORCE_BOOT);
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_START_VALIDATE);
  NODE_DEFINE_CONSTANT(exports, VIR_DOMAIN_SHUTDOWN_ACPI_POWER_BTN);
}

Domain::Domain(virDomainPtr handle) : NLVObject(handle) {}

NAN_METHOD(Domain::LookupByName)
{
  Hypervisor::RunMethod<MethodReturnInstance<Domain>>(info, virDomainLookupByName, GetString(info[0]));
}

NAN_METHOD(Domain::LookupByUUID)
{
  Hypervisor::RunMethod<MethodReturnInstance<Domain>>(info, virDomainLookupByUUIDString, GetString(info[0]));
}

NAN_METHOD(Domain::LookupById)
{
  Hypervisor::RunMethod<MethodReturnInstance<Domain>>(info, virDomainLookupByID, info[0]->Int32Value());
}

NAN_METHOD(Domain::Create)
{
  Hypervisor::RunMethod<MethodReturnInstance<Domain>>(info, virDomainCreateXML, GetString(info[0]), GetFlags(info[1]));
}

NAN_METHOD(Domain::Define)
{
  Hypervisor::RunMethod<MethodReturnInstance<Domain>>(info, virDomainDefineXML, GetString(info[0]));
}

NAN_METHOD(Domain::Save)
{
  Nan::HandleScope scope;
  if (info.Length() != 2 &&
      (!info[0]->IsString() && !info[1]->IsFunction())) {
    Nan::ThrowTypeError("You must specify a path and callback");
    return;
  }

  std::string path(*Nan::Utf8String(info[0]->ToString()));
  Nan::Callback *callback = new Nan::Callback(info[1].As<Function>());
  Domain *domain = Domain::Unwrap(info.This());
  Nan::AsyncQueueWorker(new SaveWorker(callback, domain->virHandle(), path));
  return;
}

NLV_WORKER_EXECUTE(Domain, Save)
{
  NLV_WORKER_ASSERT_DOMAIN();
  int result = virDomainSave(Handle(), path_.c_str());
  if (result == -1) {
    SET_ERROR_WITH_CONTEXT(virSaveLastError());
    return;
  }

  data_ = true;
}

NAN_METHOD(Domain::Restore)
{
  Nan::HandleScope scope;
  if (info.Length() < 2 ||
      (!info[0]->IsString() && !info[1]->IsFunction())) {
    Nan::ThrowTypeError("You must specify a path and callback");
    return;
  }

  Local<Object> object = info.This();
  if (!Nan::New(Hypervisor::constructor_template)->HasInstance(object)) {
    Nan::ThrowTypeError("You must specify a Hypervisor instance");
    return;
  }

  std::string path(*Nan::Utf8String(info[0]->ToString()));
  Nan::Callback *callback = new Nan::Callback(info[1].As<Function>());
  Hypervisor *hv = Hypervisor::Unwrap(object);
  Nan::AsyncQueueWorker(new RestoreWorker(callback, hv->virHandle(), path));
  return;
}

NLV_WORKER_EXECUTE(Domain, Restore)
{
  NLV_WORKER_ASSERT_CONNECTION();
  int result = virDomainRestore(Handle(), path_.c_str());
  if (result == -1) {
    SET_ERROR_WITH_CONTEXT(virSaveLastError());
    return;
  }

  data_ = true;
}

NAN_METHOD(Domain::CoreDump)
{
  Nan::HandleScope scope;
  if (info.Length() < 2 ||
      (!info[0]->IsString() && !info[1]->IsFunction())) {
    Nan::ThrowTypeError("You must specify a path and callback");
    return;
  }

  std::string path(*Nan::Utf8String(info[0]->ToString()));
  Nan::Callback *callback = new Nan::Callback(info[1].As<Function>());
  Domain *domain = Domain::Unwrap(info.This());
  Nan::AsyncQueueWorker(new CoreDumpWorker(callback, domain->virHandle(), path));
  return;
}

NLV_WORKER_EXECUTE(Domain, CoreDump)
{
  NLV_WORKER_ASSERT_DOMAIN();
  unsigned int flags = 0;
  int result = virDomainCoreDump(Handle(), path_.c_str(), flags);
  if (result == -1) {
    SET_ERROR_WITH_CONTEXT(virSaveLastError());
    return;
  }

  data_ = true;
}

NAN_METHOD(Domain::Undefine)
{
  RunMethod(info, virDomainUndefineFlags, GetFlags(info[0]));
}

NAN_METHOD(Domain::Destroy)
{
  RunMethod(info, virDomainDestroy);
}

NAN_METHOD(Domain::ManagedSave)
{
  RunMethod(info, virDomainManagedSave, GetFlags(info[0]));
}

NAN_METHOD(Domain::ManagedSaveRemove)
{
  RunMethod(info, virDomainManagedSaveRemove, GetFlags(info[0]));
}

NAN_METHOD(Domain::GetName)
{
  RunMethod<MethodReturnString>(info, virDomainGetName);
}

NAN_METHOD(Domain::GetId)
{
  RunMethod<MethodReturn<int>>(info, virDomainGetID);
}

NAN_METHOD(Domain::GetOSType)
{
  RunMethod<MethodReturnString>(info, virDomainGetOSType);
}

NAN_METHOD(Domain::GetUUID)
{
  RunMethod<MethodReturn<std::string>, 2>(info, virDomainGetUUIDString, MakeOutString(VIR_UUID_STRING_BUFLEN));
}

NAN_METHOD(Domain::GetAutostart)
{
  RunMethod<MethodReturn<bool>, 2>(info, virDomainGetAutostart, MakeOut<int>());
}

NAN_METHOD(Domain::GetMaxMemory)
{
  RunMethod<MethodReturn<double>>(info, virDomainGetMaxMemory);
}

NAN_METHOD(Domain::GetMaxVcpus)
{
  RunMethod<MethodReturn<int>>(info, virDomainGetMaxVcpus);
}

NAN_METHOD(Domain::IsActive)
{
  RunMethod<MethodReturn<bool>>(info, virDomainIsActive);
}

NAN_METHOD(Domain::IsPersistent)
{
  RunMethod<MethodReturn<bool>>(info, virDomainIsPersistent);
}

NAN_METHOD(Domain::IsUpdated)
{
  RunMethod<MethodReturn<bool>>(info, virDomainIsUpdated);
}

NAN_METHOD(Domain::Start)
{
  RunMethod(info, virDomainCreateWithFlags, GetFlags(info[0]));
}

NAN_METHOD(Domain::Reboot)
{
  RunMethod(info, virDomainReboot, GetFlags(info[0]));
}

NAN_METHOD(Domain::Reset)
{
  RunMethod(info, virDomainReset, GetFlags(info[0]));
}

NAN_METHOD(Domain::Shutdown)
{
#if LIBVIR_CHECK_VERSION(0,9,10)
  RunMethod(info, virDomainShutdownFlags, GetFlags(info[0]));
#else
  RunMethod(info, virDomainShutdown);
#endif
}

NAN_METHOD(Domain::Suspend)
{
  RunMethod(info, virDomainSuspend);
}

NAN_METHOD(Domain::Resume)
{
  RunMethod(info, virDomainResume);
}

NAN_METHOD(Domain::HasManagedSaveImage)
{
  RunMethod<MethodReturn<bool>>(info, virDomainHasManagedSaveImage, GetFlags(info[0]));
}


NAN_METHOD(Domain::SetAutostart)
{
  Nan::HandleScope scope;
  if (info.Length() < 2 ||
      (!info[0]->IsString() && !info[1]->IsFunction())) {
    Nan::ThrowTypeError("You must specify a bool and callback");
    return;
  }

  bool autoStart = info[0]->IsTrue();
  Nan::Callback *callback = new Nan::Callback(info[1].As<Function>());
  Domain *domain = Domain::Unwrap(info.This());
  Nan::AsyncQueueWorker(new SetAutostartWorker(callback, domain->virHandle(), autoStart));
  return;
}

NLV_WORKER_EXECUTE(Domain, SetAutostart)
{
  NLV_WORKER_ASSERT_DOMAIN();
  int result = virDomainSetAutostart(Handle(), autoStart_ ? 1 : 0);
  if (result == -1) {
    SET_ERROR_WITH_CONTEXT(virSaveLastError());
    return;
  }

  data_ = true;
}

NAN_METHOD(Domain::SetMaxMemory)
{
  Nan::HandleScope scope;
  if (info.Length() < 2 ||
      (!info[0]->IsNumber() && !info[1]->IsFunction())) {
    Nan::ThrowTypeError("You must specify a bool and callback");
    return;
  }

  unsigned long maxMemory = static_cast<unsigned long>(info[0]->NumberValue());
  // @todo this unsafe, also needs bounds checking!
  Nan::Callback *callback = new Nan::Callback(info[1].As<Function>());
  Domain *domain = Domain::Unwrap(info.This());
  Nan::AsyncQueueWorker(new SetMaxMemoryWorker(callback, domain->virHandle(), maxMemory));
  return;
}

NLV_WORKER_EXECUTE(Domain, SetMaxMemory)
{
  NLV_WORKER_ASSERT_DOMAIN();
  int result = virDomainSetMaxMemory(Handle(), maxMemory_);
  if (result == -1) {
    SET_ERROR_WITH_CONTEXT(virSaveLastError());
    return;
  }

  data_ = true;
}

NAN_METHOD(Domain::SetMemory)
{
  Nan::HandleScope scope;
  if (info.Length() < 2 ||
      (!info[0]->IsNumber() && !info[1]->IsFunction())) {
    Nan::ThrowTypeError("You must specify a bool and callback");
    return;
  }

  unsigned long memory = static_cast<unsigned long>(info[0]->NumberValue());
  // @todo this unsafe, also needs bounds checking!
  Nan::Callback *callback = new Nan::Callback(info[1].As<Function>());
  Domain *domain = Domain::Unwrap(info.This());
  Nan::AsyncQueueWorker(new SetMemoryWorker(callback, domain->virHandle(), memory));
  return;
}

NLV_WORKER_EXECUTE(Domain, SetMemory)
{
  NLV_WORKER_ASSERT_DOMAIN();
  int result = virDomainSetMemory(Handle(), memory_);
  if (result == -1) {
    SET_ERROR_WITH_CONTEXT(virSaveLastError());
    return;
  }

  data_ = true;
}

NAN_METHOD(Domain::ToXml)
{
  Nan::HandleScope scope;
  unsigned int flags = 0;
  Nan::Callback *callback;
  if (info.Length() > 1 && info[1]->IsFunction())
  {
    callback = new Nan::Callback(info[1].As<Function>());
    flags = info[0]->IntegerValue();
  } else if (info.Length() == 1 && info[0]->IsFunction()) {
    callback = new Nan::Callback(info[0].As<Function>());
  } else {
    Nan::ThrowTypeError("signature is callback or flags, callback");
    return;
  }
  Domain *domain = Domain::Unwrap(info.This());
  Nan::AsyncQueueWorker(new ToXmlWorker(callback, domain->virHandle(), flags));
  return;
}

NLV_WORKER_EXECUTE(Domain, ToXml)
{
  NLV_WORKER_ASSERT_DOMAIN();
  char *result = virDomainGetXMLDesc(Handle(), flags_);
  if (result == NULL) {
    SET_ERROR_WITH_CONTEXT(virSaveLastError());
    return;
  }

  data_ = result;
  free(result);
}

NAN_METHOD(Domain::GetMetadata)
{
  Nan::HandleScope scope;
#ifndef _HAVE_DOMAIN_METADATA_API
  Nan::ThrowTypeError("metadata api not supported in this libvirt version");
  return;
#else
  int type;
  std::string namespace_uri;
  unsigned int flags;
  Nan::Callback *callback;
  if (info.Length() == 4
	  && info[0]->IsNumber()
	  && (info[1]->IsString() || info[1]->IsNull())
	  && info[2]->IsNumber()
	  && info[3]->IsFunction())
  {
    type = info[0]->IntegerValue();
    if (!info[1]->IsNull()) {
	namespace_uri = *Nan::Utf8String(info[1]->ToString());
    }
    flags = info[2]->IntegerValue();
    callback = new Nan::Callback(info[3].As<Function>());
  } else {
    Nan::ThrowTypeError("signature is type, namespace_uri, flags, callback");
    return;
  }
  Domain *domain = Domain::Unwrap(info.This());
  Nan::AsyncQueueWorker(new GetMetadataWorker(callback, domain->virHandle(), type, namespace_uri, flags));
  return;
#endif
}

#ifdef _HAVE_DOMAIN_METADATA_API
NLV_WORKER_EXECUTE(Domain, GetMetadata)
{
  NLV_WORKER_ASSERT_DOMAIN();
  const char *namespace_uri = (type_ == VIR_DOMAIN_METADATA_ELEMENT)
	  ? namespace_uri_.c_str() : NULL;
  char *result = virDomainGetMetadata(Handle(), type_, namespace_uri, flags_);
  if (result == NULL) {
      SET_ERROR_WITH_CONTEXT(virSaveLastError());
    return;
  }

  data_ = result;
  free(result);

}
#endif

NAN_METHOD(Domain::SetMetadata)
{
  Nan::HandleScope scope;
#ifndef _HAVE_DOMAIN_METADATA_API
  Nan::ThrowTypeError("metadata api not supported in this libvirt version");
  return;
#else
  int type;
  bool null_metadata;
  std::string metadata;
  std::string namespace_key;
  std::string namespace_uri;
  unsigned int flags;
  Nan::Callback *callback;
  if (info.Length() == 6
      && info[0]->IsNumber()
      && (info[1]->IsString() || info[1]->IsNull())
      && (info[2]->IsString() || info[2]->IsNull())
      && (info[3]->IsString() || info[3]->IsNull())
      && info[4]->IsNumber()
      && info[5]->IsFunction())
  {
    type = info[0]->IntegerValue();
    if (info[1]->IsNull()) {
      null_metadata = true;
    } else {
      null_metadata = false;
      metadata = *Nan::Utf8String(info[1]->ToString());
    }

    if (!info[2]->IsNull())
      namespace_key = *Nan::Utf8String(info[2]->ToString());
    if (!info[3]->IsNull())
      namespace_uri = *Nan::Utf8String(info[3]->ToString());
    flags = info[4]->IntegerValue();
    callback = new Nan::Callback(info[5].As<Function>());
  } else {
    Nan::ThrowTypeError("signature is type, metadata, namespace_key, namespace_uri, flags, callback");
    return;
  }

  Domain *domain = Domain::Unwrap(info.This());
  Nan::AsyncQueueWorker(new SetMetadataWorker(callback, domain->virHandle(), type, null_metadata, metadata, namespace_key, namespace_uri, flags));
  return;
#endif
}

#ifdef _HAVE_DOMAIN_METADATA_API
NLV_WORKER_EXECUTE(Domain, SetMetadata)
{
  NLV_WORKER_ASSERT_DOMAIN();
  const char *metadata = null_metadata_ ? NULL : metadata_.c_str();
  const char *namespace_key = (type_ == VIR_DOMAIN_METADATA_ELEMENT)
	  ? namespace_key_.c_str() : NULL;
  const char *namespace_uri = (type_ == VIR_DOMAIN_METADATA_ELEMENT)
	  ? namespace_uri_.c_str() : NULL;
  int result = virDomainSetMetadata(Handle(), type_, metadata, namespace_key, namespace_uri, flags_);
  if (result == -1) {
    SET_ERROR_WITH_CONTEXT(virSaveLastError());
    return;
  }

  data_ = static_cast<bool>(result);
}
#endif

NLV_WORKER_METHOD_NO_ARGS(Domain, GetInfo)
NLV_WORKER_EXECUTE(Domain, GetInfo)
{
  NLV_WORKER_ASSERT_DOMAIN();
  int result = virDomainGetInfo(Handle(), &info_);
  if (result == -1) {
    SET_ERROR_WITH_CONTEXT(virSaveLastError());
    return;
  }
}

std::string domainStateToString(unsigned char state) {
  switch (state) {
  case VIR_DOMAIN_NOSTATE: return "no state";
  case VIR_DOMAIN_RUNNING: return "running";
  case VIR_DOMAIN_BLOCKED: return "idle";
  case VIR_DOMAIN_PAUSED: return "paused";
  case VIR_DOMAIN_SHUTDOWN: return "in shutdown";
  case VIR_DOMAIN_SHUTOFF: return "shut off";
  case VIR_DOMAIN_CRASHED: return "crashed";

#ifdef VIR_DOMAIN_PMSUSPENDED
  case VIR_DOMAIN_PMSUSPENDED: return "pmsuspended";
#endif
  }

  return "unknown";
}

NLV_WORKER_OKCALLBACK(Domain, GetInfo)
{
  Nan::HandleScope scope;
  Local<Object> result = Nan::New<Object>();
  result->Set(Nan::New("state").ToLocalChecked(), Nan::New(domainStateToString(info_.state)).ToLocalChecked());
  result->Set(Nan::New("maxMemory").ToLocalChecked(), Nan::New<Number>(info_.maxMem));
  result->Set(Nan::New("memory").ToLocalChecked(), Nan::New<Number>(info_.memory));
  result->Set(Nan::New("vcpus").ToLocalChecked(), Nan::New<Integer>(info_.nrVirtCpu));
  result->Set(Nan::New("cpuTime").ToLocalChecked(), Nan::New<Number>(info_.cpuTime));

  Local<Value> argv[] = { Nan::Null(), result };
  callback->Call(2, argv);
}

NAN_METHOD(Domain::GetBlockInfo)
{
  Nan::HandleScope scope;
  if (info.Length() != 2 &&
      (!info[0]->IsString() && !info[1]->IsFunction())) {
    Nan::ThrowTypeError("You must specify a path and callback");
    return;
  }

  std::string path(*Nan::Utf8String(info[0]->ToString()));
  Nan::Callback *callback = new Nan::Callback(info[1].As<Function>());
  Domain *domain = Domain::Unwrap(info.This());
  Nan::AsyncQueueWorker(new GetBlockInfoWorker(callback, domain->virHandle(), path));
  return;
}

NLV_WORKER_EXECUTE(Domain, GetBlockInfo)
{
  NLV_WORKER_ASSERT_DOMAIN();
  unsigned int flags = 0;
  int result = virDomainGetBlockInfo(Handle(), path_.c_str(), &info_, flags);
  if (result == -1) {
    SET_ERROR_WITH_CONTEXT(virSaveLastError());
    return;
  }
}

NLV_WORKER_OKCALLBACK(Domain, GetBlockInfo)
{
  Nan::HandleScope scope;
  Local<Object> result = Nan::New<Object>();
  result->Set(Nan::New("capacity").ToLocalChecked(), Nan::New<Number>(info_.capacity));
  result->Set(Nan::New("allocation").ToLocalChecked(), Nan::New<Number>(info_.allocation));
  result->Set(Nan::New("physical").ToLocalChecked(), Nan::New<Number>(info_.physical));

  Local<Value> argv[] = { Nan::Null(), result };
  callback->Call(2, argv);
}

NAN_METHOD(Domain::GetBlockStats)
{
  Nan::HandleScope scope;
  if (info.Length() != 2 &&
      (!info[0]->IsString() && !info[1]->IsFunction())) {
    Nan::ThrowTypeError("You must specify a path and callback");
    return;
  }

  std::string path(*Nan::Utf8String(info[0]->ToString()));
  Nan::Callback *callback = new Nan::Callback(info[1].As<Function>());
  Domain *domain = Domain::Unwrap(info.This());
  Nan::AsyncQueueWorker(new GetBlockStatsWorker(callback, domain->virHandle(), path));
  return;
}

NLV_WORKER_EXECUTE(Domain, GetBlockStats)
{
  NLV_WORKER_ASSERT_DOMAIN();
  int result =
    virDomainBlockStats(Handle(), path_.c_str(), &stats_, sizeof(stats_));
  if (result == -1) {
    SET_ERROR_WITH_CONTEXT(virSaveLastError());
    return;
  }
}

NLV_WORKER_OKCALLBACK(Domain, GetBlockStats)
{
  Nan::HandleScope scope;
  Local<Object> result = Nan::New<Object>();
  result->Set(Nan::New("readRequests").ToLocalChecked(), Nan::New<Number>(stats_.rd_req));
  result->Set(Nan::New("readBytes").ToLocalChecked(), Nan::New<Number>(stats_.rd_bytes));
  result->Set(Nan::New("writeRequests").ToLocalChecked(), Nan::New<Number>(stats_.wr_req));
  result->Set(Nan::New("writeBytes").ToLocalChecked(), Nan::New<Number>(stats_.wr_bytes));
  result->Set(Nan::New("errors").ToLocalChecked(), Nan::New<Number>(stats_.errs));

  Local<Value> argv[] = { Nan::Null(), result };
  callback->Call(2, argv);
}

NLV_WORKER_METHOD_NO_ARGS(Domain, GetSchedulerType)
NLV_WORKER_EXECUTE(Domain, GetSchedulerType)
{
  NLV_WORKER_ASSERT_DOMAIN();
  char *result = virDomainGetSchedulerType(Handle(), NULL);
  if (result == NULL) {
    SET_ERROR_WITH_CONTEXT(virSaveLastError());
    return;
  }

  data_ = result;
  free(result);
}

NLV_WORKER_METHOD_NO_ARGS(Domain, GetSchedulerParameters)
NLV_WORKER_EXECUTE(Domain, GetSchedulerParameters)
{
  NLV_WORKER_ASSERT_DOMAIN();
  // get number of parameters
  int numParams;
  char *type = virDomainGetSchedulerType(Handle(), &numParams);
  if (type == NULL) {
    SET_ERROR_WITH_CONTEXT(virSaveLastError());
    return;
  }
  free(type);

  params_.resize(numParams);
  int result = virDomainGetSchedulerParameters(Handle(), params_.data(), &numParams);
  if (result == -1) {
    SET_ERROR_WITH_CONTEXT(virSaveLastError());
    return;
  }
}

#if LIBVIR_CHECK_VERSION(1,2,8)
NAN_METHOD(Domain::GetAllDomainStats)
{
  Nan::HandleScope scope;
  unsigned int stats = GetFlags(info[0]);
  unsigned int flags = GetFlags(info[1]);

  auto handle = Hypervisor::UnwrapHandle(info.This());
  Worker::RunAsync(info, [=] (Worker::SetOnFinishedHandler onFinished) {
    virDomainStatsRecordPtr* records;
    int result = virConnectGetAllDomainStats(handle, stats, &records, flags);

    if (result == -1) {
      virDomainStatsRecordListFree(records);
      return virSaveLastError();
    }

    return onFinished([=] (Worker* worker) {
      Nan::HandleScope scope;
      v8::Local<v8::Object> result = Nan::New<v8::Object>();
      // @TODO: this is essentially the body of the NLVTypedParameterReturnWorker's ok callback code
      virDomainStatsRecordPtr *next;
      for (next = records; *next; next++) {
        virDomainStatsRecordPtr record = *next;

        v8::Local<v8::Object> recordObject = Nan::New<v8::Object>();
        for (int i = 0; i < record->nparams; i++) {
          virTypedParameterPtr param = record->params + i;
          recordObject->Set(Nan::New(param->field).ToLocalChecked(), extractTypedParameter(param));
        }

        std::string domain_name(virDomainGetName(record->dom));
        result->Set(Nan::New(domain_name).ToLocalChecked(), recordObject);
      }

      virDomainStatsRecordListFree(records);
      Local<Value> argv[] = { Nan::Null(), result };
      worker->Call(2, argv);
    });
  });
}
#endif

NLV_WORKER_METHOD_NO_ARGS(Domain, GetSecurityLabel)
NLV_WORKER_EXECUTE(Domain, GetSecurityLabel)
{
  NLV_WORKER_ASSERT_DOMAIN();
  int result = virDomainGetSecurityLabel(Handle(), &info_);
  if (result == -1) {
    SET_ERROR_WITH_CONTEXT(virSaveLastError());
    return;
  }
}

NLV_WORKER_OKCALLBACK(Domain, GetSecurityLabel)
{
  Nan::HandleScope scope;
  Local<Object> result = Nan::New<Object>();
  result->Set(Nan::New("label").ToLocalChecked(), Nan::New<String>(info_.label).ToLocalChecked());
  result->Set(Nan::New("enforcing").ToLocalChecked(), Nan::New<Boolean>(info_.enforcing));

  Local<Value> argv[] = { Nan::Null(), result };
  callback->Call(2, argv);
}

NAN_METHOD(Domain::GetInterfaceStats)
{
  Nan::HandleScope scope;
  if (info.Length() != 2 &&
      (!info[0]->IsString() && !info[1]->IsFunction())) {
    Nan::ThrowTypeError("You must specify a device and callback");
    return;
  }

  std::string interface(*Nan::Utf8String(info[0]->ToString()));
  Nan::Callback *callback = new Nan::Callback(info[1].As<Function>());
  Domain *domain = Domain::Unwrap(info.This());
  Nan::AsyncQueueWorker(new GetInterfaceStatsWorker(callback, domain->virHandle(), interface));
  return;
}

NLV_WORKER_EXECUTE(Domain, GetInterfaceStats)
{
  NLV_WORKER_ASSERT_DOMAIN();
  int result =
    virDomainInterfaceStats(Handle(), interface_.c_str(), &stats_, sizeof(stats_));
  if (result == -1) {
    SET_ERROR_WITH_CONTEXT(virSaveLastError());
    return;
  }
}

NLV_WORKER_OKCALLBACK(Domain, GetInterfaceStats)
{
  Nan::HandleScope scope;
  Local<Object> rx = Nan::New<Object>();
  rx->Set(Nan::New("bytes").ToLocalChecked(), Nan::New<Number>(stats_.rx_bytes));
  rx->Set(Nan::New("packets").ToLocalChecked(), Nan::New<Number>(stats_.rx_packets));
  rx->Set(Nan::New("errors").ToLocalChecked(), Nan::New<Number>(stats_.rx_errs));
  rx->Set(Nan::New("drop").ToLocalChecked(), Nan::New<Number>(stats_.rx_drop));

  Local<Object> tx = Nan::New<Object>();
  tx->Set(Nan::New("bytes").ToLocalChecked(), Nan::New<Number>(stats_.tx_bytes));
  tx->Set(Nan::New("packets").ToLocalChecked(), Nan::New<Number>(stats_.tx_packets));
  tx->Set(Nan::New("errors").ToLocalChecked(), Nan::New<Number>(stats_.tx_errs));
  tx->Set(Nan::New("drop").ToLocalChecked(), Nan::New<Number>(stats_.tx_drop));

  Local<Object> result = Nan::New<Object>();
  result->Set(Nan::New("rx").ToLocalChecked(), rx);
  result->Set(Nan::New("tx").ToLocalChecked(), tx);

  Local<Value> argv[] = { Nan::Null(), result };
  callback->Call(2, argv);
}

NLV_WORKER_METHOD_NO_ARGS(Domain, GetJobInfo)
NLV_WORKER_EXECUTE(Domain, GetJobInfo)
{
  NLV_WORKER_ASSERT_DOMAIN();
  int result = virDomainGetJobInfo(Handle(), &info_);
  if (result == -1) {
    SET_ERROR_WITH_CONTEXT(virSaveLastError());
    return;
  }
}

std::string jobTypeToString(int type) {
  switch (type) {
  case VIR_DOMAIN_JOB_NONE: return "none";
  case VIR_DOMAIN_JOB_BOUNDED: return "bounded";
  case VIR_DOMAIN_JOB_UNBOUNDED: return "unbounded";
  case VIR_DOMAIN_JOB_COMPLETED: return "completed";
  case VIR_DOMAIN_JOB_FAILED: return "failed";
  case VIR_DOMAIN_JOB_CANCELLED: return "cancelled";
  }

  return "unknown";
}

NLV_WORKER_OKCALLBACK(Domain, GetJobInfo)
{
  Nan::HandleScope scope;
  Local<Object> time = Nan::New<Object>();
  time->Set(Nan::New("elapsed").ToLocalChecked(), Nan::New<Number>(info_.timeElapsed));
  time->Set(Nan::New("remaining").ToLocalChecked(), Nan::New<Number>(info_.timeRemaining));

  Local<Object> data = Nan::New<Object>();
  data->Set(Nan::New("total").ToLocalChecked(), Nan::New<Number>(info_.dataTotal));
  data->Set(Nan::New("processed").ToLocalChecked(), Nan::New<Number>(info_.dataProcessed));
  data->Set(Nan::New("remaining").ToLocalChecked(), Nan::New<Number>(info_.dataRemaining));

  Local<Object> memory = Nan::New<Object>();
  memory->Set(Nan::New("total").ToLocalChecked(), Nan::New<Number>(info_.memTotal));
  memory->Set(Nan::New("processed").ToLocalChecked(), Nan::New<Number>(info_.memProcessed));
  memory->Set(Nan::New("remaining").ToLocalChecked(), Nan::New<Number>(info_.memRemaining));

  Local<Object> file = Nan::New<Object>();
  file->Set(Nan::New("total").ToLocalChecked(), Nan::New<Number>(info_.fileTotal));
  file->Set(Nan::New("processed").ToLocalChecked(), Nan::New<Number>(info_.fileProcessed));
  file->Set(Nan::New("remaining").ToLocalChecked(), Nan::New<Number>(info_.fileRemaining));

  Local<Object> result = Nan::New<Object>();
  result->Set(Nan::New("type").ToLocalChecked(), Nan::New(jobTypeToString(info_.type)).ToLocalChecked());
  result->Set(Nan::New("time").ToLocalChecked(), time);
  result->Set(Nan::New("data").ToLocalChecked(), data);
  result->Set(Nan::New("memory").ToLocalChecked(), memory);
  result->Set(Nan::New("file").ToLocalChecked(), file);

  Local<Value> argv[] = { Nan::Null(), result };
  callback->Call(2, argv);
}

NLV_WORKER_METHOD_NO_ARGS(Domain, AbortCurrentJob)
NLV_WORKER_EXECUTE(Domain, AbortCurrentJob)
{
  NLV_WORKER_ASSERT_DOMAIN();
  int result = virDomainAbortJob(Handle());
  if (result == -1) {
    SET_ERROR_WITH_CONTEXT(virSaveLastError());
    return;
  }

  data_ = true;
}

NLV_WORKER_METHOD_NO_ARGS(Domain, GetMemoryStats)
NLV_WORKER_EXECUTE(Domain, GetMemoryStats)
{
  NLV_WORKER_ASSERT_DOMAIN();
  unsigned int flags = 0;
  stats_.resize(VIR_DOMAIN_MEMORY_STAT_NR);
  int result = virDomainMemoryStats(Handle(), stats_.data(), stats_.size(), flags);
  if (result == -1) {
    SET_ERROR_WITH_CONTEXT(virSaveLastError());
    return;
  }
}

NLV_WORKER_OKCALLBACK(Domain, GetMemoryStats)
{
  Nan::HandleScope scope;
  Local<Object> result = Nan::New<Object>();
  for(unsigned int i = 0; i < stats_.size(); ++i) {
    switch (stats_[i].tag) {
    case VIR_DOMAIN_MEMORY_STAT_SWAP_IN:
      result->Set(Nan::New("swapIn").ToLocalChecked(), Nan::New<Number>(stats_[i].val));
      break;
    case VIR_DOMAIN_MEMORY_STAT_SWAP_OUT:
      result->Set(Nan::New("swapOut").ToLocalChecked(), Nan::New<Number>(stats_[i].val));
      break;
    case VIR_DOMAIN_MEMORY_STAT_MAJOR_FAULT:
      result->Set(Nan::New("majorFault").ToLocalChecked(), Nan::New<Number>(stats_[i].val));
      break;
    case VIR_DOMAIN_MEMORY_STAT_MINOR_FAULT:
      result->Set(Nan::New("minorFault").ToLocalChecked(), Nan::New<Number>(stats_[i].val));
      break;
    case VIR_DOMAIN_MEMORY_STAT_UNUSED:
      result->Set(Nan::New("unused").ToLocalChecked(), Nan::New<Number>(stats_[i].val));
      break;
    case VIR_DOMAIN_MEMORY_STAT_AVAILABLE:
      result->Set(Nan::New("available").ToLocalChecked(), Nan::New<Number>(stats_[i].val));
      break;
    }
  }

  Local<Value> argv[] = { Nan::Null(), result };
  callback->Call(2, argv);
}

NAN_METHOD(Domain::AttachDevice)
{
  Nan::HandleScope scope;
  if (info.Length() < 2 ||
      (info.Length() == 2 && (!info[0]->IsString() && !info[1]->IsFunction())) ||
      (info.Length() == 3 && (!info[0]->IsString() && !info[1]->IsArray() && !info[2]->IsFunction()))) {
    Nan::ThrowTypeError("you must at least specify xml and a callback");
    return;
  }

  Nan::Callback *callback;
  std::string xml(*Nan::Utf8String(info[0]->ToString()));
  unsigned long flags = 0;

  if (info[1]->IsArray()) {
    Local<Array> flagsArray = info[1].As<Array>();
    for (unsigned int i = 0; i < flagsArray->Length(); ++i)
      flags |= flagsArray->Get(Nan::New(i))->Int32Value();
    callback = new Nan::Callback(info[2].As<Function>());
  } else {
    callback = new Nan::Callback(info[1].As<Function>());
  }

  Domain *domain = Domain::Unwrap(info.This());
  Nan::AsyncQueueWorker(new AttachDeviceWorker(callback, domain->virHandle(), xml, flags));
  return;
}

NLV_WORKER_EXECUTE(Domain, AttachDevice)
{
  NLV_WORKER_ASSERT_DOMAIN();
  int result;
  if (flags_ > 0) {
    result = virDomainAttachDeviceFlags(Handle(), xml_.c_str(), flags_);
  } else {
    result = virDomainAttachDevice(Handle(), xml_.c_str());
  }

  if (result == -1) {
    SET_ERROR_WITH_CONTEXT(virSaveLastError());
    return;
  }

  data_ = true;
}

NAN_METHOD(Domain::DetachDevice)
{
  Nan::HandleScope scope;
  if (info.Length() < 2 ||
      (info.Length() == 2 && (!info[0]->IsString() && !info[1]->IsFunction())) ||
      (info.Length() == 3 && (!info[0]->IsString() && !info[1]->IsArray() && !info[2]->IsFunction()))) {
    Nan::ThrowTypeError("you must at least specify xml and a callback");
    return;
  }

  Nan::Callback *callback;
  std::string xml(*Nan::Utf8String(info[0]->ToString()));
  unsigned long flags = 0;

  if (info[1]->IsArray()) {
    Local<Array> flagsArray = info[1].As<Array>();
    for (unsigned int i = 0; i < flagsArray->Length(); ++i)
      flags |= flagsArray->Get(Nan::New(i))->Int32Value();
    callback = new Nan::Callback(info[2].As<Function>());
  } else {
    callback = new Nan::Callback(info[1].As<Function>());
  }

  Domain *domain = Domain::Unwrap(info.This());
  Nan::AsyncQueueWorker(new DetachDeviceWorker(callback, domain->virHandle(), xml, flags));
  return;
}

NLV_WORKER_EXECUTE(Domain, DetachDevice)
{
  NLV_WORKER_ASSERT_DOMAIN();
  int result;
  if (flags_ > 0) {
    result = virDomainDetachDeviceFlags(Handle(), xml_.c_str(), flags_);
  } else {
    result = virDomainDetachDevice(Handle(), xml_.c_str());
  }

  if (result == -1) {
    SET_ERROR_WITH_CONTEXT(virSaveLastError());
    return;
  }

  data_ = true;
}

NAN_METHOD(Domain::UpdateDevice)
{
  Nan::HandleScope scope;
  if (info.Length() < 2 ||
      (info.Length() == 2 && (!info[0]->IsString() && !info[1]->IsFunction())) ||
      (info.Length() == 3 && (!info[0]->IsString() && !info[1]->IsArray() && !info[2]->IsFunction()))) {
    Nan::ThrowTypeError("you must at least specify xml and a callback");
    return;
  }

  Nan::Callback *callback;
  std::string xml(*Nan::Utf8String(info[0]->ToString()));
  unsigned long flags = 0;

  if (info[1]->IsArray()) {
    Local<Array> flagsArray = info[1].As<Array>();
    for (unsigned int i = 0; i < flagsArray->Length(); ++i)
      flags |= flagsArray->Get(Nan::New(i))->Int32Value();
    callback = new Nan::Callback(info[2].As<Function>());
  } else {
    callback = new Nan::Callback(info[1].As<Function>());
  }

  Domain *domain = Domain::Unwrap(info.This());
  Nan::AsyncQueueWorker(new UpdateDeviceWorker(callback, domain->virHandle(), xml, flags));
  return;
}

NLV_WORKER_EXECUTE(Domain, UpdateDevice)
{
  NLV_WORKER_ASSERT_DOMAIN();
  int result = virDomainUpdateDeviceFlags(Handle(), xml_.c_str(), flags_);
  if (result == -1) {
    SET_ERROR_WITH_CONTEXT(virSaveLastError());
    return;
  }

  data_ = true;
}

NLV_WORKER_METHOD_NO_ARGS(Domain, GetVcpus)
NLV_WORKER_EXECUTE(Domain, GetVcpus)
{
  NLV_WORKER_ASSERT_DOMAIN();
  virDomainInfo info;
  int result = virDomainGetInfo(Handle(), &info);
  if (result == -1) {
    SET_ERROR_WITH_CONTEXT(virSaveLastError());
    return;
  }

  result = virNodeGetInfo(virDomainGetConnect(Handle()), &nodeInfo_);
  if (result == -1) {
    SET_ERROR_WITH_CONTEXT(virSaveLastError());
    return;
  }

  int cpuMapLen = VIR_CPU_MAPLEN(VIR_NODEINFO_MAXCPUS(nodeInfo_));
  map_.resize(info.nrVirtCpu * cpuMapLen, 0);
  info_.resize(info.nrVirtCpu);
  result =
    virDomainGetVcpus(Handle(), info_.data(), info_.size(), map_.data(), map_.size());
  if (result == -1) {
    SET_ERROR_WITH_CONTEXT(virSaveLastError());
    return;
  }
}

std::string vcpuStateToString(unsigned char state) {
  switch (state) {
  case VIR_VCPU_OFFLINE: return "offline";
  case VIR_VCPU_RUNNING: return "running";
  case VIR_VCPU_BLOCKED: return "blocked";
  }

  return "unknown";
}

NLV_WORKER_OKCALLBACK(Domain, GetVcpus)
{
  Nan::HandleScope scope;

  Local<Array> result = Nan::New<Array>(info_.size());
  for (unsigned int i = 0; i < info_.size(); ++i) {
    Local<Object> cpu = Nan::New<Object>();
    cpu->Set(Nan::New("number").ToLocalChecked(), Nan::New<Integer>(info_[i].number));
    cpu->Set(Nan::New("state").ToLocalChecked(), Nan::New(vcpuStateToString(info_[i].state)).ToLocalChecked());
    cpu->Set(Nan::New("cpuTime").ToLocalChecked(), Nan::New<Number>(info_[i].cpuTime));
    cpu->Set(Nan::New("cpu").ToLocalChecked(), Nan::New<Integer>(info_[i].cpu));

    unsigned int maxCpus = VIR_NODEINFO_MAXCPUS(nodeInfo_);
    Local<Array> affinity = Nan::New<Array>(maxCpus);
    for (unsigned int j = 0; j < maxCpus; ++j) {
      Local<Object> realCpu = Nan::New<Object>();
      realCpu->Set(Nan::New("cpu").ToLocalChecked(), Nan::New(j));
      realCpu->Set(Nan::New("usable").ToLocalChecked(), Nan::New<Boolean>(VIR_CPU_USABLE(map_, map_.size(), i, j)));
      affinity->Set(Nan::New(j), realCpu);
    }

    cpu->Set(Nan::New("affinity").ToLocalChecked(), affinity);
    result->Set(Nan::New(i), cpu);
  }

  Local<Value> argv[] = { Nan::Null(), result };
  callback->Call(2, argv);
}

NAN_METHOD(Domain::SetVcpus)
{
  Nan::HandleScope scope;
  if (info.Length() < 2 ||
      (!info[0]->IsInt32() && !info[1]->IsFunction())) {
    Nan::ThrowTypeError("you must specify a count and a callback");
    return;
  }

  unsigned int count = info[0]->Int32Value();
  Domain *domain = Domain::Unwrap(info.This());
  Nan::Callback *callback = new Nan::Callback(info[1].As<Function>());
  Nan::AsyncQueueWorker(new SetVcpusWorker(callback, domain->virHandle(), count));
  return;
}

NLV_WORKER_EXECUTE(Domain, SetVcpus)
{
  NLV_WORKER_ASSERT_DOMAIN();
  int result = virDomainSetVcpus(Handle(), count_);
  if (result == -1) {
    SET_ERROR_WITH_CONTEXT(virSaveLastError());
    return;
  }

  data_ = true;
}
#include <unistd.h>
NAN_METHOD(Domain::BlockCommit)
{
  #ifndef _HAVE_DOMAIN_BLOCKCOMMIT_API
  Nan::ThrowTypeError("blockcommit api not supported in this libvirt version");
  #else
  Nan::HandleScope scope;
  if (info.Length() < 5 || !info[0]->IsString() || !info[1]->IsString() || !info[2]->IsString()
      || !info[3]->IsNumber()) {
    Nan::ThrowTypeError("you must specify path, base, top, bandwidth, and optionally flags");
    return;
  }

  std::string path(*Nan::Utf8String(info[0]->ToString()));
  std::string base(*Nan::Utf8String(info[1]->ToString()));
  std::string top(*Nan::Utf8String(info[2]->ToString()));
  unsigned long bandwidth = info[3]->Int32Value();
  unsigned int flags = GetFlags(info[4]);

  virDomainPtr domain = Domain::Unwrap(info.This())->virHandle();
  Worker::RunAsync(info, [=] (Worker::SetOnFinishedHandler onFinished) {
    if (virDomainBlockCommit(domain, path.c_str(), base.c_str(), top.c_str(), bandwidth, flags) < 0) {
      return virSaveLastError();
    }
    return onFinished(PrimitiveReturnHandler(true));
  });
  #endif
}

NAN_METHOD(Domain::BlockJobInfo)
{
  #ifndef _HAVE_DOMAIN_BLOCKCOMMIT_API
  Nan::ThrowTypeError("blockcommit api not supported in this libvirt version");
  #else
  Nan::HandleScope scope;
  if (info.Length() < 1 || !info[0]->IsString()) {
    Nan::ThrowTypeError("you must specify path and optionally flags");
    return;
  }

  std::string path(*Nan::Utf8String(info[0]->ToString()));
  unsigned int flags = GetFlags(info[1]);

  virDomainPtr domain = Domain::Unwrap(info.This())->virHandle();
  Worker::RunAsync(info, [=] (Worker::SetOnFinishedHandler onFinished) {
    virDomainBlockJobInfo info;
    int ret = virDomainGetBlockJobInfo(domain, path.c_str(), &info, flags);
    if(ret == -1) {
      return virSaveLastError();
    }
    if(ret == 0) {
      return onFinished(PrimitiveReturnHandler(false));
    }

    return onFinished([=](Worker* worker) {
      Nan::HandleScope scope;
      v8::Local<Object> data = Nan::New<Object>();
      data->Set(Nan::New("type").ToLocalChecked(), Nan::New<Integer>((unsigned int)info.type));
      data->Set(Nan::New("bandwidth").ToLocalChecked(), Nan::New<Integer>((unsigned int)info.bandwidth));
      data->Set(Nan::New("cur").ToLocalChecked(), Nan::New<Integer>((unsigned int)info.cur));
      data->Set(Nan::New("end").ToLocalChecked(), Nan::New<Integer>((unsigned int)info.end));
      Local<Value> argv[] = { Nan::Null(), data };
      worker->Call(2, argv);
    });
  });
  #endif
}

NAN_METHOD(Domain::BlockJobAbort)
{
  #ifndef _HAVE_DOMAIN_BLOCKCOMMIT_API
  Nan::ThrowTypeError("blockcommit api not supported in this libvirt version");
  #else
  if (info.Length() < 1 || !info[0]->IsString()) {
    Nan::ThrowTypeError("you must specify path and optionally flags");
    return;
  }

  std::string path(*Nan::Utf8String(info[0]->ToString()));
  unsigned int flags = GetFlags(info[1]);

  virDomainPtr domain = Domain::Unwrap(info.This())->virHandle();

  Worker::RunAsync(info, [=] (Worker::SetOnFinishedHandler onFinished) {
    //abort_flags |= VIR_DOMAIN_BLOCK_JOB_ABORT_PIVOT;
    if (virDomainBlockJobAbort(domain, path.c_str(), flags) < 0) {
      return virSaveLastError();
    }
    return onFinished(PrimitiveReturnHandler(true));
  });
  #endif
}

NAN_METHOD(Domain::SendKeys)
{
  Nan::HandleScope scope;
  if (info.Length() < 2 ||
      (!info[0]->IsArray() && !info[1]->IsFunction())) {
    Nan::ThrowTypeError("you must specify an array of keycodes and a callback");
    return;
  }

  Local<Array> keyCodes = info[0].As<Array>();
  std::vector<unsigned int> keys;
  for (unsigned int i = 0; i < keyCodes->Length(); ++i) {
    keys.push_back((unsigned int) keyCodes->Get(Nan::New(i))->Int32Value());
  }


  Domain *domain = Domain::Unwrap(info.This());
  Nan::Callback *callback = new Nan::Callback(info[1].As<Function>());
  Nan::AsyncQueueWorker(new SendKeysWorker(callback, domain->virHandle(), keys));
  return;
}

NLV_WORKER_EXECUTE(Domain, SendKeys)
{
  NLV_WORKER_ASSERT_DOMAIN();
  int result =
    virDomainSendKey(Handle(), 0, 150, keys_.data(), keys_.size(), 0);
  if (result == -1) {
    SET_ERROR_WITH_CONTEXT(virSaveLastError());
    return;
  }

  data_ = true;
}

NAN_METHOD(Domain::Migrate)
{
  Nan::HandleScope scope;
  unsigned long flags = 0;
  unsigned long bandwidth = 0;

  if(info.Length() < 2 ||
      (!info[0]->IsObject() && !info[1]->IsFunction())) {
    Nan::ThrowTypeError("you must specify an object and a callback");
    return;
  }

  Local<Object> info_ = info[0]->ToObject();

  if(!info_->Has(Nan::New("dest_uri").ToLocalChecked())) {
    Nan::ThrowTypeError("You must have set property dest_uri in the object");
    return;
  }

  std::string dest_uri(*Nan::Utf8String(info_->Get(Nan::New("dest_uri").ToLocalChecked())));
  std::string dest_name(*Nan::Utf8String(info_->Get(Nan::New("dest_name").ToLocalChecked())));
  std::string migration_uri(*Nan::Utf8String(info_->Get(Nan::New("migrate_uri").ToLocalChecked())));

  if (info_->Has(Nan::New("flags").ToLocalChecked())) {
    Local<Value> flagsValue = info_->Get(Nan::New("flags").ToLocalChecked());
    if (flagsValue->IsArray()) {
      Local<Array> flags_ = flagsValue.As<Array>();
      unsigned int length = flags_->Length();
      for (unsigned int i = 0; i < length; i++)
        flags |= flags_->Get(Nan::New<Integer>(i))->Int32Value();
    } else if (flagsValue->IsNumber()) {
      flags = flagsValue->IntegerValue();
    }
  }

  if (info_->Has(Nan::New("bandwidth").ToLocalChecked())) {
    bandwidth = info_->Get(Nan::New("bandwidth").ToLocalChecked())->Int32Value();
  }

  Domain *domain = Domain::Unwrap(info.This());
  Nan::Callback *callback = new Nan::Callback(info[1].As<Function>());
  MigrateWorker *worker;

  if (info_->Has(Nan::New("dest_hypervisor").ToLocalChecked())) {
    Local<Object> hyp_obj = info_->Get(Nan::New("dest_hypervisor").ToLocalChecked())->ToObject();
    if(!Nan::New(Hypervisor::constructor_template)->HasInstance(hyp_obj)) {
      Nan::ThrowTypeError("You must specify a Hypervisor object instance");
      return;
    }

    Hypervisor *hypervisor = Hypervisor::Unwrap(hyp_obj);
    worker = new MigrateWorker(callback, domain->virHandle(), hypervisor->virHandle());
  } else {
    worker = new MigrateWorker(callback, domain->virHandle(), dest_uri);
  }

  worker->setBandwidth(bandwidth);
  worker->setFlags(flags);
  worker->setDestname(dest_name);
  worker->setMigUri(migration_uri);
  Nan::AsyncQueueWorker(worker);
  return;
}

NLV_WORKER_EXECUTE(Domain, Migrate)
{
  NLV_WORKER_ASSERT_DOMAIN();
  int ret = -1;
  ret = virDomainMigrateToURI2(Handle(), uri_.c_str(), migration_uri_.c_str(), NULL, flags_, destname_.c_str(), bandwidth_);
  if(ret == -1) {
    SET_ERROR_WITH_CONTEXT(virSaveLastError());
    return;
  }
}

NLV_WORKER_OKCALLBACK(Domain, Migrate)
{
  Nan::HandleScope scope;

  if (migrated_ != NULL) {
    Local<Object> domain_obj = Domain::NewInstance(migrated_);
    Local<Value> argv[] = { Nan::Null(), domain_obj };
    callback->Call(2, argv);
  } else {
    callback->Call(0, NULL);
  }
}

NAN_METHOD(Domain::PinVcpu) {
  Nan::HandleScope scope;

  if(info.Length() < 3 ||
      (!info[0]->IsInt32() && !info[1]->IsArray() && !info[2]->IsFunction())) {
    Nan::ThrowTypeError("you must specify an integer, an array and a callback");
    return;
  }

  std::vector<bool> usables;
  std::vector<int> vcpus;

  Local<Array> cpus = info[1].As<Array>();

  for(int i = 0; i < (int)cpus->Length(); i++) {
    if(!cpus->Get(Nan::New<Integer>(i))->IsObject()) {
      Nan::ThrowTypeError("The second argument must be an array of objects");
      return;
    }

    Local<Object> cpu = cpus->Get(Nan::New<Integer>(i))->ToObject();

    usables.push_back(cpu->Get(Nan::New("usable").ToLocalChecked())->IsTrue());
    vcpus.push_back(cpu->Get(Nan::New("cpu").ToLocalChecked())->Int32Value());
  }

  Domain *domain = Domain::Unwrap(info.This());
  Nan::Callback *callback = new Nan::Callback(info[2].As<Function>());
  Nan::AsyncQueueWorker(new PinVcpuWorker(callback, domain->virHandle(), info[0]->Int32Value(), usables, vcpus));
  return;
}

NLV_WORKER_EXECUTE(Domain, PinVcpu)
{
  virNodeInfo nodeinfo;
  int maxcpus;
  int cpumaplen;

  if(virNodeGetInfo(virDomainGetConnect(Handle()), &nodeinfo) == -1) {
    SET_ERROR_WITH_CONTEXT(virSaveLastError());
    return;
  }

  maxcpus = VIR_NODEINFO_MAXCPUS(nodeinfo);
  cpumaplen = VIR_CPU_MAPLEN(maxcpus);

  std::vector<unsigned char> cpumap(cpumaplen);

  for(int i = 0; i < (int)vcpus_.size(); i++) {
    if(i > maxcpus)
      break;

    if(usables_[i])
      VIR_USE_CPU(cpumap.data(), vcpus_[i]);
    else
      VIR_UNUSE_CPU(cpumap.data(), vcpus_[i]);
  }

  if(virDomainPinVcpu(Handle(), vcpu_, cpumap.data(), cpumaplen) == -1) {
    SET_ERROR_WITH_CONTEXT(virSaveLastError());
    return;
  }

  data_ = true;
}

NAN_METHOD(Domain::MemoryPeek)
{
  Nan::HandleScope scope;
  unsigned int flags = 0;
  unsigned long long start = 0;
  size_t size = 0;

  if(info.Length() != 4 ||
      (!info[0]->IsNumber() || !info[1]->IsNumber() || !info[2]->IsArray() || !info[3]->IsFunction())) {
    Nan::ThrowTypeError("you must specify two integer, an array and a callback");
    return;
  }

  start = info[0]->NumberValue();
  size = info[1]->NumberValue() * sizeof(char *);

  Local<Array> flags_ = Local<Array>::Cast(info[2]);
  unsigned int length = flags_->Length();
  for (unsigned int i = 0; i < length; i++)
    flags |= flags_->Get(Nan::New<Integer>(i))->Int32Value();

  Domain *domain = Domain::Unwrap(info.This());
  Nan::Callback *callback = new Nan::Callback(info[3].As<Function>());
  Nan::AsyncQueueWorker(new MemoryPeekWorker(callback, domain->virHandle(), start, size, flags));
  return;
}

NLV_WORKER_EXECUTE(Domain, MemoryPeek)
{
  if(virDomainMemoryPeek(Handle(), start_, size_ , buffer_.data(), flags_) == -1)
    SET_ERROR_WITH_CONTEXT(virSaveLastError());
}

NLV_WORKER_OKCALLBACK(Domain, MemoryPeek)
{
  Nan::HandleScope scope;
  Local<Object> buffer = Nan::NewBuffer(buffer_.data(), size_).ToLocalChecked();
  Local<Value> argv[] = { Nan::Null(), buffer };
  callback->Call(2, argv);
}

NAN_METHOD(Domain::BlockPeek)
{
  Nan::HandleScope scope;
  unsigned int flags = 0;
  unsigned long long start = 0;
  size_t size = 0;

  if(info.Length() != 5 ||
      (!info[0]->IsString() || !info[1]->IsNumber() || !info[2]->IsNumber() || !info[3]->IsArray() || !info[4]->IsFunction())) {
    Nan::ThrowTypeError("you must specify a string, two integer, an array and a callback");
    return;
  }

  std::string path(*Nan::Utf8String(info[0]->ToString()));
  start = info[1]->NumberValue();
  size = info[2]->NumberValue() * sizeof(char *);

  Local<Array> flags_ = Local<Array>::Cast(info[3]);
  unsigned int length = flags_->Length();
  for (unsigned int i = 0; i < length; i++)
    flags |= flags_->Get(Nan::New<Integer>(i))->Int32Value();

  Domain *domain = Domain::Unwrap(info.This());
  Nan::Callback *callback = new Nan::Callback(info[4].As<Function>());
  Nan::AsyncQueueWorker(new BlockPeekWorker(callback, domain->virHandle(), path, start, size, flags));
  return;
}

NLV_WORKER_EXECUTE(Domain, BlockPeek)
{
  if(virDomainBlockPeek(Handle(), path_.c_str(), start_, size_ , buffer_.data(), flags_) == -1)
    SET_ERROR_WITH_CONTEXT(virSaveLastError());
}

NLV_WORKER_OKCALLBACK(Domain, BlockPeek)
{
  Nan::HandleScope scope;
  Local<Object> buffer = Nan::NewBuffer(buffer_.data(), size_).ToLocalChecked();
  Local<Value> argv[] = { Nan::Null(), buffer };
  callback->Call(2, argv);
}

NLV_WORKER_METHOD_NO_ARGS(Domain, HasCurrentSnapshot)
NLV_WORKER_EXECUTE(Domain, HasCurrentSnapshot)
{
  unsigned int flags = 0;
  int ret = -1;
  ret = virDomainHasCurrentSnapshot(Handle(), flags);

  if (ret == -1) {
    SET_ERROR_WITH_CONTEXT(virSaveLastError());
    return;
  }

  data_ = ret == 1 ? true : false;
}

NAN_METHOD(Domain::RevertToSnapshot) {
  Nan::HandleScope scope;

  if(info.Length() != 2 ||
      (!info[0]->IsString() || !info[1]->IsFunction())) {
    Nan::ThrowTypeError("you must specify a string and a callback");
    return;
  }

  Domain *domain = Domain::Unwrap(info.This());
  Nan::Callback *callback = new Nan::Callback(info[1].As<Function>());
  Nan::AsyncQueueWorker(new RevertToSnapshotWorker(callback, domain->virHandle(), *Nan::Utf8String(info[0]->ToString())));
  return;
}

NLV_WORKER_EXECUTE(Domain, RevertToSnapshot)
{
  virDomainSnapshotPtr snapshot = NULL;
  unsigned int flags = 0;
  int ret = -1;

  snapshot = virDomainSnapshotLookupByName(Handle(), name_.c_str(), flags);
  if(snapshot == NULL) {
    SET_ERROR_WITH_CONTEXT(virSaveLastError());
    return;
  }

  ret = virDomainRevertToSnapshot(snapshot, flags);
  if(ret == -1) {
    SET_ERROR_WITH_CONTEXT(virSaveLastError());
    return;
  }

  virDomainSnapshotFree(snapshot);
}


NAN_METHOD(Domain::TakeSnapshot) {
  Nan::HandleScope scope;
  unsigned int flags = 0;

  if(info.Length() != 3 ||
      (!info[0]->IsString() || !info[1]->IsArray() || !info[2]->IsFunction())) {
    Nan::ThrowTypeError("you must specify a string, an array and a callback");
    return;
  }

  Local<Array> flags_ = Local<Array>::Cast(info[1]);
  unsigned int length = flags_->Length();
  for (unsigned int i = 0; i < length; i++)
    flags |= flags_->Get(Nan::New<Integer>(i))->Int32Value();

  Domain *domain = Domain::Unwrap(info.This());
  Nan::Callback *callback = new Nan::Callback(info[2].As<Function>());
  Nan::AsyncQueueWorker(new TakeSnapshotWorker(callback, domain->virHandle(), *Nan::Utf8String(info[0]->ToString()), flags));
  return;
}

NLV_WORKER_EXECUTE(Domain, TakeSnapshot)
{
  virDomainSnapshotPtr snapshot = NULL;
  snapshot = virDomainSnapshotCreateXML(Handle(), xml_.c_str(), flags_);
  if(snapshot == NULL) {
    SET_ERROR_WITH_CONTEXT(virSaveLastError());
    return;
  }

  virDomainSnapshotFree(snapshot);
}

NAN_METHOD(Domain::DeleteSnapshot) {
  Nan::HandleScope scope;

  if(info.Length() < 2 ||
      (!info[0]->IsString())) {
    Nan::ThrowTypeError("you must specify a string and optional flags");
    return;
  }

  std::string name = *Nan::Utf8String(info[0]->ToString());
  unsigned int flags = GetFlags(info[1]);

  auto domain = Domain::Unwrap(info.This())->virHandle();
  //Nan::Callback *callback = new Nan::Callback(info[1].As<Function>());
  Worker::RunAsync(info, [=](Worker::SetOnFinishedHandler onFinished) {
    auto snapshot = virDomainSnapshotLookupByName(domain, name.c_str(), 0);
    if(snapshot == NULL) {
      return virSaveLastError();
    }

    if(virDomainSnapshotDelete(snapshot, flags) == -1) {
      virDomainSnapshotFree(snapshot); // TODO: add some auto cleanup scope
      return virSaveLastError();
    }
    virDomainSnapshotFree(snapshot);

    return onFinished(PrimitiveReturnHandler(true));
  });
}

NAN_METHOD(Domain::LookupSnapshotByName) {
  Nan::HandleScope scope;

  if(info.Length() != 2 ||
      (!info[0]->IsString() ||!info[1]->IsFunction()) ) {
    Nan::ThrowTypeError("you must specify a string and a callback");
    return;
  }

  Domain *domain = Domain::Unwrap(info.This());
  Nan::Callback *callback = new Nan::Callback(info[1].As<Function>());
  Nan::AsyncQueueWorker(new LookupSnapshotByNameWorker(callback, domain->virHandle(), *Nan::Utf8String(info[0]->ToString())));
  return;
}

NLV_WORKER_EXECUTE(Domain, LookupSnapshotByName)
{
  unsigned int flags = 0;
  virDomainSnapshotPtr snapshot = NULL;
  char* xml = NULL;

  snapshot = virDomainSnapshotLookupByName(Handle(), name_.c_str(), flags);
  if(snapshot == NULL) {
    SET_ERROR_WITH_CONTEXT(virSaveLastError());
    return;
  }

  xml = virDomainSnapshotGetXMLDesc(snapshot, flags);
  virDomainSnapshotFree(snapshot);
  if(xml == NULL) {
    SET_ERROR_WITH_CONTEXT(virSaveLastError());
    return;
  }

  data_ = xml;
  delete[] xml;
}

NLV_WORKER_METHOD_NO_ARGS(Domain, GetCurrentSnapshot)
NLV_WORKER_EXECUTE(Domain, GetCurrentSnapshot)
{
  unsigned int flags = 0;
  virDomainSnapshotPtr snapshot = NULL;
  char* xml = NULL;

  snapshot = virDomainSnapshotCurrent(Handle(), flags);
  if(snapshot == NULL) {
    SET_ERROR_WITH_CONTEXT(virSaveLastError());
    return;
  }

  xml = virDomainSnapshotGetXMLDesc(snapshot, flags);
  virDomainSnapshotFree(snapshot);
  if(xml == NULL) {
    SET_ERROR_WITH_CONTEXT(virSaveLastError());
    return;
  }

  data_ = xml;
  delete[] xml;
}

NAN_METHOD(Domain::SetMigrationMaxDowntime) {
  Nan::HandleScope scope;
  // long long downtime = 0;
  unsigned int flags = 0;

  if(info.Length() != 2 || !info[0]->IsInt32() || !info[1]->IsFunction()) {
    Nan::ThrowTypeError("you must specify an integer and a callback");
    return;
  }

  Domain *domain = Domain::Unwrap(info.This());
  Nan::Callback *callback = new Nan::Callback(info[1].As<Function>());
  Nan::AsyncQueueWorker(new SetMigrationMaxDowntimeWorker(callback, domain->virHandle(), info[0]->Int32Value(), flags));
  return;
}

NLV_WORKER_EXECUTE(Domain, SetMigrationMaxDowntime)
{
  if(virDomainMigrateSetMaxDowntime(Handle(), downtime_, flags_) == -1) {
    SET_ERROR_WITH_CONTEXT(virSaveLastError());
    return;
  }

  data_ = true;
}

NLV_WORKER_METHOD_NO_ARGS(Domain, GetSnapshots)

NLV_WORKER_EXECUTE(Domain, GetSnapshots)
{
  unsigned int flags = 0;
  int num_snapshots = 0;

  num_snapshots = virDomainSnapshotNum(Handle(), flags);
  if(num_snapshots == -1) {
    SET_ERROR_WITH_CONTEXT(virSaveLastError());
    return;
  }

  std::vector<char*> names(num_snapshots);
  if(virDomainSnapshotListNames(Handle(), names.data(), num_snapshots, flags) == -1) {
    SET_ERROR_WITH_CONTEXT(virSaveLastError());
    return;
  }

  for (std::vector<char*>::iterator it = names.begin() ; it != names.end(); ++it) {
    virDomainSnapshotPtr snapshot = virDomainSnapshotLookupByName(Handle(), *it, flags);
    char *xml = virDomainSnapshotGetXMLDesc(snapshot, flags);
    xmls_.push_back(xml);
    virDomainSnapshotFree(snapshot);
    delete[] xml;
  }
}

NLV_WORKER_OKCALLBACK(Domain, GetSnapshots)
{
  Nan::HandleScope scope;
  Local<Array> snapshots = Nan::New<Array>(xmls_.size());
  int i = 0;

  for (std::vector<std::string>::iterator it = xmls_.begin() ; it != xmls_.end(); ++it)
    snapshots->Set(Nan::New<Integer>(i++), Nan::New<String>(it->c_str()).ToLocalChecked());

  Local<Value> argv[] = { Nan::Null(), snapshots };
  callback->Call(2, argv);
}


NAN_METHOD(Domain::RegisterEvent)
{
  Nan::HandleScope scope;
  if (info.Length() == 0 || !info[0]->IsObject() || !info[1]->IsFunction()) {
    Nan::ThrowTypeError("You must specify a object and a callback as argument");
    return;
  }

  Local<Object> arg_obj = info[0]->ToObject();
  if (!arg_obj->Has(Nan::New("evtype").ToLocalChecked()) ||
      !arg_obj->Get(Nan::New("evtype").ToLocalChecked())->IsInt32()) {
    Nan::ThrowTypeError("You must specify an valid event type");
    return;
  }

  Domain *domain = Domain::Unwrap(info.This());
  int eventId = arg_obj->Get(Nan::New("evtype").ToLocalChecked())->Int32Value();
  Nan::Callback *callback = new Nan::Callback(info[1].As<Function>());
  Nan::AsyncQueueWorker(new RegisterEventWorker(callback, domain->virHandle(), domain, eventId));
  return;
}

NLV_WORKER_EXECUTE(Domain, RegisterEvent)
{
  virConnectDomainEventGenericCallback callback = NULL;
  switch (eventId_) {
    case VIR_DOMAIN_EVENT_ID_LIFECYCLE:
      callback = VIR_DOMAIN_EVENT_CALLBACK(Domain::domain_event_lifecycle_callback);
      break;
    case VIR_DOMAIN_EVENT_ID_REBOOT:
      callback = VIR_DOMAIN_EVENT_CALLBACK(Domain::domain_event_generic_callback);
      break;
    case VIR_DOMAIN_EVENT_ID_RTC_CHANGE:
      callback = VIR_DOMAIN_EVENT_CALLBACK(Domain::domain_event_rtcchange_callback);
      break;
    case VIR_DOMAIN_EVENT_ID_WATCHDOG:
      callback = VIR_DOMAIN_EVENT_CALLBACK(Domain::domain_event_watchdog_callback);
      break;
    case VIR_DOMAIN_EVENT_ID_IO_ERROR:
      callback = VIR_DOMAIN_EVENT_CALLBACK(Domain::domain_event_io_error_callback);
      break;
    case VIR_DOMAIN_EVENT_ID_IO_ERROR_REASON:
      callback = VIR_DOMAIN_EVENT_CALLBACK(Domain::domain_event_io_error_reason_callback);
      break;
    case VIR_DOMAIN_EVENT_ID_GRAPHICS:
      callback = VIR_DOMAIN_EVENT_CALLBACK(Domain::domain_event_graphics_callback);
      break;
#if LIBVIR_CHECK_VERSION(1,2,11)
    case VIR_DOMAIN_EVENT_ID_AGENT_LIFECYCLE:
      callback = VIR_DOMAIN_EVENT_CALLBACK(Domain::domain_event_agent_lifecycle_callback);
      break;
#endif
    default:
      callback = VIR_DOMAIN_EVENT_CALLBACK(Domain::domain_event_generic_callback);
      break;
  }

  virDomainPtr domain = Handle();
  int result = virConnectDomainEventRegisterAny(
    virDomainGetConnect(domain), domain, eventId_, callback, domain_, domain_event_free
  );

  if (result == -1) {
    SET_ERROR_WITH_CONTEXT(virSaveLastError());
    return;
  }

  // @todo: this should be added to a vector so we can free it if the
  //        object is deleted

  data_ = result;
}

NAN_METHOD(Domain::UnregisterEvent)
{
  Nan::HandleScope scope;

  if (info.Length() != 2 || !info[0]->IsInt32() || !info[1]->IsFunction()) {
    Nan::ThrowTypeError("You must specify a callback identifier and a callback");
    return;
  }

  Domain *domain = Domain::Unwrap(info.This());
  Nan::Callback *callback = new Nan::Callback(info[1].As<Function>());
  Nan::AsyncQueueWorker(new UnregisterEventWorker(callback, domain->virHandle(), info[0]->Int32Value()));
  return;
}

NLV_WORKER_EXECUTE(Domain, UnregisterEvent)
{
  if (virConnectDomainEventDeregisterAny(virDomainGetConnect(Handle()), callbackId_) == -1) {
    SET_ERROR_WITH_CONTEXT(virSaveLastError());
    return;
  }

  data_ = true;
}

/////////////////////////////////////////////////////
// UNFINISHED - STILL SYNCHRONOUS
/////////////////////////////////////////////////////

NAN_METHOD(Domain::SetSchedulerParameters)
{
  Nan::HandleScope scope;

  virSchedParameterPtr params = NULL;
  int nparams = 0;
  char *type = NULL;
  int ret = -1;

  if (info.Length() == 0 || !info[0]->IsObject()) {
    Nan::ThrowTypeError("You must specify an object as argument to invoke this function");
    return;
  }

  Local<Object> newparams = info[0]->ToObject();
  Domain *domain = Domain::Unwrap(info.This());

  type = virDomainGetSchedulerType(domain->virHandle(), &nparams);
  if (type == NULL) {
    ThrowLastVirError();
    return info.GetReturnValue().Set(Nan::False());
  }
  free(type);

  params = (virSchedParameterPtr) malloc(sizeof(*params) * nparams);
  if (params == NULL) {
    Nan::ThrowError("unable to allocate memory");
    return info.GetReturnValue().Set(Nan::False());
  }

  memset(params, 0, sizeof(*params) * nparams);

  ret = virDomainGetSchedulerParameters(domain->virHandle(), params, &nparams);
  if(ret == -1) {
    ThrowLastVirError();
    free(params);
    return info.GetReturnValue().Set(Nan::False());
  }

  for (int i = 0; i < nparams; i++) {
    Local<String> field = Nan::New(params[i].field).ToLocalChecked();
    if (!newparams->Has(field)) {
      continue;
    }

    Local<Value> value = newparams->Get(field);

    switch (params[i].type) {
    case VIR_DOMAIN_SCHED_FIELD_INT:
      params[i].value.i = value->Int32Value();
      break;
    case VIR_DOMAIN_SCHED_FIELD_UINT:
      params[i].value.ui = value->Uint32Value();
      break;
    case VIR_DOMAIN_SCHED_FIELD_LLONG:
      params[i].value.l = value->NumberValue();
      break;
    case VIR_DOMAIN_SCHED_FIELD_ULLONG:
      params[i].value.ul = value->NumberValue();
      break;
    case VIR_DOMAIN_SCHED_FIELD_DOUBLE:
      params[i].value.d = value->NumberValue();
      break;
    case VIR_DOMAIN_SCHED_FIELD_BOOLEAN:
      params[i].value.b = value->Uint32Value();
      break;
    }
  }

  ret = virDomainSetSchedulerParameters(domain->virHandle(), params, nparams);
  if (ret == -1) {
    ThrowLastVirError();
    free(params);
    return info.GetReturnValue().Set(Nan::False());
  }
  free(params);

  return info.GetReturnValue().Set(Nan::True());
}

void Domain::domain_event_free(void *opaque)
{
  fprintf(stderr, "NOT IMPLEMENTED!");
}

int Domain::domain_event_lifecycle_callback(virConnectPtr conn, virDomainPtr dom, int event,
                                            int detail, void *opaque)
{
  Nan::HandleScope scope;
  Local<Object> data = Nan::New<Object>();
  data->Set(Nan::New("evtype").ToLocalChecked(), Nan::New<Integer>(event));
  data->Set(Nan::New("detail").ToLocalChecked(), Nan::New<Integer>(detail));

  Local<Value> argv[2] = {
    Nan::New("lifecycleEvent").ToLocalChecked(),
    data
  };
  Nan::ObjectWrap *domain = static_cast<Nan::ObjectWrap*>(opaque);
  Nan::MakeCallback(domain->handle(), "emit", 2, argv);
  return 0;
}

int Domain::domain_event_generic_callback(virConnectPtr conn, virDomainPtr dom, void *opaque)
{
  fprintf(stderr, "GENERIC CALLBACK CALLED");
  return 0;
}

int Domain::domain_event_rtcchange_callback(virConnectPtr conn, virDomainPtr dom,
                                            long long utcoffset, void *opaque)
{
  Nan::HandleScope scope;
  Local<Object> data = Nan::New<Object>();
  data->Set(Nan::New("utcOffset").ToLocalChecked(), Nan::New<Number>(utcoffset));

  Local<Value> argv[2] = {
    Nan::New("rtcChange").ToLocalChecked(),
    data
  };

  Nan::ObjectWrap *domain = static_cast<Nan::ObjectWrap*>(opaque);
  Nan::MakeCallback(domain->handle(), "emit", 2, argv);
  return 0;
}

int Domain::domain_event_watchdog_callback(virConnectPtr conn, virDomainPtr dom, int action,
                                           void *opaque)
{
  Nan::HandleScope scope;
  Local<Object> data = Nan::New<Object>();
  data->Set(Nan::New("action").ToLocalChecked(), Nan::New<Integer>(action));

  Local<Value> argv[2] = {
    Nan::New("watchdogEvent").ToLocalChecked(),
    data
  };

  Nan::ObjectWrap *domain = static_cast<Nan::ObjectWrap*>(opaque);
  Nan::MakeCallback(domain->handle(), "emit", 2, argv);
  return 0;
}

int Domain::domain_event_io_error_callback(virConnectPtr conn, virDomainPtr dom,
                                           const char *src_path, const char *dev_alias,
                                           int action, void *opaque)
{
  Nan::HandleScope scope;
  Local<Object> data = Nan::New<Object>();
  data->Set(Nan::New("sourcePath").ToLocalChecked(), Nan::New(src_path).ToLocalChecked());
  data->Set(Nan::New("devAlias").ToLocalChecked(), Nan::New(dev_alias).ToLocalChecked());
  data->Set(Nan::New("action").ToLocalChecked(), Nan::New<Integer>(action));

  data->Set(Nan::New("action").ToLocalChecked(), Nan::New<Integer>(action));

  Local<Value> argv[2] = {
    Nan::New("ioError").ToLocalChecked(),
    data
  };

  Nan::ObjectWrap *domain = static_cast<Nan::ObjectWrap*>(opaque);
  Nan::MakeCallback(domain->handle(), "emit", 2, argv);
  return 0;
}

int Domain::domain_event_io_error_reason_callback(virConnectPtr conn, virDomainPtr dom,
                                                  const char *src_path, const char *dev_alias,
                                                  int action, const char *reason, void *opaque)
{
  Nan::HandleScope scope;
  Local<Object> data = Nan::New<Object>();
  data->Set(Nan::New("sourcePath").ToLocalChecked(), Nan::New(src_path).ToLocalChecked());
  data->Set(Nan::New("devAlias").ToLocalChecked(), Nan::New(dev_alias).ToLocalChecked());
  data->Set(Nan::New("reason").ToLocalChecked(), Nan::New(reason).ToLocalChecked());
  data->Set(Nan::New("action").ToLocalChecked(), Nan::New<Integer>(action));

  Local<Value> argv[2] = {
    Nan::New("ioErrorReason").ToLocalChecked(),
    data
  };

  Nan::ObjectWrap *domain = static_cast<Nan::ObjectWrap*>(opaque);
  Nan::MakeCallback(domain->handle(), "emit", 2, argv);
  return 0;
}

int Domain::domain_event_graphics_callback(virConnectPtr conn, virDomainPtr dom, int phase,
                                           virDomainEventGraphicsAddressPtr local,
                                           virDomainEventGraphicsAddressPtr remote,
                                           const char *auth_scheme,
                                           virDomainEventGraphicsSubjectPtr subject,
                                           void *opaque)
{
  Nan::HandleScope scope;
  Local<String> lfamily;
  switch (local->family) {
  case VIR_DOMAIN_EVENT_GRAPHICS_ADDRESS_IPV4:
    lfamily = Nan::New("ipv4").ToLocalChecked();
    break;
  case VIR_DOMAIN_EVENT_GRAPHICS_ADDRESS_IPV6:
    lfamily = Nan::New("ipv6").ToLocalChecked();
    break;
  };

  Local<String> rfamily;
  switch(remote->family) {
  case VIR_DOMAIN_EVENT_GRAPHICS_ADDRESS_IPV4:
    rfamily = Nan::New("ipv4").ToLocalChecked();
    break;
  case VIR_DOMAIN_EVENT_GRAPHICS_ADDRESS_IPV6:
    rfamily = Nan::New("ipv6").ToLocalChecked();
    break;
  };

  Local<Object> local_ = Nan::New<Object>();
  local_->Set(Nan::New("family").ToLocalChecked(), lfamily);
  local_->Set(Nan::New("node").ToLocalChecked(), Nan::New(local->node).ToLocalChecked());
  local_->Set(Nan::New("service").ToLocalChecked(), Nan::New(local->service).ToLocalChecked());

  Local<Object> remote_ = Nan::New<Object>();
  remote_->Set(Nan::New("family").ToLocalChecked(), rfamily);
  remote_->Set(Nan::New("node").ToLocalChecked(), Nan::New(remote->node).ToLocalChecked());
  remote_->Set(Nan::New("service").ToLocalChecked(), Nan::New(remote->service).ToLocalChecked());

  int nidentity = subject->nidentity;
  Local<Array> subject_ = Nan::New<Array>(nidentity);
  for (int i = 0; i < nidentity; i++) {
    Local<Object> identity = Nan::New<Object>();
    identity->Set(Nan::New("type").ToLocalChecked(), Nan::New(subject->identities[i].type).ToLocalChecked());
    identity->Set(Nan::New("name").ToLocalChecked(), Nan::New(subject->identities[i].name).ToLocalChecked());
    subject_->Set(Nan::New<Integer>(i), identity);
  }

  Local<Object> data = Nan::New<Object>();
  data->Set(Nan::New("local").ToLocalChecked(), local_);
  data->Set(Nan::New("remote").ToLocalChecked(), remote_);
  data->Set(Nan::New("subject").ToLocalChecked(), subject_);
  data->Set(Nan::New("phase").ToLocalChecked(), Nan::New<Integer>(phase));
  data->Set(Nan::New("auth_scheme").ToLocalChecked(), Nan::New(auth_scheme).ToLocalChecked());

  Local<Value> argv[2] = {
    Nan::New("graphicsEvent").ToLocalChecked(),
    data
  };

  Nan::ObjectWrap *domain = static_cast<Nan::ObjectWrap*>(opaque);
  Nan::MakeCallback(domain->handle(), "emit", 2, argv);
  return 0;
}

#if LIBVIR_CHECK_VERSION(1,2,11)
int Domain::domain_event_agent_lifecycle_callback(virConnectPtr conn,
                                                  virDomainPtr dom,
                                                  int state,
                                                  int reason,
                                                  void * opaque)
{
  Nan::HandleScope scope;
  Local<Object> data = Nan::New<Object>();
  data->Set(Nan::New("state").ToLocalChecked(), Nan::New<Integer>(state));
  data->Set(Nan::New("reason").ToLocalChecked(), Nan::New<Integer>(reason));

  Local<Value> argv[2] = {
    Nan::New("agentLifecycleEvent").ToLocalChecked(),
    data
  };

  Nan::ObjectWrap *domain = static_cast<Nan::ObjectWrap*>(opaque);
  Nan::MakeCallback(domain->handle(), "emit", 2, argv);
  return 0;
}
#endif

} //namespace NLV
