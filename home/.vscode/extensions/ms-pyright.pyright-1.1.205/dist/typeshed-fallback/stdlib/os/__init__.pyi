import sys
from _typeshed import (
    FileDescriptorLike,
    OpenBinaryMode,
    OpenBinaryModeReading,
    OpenBinaryModeUpdating,
    OpenBinaryModeWriting,
    OpenTextMode,
    Self,
    StrOrBytesPath,
    StrPath,
    structseq,
)
from builtins import OSError
from contextlib import AbstractContextManager
from io import BufferedRandom, BufferedReader, BufferedWriter, FileIO, TextIOWrapper as _TextIOWrapper
from subprocess import Popen
from typing import (
    IO,
    Any,
    AnyStr,
    BinaryIO,
    Callable,
    Generic,
    Iterable,
    Iterator,
    Mapping,
    MutableMapping,
    NoReturn,
    Protocol,
    Sequence,
    TypeVar,
    Union,
    overload,
    runtime_checkable,
)
from typing_extensions import Literal, final

from . import path as _path

if sys.version_info >= (3, 9):
    from types import GenericAlias

# This unnecessary alias is to work around various errors
path = _path

_T = TypeVar("_T")
_AnyStr_co = TypeVar("_AnyStr_co", str, bytes, covariant=True)

# ----- os variables -----

error = OSError

supports_bytes_environ: bool

supports_dir_fd: set[Callable[..., Any]]
supports_fd: set[Callable[..., Any]]
supports_effective_ids: set[Callable[..., Any]]
supports_follow_symlinks: set[Callable[..., Any]]

if sys.platform != "win32":
    # Unix only
    PRIO_PROCESS: int
    PRIO_PGRP: int
    PRIO_USER: int

    F_LOCK: int
    F_TLOCK: int
    F_ULOCK: int
    F_TEST: int

    if sys.platform != "darwin":
        POSIX_FADV_NORMAL: int
        POSIX_FADV_SEQUENTIAL: int
        POSIX_FADV_RANDOM: int
        POSIX_FADV_NOREUSE: int
        POSIX_FADV_WILLNEED: int
        POSIX_FADV_DONTNEED: int

    SF_NODISKIO: int
    SF_MNOWAIT: int
    SF_SYNC: int

    if sys.platform == "linux":
        XATTR_SIZE_MAX: int
        XATTR_CREATE: int
        XATTR_REPLACE: int

    P_PID: int
    P_PGID: int
    P_ALL: int

    if sys.platform == "linux" and sys.version_info >= (3, 9):
        P_PIDFD: int

    WEXITED: int
    WSTOPPED: int
    WNOWAIT: int

    CLD_EXITED: int
    CLD_DUMPED: int
    CLD_TRAPPED: int
    CLD_CONTINUED: int

    if sys.version_info >= (3, 9):
        CLD_KILLED: int
        CLD_STOPPED: int

    # TODO: SCHED_RESET_ON_FORK not available on darwin?
    # TODO: SCHED_BATCH and SCHED_IDLE are linux only?
    SCHED_OTHER: int  # some flavors of Unix
    SCHED_BATCH: int  # some flavors of Unix
    SCHED_IDLE: int  # some flavors of Unix
    SCHED_SPORADIC: int  # some flavors of Unix
    SCHED_FIFO: int  # some flavors of Unix
    SCHED_RR: int  # some flavors of Unix
    SCHED_RESET_ON_FORK: int  # some flavors of Unix

if sys.platform != "win32":
    RTLD_LAZY: int
    RTLD_NOW: int
    RTLD_GLOBAL: int
    RTLD_LOCAL: int
    RTLD_NODELETE: int
    RTLD_NOLOAD: int

if sys.platform == "linux":
    RTLD_DEEPBIND: int
    GRND_NONBLOCK: int
    GRND_RANDOM: int

SEEK_SET: int
SEEK_CUR: int
SEEK_END: int
if sys.platform != "win32":
    SEEK_DATA: int  # some flavors of Unix
    SEEK_HOLE: int  # some flavors of Unix

O_RDONLY: int
O_WRONLY: int
O_RDWR: int
O_APPEND: int
O_CREAT: int
O_EXCL: int
O_TRUNC: int
# We don't use sys.platform for O_* flags to denote platform-dependent APIs because some codes,
# including tests for mypy, use a more finer way than sys.platform before using these APIs
# See https://github.com/python/typeshed/pull/2286 for discussions
O_DSYNC: int  # Unix only
O_RSYNC: int  # Unix only
O_SYNC: int  # Unix only
O_NDELAY: int  # Unix only
O_NONBLOCK: int  # Unix only
O_NOCTTY: int  # Unix only
O_CLOEXEC: int  # Unix only
O_SHLOCK: int  # Unix only
O_EXLOCK: int  # Unix only
O_BINARY: int  # Windows only
O_NOINHERIT: int  # Windows only
O_SHORT_LIVED: int  # Windows only
O_TEMPORARY: int  # Windows only
O_RANDOM: int  # Windows only
O_SEQUENTIAL: int  # Windows only
O_TEXT: int  # Windows only
O_ASYNC: int  # Gnu extension if in C library
O_DIRECT: int  # Gnu extension if in C library
O_DIRECTORY: int  # Gnu extension if in C library
O_NOFOLLOW: int  # Gnu extension if in C library
O_NOATIME: int  # Gnu extension if in C library
O_PATH: int  # Gnu extension if in C library
O_TMPFILE: int  # Gnu extension if in C library
O_LARGEFILE: int  # Gnu extension if in C library
O_ACCMODE: int  # TODO: when does this exist?

