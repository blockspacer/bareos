#   BAREOS�� - Backup Archiving REcovery Open Sourced
#
#   Copyright (C) 2017-2017 Bareos GmbH & Co. KG
#
#   This program is Free Software; you can redistribute it and/or
#   modify it under the terms of version three of the GNU Affero General Public
#   License as published by the Free Software Foundation and included
#   in the file LICENSE.
#
#   This program is distributed in the hope that it will be useful, but
#   WITHOUT ANY WARRANTY; without even the implied warranty of
#   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
#   Affero General Public License for more details.
#
#   You should have received a copy of the GNU Affero General Public License
#   along with this program; if not, write to the Free Software
#   Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA
#   02110-1301, USA.


INCLUDE (CheckIncludeFiles)

CHECK_INCLUDE_FILES(rpc/rpc.h HAVE_RPC_RPC_H)
CHECK_INCLUDE_FILES(alloca.h HAVE_ALLOCA_H)
CHECK_INCLUDE_FILES(tcpd.h HAVE_TCPD_H)
CHECK_INCLUDE_FILES(afs/afsint.h HAVE_AFS_AFSINT_H)
CHECK_INCLUDE_FILES(afs/venus.h HAVE_AFS_VENUS_H)
CHECK_INCLUDE_FILES(arpa/nameser.h HAVE_ARPA_NAMESER_H)
CHECK_INCLUDE_FILES(attr.h HAVE_ATTR_H)
CHECK_INCLUDE_FILES(curses.h HAVE_CURSES_H)
CHECK_INCLUDE_FILES(demangle.h HAVE_DEMANGLE_H)
CHECK_INCLUDE_FILES(dlfcn.h HAVE_DLFCN_H)
CHECK_INCLUDE_FILES(dl.h HAVE_DL_H)
CHECK_INCLUDE_FILES(execinfo.h HAVE_EXECINFO_H)
CHECK_INCLUDE_FILES(jansson.h HAVE_JANSSON_H)
CHECK_INCLUDE_FILES(fcntl.h HAVE_FCNTL_H)
CHECK_INCLUDE_FILES(grp.h HAVE_GRP_H)
CHECK_INCLUDE_FILES(inttypes.h HAVE_INTTYPES_H)
CHECK_INCLUDE_FILES(libutil.h HAVE_LIBUTIL_H)
CHECK_INCLUDE_FILES(limits.h HAVE_LIMITS_H)
CHECK_INCLUDE_FILES(memory.h HAVE_MEMORY_H)
CHECK_INCLUDE_FILES(mtio.h HAVE_MTIO_H)
CHECK_INCLUDE_FILES(pwd.h HAVE_PWD_H)
CHECK_INCLUDE_FILES(regex.h HAVE_REGEX_H)
CHECK_INCLUDE_FILES(setjmp.h HAVE_SETJMP_H)
CHECK_INCLUDE_FILES(stdlib.h HAVE_STDLIB_H)
CHECK_INCLUDE_FILES(strings.h HAVE_STRINGS_H)
CHECK_INCLUDE_FILES(string.h HAVE_STRING_H)
CHECK_INCLUDE_FILES(sys/acl.h HAVE_SYS_ACL_H)
CHECK_INCLUDE_FILES(sys/attr.h HAVE_SYS_ATTR_H)
CHECK_INCLUDE_FILES(sys/bitypes.h HAVE_SYS_BITYPES_H)
CHECK_INCLUDE_FILES(sys/byteorder.h HAVE_SYS_BYTEORDER_H)
CHECK_INCLUDE_FILES(sys/capability.h HAVE_SYS_CAPABILITY_H)
CHECK_INCLUDE_FILES(sys/dir.h HAVE_SYS_DIR_H)
CHECK_INCLUDE_FILES(sys/dl.h HAVE_SYS_DL_H)
CHECK_INCLUDE_FILES(sys/ea.h HAVE_SYS_EA_H)
CHECK_INCLUDE_FILES("sys/types.h;sys/extattr.h" HAVE_SYS_EXTATTR_H)
CHECK_INCLUDE_FILES(sys/ioctl.h HAVE_SYS_IOCTL_H)
CHECK_INCLUDE_FILES(sys/mtio.h HAVE_SYS_MTIO_H)
CHECK_INCLUDE_FILES(sys/ndir.h HAVE_SYS_NDIR_H)
CHECK_INCLUDE_FILES(sys/nvpair.h HAVE_SYS_NVPAIR_H)
CHECK_INCLUDE_FILES(sys/select.h HAVE_SYS_SELECT_H)
CHECK_INCLUDE_FILES(sys/socket.h HAVE_SYS_SOCKET_H)
CHECK_INCLUDE_FILES(sys/sockio.h HAVE_SYS_SOCKIO_H)
CHECK_INCLUDE_FILES(sys/stat.h HAVE_SYS_STAT_H)

CHECK_INCLUDE_FILES("sys/types.h;sys/tape.h" HAVE_SYS_TAPE_H)

CHECK_INCLUDE_FILES(sys/time.h HAVE_SYS_TIME_H)
CHECK_INCLUDE_FILES(sys/types.h HAVE_SYS_TYPES_H)
CHECK_INCLUDE_FILES(termios.h HAVE_TERMIOS_H)
CHECK_INCLUDE_FILES(utime.h HAVE_UTIME_H)
CHECK_INCLUDE_FILES(varargs.h HAVE_VARARGS_H)
CHECK_INCLUDE_FILES(NSI HAVE_NSI)

