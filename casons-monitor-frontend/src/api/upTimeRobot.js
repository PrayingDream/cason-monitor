import request from '@/utils/upTimeRobotRequest.js'

export function getMonitors() {
    return request({
        url: '/monitors',
        method: 'get',
    })
}
