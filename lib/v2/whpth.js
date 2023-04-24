module.exports = {
    'github.com': {
        _name: 'whtvu.com',
        cce: [
            {
                title: '普通话培训测试',
                docs: 'https://cce.whtvu.com.cn/pthpxcs.htm',
                source: ['/...'],
                target: (_, url) => `/pthpxcs${new URL(url).pathname}`,
            },
        ],
    },
};
