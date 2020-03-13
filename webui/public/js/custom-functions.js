/**
 *
 * bareos-webui - Bareos Web-Frontend
 *
 * @link      https://github.com/bareos/bareos for the canonical source repository
 * @copyright Copyright (c) 2013-2020 Bareos GmbH & Co. KG (http://www.bareos.org/)
 * @license   GNU Affero General Public License (http://www.gnu.org/licenses/)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

var dt_locale = "";
var dt_textdomain = "";

function setDtLocale(val) {
   switch(val) {
      case 'cn':
      case 'cn_CN':
         dt_locale = 'cn_CN';
         break;
      case 'cs':
      case 'cs_CZ':
         dt_locale = 'cs_CZ';
         break;
      case 'en':
      case 'en_EN':
         dt_locale = 'en_EN';
         break;
      case 'es':
      case 'es_ES':
         dt_locale = 'es_ES';
         break;
      case 'fr':
      case 'fr_FR':
         dt_locale = 'fr_FR';
         break;
      case 'de':
      case 'de_DE':
         dt_locale = 'de_DE';
         break;
      case 'hu':
      case 'hu_HU':
         dt_locale = 'hu_HU';
         break;
      case 'it':
      case 'it_IT':
         dt_locale = 'it_IT';
         break;
      case 'pl':
      case 'pl_PL':
         dt_locale = 'pl_PL';
         break;
      case 'pt':
      case 'pt_BR':
         dt_locale = 'pt_BR';
         break;
      case 'ru':
      case 'ru_RU':
         dt_locale = 'ru_RU';
         break;
      case 'nl':
      case 'nl_BE':
         dt_locale = 'nl_BE';
         break;
      case 'tr':
      case 'tr_TR':
         dt_locale = 'tr_TR';
         break;
      case 'sk':
      case 'sk_SK':
         dt_locale = 'sk_SK';
         break;
      case 'uk':
      case 'uk_UA':
         dt_locale = 'uk_UA';
         break;
      default:
         dt_locale = 'en_EN';
   }
   initDTLocale();
}

function setDtTextDomain(val) {
   dt_textdomain = val;
}

function initDTLocale() {
   iJS.i18n.setlocale(dt_locale);
   iJS.i18n.bindtextdomain(dt_locale, dt_textdomain, "po");
   iJS.i18n.try_load_lang();
}

function formatJobId(value, basePath) {
   return '<a href="' + basePath + '/job/details/' + value + '" title="' + iJS._("View Job Details") + '">' + value + '</a>';
}

function formatJobName(value, basePath, displayRange) {
   if(displayRange === undefined) {
      return '<a href="' + basePath + '/job/index?jobname=' + value + '">' + value + '</a>';
   } else {
      return '<a href="' + basePath + '/job/index?jobname=' + value + '&period=' + displayRange + '">' + value + '</a>';
   }
}

function formatClientName(value, basePath) {
   return '<a href="' + basePath + '/client/details/' + value + '">' + value + '</a>';
}

function formatJobType(data) {
   var output;
   switch(data) {
      case 'B':
         output = iJS._('Backup');
         break;
      case 'M':
         output = iJS._('Migrated');
         break;
      case 'V':
         output = iJS._('Verify');
         break;
      case 'R':
         output = iJS._('Restore');
         break;
      case 'U':
         output = iJS._('Console program');
         break;
      case 'I':
         output = iJS._('Internal system job');
         break;
      case 'D':
         output = iJS._('Admin');
         break;
      case 'A':
         output = iJS._('Archive');
         break;
      case 'C':
         output = iJS._('Copy of a job');
         break;
      case 'c':
         output = iJS._('Copy job');
         break;
      case 'g':
         output = iJS._('Migration job');
         break;
      case 'S':
         output = iJS._('Scan');
         break;
      case 'O':
         output = iJS._('Consolidate');
         break;
      default:
         output = data;
         break;
   }
   return output;
}

function formatJobLevel(data) {
   switch(data) {
      case 'F':
         return iJS._('Full');
      case 'D':
         return iJS._('Differential');
      case 'I':
         return iJS._('Incremental');
      case 'f':
         return iJS._('VirtualFull');
      case 'B':
         return iJS._('Base');
      case 'C':
         return iJS._('Catalog');
      case 'V':
         return iJS._('InitCatalog');
      case 'O':
         return iJS._('VolumeToCatalog');
      case 'd':
         return iJS._('DiskToCatalog');
      case 'A':
         return iJS._('Data');
      case ' ':
         return iJS._('None');
      default:
         return data;
   }
}

function formatRetention(data) {
   if( Math.floor(data / 31536000) >= 1 ) {
      return Math.floor(data / 31536000) + ' ' + iJS._('year(s)');
   }
   else if( Math.floor(data / 2592000) >= 1 ) {
      return Math.floor(data / 2592000) + ' ' + iJS._('month(s)');
   }
   else if( Math.floor(data / 86400) >= 1 ) {
      return Math.floor(data / 86400) + ' ' + iJS._('day(s)');
   }
   else if( Math.floor(data / 3600) >= 1 ) {
      return Math.floor(data / 3600) + ' ' + iJS._('hour(s)');
   }
   else if( Math.floor(data / 60) >= 1 ) {
      return Math.floor(data / 60) + ' ' + iJS._('second(s)');
   }
   else {
      return '-';
   }
}

function formatExpiration(volstatus, lastwritten, volretention) {
   if(volstatus == iJS._("Used") || volstatus == iJS._("Full")) {
      if(lastwritten == null || lastwritten == "") {
         return '-';
      }
      else {
         var d = Date.now() / 1000;
         var a = lastwritten.split(" ");
         var b = new Date(a[0]).getTime() / 1000;
         var interval = (d - b) / (3600 * 24);
         var retention = Math.round(volretention / 60 / 60 / 24);
         var expiration = (retention - interval).toFixed(2);
         if(expiration <= 0) {
            return '<span class="label label-danger">' + iJS._("expired") + '</span>';
         }

         if(expiration > 0 && expiration <= 1) {
            return '<span class="label label-warning">' + iJS._("expires in 1 day") + '</span>';
         }

         if(expiration > 1) {
            return '<span class="label label-warning">' + iJS._("expires in") + ' ' + Math.ceil(expiration) + ' ' + iJS._("days") + '</span>';
         }
      }
   }
   else {
      return formatRetention(volretention);
   }
}

function formatHiddenRetExp(volstatus, lastwritten, volretention) {
   if(volstatus == iJS._("Used") || volstatus == iJS._("Full")) {
      if(lastwritten == null || lastwritten == "") {
         return 100000000000;
      }
      else {
         var d = Date.now() / 1000;
         var a = lastwritten.split(" ");
         var b = new Date(a[0]).getTime() / 1000;
         var interval = (d - b) / (3600 * 24);
         var retention = Math.round(volretention / 60 / 60 / 24);
         var expiration = (retention - interval).toFixed(2);
         return Math.ceil(expiration);
      }
   }
   else {
      // This is kind of ugly but expiration can also be a negativ value, but somehow we need to sort numerical.
      // As a workaround we move the area of unused volumes with a retention way down into the negativ by
      // prepending a large negativ number out of the scope of the usual rentention times commonly used
      // to avoid further problems.
      // TODO: Find a better sorting solution for the Retention/Expiration column.
      return Math.ceil('-1000000000000'+(volretention / 60 / 60 / 24));
   }
}

function formatLastWritten(data) {
   if(data == null || data == '' || data == 0) {
      return iJS._('never');
   }
   else {
      var d = Date.now() / 1000;
      var a = data.split(" ");
      var b = new Date(a[0]).getTime() / 1000;
      var interval = Math.floor( (d - b) / (3600 * 24) );

      if(interval < 1) {
         return '<span id="lastwritten" data-toggle="tooltip" title="' + data + '">' + iJS._("today") + '</span>';
      }
      else if(interval <= 31 && interval >= 1) {
         return '<span id="lastwritten" data-toggle="tooltip" title="' + data + '">' + interval + ' ' + iJS._("day(s) ago") + '</span>';
      }
      else if(interval >= 31 && interval <= 365) {
         return '<span id="lastwritten" data-toggle="tooltip" title="' + data + '">' + Math.round(interval / 31) + ' ' + iJS._("month(s) ago") + '</span>';
      }
      else if(interval > 365) {
         return '<span id="lastwritten" data-toggle="tooltip" title="' + data + '">' + Math.round(interval / 365) + ' ' + iJS._("year(s) ago") + '</span>';
      }
      else {
         return data;
      }
   }
}

function formatBytes(data) {
   if(data == 0 || data == null) {
      var b = "0.00 B";
   }
   else {
      var k = 1000;
      var units = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB"];
      var i = Math.floor(Math.log(data) / Math.log(k));
      var b = parseFloat((data / Math.pow(k, i)).toFixed(2)) + " " + units[i];
   }
   return b;
}

function formatFreeBytes(maxvolbytes, volbytes) {
   if(maxvolbytes == null || maxvolbytes == 0) return "0.00 B";
   if(volbytes == null || volbytes == 0) return "0.00 B";
   var d = maxvolbytes - volbytes;
   var k = 1000;
   var units = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB"];
   var i = Math.floor(Math.log(d) / Math.log(k));
   return parseFloat((d / Math.pow(k, i)).toFixed(2)) + " " + units[i];
}

function formatAutoprune(data) {
   if(data == 1) {
      var a = '<span class="label label-success">' + iJS._("enabled") + '</span>';
   }
   else {
      var a = '<span class="label label-danger">' + iJS._("disabled") + '</span>';
   }
   return a;
}

function formatRecycle(data) {
   var r;
   if(data == 1) {
      r = '<span class="label label-success">' + iJS._("Yes") + '</span>';
   }
   else {
      r = '<span class="label label-danger">' + iJS._("No") + '</span>';
   }
   return r;
}

function formatJobStatus(data) {
   var output;
   switch(data) {
      // Non-fatal error
      case 'e':
         jobstatus_e = iJS._("Non-fatal error");
         output = '<span class="label label-danger" title="' + jobstatus_e + '">' + iJS._("Failure") + '</span>';
         break;
      // Terminated with errors
      case 'E':
         jobstatus_E = iJS._("Job terminated in error");
         output = '<span class="label label-danger" title="' + jobstatus_E + '">' + iJS._("Failure") + '</span>';
         break;
      // Fatal error
      case 'f':
         jobstatus_f = iJS._("Fatal error");
         output = '<span class="label label-danger" title="' + jobstatus_f + '">' + iJS._("Failure") + '</span>';
         break;
      // Terminated successful
      case 'T':
         jobstatus_T = iJS._("Terminated normally");
         output = '<span class="label label-success" title="' + jobstatus_T + '">' + iJS._("Success") + '</span>';
         break;
      // Running
      case 'R':
         jobstatus_R = iJS._("Running");
         output = '<span class="label label-info" title="' + jobstatus_R + '">' + iJS._("Running") + '</span>';
         break;
      // Created no yet running
      case 'C':
         jobstatus_C = iJS._("Created but not yet running");
         output = '<span class="label label-default" title="' + jobstatus_C + '">' + iJS._("Queued") + '</span>';
         break;
      // Blocked
      case 'B':
         jobstatus_B = iJS._("Blocked");
         output = '<span class="label label-warning" title="' + jobstatus_B + '">' + iJS._("Blocked") + '</span>';
         break;
      // Verify found differences
      case 'D':
         jobstatus_D = iJS._("Verify differences");
         output = '<span class="label label-warning" title="' + jobstatus_D + '">' + iJS._("Verify found differences") + '</span>';
         break;
      // Canceled by user
      case 'A':
         jobstatus_A = iJS._("Canceled by user");
         output = '<span class="label label-warning" title="' + jobstatus_A + '">' + iJS._("Canceled") + '</span>';
         break;
      // Waiting for client
      case 'F':
         jobstatus_F = iJS._("Waiting on File daemon");
         output = '<span class="label label-default" title="' + jobstatus_F + '">' + iJS._("Waiting") + '</span>';
         break;
      // Waiting for storage daemon
      case 'S':
         jobstatus_S = iJS._("Waiting on the Storage daemon");
         output = '<span class="label label-default" title="' + jobstatus_S + '">' + iJS._("Waiting") + '</span>';
         break;
      // Waiting for new media
      case 'm':
         jobstatus_m = iJS._("Waiting for new media");
         output = '<span class="label label-default" title="' + jobstatus_m + '">' + iJS._("Waiting") + '</span>';
         break;
      // Waiting for media mount
      case 'M':
         jobstatus_M = iJS._("Waiting for Mount");
         output = '<span class="label label-default" title="' + jobstatus_M + '">' + iJS._("Waiting") + '</span>';
         break;
      // Waiting for storage resource
      case 's':
         jobstatus_s = iJS._("Waiting for storage resource");
         output = '<span class="label label-default" title="' + jobstatus_s + '">' + iJS._("Waiting") + '</span>';
         break;
      // Waiting for job resource
      case 'j':
         jobstatus_j = iJS._("Waiting for job resource");
         output = '<span class="label label-default" title="' + jobstatus_j + '">' + iJS._("Waiting") + '</span>';
         break;
      // Waiting for client resource
      case 'c':
         jobstatus_c = iJS._("Waiting for Client resource");
         output = '<span class="label label-default" title="' + jobstatus_c + '">' + iJS._("Waiting") + '</span>';
         break;
      // Waiting on maximum jobs
      case 'd':
         jobstatus_d = iJS._("Waiting for maximum jobs");
         output = '<span class="label label-default" title="' + jobstatus_d + '">' + iJS._("Waiting") + '</span>';
         break;
      // Waiting on starttime
      case 't':
         jobstatus_t = iJS._("Waiting for start time");
         output = '<span class="label label-default" title="' + jobstatus_t + '">' + iJS._("Waiting") + '</span>';
         break;
      // Waiting on higher priority jobs
      case 'p':
         jobstatus_p = iJS._("Waiting for higher priority jobs to finish");
         output = '<span class="label label-default" title="' + jobstatus_p + '">' + iJS._("Waiting") + '</span>';
         break;
      // SD despooling attributes
      case 'a':
         jobstatus_a = iJS._("SD despooling attributes");
         output = '<span class="label label-info" title="' + jobstatus_a + '">' + iJS._("SD despooling attributes") + '</span>';
         break;
      // Doing batch insert file records
      case 'i':
         jobstatus_i = iJS._("Doing batch insert file records");
         output = '<span class="label label-info" title="' + jobstatus_i + '">' + iJS._("Doing batch insert file records") + '</span>';
         break;
      // Incomplete
      case 'I':
         jobstatus_I = iJS._("Incomplete Job");
         output = '<span class="label label-primary" title="' + jobstatus_I + '">' + iJS._("Incomplete") + '</span>';
         break;
      // Committing data
      case 'L':
         jobstatus_L = iJS._("Committing data (last despool)");
         output = '<span class="label label-info" title="' + jobstatus_L + '">' + iJS._("Committing data") + '</span>';
         break;
      // Terminated with warnings
      case 'W':
         jobstatus_W = iJS._("Terminated normally with warnings");
         output = '<span class="label label-warning" title="' + jobstatus_W + '">' + iJS._("Warning") + '</span>';
         break;
      // Doing data despooling
      case 'l':
         jobstatus_l = iJS._("Doing data despooling");
         output = '<span class="label label-info" title="' + jobstatus_l +'">' + iJS._("Doing data despooling") + '</span>';
         break;
      // Queued waiting for device
      case 'q':
         jobstatus_q = iJS._("Queued waiting for device");
         output = '<span class="label label-default" title="' + jobstatus_q + '">' + iJS._("Queued waiting for device") + '</span>';
         break;
      default:
         output = '<span class="label label-primary">' + data + '</span>';
         break;
   }
   return output;
}

function formatEnabledDisabledStatus(value) {
   if(value) {
      return '<span class="label label-success">' + iJS._("Enabled") + '</span>';
   } else {
      return '<span class="label label-danger">' + iJS._("Disabled") + '</span>';
   }
}

function formatUname(value, basePath) {
   if(value.toLowerCase().search("suse") > -1) {
      return '<img src="' + basePath + '/img/icons/os/suse.png" id="icon-os" title="' + value + '" data-toggle="tooltip" data-placement="top">';
   }
   else if(value.toLowerCase().search("sle") > -1) {
      return '<img src="' + basePath + '/img/icons/os/suse.png" id="icon-os" title="' + value + '" data-toggle="tooltip" data-placement="top">';
   }
   else if(value.toLowerCase().search("debian") > -1) {
      return '<img src="' + basePath + '/img/icons/os/debian.png" id="icon-os" title="' + value + '" data-toggle="tooltip" data-placement="top">';
   }
   else if(value.toLowerCase().search("fedora") > -1) {
      return '<img src="' + basePath + '/img/icons/os/fedora.png" id="icon-os" title="' + value + '" data-toggle="tooltip" data-placement="top">';
   }
   else if(value.toLowerCase().search("centos") > -1) {
      return '<img src="' + basePath + '/img/icons/os/centos.png" id="icon-os" title="' + value + '" data-toggle="tooltip" data-placement="top">';
   }
   else if(value.toLowerCase().search("redhat") > -1) {
      return '<img src="' + basePath + '/img/icons/os/redhat.png" id="icon-os" title="' + value + '" data-toggle="tooltip" data-placement="top">';
   }
   else if(value.toLowerCase().search("ubuntu") > -1) {
      return '<img src="' + basePath + '/img/icons/os/ubuntu.png" id="icon-os" title="' + value + '" data-toggle="tooltip" data-placement="top">';
   }
   else if(value.toLowerCase().search("univention") > -1) {
      return '<img src="' + basePath + '/img/icons/os/univention.png" id="icon-os" title="' + value + '" data-toggle="tooltip" data-placement="top">';
   }
   else if(value.toLowerCase().search("windows") > -1) {
      return '<img src="' + basePath + '/img/icons/os/windows.png" id="icon-os" title="' + value + '" data-toggle="tooltip" data-placement="top">';
   }
   else if(value.toLowerCase().search("win32") > -1) {
      return '<img src="' + basePath + '/img/icons/os/windows.png" id="icon-os" title="' + value + '" data-toggle="tooltip" data-placement="top">';
   }
   else if(value.toLowerCase().search("win64") > -1) {
      return '<img src="' + basePath + '/img/icons/os/windows.png" id="icon-os" title="' + value + '" data-toggle="tooltip" data-placement="top">';
   }
   else if(value.toLowerCase().search("macos") > -1) {
      return '<img src="' + basePath + '/img/icons/os/macos.png" id="icon-os" title="' + value + '" data-toggle="tooltip" data-placement="top">';
   }
   else if(value.toLowerCase().search("solaris") > -1) {
      return '<img src="' + basePath + '/img/icons/os/sunsolaris.png" id="icon-os" title="' + value + '" data-toggle="tooltip" data-placement="top">';
   }
   else if(value.toLowerCase().search("freebsd") > -1) {
      return '<img src="' + basePath + '/img/icons/os/freebsd.png" id="icon-os" title="' + value + '" data-toggle="tooltip" data-placement="top">';
   }
   else {
      return '';
   }
}

function formatUpdateStatus(value, row, index) {
   if(row.available_fd === "" || row.available_fd === null || row.available_fd === undefined) {
      return '<span class="label label-default" id="label-fd-version" data-toggle="tooltip" data-placement="top" title="Unknown update status">'+row.installed_fd+'</span>';
   }
   if(row.update_fd === true) {
      if(row.update_dird === true) {
         return '<span class="label label-danger" id="label-fd-version" data-toggle="tooltip" data-placement="top" title="Version '+row.available_fd+' is available">'+row.installed_fd+'</span> <span class="text-danger" data-toggle="tooltip" data-placement="top">(Director upgrade '+row.available_dird+' required first)</span>';
      }
      else {
         return '<span class="label label-danger" id="label-fd-version" data-toggle="tooltip" data-placement="top" title="Version '+row.available_fd+' is available">'+row.installed_fd+'</span>';
      }
   }
   else {
      return '<span class="label label-success" id="label-fd-version" data-toggle="tooltip" data-placement="top" title="Up to date">'+row.installed_fd+'</span>';
   }
}

function formatScheduleName(value, basePath) {
   return '<a href="' + basePath + '/schedule/details?schedule=' + value + '">' + value + '</a>';
}

function formatClientName(value, basePath) {
   return '<a href="' + basePath + '/client/details/' + value + '">' + value + '</a>';
}

function clientsActionButtonsFormatter(value, row, index, basePath) {
   let restoreButton = '<a class="btn btn-default btn-xs" data-toggle="tooltip" data-placement="top" href="' + basePath + '/restore/index?client=' + row.name + '" title="' + iJS._("Restore") + '" id="btn-1"><span class="glyphicon glyphicon-import"></span></a>';
   let statusClientButton = '<a class="btn btn-default btn-xs" data-toggle="tooltip" data-placement="top" href="' + basePath + '/client/status?client=' + row.name + '" title="' + iJS._("Status") + '" id="btn-1"><span class="glyphicon glyphicon-search"></span></a>';
   let disableButton = '<a class="btn btn-default btn-xs" data-toggle="tooltip" data-placement="top" href="' + basePath + '/client/index?action=disable&client=' + row.name + '" title="' + iJS._("Disable") + '" id="btn-1"><span class="glyphicon glyphicon-remove"></span></a>';
   let enableButton = '<a class="btn btn-default btn-xs" data-toggle="tooltip" data-placement="top" href="' + basePath + '/client/index?action=enable&client=' + row.name + '" title="' + iJS._("Enable") + '" id="btn-1"><span class="glyphicon glyphicon-ok"></span></a>';
   let downloadButton = '<a href="' + row.url_package + '" target="_blank"><button type="button" class="btn btn-default btn-xs" id="btn-1" data-toggle="tooltip" data-placement="top" title="'+ iJS._("Download update") + '"><span class="glyphicon glyphicon-download-alt"></span></button></a>';

   if(row.enabled) {
      if(row.update_fd === true) {
         return restoreButton + '&nbsp;' + statusClientButton + '&nbsp;' + disableButton + '&nbsp;' + downloadButton;
      }
      else {
         return restoreButton + '&nbsp;' + statusClientButton + '&nbsp;' + disableButton;
      }
   }
   else {
      if(row.update_fd === true) {
         return restoreButton + '&nbsp;' + statusClientButton + '&nbsp;' + enableButton + '&nbsp;' + downloadButton;
      }
      else {
         return restoreButton + '&nbsp;' + statusClientButton + '&nbsp;' + enableButton;
      }
   }
}

function clientActionButtonsFormatter(value, row, index, basePath) {
   let clientRestoreButton = '<a href="' + basePath + '/restore/index?client=' + row.name + '"><button type="button" class="btn btn-default btn-xs" id="btn-1" data-toggle="tooltip" data-placement="top" title="' + iJS._("Restore") + '"><span class="glyphicon glyphicon-import"></span></button></a>';
   let clientStatusButton = '<a class="btn btn-default btn-xs" data-toggle="tooltip" data-placement="top" href="' + basePath + '/client/status?client=' + row.name + '" title="' + iJS._("Status") + '" id="btn-1"><span class="glyphicon glyphicon-search"></span></a>';

   return clientRestoreButton + '&nbsp;' + clientStatusButton;
}

function scheduleActionButtonsFormatter(value, row, index, basePath) {
   let disableButton = '<a class="btn btn-default btn-xs" data-toggle="tooltip" data-placement="top" href="' + basePath + '/schedule/index?action=disable&schedule=' + row.name + '" title="' + iJS._("Disable") + '" id="btn-1"><span class="glyphicon glyphicon-remove"></span></a>';
   let enableButton = '<a class="btn btn-default btn-xs" data-toggle="tooltip" data-placement="top" href="' + basePath + '/schedule/index?action=enable&schedule=' + row.name + '" title="' + iJS._("Enable") + '" id="btn-1"><span class="glyphicon glyphicon-ok"></span></a>';

   if(row.enabled) {
      return disableButton;
   } else {
      return enableButton;
   }
}

function jobActionButtonsFormatter(value, row, index, basePath) {
   let jobDetailsButton = '<a class="btn btn-default btn-xs" data-toggle="tooltip" data-placement="top" href="' + basePath + '/job/details/' + row.jobid + '" title="'+ iJS._("View Job Details") + '" id="btn-0"><span class="glyphicon glyphicon-search"></span></a>';
   let showFilesButton = '<a class="btn btn-default btn-xs" data-toggle="tooltip" data-placement="top" href="' + basePath + '/restore/?mergefilesets=1&mergejobs=1&client=' + row.client + '&jobid=' + row.jobid + '" title="' + iJS._("Show Files") + '" id="btn-1"><span class="glyphicon glyphicon-folder-open"></span></a>';

      return jobDetailsButton + '&nbsp;' + showFilesButton;
}