if sys.platform != "win32" and sys.platform != "darwin":
    # posix, but apparently missing on macos
    ST_APPEND: int
    ST_MANDLOCK: int
    ST_NOATIME: int
    ST_NODEV: int
    ST_NODIRATIME: int
    ST_NOEXEC: int
    ST_RELATIME: int
    ST_SYNCHRONOUS: int
    ST_WRITE: int

if sys.platform != "win32":
    NGROUPS_MAX: int
    ST_NOSUID: int
    ST_RDONLY: int

curdir: str
pardir: str
sep: str
if sys.platform == "win32":
    altsep: str
else:
    altsep: str | None
extsep: str
pathsep: str
defpath: str
linesep: str
devnull: str
name: str

F_OK: int
R_OK: int
W_OK: int
X_OK: int

_EnvironCodeFunc = Callable[[AnyStr], AnyStr]

class _Environ(MutableMapping[AnyStr, AnyStr], Generic[AnyStr]):
    encodekey: _EnvironCodeFunc[AnyStr]
    decodekey: _EnvironCodeFunc[AnyStr]
    encodevalue: _EnvironCodeFunc[AnyStr]
    decodevalue: _EnvironCodeFunc[AnyStr]
    if sys.version_info >= (3, 9):
        def __init__(
            self,
            data: MutableMapping[AnyStr, AnyStr],
            encodekey: _EnvironCodeFunc[AnyStr],
            decodekey: _EnvironCodeFunc[AnyStr],
            encodevalue: _EnvironCodeFunc[AnyStr],
            decodevalue: _EnvironCodeFunc[AnyStr],
        ) -> None: ...
    else:
        putenv: Callable[[AnyStr, AnyStr], None]
        unsetenv: Callable[[AnyStr, AnyStr], None]
        def __init__(
            self,
            data: MutableMapping[AnyStr, AnyStr],
            encodekey: _EnvironCodeFunc[AnyStr],
            decodekey: _EnvironCodeFunc[AnyStr],
            encodevalue: _EnvironCodeFunc[AnyStr],
            decodevalue: _EnvironCodeFunc[AnyStr],
            putenv: Callable[[AnyStr, AnyStr], None],
            unsetenv: Callable[[AnyStr, AnyStr], None],
        ) -> None: ...
    def setdefault(self, key: AnyStr, value: AnyStr) -> AnyStr: ...  # type: ignore[override]
    def copy(self) -> dict[AnyStr, AnyStr]: ...
    def __delitem__(self, key: AnyStr) -> None: ...
    def __getitem__(self, key: AnyStr) -> AnyStr: ...
    def __setitem__(self, key: AnyStr, value: AnyStr) -> None: ...
    def __iter__(self) -> Iterator[AnyStr]: ...
    def __len__(self) -> int: ...

environ: _Environ[str]
if sys.platform != "win32":
    environb: _Environ[bytes]

if sys.platform != "win32":
    confstr_names: dict[str, int]
    pathconf_names: dict[str, int]
    sysconf_names: dict[str, int]

    EX_OK: int
    EX_USAGE: int
    EX_DATAERR: int
    EX_NOINPUT: int
    EX_NOUSER: int
    EX_NOHOST: int
    EX_UNAVAILABLE: int
    EX_SOFTWARE: int
    EX_OSERR: int
    EX_OSFILE: int
    EX_CANTCREAT: int
    EX_IOERR: int
    EX_TEMPFAIL: int
    EX_PROTOCOL: int
    EX_NOPERM: int
    EX_CONFIG: int
    EX_NOTFOUND: int

P_NOWAIT: int
P_NOWAITO: int
P_WAIT: int
if sys.platform == "win32":
    P_DETACH: int
    P_OVERLAY: int

# wait()/waitpid() options
if sys.platform != "win32":
    WNOHANG: int  # Unix only
    WCONTINUED: int  # some Unix systems
    WUNTRACED: int  # Unix only

TMP_MAX: int  # Undocumented, but used by tempfile