CHECK_INCLUDE_FILES(fcntl.h HAVE_DLFCN_H)
CHECK_INCLUDE_FILES(dlfcn.h HAVE_DLFCN_H)
CHECK_INCLUDE_FILES(dirent.h HAVE_DIRENT_H)
CHECK_INCLUDE_FILE_CXX(cxxabi.h HAVE_CXXABI_H)
CHECK_INCLUDE_FILES(sys/wait.h HAVE_SYS_WAIT_H)
CHECK_INCLUDE_FILES(curses.h HAVE_CURSES_H)
CHECK_INCLUDE_FILES(unistd.h HAVE_UNISTD_H)
CHECK_INCLUDE_FILES(varargs.h HAVE_VARARGS_H)
CHECK_INCLUDE_FILES(stdarg.h HAVE_STDARG_H)
CHECK_INCLUDE_FILES(stdlib.h HAVE_STDLIB_H)
CHECK_INCLUDE_FILES(glob.h HAVE_GLOB_H)
CHECK_INCLUDE_FILES(poll.h HAVE_POLL_H)
CHECK_INCLUDE_FILES(sys/poll.h HAVE_SYS_POLL_H)
CHECK_INCLUDE_FILES(varargs.h HAVE_VARARGS_H)
CHECK_INCLUDE_FILES(sys/statvfs.h HAVE_SYS_STATVFS_H)
CHECK_INCLUDE_FILES(umem.h HAVE_UMEM_H)
CHECK_INCLUDE_FILES(cxxabi.h HAVE_CXXABI_H)
CHECK_INCLUDE_FILES(ucontext.h HAVE_UCONTEXT_H)
CHECK_INCLUDE_FILES(demangle.h HAVE_DEMANGLE_H)

CHECK_INCLUDE_FILES(fastlzlib.h HAVE_FASTLZLIB_H)
CHECK_INCLUDE_FILES(capability.h HAVE_FASTLZLIB_H)
CHECK_INCLUDE_FILES(acl.h HAVE_ACL_H)
CHECK_INCLUDE_FILES(sys/extattr.h HAVE_SYS_EXTATTR_H)
CHECK_INCLUDE_FILES(libutil.h HAVE_LIBUTIL_H)
CHECK_INCLUDE_FILES(sys/ea.h HAVE_SYS_EA_H)
CHECK_INCLUDE_FILES(sys/proplist.h HAVE_SYS_PROPLIST_H)
CHECK_INCLUDE_FILES(sys/xattr.h HAVE_SYS_XATTR_H)
CHECK_INCLUDE_FILES(api/glfs.h HAVE_API_GLFS_H)

CHECK_INCLUDE_FILES(cephfs/libcephfs.h HAVE_CEPHFS_LIBCEPHFS_H)
CHECK_INCLUDE_FILES("sys/stat.h;cephfs/ceph_statx.h" HAVE_CEPHFS_CEPH_STATX_H)
CHECK_INCLUDE_FILES(rados/librados.h HAVE_RADOS_LIBRADOS_H)
CHECK_INCLUDE_FILES(radosstriper/libradosstriper.h HAVE_RADOSSTRIPER_LIBRADOSSTRIPER_H)

#CHECK_INCLUDE_FILES(glusterfs/glusterfs.h HAVE_GLUSTERFS_GLUSTERFS_H)
CHECK_INCLUDE_FILES(glusterfs/api/glfs.h HAVE_GLUSTERFS_API_GLFS_H)

CHECK_INCLUDE_FILES(elasto/data.h HAVE_ELASTO_DATA_H)
CHECK_INCLUDE_FILES(elasto/file.h HAVE_ELASTO_FILE_H)
CHECK_INCLUDE_FILES(sys/prctl.h HAVE_SYS_PRCTL_H)
CHECK_INCLUDE_FILES(time.h HAVE_TIME_H)

CHECK_INCLUDE_FILES(sys/capability.h HAVE_SYS_CAPABILITY_H)
CHECK_INCLUDE_FILES(zlib.h HAVE_ZLIB_H)
CHECK_INCLUDE_FILES(lzo/lzoconf.h HAVE_LZO_LZOCONF_H)
CHECK_INCLUDE_FILES(lzo/lzo1x.h HAVE_LZO_LZO1X_H)

CHECK_INCLUDE_FILES(assert.h HAVE_ASSERT_H)
CHECK_INCLUDE_FILES(curses.h HAVE_CURSES_H)

CHECK_INCLUDE_FILES(scsi/scsi.h HAVE_SCSI_SCSI_H)

CHECK_INCLUDE_FILES("stddef.h;scsi/sg.h" HAVE_SCSI_SG_H)

CHECK_INCLUDE_FILES(sys/dir.h HAVE_SYS_DIR_H)
CHECK_INCLUDE_FILES(termcap.h HAVE_TERMCAP_H)
CHECK_INCLUDE_FILES(term.h HAVE_TERM_H)

CHECK_INCLUDE_FILES("sys/types.h;sys/scsi/impl/uscsi.h" HAVE_SYS_SCSI_IMPL_USCSI_H)
CHECK_INCLUDE_FILES("stdio.h;camlib.h" HAVE_CAMLIB_H)
CHECK_INCLUDE_FILES(cam/scsi/scsi_message.h HAVE_CAM_SCSI_SCSI_MESSAGE_H)
CHECK_INCLUDE_FILES(dev/scsipi/scsipi_all.h HAVE_DEV_SCSIPI_SCSIPI_ALL_H)

CHECK_INCLUDE_FILES(scsi/uscsi_all.h HAVE_USCSI_ALL_H)
CHECK_INCLUDE_FILES(scsi/uscsi_all.h HAVE_SCSI_USCSI_ALL_H)