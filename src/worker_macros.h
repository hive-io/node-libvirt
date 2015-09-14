#ifndef WORKER_MACROS_H
#define WORKER_MACROS_H

// ASSERTIONS
#define NLV_WORKER_ASSERT_HANDLE(Type) \
  if (Handle() == NULL) { \
    SetErrorMessage("invalid "#Type); \
    return; \
  }

#define NLV_WORKER_ASSERT_CONNECTION() \
  NLV_WORKER_ASSERT_HANDLE("connection")

#define NLV_WORKER_ASSERT_INTERFACE() \
  NLV_WORKER_ASSERT_HANDLE("interface")

#define NLV_WORKER_ASSERT_NETWORK() \
  NLV_WORKER_ASSERT_HANDLE("network")

#define NLV_WORKER_ASSERT_NODEDEVICE() \
  NLV_WORKER_ASSERT_HANDLE("node device")

#define NLV_WORKER_ASSERT_SECRET() \
  NLV_WORKER_ASSERT_HANDLE("secret")

#define NLV_WORKER_ASSERT_STORAGEPOOL() \
  NLV_WORKER_ASSERT_HANDLE("storage pool")

#define NLV_WORKER_ASSERT_STORAGEVOLUME() \
  NLV_WORKER_ASSERT_HANDLE("storage volume")

#define NLV_WORKER_ASSERT_DOMAIN() \
  NLV_WORKER_ASSERT_HANDLE("domain")

#define NLV_WORKER_ASSERT_PARENT_HANDLE() \
  if (parent_->handle_ == NULL) { \
    SetErrorMessage("invalid parent"); \
    return; \
  }

// METHOD HELPERS
#define NLV_WORKER_METHOD_NO_ARGS(Class, Method) \
  NAN_METHOD(Class::Method) {  \
    NanScope(); \
    if (args.Length() == 1 && !args[0]->IsFunction()) { \
      NanThrowTypeError("You must specify a function as first argument"); \
      NanReturnUndefined(); \
    } \
    NanCallback *callback = new NanCallback(args[0].As<Function>());  \
    Class *object = ObjectWrap::Unwrap<Class>(args.This()); \
    NanAsyncQueueWorker(new Method##Worker(callback, object->handle_));  \
    NanReturnUndefined(); \
  }

#define NLV_WORKER_METHOD_DEFINE(Class) \
  NAN_METHOD(Class::Define) { \
    NanScope(); \
    if (args.Length() < 2 ||  \
      (!args[0]->IsString() && !args[1]->IsFunction())) { \
      NanThrowTypeError("You must specify a string and callback");  \
      NanReturnUndefined(); \
    } \
    if (!NanHasInstance(Hypervisor::constructor_template, args.This())) { \
      NanThrowTypeError("You must specify a Hypervisor instance");  \
      NanReturnUndefined(); \
    } \
    Hypervisor *hv = ObjectWrap::Unwrap<Hypervisor>(args.This()); \
    std::string xmlData(*NanUtf8String(args[0]->ToString())); \
    NanCallback *callback = new NanCallback(args[1].As<Function>());  \
    NanAsyncQueueWorker(new DefineWorker(callback, hv, xmlData));  \
    NanReturnUndefined(); \
  }

#define NLV_WORKER_METHOD_CREATE(Class) \
  NAN_METHOD(Class::Create) { \
    NanScope(); \
    if (args.Length() < 2 ||  \
        (!args[0]->IsString() && !args[1]->IsFunction())) { \
      NanThrowTypeError("You must specify a string and callback");  \
      NanReturnUndefined(); \
    } \
    if (!NanHasInstance(Hypervisor::constructor_template, args.This())) { \
      NanThrowTypeError("You must specify a Hypervisor instance");  \
      NanReturnUndefined(); \
    } \
    Hypervisor *hv = ObjectWrap::Unwrap<Hypervisor>(args.This()); \
    std::string xmlData(*NanUtf8String(args[0]->ToString())); \
    NanCallback *callback = new NanCallback(args[1].As<Function>());  \
    NanAsyncQueueWorker(new CreateWorker(callback, hv, xmlData));  \
    NanReturnUndefined(); \
  }

// EXECUTE HELPERS
#define NLV_WORKER_EXECUTE(Class, Method) void Class::Method##Worker::Execute()
#define NLV_WORKER_OKCALLBACK(Class, Method) void Class::Method##Worker::HandleOKCallback()

#define NLV_BOOL_RETURN_EXECUTE_IMPL(Class, Method, Accessor)  \
  NLV_WORKER_EXECUTE(Class, Method) {  \
    NLV_WORKER_ASSERT_CONNECTION(); \
    int result = Accessor(Handle());  \
    if (result == -1) { \
      SetVirError(virGetLastError()); \
      return; \
    } \
    data_ = static_cast<bool>(result);  \
  }

#endif  // WORKER_MACROS_H