# ----- os classes (structures) -----
@final
class stat_result(structseq[float], tuple[int, int, int, int, int, int, int, float, float, float]):
    # The constructor of this class takes an iterable of variable length (though it must be at least 10).
    #
    # However, this class behaves like a tuple of 10 elements,
    # no matter how long the iterable supplied to the constructor is.
    # https://github.com/python/typeshed/pull/6560#discussion_r767162532
    #
    # The 10 elements always present are st_mode, st_ino, st_dev, st_nlink,
    # st_uid, st_gid, st_size, st_atime, st_mtime, st_ctime.
    #
    # More items may be added at the end by some implementations.
    @property
    def st_mode(self) -> int: ...  # protection bits,
    @property
    def st_ino(self) -> int: ...  # inode number,
    @property
    def st_dev(self) -> int: ...  # device,
    @property
    def st_nlink(self) -> int: ...  # number of hard links,
    @property
    def st_uid(self) -> int: ...  # user id of owner,
    @property
    def st_gid(self) -> int: ...  # group id of owner,
    @property
    def st_size(self) -> int: ...  # size of file, in bytes,
    @property
    def st_atime(self) -> float: ...  # time of most recent access,
    @property
    def st_mtime(self) -> float: ...  # time of most recent content modification,
    # platform dependent (time of most recent metadata change on Unix, or the time of creation on Windows)
    @property
    def st_ctime(self) -> float: ...
    @property
    def st_atime_ns(self) -> int: ...  # time of most recent access, in nanoseconds
    @property
    def st_mtime_ns(self) -> int: ...  # time of most recent content modification in nanoseconds
    # platform dependent (time of most recent metadata change on Unix, or the time of creation on Windows) in nanoseconds
    @property
    def st_ctime_ns(self) -> int: ...
    if sys.platform == "win32":
        @property
        def st_file_attributes(self) -> int: ...
        if sys.version_info >= (3, 8):
            @property
            def st_reparse_tag(self) -> int: ...
    else:
        @property
        def st_blocks(self) -> int: ...  # number of blocks allocated for file
        @property
        def st_blksize(self) -> int: ...  # filesystem blocksize
        @property
        def st_rdev(self) -> int: ...  # type of device if an inode device
        if sys.platform != "linux":
            # These properties are available on MacOS, but not on Windows or Ubuntu.
            # On other Unix systems (such as FreeBSD), the following attributes may be
            # available (but may be only filled out if root tries to use them):
            @property
            def st_gen(self) -> int: ...  # file generation number
            @property
            def st_birthtime(self) -> int: ...  # time of file creation
    if sys.platform == "darwin":
        @property
        def st_flags(self) -> int: ...  # user defined flags for file
    # Attributes documented as sometimes appearing, but deliberately omitted from the stub: `st_creator`, `st_rsize`, `st_type`.
    # See https://github.com/python/typeshed/pull/6560#issuecomment-991253327

@runtime_checkable
class PathLike(Protocol[_AnyStr_co]):
    def __fspath__(self) -> _AnyStr_co: ...

@overload
def listdir(path: str | None = ...) -> list[str]: ...
@overload
def listdir(path: bytes) -> list[bytes]: ...
@overload
def listdir(path: int) -> list[str]: ...
@overload
def listdir(path: PathLike[str]) -> list[str]: ...

_FdOrAnyPath = Union[int, StrOrBytesPath]

@final
class DirEntry(Generic[AnyStr]):
    # This is what the scandir iterator yields
    # The constructor is hidden

    name: AnyStr
    path: AnyStr
    def inode(self) -> int: ...
    def is_dir(self, *, follow_symlinks: bool = ...) -> bool: ...
    def is_file(self, *, follow_symlinks: bool = ...) -> bool: ...
    def is_symlink(self) -> bool: ...
    def stat(self, *, follow_symlinks: bool = ...) -> stat_result: ...
    def __fspath__(self) -> AnyStr: ...
    if sys.version_info >= (3, 9):
        def __class_getitem__(cls, item: Any) -> GenericAlias: ...

if sys.version_info >= (3, 7):
    _StatVfsTuple = tuple[int, int, int, int, int, int, int, int, int, int, int]
else:
    _StatVfsTuple = tuple[int, int, int, int, int, int, int, int, int, int]

@final
class statvfs_result(structseq[int], _StatVfsTuple):
    @property
    def f_bsize(self) -> int: ...
    @property
    def f_frsize(self) -> int: ...
    @property
    def f_blocks(self) -> int: ...
    @property
    def f_bfree(self) -> int: ...
    @property
    def f_bavail(self) -> int: ...
    @property
    def f_files(self) -> int: ...
    @property
    def f_ffree(self) -> int: ...
    @property
    def f_favail(self) -> int: ...
    @property
    def f_flag(self) -> int: ...
    @property
    def f_namemax(self) -> int: ...
    if sys.version_info >= (3, 7):
        @property
        def f_fsid(self) -> int: ...

# ----- os function stubs -----
def fsencode(filename: StrOrBytesPath) -> bytes: ...
def fsdecode(filename: StrOrBytesPath) -> str: ...
@overload
def fspath(path: str) -> str: ...
@overload
def fspath(path: bytes) -> bytes: ...
@overload
def fspath(path: PathLike[AnyStr]) -> AnyStr: ...
def get_exec_path(env: Mapping[str, str] | None = ...) -> list[str]: ...
def getlogin() -> str: ...
def getpid() -> int: ...
def getppid() -> int: ...
def strerror(__code: int) -> str: ...
def umask(__mask: int) -> int: ...
@final
class uname_result(structseq[str], tuple[str, str, str, str, str]):
    @property
    def sysname(self) -> str: ...
    @property
    def nodename(self) -> str: ...
    @property
    def release(self) -> str: ...
    @property
    def version(self) -> str: ...
    @property
    def machine(self) -> str: ...

