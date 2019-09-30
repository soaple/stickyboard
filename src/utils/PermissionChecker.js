// src/utils/PermissionChecker.js

var GroupUser = require('../database/models/MySQL/User/GroupUser')
var GroupPermission = require('../database/models/MySQL/User/GroupPermission')
var Permission = require('../database/models/MySQL/User/Permission')

// var SidebarMenuDict = require('../constants/SidebarMenuDict')

var PermissionChecker = {
    checkPermission: function (adminId, requestUrl, callback) {
        GroupUser.find({
            where: {
                admin_id: adminId
            }
        })
        .then(function (result) {
            if (result == null) {
                callback(false)
                return
            }

            var groupId = result.group_id

            GroupPermission.findAll({
                where: {
                    group_id: groupId
                },
                include: [{
                    model: Permission
                }],
                raw: true,
            })
            .then(function (results) {
                var checkResult = false;
                // console.log('-----------', results);
                for (var key in results) {
                    var groupPermission = results[key]
                    // console.log('-----------', groupPermission);

                    if (requestUrl === groupPermission['permission.key']) {
                        checkResult = true
                        break
                    }
                }

                callback(checkResult)
            })
        })
    }
}

module.exports = PermissionChecker
