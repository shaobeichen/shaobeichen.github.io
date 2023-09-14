取消代理

```bash
# 1. 取消代理（把vpn关掉）
git config --global --unset http.proxy && git config --global --unset https.proxy

# 2. 添加代理（只加http，并且把vpn打开）
git config --global http.proxy http://127.0.0.1:1087
```

设计参考

https://dribbble.com/shots/22512232-Fintech-Project