if sys.platform != "win32":
    def ctermid() -> str: ...
    def getegid() -> int: ...
    def geteuid() -> int: ...
    def getgid() -> int: ...
    def getgrouplist(__user: str, __group: int) -> list[int]: ...
    def getgroups() -> list[int]: ...  # Unix only, behaves differently on Mac
    def initgroups(__username: str, __gid: int) -> None: ...
    def getpgid(pid: int) -> int: ...
    def getpgrp() -> int: ...
    def getpriority(which: int, who: int) -> int: ...
    def setpriority(which: int, who: int, priority: int) -> None: ...
    if sys.platform != "darwin":
        def getresuid() -> tuple[int, int, int]: ...
        def getresgid() -> tuple[int, int, int]: ...
    def getuid() -> int: ...
    def setegid(__egid: int) -> None: ...
    def seteuid(__euid: int) -> None: ...
    def setgid(__gid: int) -> None: ...
    def setgroups(__groups: Sequence[int]) -> None: ...
    def setpgrp() -> None: ...
    def setpgid(__pid: int, __pgrp: int) -> None: ...
    def setregid(__rgid: int, __egid: int) -> None: ...
    if sys.platform != "darwin":
        def setresgid(rgid: int, egid: int, sgid: int) -> None: ...
        def setresuid(ruid: int, euid: int, suid: int) -> None: ...
    def setreuid(__ruid: int, __euid: int) -> None: ...
    def getsid(__pid: int) -> int: ...
    def setsid() -> None: ...
    def setuid(__uid: int) -> None: ...
    def uname() -> uname_result: ...

@overload
def getenv(key: str) -> str | None: ...
@overload
def getenv(key: str, default: _T) -> str | _T: ...

if sys.platform != "win32":
    @overload
    def getenvb(key: bytes) -> bytes | None: ...
    @overload
    def getenvb(key: bytes, default: _T) -> bytes | _T: ...

def putenv(__name: bytes | str, __value: bytes | str) -> None: ...

if sys.platform != "win32" or sys.version_info >= (3, 9):
    def unsetenv(__name: bytes | str) -> None: ...

_Opener = Callable[[str, int], int]

@overload
def fdopen(
    fd: int,
    mode: OpenTextMode = ...,
    buffering: int = ...,
    encoding: str | None = ...,
    errors: str | None = ...,
    newline: str | None = ...,
    closefd: bool = ...,
    opener: _Opener | None = ...,
) -> _TextIOWrapper: ...
@overload
def fdopen(
    fd: int,
    mode: OpenBinaryMode,
    buffering: Literal[0],
    encoding: None = ...,
    errors: None = ...,
    newline: None = ...,
    closefd: bool = ...,
    opener: _Opener | None = ...,
) -> FileIO: ...
@overload
def fdopen(
    fd: int,
    mode: OpenBinaryModeUpdating,
    buffering: Literal[-1, 1] = ...,
    encoding: None = ...,
    errors: None = ...,
    newline: None = ...,
    closefd: bool = ...,
    opener: _Opener | None = ...,
) -> BufferedRandom: ...
@overload
def fdopen(
    fd: int,
    mode: OpenBinaryModeWriting,
    buffering: Literal[-1, 1] = ...,
    encoding: None = ...,
    errors: None = ...,
    newline: None = ...,
    closefd: bool = ...,
    opener: _Opener | None = ...,
) -> BufferedWriter: ...
@overload
def fdopen(
    fd: int,
    mode: OpenBinaryModeReading,
    buffering: Literal[-1, 1] = ...,
    encoding: None = ...,
    errors: None = ...,
    newline: None = ...,
    closefd: bool = ...,
    opener: _Opener | None = ...,
) -> BufferedReader: ...
@overload
def fdopen(
    fd: int,
    mode: OpenBinaryMode,
    buffering: int,
    encoding: None = ...,
    errors: None = ...,
    newline: None = ...,
    closefd: bool = ...,
    opener: _Opener | None = ...,
) -> BinaryIO: ...
@overload
def fdopen(
    fd: int,
    mode: str,
    buffering: int = ...,
    encoding: str | None = ...,
    errors: str | None = ...,
    newline: str | None = ...,
    closefd: bool = ...,
    opener: _Opener | None = ...,
) -> IO[Any]: ...
def close(fd: int) -> None: ...
def closerange(__fd_low: int, __fd_high: int) -> None: ...
def device_encoding(fd: int) -> str | None: ...
def dup(__fd: int) -> int: ...

if sys.version_info >= (3, 7):
    def dup2(fd: int, fd2: int, inheritable: bool = ...) -> int: ...

else:
    def dup2(fd: int, fd2: int, inheritable: bool = ...) -> None: ...

def fstat(fd: int) -> stat_result: ...
def ftruncate(__fd: int, __length: int) -> None: ...
def fsync(fd: FileDescriptorLike) -> None: ...
def isatty(__fd: int) -> bool: ...
def lseek(__fd: int, __position: int, __how: int) -> int: ...
def open(path: StrOrBytesPath, flags: int, mode: int = ..., *, dir_fd: int | None = ...) -> int: ...
def pipe() -> tuple[int, int]: ...
def read(__fd: int, __length: int) -> bytes: ...

