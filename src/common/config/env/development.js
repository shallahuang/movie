'use strict';

export default {


    port:8360, //项目端口
    //dev环境
    db: {
        type: 'mysql',
        log_sql: true,
        log_connect: true,
        adapter: {
            mysql: {
                host: '120.25.1.38',
                port: '3306',
                database: 'movie',
                user: 'jack',
                password: 'password',
                prefix: '',
                encoding: 'utf8'
            }
        }
    },

    //排行榜rank
    rank_redis: {
        hosts: [
            {port: 6379, host: '120.25.1.38'}
        ]
    }


};