if sys.platform != "win32":
    # Unix only
    def fchmod(fd: int, mode: int) -> None: ...
    def fchown(fd: int, uid: int, gid: int) -> None: ...
    def fpathconf(__fd: int, __name: str | int) -> int: ...
    def fstatvfs(__fd: int) -> statvfs_result: ...
    def get_blocking(__fd: int) -> bool: ...
    def set_blocking(__fd: int, __blocking: bool) -> None: ...
    def lockf(__fd: int, __command: int, __length: int) -> None: ...
    def openpty() -> tuple[int, int]: ...  # some flavors of Unix
    if sys.platform != "darwin":
        def fdatasync(fd: FileDescriptorLike) -> None: ...
        def pipe2(__flags: int) -> tuple[int, int]: ...  # some flavors of Unix
        def posix_fallocate(fd: int, offset: int, length: int) -> None: ...
        def posix_fadvise(fd: int, offset: int, length: int, advice: int) -> None: ...
    def pread(__fd: int, __length: int, __offset: int) -> bytes: ...
    def pwrite(__fd: int, __buffer: bytes, __offset: int) -> int: ...
    if sys.platform != "darwin":
        if sys.version_info >= (3, 10):
            RWF_APPEND: int  # docs say available on 3.7+, stubtest says otherwise
        if sys.version_info >= (3, 7):
            def preadv(__fd: int, __buffers: Iterable[bytes], __offset: int, __flags: int = ...) -> int: ...
            def pwritev(__fd: int, __buffers: Iterable[bytes], __offset: int, __flags: int = ...) -> int: ...
            RWF_DSYNC: int
            RWF_SYNC: int
            RWF_HIPRI: int
            RWF_NOWAIT: int
    @overload
    def sendfile(out_fd: int, in_fd: int, offset: int | None, count: int) -> int: ...
    @overload
    def sendfile(
        out_fd: int,
        in_fd: int,
        offset: int,
        count: int,
        headers: Sequence[bytes] = ...,
        trailers: Sequence[bytes] = ...,
        flags: int = ...,
    ) -> int: ...  # FreeBSD and Mac OS X only
    def readv(__fd: int, __buffers: Sequence[bytearray]) -> int: ...
    def writev(__fd: int, __buffers: Sequence[bytes]) -> int: ...

@final
class terminal_size(structseq[int], tuple[int, int]):
    @property
    def columns(self) -> int: ...
    @property
    def lines(self) -> int: ...

def get_terminal_size(fd: int = ...) -> terminal_size: ...
def get_inheritable(__fd: int) -> bool: ...
def set_inheritable(__fd: int, __inheritable: bool) -> None: ...

if sys.platform != "win32":
    # Unix only
    def tcgetpgrp(__fd: int) -> int: ...
    def tcsetpgrp(__fd: int, __pgid: int) -> None: ...
    def ttyname(__fd: int) -> str: ...

def write(__fd: int, __data: bytes) -> int: ...
def access(
    path: _FdOrAnyPath, mode: int, *, dir_fd: int | None = ..., effective_ids: bool = ..., follow_symlinks: bool = ...
) -> bool: ...
def chdir(path: _FdOrAnyPath) -> None: ...

if sys.platform != "win32":
    def fchdir(fd: FileDescriptorLike) -> None: ...

def getcwd() -> str: ...
def getcwdb() -> bytes: ...
def chmod(path: _FdOrAnyPath, mode: int, *, dir_fd: int | None = ..., follow_symlinks: bool = ...) -> None: ...

if sys.platform != "win32" and sys.platform != "linux":
    def chflags(path: StrOrBytesPath, flags: int, follow_symlinks: bool = ...) -> None: ...  # some flavors of Unix
    def lchflags(path: StrOrBytesPath, flags: int) -> None: ...
    def lchmod(path: StrOrBytesPath, mode: int) -> None: ...

if sys.platform != "win32":
    def chroot(path: StrOrBytesPath) -> None: ...
    def chown(path: _FdOrAnyPath, uid: int, gid: int, *, dir_fd: int | None = ..., follow_symlinks: bool = ...) -> None: ...
    def lchown(path: StrOrBytesPath, uid: int, gid: int) -> None: ...

def link(
    src: StrOrBytesPath,
    dst: StrOrBytesPath,
    *,
    src_dir_fd: int | None = ...,
    dst_dir_fd: int | None = ...,
    follow_symlinks: bool = ...,
) -> None: ...
def lstat(path: StrOrBytesPath, *, dir_fd: int | None = ...) -> stat_result: ...
def mkdir(path: StrOrBytesPath, mode: int = ..., *, dir_fd: int | None = ...) -> None: ...

if sys.platform != "win32":
    def mkfifo(path: StrOrBytesPath, mode: int = ..., *, dir_fd: int | None = ...) -> None: ...  # Unix only

def makedirs(name: StrOrBytesPath, mode: int = ..., exist_ok: bool = ...) -> None: ...

if sys.platform != "win32":
    def mknod(path: StrOrBytesPath, mode: int = ..., device: int = ..., *, dir_fd: int | None = ...) -> None: ...
    def major(__device: int) -> int: ...
    def minor(__device: int) -> int: ...
    def makedev(__major: int, __minor: int) -> int: ...
    def pathconf(path: _FdOrAnyPath, name: str | int) -> int: ...  # Unix only

def readlink(path: AnyStr | PathLike[AnyStr], *, dir_fd: int | None = ...) -> AnyStr: ...
def remove(path: StrOrBytesPath, *, dir_fd: int | None = ...) -> None: ...
def removedirs(name: StrOrBytesPath) -> None: ...
def rename(src: StrOrBytesPath, dst: StrOrBytesPath, *, src_dir_fd: int | None = ..., dst_dir_fd: int | None = ...) -> None: ...
def renames(old: StrOrBytesPath, new: StrOrBytesPath) -> None: ...
def replace(src: StrOrBytesPath, dst: StrOrBytesPath, *, src_dir_fd: int | None = ..., dst_dir_fd: int | None = ...) -> None: ...
def rmdir(path: StrOrBytesPath, *, dir_fd: int | None = ...) -> None: ...

class _ScandirIterator(Iterator[DirEntry[AnyStr]], AbstractContextManager[_ScandirIterator[AnyStr]]):
    def __next__(self) -> DirEntry[AnyStr]: ...
    def close(self) -> None: ...

if sys.version_info >= (3, 7):
    @overload
    def scandir(path: None = ...) -> _ScandirIterator[str]: ...
    @overload
    def scandir(path: int) -> _ScandirIterator[str]: ...
    @overload
    def scandir(path: AnyStr | PathLike[AnyStr]) -> _ScandirIterator[AnyStr]: ...

else:
    @overload
    def scandir(path: None = ...) -> _ScandirIterator[str]: ...
    @overload
    def scandir(path: AnyStr | PathLike[AnyStr]) -> _ScandirIterator[AnyStr]: ...

def stat(path: _FdOrAnyPath, *, dir_fd: int | None = ..., follow_symlinks: bool = ...) -> stat_result: ...

if sys.version_info < (3, 7):
    @overload
    def stat_float_times() -> bool: ...
    @overload
    def stat_float_times(__newvalue: bool) -> None: ...

if sys.platform != "win32":
    def statvfs(path: _FdOrAnyPath) -> statvfs_result: ...  # Unix only

def symlink(src: StrOrBytesPath, dst: StrOrBytesPath, target_is_directory: bool = ..., *, dir_fd: int | None = ...) -> None: ...

if sys.platform != "win32":
    def sync() -> None: ...  # Unix only

def truncate(path: _FdOrAnyPath, length: int) -> None: ...  # Unix only up to version 3.4
def unlink(path: StrOrBytesPath, *, dir_fd: int | None = ...) -> None: ...
def utime(
    path: _FdOrAnyPath,
    times: tuple[int, int] | tuple[float, float] | None = ...,
    *,
    ns: tuple[int, int] = ...,
    dir_fd: int | None = ...,
    follow_symlinks: bool = ...,
) -> None: ...

_OnError = Callable[[OSError], Any]

def walk(
    top: AnyStr | PathLike[AnyStr], topdown: bool = ..., onerror: _OnError | None = ..., followlinks: bool = ...
) -> Iterator[tuple[AnyStr, list[AnyStr], list[AnyStr]]]: ...

if sys.platform != "win32":
    if sys.version_info >= (3, 7):
        @overload
        def fwalk(
            top: StrPath = ...,
            topdown: bool = ...,
            onerror: _OnError | None = ...,
            *,
            follow_symlinks: bool = ...,
            dir_fd: int | None = ...,
        ) -> Iterator[tuple[str, list[str], list[str], int]]: ...
        @overload
        def fwalk(
            top: bytes,
            topdown: bool = ...,
            onerror: _OnError | None = ...,
            *,
            follow_symlinks: bool = ...,
            dir_fd: int | None = ...,
        ) -> Iterator[tuple[bytes, list[bytes], list[bytes], int]]: ...
    else:
        def fwalk(
            top: StrPath = ...,
            topdown: bool = ...,
            onerror: _OnError | None = ...,
            *,
            follow_symlinks: bool = ...,
            dir_fd: int | None = ...,
        ) -> Iterator[tuple[str, list[str], list[str], int]]: ...
    if sys.platform == "linux":
        def getxattr(path: _FdOrAnyPath, attribute: StrOrBytesPath, *, follow_symlinks: bool = ...) -> bytes: ...
        def listxattr(path: _FdOrAnyPath | None = ..., *, follow_symlinks: bool = ...) -> list[str]: ...
        def removexattr(path: _FdOrAnyPath, attribute: StrOrBytesPath, *, follow_symlinks: bool = ...) -> None: ...
        def setxattr(
            path: _FdOrAnyPath, attribute: StrOrBytesPath, value: bytes, flags: int = ..., *, follow_symlinks: bool = ...
        ) -> None: ...

def abort() -> NoReturn: ...

# These are defined as execl(file, *args) but the first *arg is mandatory.
def execl(file: StrOrBytesPath, __arg0: StrOrBytesPath, *args: StrOrBytesPath) -> NoReturn: ...
def execlp(file: StrOrBytesPath, __arg0: StrOrBytesPath, *args: StrOrBytesPath) -> NoReturn: ...

# These are: execle(file, *args, env) but env is pulled from the last element of the args.
def execle(file: StrOrBytesPath, __arg0: StrOrBytesPath, *args: Any) -> NoReturn: ...
def execlpe(file: StrOrBytesPath, __arg0: StrOrBytesPath, *args: Any) -> NoReturn: ...

# The docs say `args: tuple or list of strings`
# The implementation enforces tuple or list so we can't use Sequence.
# Not separating out PathLike[str] and PathLike[bytes] here because it doesn't make much difference
# in practice, and doing so would explode the number of combinations in this already long union.
# All these combinations are necessary due to list being invariant.
_ExecVArgs = Union[
    tuple[StrOrBytesPath, ...],
    list[bytes],
    list[str],
    list[PathLike[Any]],
    list[Union[bytes, str]],
    list[Union[bytes, PathLike[Any]]],
    list[Union[str, PathLike[Any]]],
    list[Union[bytes, str, PathLike[Any]]],
]
_ExecEnv = Union[Mapping[bytes, Union[bytes, str]], Mapping[str, Union[bytes, str]]]

def execv(__path: StrOrBytesPath, __argv: _ExecVArgs) -> NoReturn: ...
def execve(path: _FdOrAnyPath, argv: _ExecVArgs, env: _ExecEnv) -> NoReturn: ...
def execvp(file: StrOrBytesPath, args: _ExecVArgs) -> NoReturn: ...
def execvpe(file: StrOrBytesPath, args: _ExecVArgs, env: _ExecEnv) -> NoReturn: ...
def _exit(status: int) -> NoReturn: ...
def kill(__pid: int, __signal: int) -> None: ...

if sys.platform != "win32":
    # Unix only
    def fork() -> int: ...
    def forkpty() -> tuple[int, int]: ...  # some flavors of Unix
    def killpg(__pgid: int, __signal: int) -> None: ...
    def nice(__increment: int) -> int: ...
    if sys.platform != "darwin":
        def plock(op: int) -> None: ...  # ???op is int?

class _wrap_close(_TextIOWrapper):
    def __init__(self, stream: _TextIOWrapper, proc: Popen[str]) -> None: ...
    def close(self) -> int | None: ...  # type: ignore[override]

def popen(cmd: str, mode: str = ..., buffering: int = ...) -> _wrap_close: ...
def spawnl(mode: int, file: StrOrBytesPath, arg0: StrOrBytesPath, *args: StrOrBytesPath) -> int: ...
def spawnle(mode: int, file: StrOrBytesPath, arg0: StrOrBytesPath, *args: Any) -> int: ...  # Imprecise sig

if sys.platform != "win32":
    def spawnv(mode: int, file: StrOrBytesPath, args: _ExecVArgs) -> int: ...
    def spawnve(mode: int, file: StrOrBytesPath, args: _ExecVArgs, env: _ExecEnv) -> int: ...

else:
    def spawnv(__mode: int, __path: StrOrBytesPath, __argv: _ExecVArgs) -> int: ...
    def spawnve(__mode: int, __path: StrOrBytesPath, __argv: _ExecVArgs, __env: _ExecEnv) -> int: ...

def system(command: StrOrBytesPath) -> int: ...
@final
class times_result(structseq[float], tuple[float, float, float, float, float]):
    @property
    def user(self) -> float: ...
    @property
    def system(self) -> float: ...
    @property
    def children_user(self) -> float: ...
    @property
    def children_system(self) -> float: ...
    @property
    def elapsed(self) -> float: ...

def times() -> times_result: ...
def waitpid(__pid: int, __options: int) -> tuple[int, int]: ...

if sys.platform == "win32":
    def startfile(path: StrOrBytesPath, operation: str | None = ...) -> None: ...

else:
    def spawnlp(mode: int, file: StrOrBytesPath, arg0: StrOrBytesPath, *args: StrOrBytesPath) -> int: ...
    def spawnlpe(mode: int, file: StrOrBytesPath, arg0: StrOrBytesPath, *args: Any) -> int: ...  # Imprecise signature
    def spawnvp(mode: int, file: StrOrBytesPath, args: _ExecVArgs) -> int: ...
    def spawnvpe(mode: int, file: StrOrBytesPath, args: _ExecVArgs, env: _ExecEnv) -> int: ...
    def wait() -> tuple[int, int]: ...  # Unix only
    if sys.platform != "darwin":
        @final
        class waitid_result(structseq[int], tuple[int, int, int, int, int]):
            @property
            def si_pid(self) -> int: ...
            @property
            def si_uid(self) -> int: ...
            @property
            def si_signo(self) -> int: ...
            @property
            def si_status(self) -> int: ...
            @property
            def si_code(self) -> int: ...
        def waitid(idtype: int, ident: int, options: int) -> waitid_result: ...
    def wait3(options: int) -> tuple[int, int, Any]: ...
    def wait4(pid: int, options: int) -> tuple[int, int, Any]: ...
    def WCOREDUMP(__status: int) -> bool: ...
    def WIFCONTINUED(status: int) -> bool: ...
    def WIFSTOPPED(status: int) -> bool: ...
    def WIFSIGNALED(status: int) -> bool: ...
    def WIFEXITED(status: int) -> bool: ...
    def WEXITSTATUS(status: int) -> int: ...
    def WSTOPSIG(status: int) -> int: ...
    def WTERMSIG(status: int) -> int: ...
    if sys.version_info >= (3, 8):
        def posix_spawn(
            path: StrOrBytesPath,
            argv: _ExecVArgs,
            env: _ExecEnv,
            *,
            file_actions: Sequence[tuple[Any, ...]] | None = ...,
            setpgroup: int | None = ...,
            resetids: bool = ...,
            setsid: bool = ...,
            setsigmask: Iterable[int] = ...,
            setsigdef: Iterable[int] = ...,
            scheduler: tuple[Any, sched_param] | None = ...,
        ) -> int: ...
        def posix_spawnp(
            path: StrOrBytesPath,
            argv: _ExecVArgs,
            env: _ExecEnv,
            *,
            file_actions: Sequence[tuple[Any, ...]] | None = ...,
            setpgroup: int | None = ...,
            resetids: bool = ...,
            setsid: bool = ...,
            setsigmask: Iterable[int] = ...,
            setsigdef: Iterable[int] = ...,
            scheduler: tuple[Any, sched_param] | None = ...,
        ) -> int: ...
        POSIX_SPAWN_OPEN: int
        POSIX_SPAWN_CLOSE: int
        POSIX_SPAWN_DUP2: int

if sys.platform != "win32":
    @final
    class sched_param(structseq[int], tuple[int]):
        def __new__(cls, sched_priority: int) -> sched_param: ...
        @property
        def sched_priority(self) -> int: ...
    def sched_get_priority_min(policy: int) -> int: ...  # some flavors of Unix
    def sched_get_priority_max(policy: int) -> int: ...  # some flavors of Unix
    def sched_yield() -> None: ...  # some flavors of Unix
    if sys.platform != "darwin":
        def sched_setscheduler(pid: int, policy: int, param: sched_param) -> None: ...  # some flavors of Unix
        def sched_getscheduler(pid: int) -> int: ...  # some flavors of Unix
        def sched_rr_get_interval(pid: int) -> float: ...  # some flavors of Unix
        def sched_setparam(pid: int, param: sched_param) -> None: ...  # some flavors of Unix
        def sched_getparam(pid: int) -> sched_param: ...  # some flavors of Unix
        def sched_setaffinity(pid: int, mask: Iterable[int]) -> None: ...  # some flavors of Unix
        def sched_getaffinity(pid: int) -> set[int]: ...  # some flavors of Unix

def cpu_count() -> int | None: ...

if sys.platform != "win32":
    # Unix only
    def confstr(__name: str | int) -> str | None: ...
    def getloadavg() -> tuple[float, float, float]: ...
    def sysconf(__name: str | int) -> int: ...

if sys.platform == "linux":
    def getrandom(size: int, flags: int = ...) -> bytes: ...

def urandom(__size: int) -> bytes: ...

if sys.version_info >= (3, 7) and sys.platform != "win32":
    def register_at_fork(
        *,
        before: Callable[..., Any] | None = ...,
        after_in_parent: Callable[..., Any] | None = ...,
        after_in_child: Callable[..., Any] | None = ...,
    ) -> None: ...

if sys.version_info >= (3, 8):
    if sys.platform == "win32":
        class _AddedDllDirectory:
            path: str | None
            def __init__(self, path: str | None, cookie: _T, remove_dll_directory: Callable[[_T], Any]) -> None: ...
            def close(self) -> None: ...
            def __enter__(self: Self) -> Self: ...
            def __exit__(self, *args: Any) -> None: ...
        def add_dll_directory(path: str) -> _AddedDllDirectory: ...
    if sys.platform == "linux":
        MFD_CLOEXEC: int
        MFD_ALLOW_SEALING: int
        MFD_HUGETLB: int
        MFD_HUGE_SHIFT: int
        MFD_HUGE_MASK: int
        MFD_HUGE_64KB: int
        MFD_HUGE_512KB: int
        MFD_HUGE_1MB: int
        MFD_HUGE_2MB: int
        MFD_HUGE_8MB: int
        MFD_HUGE_16MB: int
        MFD_HUGE_32MB: int
        MFD_HUGE_256MB: int
        MFD_HUGE_512MB: int
        MFD_HUGE_1GB: int
        MFD_HUGE_2GB: int
        MFD_HUGE_16GB: int
        def memfd_create(name: str, flags: int = ...) -> int: ...

if sys.version_info >= (3, 9):
    def waitstatus_to_exitcode(status: int) -> int: ...